import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash-lite',
      contents: 'hello',
    });
    console.log("3.5-flash-lite worked:", response.text);
  } catch(e) {
    console.log("3.5-flash-lite error:", e.message);
  }
}
run();
