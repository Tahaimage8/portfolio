export const AI_CONFIG = {
  // Model to use for generating responses
  MODEL: process.env.GEMINI_MODEL || "gemini-3.5-flash",
  
  // Hard limits to protect quota
  RATE_LIMITS: {
    MAX_REQUESTS_PER_MINUTE: 3,
    MAX_REQUESTS_PER_HOUR: 15,
  },
  
  // Safety and token configuration
  MAX_OUTPUT_TOKENS: 800,
  MAX_MESSAGE_HISTORY: 10, // Max number of messages to keep in memory for a session
  
  // Allowed origins (for API security if needed)
  ALLOWED_ORIGINS: process.env.NODE_ENV === "production" ? ["https://your-domain.com"] : ["http://localhost:3000"],
};
