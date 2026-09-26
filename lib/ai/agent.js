import { GoogleGenAI } from '@google/genai';
import { AI_CONFIG } from './config';
import { systemInstruction } from './instructions';
import { agentTools } from './tools';

// Knowledge base imports
import { profile } from './knowledge/profile';
import { skills } from './knowledge/skills';
import { projects } from './knowledge/projects';
import { contact } from './knowledge/contact';

async function fetchAvailableGroqModels(groqKey) {
  try {
    const res = await fetch("https://api.groq.com/openai/v1/models", {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${groqKey.trim()}`
      }
    });
    if (res.ok) {
      const data = await res.json();
      const ids = (data?.data || [])
        .map(m => m.id)
        .filter(id => typeof id === 'string' && !id.includes('whisper') && !id.includes('guard') && !id.includes('vision'));
      if (ids.length > 0) return ids;
    }
  } catch (err) {
    console.warn("Groq Models Listing Warning:", err);
  }
  return [];
}

async function callGroqAPI(message, history = [], modelName = "llama-3.3-70b-versatile") {
  const groqKey = process.env.GROQ_API_KEY;
  if (!groqKey || !groqKey.trim()) {
    console.warn("Groq Warning: GROQ_API_KEY environment variable is missing or empty.");
    return null;
  }

  try {
    const formattedMessages = [
      { role: "system", content: systemInstruction },
      ...history.slice(-AI_CONFIG.MAX_MESSAGE_HISTORY).map(msg => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: typeof msg.content === 'string' ? msg.content : JSON.stringify(msg.content)
      })),
      { role: "user", content: message }
    ];

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${groqKey.trim()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: modelName,
        messages: formattedMessages,
        max_tokens: 300
      })
    });

    if (!res.ok) {
      let errorData;
      try {
        errorData = await res.json();
      } catch {
        errorData = await res.text();
      }
      console.warn(`Groq model (${modelName}) failed:`, errorData);
      return null;
    }

    const data = await res.json();
    const replyText = data.choices?.[0]?.message?.content || "";
    if (!replyText) {
      console.warn(`Groq Warning (${modelName}): Empty message content received.`);
      return null;
    }

    return {
      success: true,
      message: replyText,
      text: replyText,
      actions: [],
      provider: `groq-${modelName}`
    };
  } catch (err) {
    console.warn(`Groq Exception (${modelName}):`, err);
    return null;
  }
}

export async function handleAIChat(message, history = []) {
  try {
    // 1. Primary Call: Groq API with Multi-Model Auto-Switching & Dynamic Discovery
    if (process.env.GROQ_API_KEY && process.env.GROQ_API_KEY.trim() !== "") {
      const groqKey = process.env.GROQ_API_KEY.trim();
      const dynamicModels = await fetchAvailableGroqModels(groqKey);

      const staticFallbacks = [
        'llama-3.3-70b-versatile',
        'llama-3.1-8b-instant',
        'llama-3.2-3b-preview',
        'llama-3.2-1b-preview',
        'qwen-2.5-coder-32b',
        'deepseek-r1-distill-llama-70b'
      ];

      const decommissioned = new Set(['gemma2-9b-it', 'llama3-70b-8192', 'mixtral-8x7b-32768']);

      const candidateModels = Array.from(new Set([
        process.env.GROQ_MODEL,
        ...dynamicModels,
        ...staticFallbacks
      ])).filter(m => m && !decommissioned.has(m));

      for (const model of candidateModels) {
        const groqResult = await callGroqAPI(message, history, model);
        if (groqResult) {
          return groqResult;
        }
        console.warn(`Groq model (${model}) failed. Trying next model...`);
      }
      console.warn("All Groq models failed. Falling back immediately to Gemini SDK...");
    }

    // 2. Gemini Fallback
    const geminiModel = process.env.GEMINI_MODEL || "gemini-3.8-flash";
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY.trim() === "") {
      console.warn("Gemini Warning: GEMINI_API_KEY missing or empty.");
      return {
        success: false,
        text: "I am currently undergoing maintenance. Please reach out to Ibtasam directly.",
        message: "I am currently undergoing maintenance. Please reach out to Ibtasam directly.",
        actions: [{ type: 'show_contact_cta' }]
      };
    }

    const apiKey = process.env.GEMINI_API_KEY.trim();
    const ai = new GoogleGenAI({ apiKey });

    // Prepare conversation history
    const recentHistory = history.slice(-AI_CONFIG.MAX_MESSAGE_HISTORY).map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: typeof msg.content === 'string' ? msg.content : JSON.stringify(msg.content) }]
    }));

    const generateConfig = {
      systemInstruction: systemInstruction,
      tools: [{ functionDeclarations: agentTools }],
      temperature: 0.7,
      maxOutputTokens: AI_CONFIG.MAX_OUTPUT_TOKENS,
    };

    const callModel = async (currentContents) => {
      return await ai.models.generateContent({
        model: geminiModel,
        contents: currentContents,
        config: generateConfig
      });
    };

    const contents = [...recentHistory, { role: 'user', parts: [{ text: message }] }];

    let response = await callModel(contents);
    const actions = [];

    let iterations = 0;
    while (
      response &&
      response.functionCalls &&
      response.functionCalls.length > 0 &&
      iterations < 5
    ) {
      iterations++;
      const functionResponses = [];

      for (const call of response.functionCalls) {
        const { name, args } = call;

        if (name === 'get_profile') {
          functionResponses.push({ name, response: profile });
        }
        else if (name === 'verify_capability') {
          const rawCap = args?.capability?.toLowerCase() || '';

          const aliases = {
            "js": "javascript",
            "ts": "typescript",
            "postgres": "postgresql",
            "sql": "postgresql",
            "next": "next.js",
            "react.js": "react",
            "node": "node.js"
          };
          const cap = aliases[rawCap] || rawCap;

          const allSkills = Object.values(skills).flat();
          const exactSkillMatch = allSkills.find(s => s.toLowerCase() === cap || s.toLowerCase() === rawCap);

          const relatedProjects = projects.filter(p =>
            p.tech.some(t => t.toLowerCase() === cap || t.toLowerCase() === rawCap || t.toLowerCase().includes(cap)) ||
            p.description.toLowerCase().includes(cap) ||
            (p.features && p.features.some(f => f.toLowerCase().includes(cap)))
          );

          let status = "NOT_VERIFIED";
          if (exactSkillMatch || relatedProjects.length > 0) {
            status = "VERIFIED";
          }
          if (rawCap === "sql" && status === "VERIFIED") {
            status = "PARTIALLY_VERIFIED";
          }
          if (rawCap === "backend" || rawCap === "frontend" || rawCap === "full stack" || rawCap === "full-stack") {
            status = "VERIFIED";
          }

          functionResponses.push({
            name,
            response: {
              capability: args?.capability,
              status: status,
              directEvidence: exactSkillMatch ? [exactSkillMatch] : [],
              relevantProjects: relatedProjects.map(p => ({ name: p.name, tech: p.tech })),
              verifiedStackContext: "His strong verified stack includes Next.js, React, Node.js, Express, MongoDB, and PostgreSQL."
            }
          });
        }
        else if (name === 'get_projects') {
          const query = args?.query?.toLowerCase() || '';
          const filtered = query ?
            projects.filter(p =>
              p.name.toLowerCase().includes(query) ||
              p.tech.some(t => t.toLowerCase().includes(query)) ||
              p.description.toLowerCase().includes(query)
            ) : projects;

          functionResponses.push({ name, response: { projects: filtered } });
        }
        else if (name === 'get_contact_info') {
          functionResponses.push({ name, response: contact });
        }
        else if (name === 'navigate_portfolio') {
          const target = args?.target?.toLowerCase();
          if (target === 'resume') {
            actions.push({ type: 'open_resume' });
            functionResponses.push({ name, response: { success: true, message: "Client instructed to open resume." } });
          } else if (target === 'github') {
            actions.push({ type: 'open_github' });
            functionResponses.push({ name, response: { success: true, message: "Client instructed to open github." } });
          } else {
            actions.push({ type: 'navigate', target: target });
            functionResponses.push({ name, response: { success: true, message: "Client instructed to navigate." } });
          }
        }
        else if (name === 'show_project_card') {
          const proj = projects.find(p => p.id === args.projectId);
          if (proj) {
            actions.push({ type: 'show_project', project: proj });
            functionResponses.push({ name, response: { success: true, message: "Client instructed to show project card." } });
          } else {
            functionResponses.push({ name, response: { error: "Project not found." } });
          }
        }
        else if (name === 'prepare_contact') {
          actions.push({ type: 'prepare_contact', data: args });
          functionResponses.push({ name, response: { success: true, message: "Client instructed to prepare contact form." } });
        }
        else if (name === 'show_contact_cta') {
          actions.push({ type: 'show_contact_cta' });
          functionResponses.push({ name, response: { success: true, message: "Client instructed to show CTA." } });
        }
        else {
          functionResponses.push({ name, response: { error: `Unsupported tool: ${name}` } });
        }
      }

      const modelContent = response.candidates?.[0]?.content;
      if (modelContent) {
        contents.push(modelContent);
      } else {
        contents.push({
          role: 'model',
          parts: response.functionCalls.map(fc => ({ functionCall: fc }))
        });
      }

      contents.push({
        role: 'user',
        parts: functionResponses.map(fr => ({
          functionResponse: {
            name: fr.name,
            response: fr.response
          }
        }))
      });

      response = await callModel(contents);
    }

    const replyText = response?.text || "";

    return {
      success: true,
      message: replyText,
      text: replyText,
      actions: actions,
    };

  } catch (error) {
    console.error("AI Agent Error:", error);
    const errorMsg = (error?.message || String(error)).toLowerCase();
    const status = error?.status || error?.statusCode || error?.response?.status;

    if (
      status === 429 ||
      errorMsg.includes('429') ||
      errorMsg.includes('quota') ||
      errorMsg.includes('resource_exhausted')
    ) {
      return {
        success: false,
        text: "My daily AI quota has been reached! Please reach out to Ibtasam directly via email or LinkedIn."
      };
    }

    return {
      success: false,
      text: "I am currently undergoing maintenance. Please reach out to Ibtasam directly.",
      message: "I am currently undergoing maintenance. Please reach out to Ibtasam directly.",
      actions: [{ type: 'show_contact_cta' }]
    };
  }
}
