import { GoogleGenAI } from '@google/genai';
import { AI_CONFIG } from './config';
import { systemInstruction } from './instructions';
import { agentTools } from './tools';

// Knowledge base imports
import { profile } from './knowledge/profile';
import { skills } from './knowledge/skills';
import { projects } from './knowledge/projects';
import { contact } from './knowledge/contact';

export async function handleAIChat(message, history = []) {
  try {
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY.trim() === "") {
      return {
        success: false,
        message: "Taha AI is currently unavailable (API key not configured). You can still explore the portfolio using the buttons below.",
        actions: [{ type: 'show_contact_cta' }]
      };
    }
    
    const ai = new GoogleGenAI({});
    
    // Prepare conversation history (limiting length)
    const recentHistory = history.slice(-AI_CONFIG.MAX_MESSAGE_HISTORY).map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    const generateConfig = {
      systemInstruction: systemInstruction,
      tools: [{ functionDeclarations: agentTools }],
      temperature: 0.7,
      maxOutputTokens: AI_CONFIG.MAX_OUTPUT_TOKENS,
    };

    const callModel = async (currentContents) => {
      const primaryModel = AI_CONFIG.MODELS.PRIMARY;
      const fallbackModel = AI_CONFIG.MODELS.FALLBACK;
      try {
        return await ai.models.generateContent({
          model: primaryModel,
          contents: currentContents,
          config: generateConfig
        });
      } catch (err) {
        const msg = err.message?.toLowerCase() || '';
        const status = err.status || err.code;
        if (msg.includes('429') || msg.includes('503') || msg.includes('quota') || msg.includes('overloaded') || status === 429 || status === 503) {
          console.warn("Primary model failed, attempting fallback once...");
          return await ai.models.generateContent({
            model: fallbackModel,
            contents: currentContents,
            config: generateConfig
          });
        }
        throw err;
      }
    };
    
    // To handle history correctly in a stateless API route:
    const contents = [...recentHistory, { role: 'user', parts: [{ text: message }] }];
    
    // Call the model with tools enabled
    let response = await callModel(contents);

    const actions = []; // Actions to return to the client UI
    
    // Handle function calls (Agent Loop)
    // We allow a maximum of 5 tool iterations to prevent infinite loops
    let iterations = 0;
    while (
      response.functionCalls && 
      response.functionCalls.length > 0 && 
      iterations < 5
    ) {
      iterations++;
      const functionResponses = [];
      
      for (const call of response.functionCalls) {
        const { name, args } = call;
        
        // Execute server-side tools
        if (name === 'get_profile') {
          functionResponses.push({
            name,
            response: profile
          });
        } 
        else if (name === 'verify_capability') {
          const rawCap = args?.capability?.toLowerCase() || '';
          
          const aliases = {
            "js": "javascript",
            "ts": "typescript",
            "postgres": "postgresql",
            "sql": "postgresql", // since he knows postgresql, sql is at least partially verified
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
          
          // Special cases for partial verification or specific denials
          if (rawCap === "sql" && status === "VERIFIED") {
            status = "PARTIALLY_VERIFIED"; // Has PostgreSQL, but don't assume advanced DBA SQL.
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
          
          functionResponses.push({
            name,
            response: { projects: filtered }
          });
        } 
        else if (name === 'get_contact_info') {
          functionResponses.push({
            name,
            response: contact
          });
        }
        // Client-side actions: we just return success to the model, and queue the action for the client
        else if (name === 'navigate_portfolio') {
          actions.push({ type: 'navigate', target: args.target });
          functionResponses.push({ name, response: { success: true, message: "Client instructed to navigate." } });
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
      }
      
      // Add the model's tool calls to contents history
      // Preserve the EXACT original model content to retain thoughtSignature
      const modelContent = response.candidates?.[0]?.content;
      if (modelContent) {
        contents.push(modelContent);
      } else {
        // Fallback (should not be needed with standard responses)
        contents.push({
          role: 'model',
          parts: response.functionCalls.map(fc => ({ functionCall: fc }))
        });
      }
      
      // Add the tool responses to contents history
      contents.push({
        role: 'user', // In Gemini, tool responses are sent back as 'user' role with functionResponse parts
        parts: functionResponses.map(fr => ({
          functionResponse: {
            name: fr.name,
            response: fr.response
          }
        }))
      });
      
      // Call the model again
      response = await callModel(contents);
    }

    const replyText = response.text || "";
    
    return {
      success: true,
      message: replyText,
      actions: actions,
    };
    
  } catch (error) {
    console.error("AI Agent Error:", error);
    return {
      success: false,
      message: "Taha AI is temporarily unavailable. Please try exploring the projects or contact me directly via the form.",
      error: "service_unavailable"
    };
  }
}
