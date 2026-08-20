export const AI_CONFIG = {
  // Model to use for generating responses
  MODELS: {
    PRIMARY: "gemini-3.5-flash-lite",
    FALLBACK: "gemini-3.1-flash-lite",
  },
  
  // Hard limits to protect quota
  RATE_LIMITS: {
    MAX_REQUESTS_PER_MINUTE: 5,
  },
  
  // Safety and token configuration
  MAX_OUTPUT_TOKENS: 800,
  MAX_MESSAGE_HISTORY: 10, // Max number of messages to keep in memory for a session
};
