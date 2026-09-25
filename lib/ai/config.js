export const AI_CONFIG = {
  // Models configuration
  MODELS: {
    GROQ_PRIMARY: "llama-3.1-8b-instant",
    GEMINI_PRIMARY: process.env.GEMINI_MODEL || "gemini-3.8-flash",
  },
  
  // Hard limits to protect quota
  RATE_LIMITS: {
    MAX_REQUESTS_PER_MINUTE: 10,
  },
  
  // Safety and token configuration
  MAX_OUTPUT_TOKENS: 300,
  MAX_MESSAGE_HISTORY: 10, // Max number of messages to keep in memory for a session
};
