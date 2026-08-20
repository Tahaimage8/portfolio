import { AI_CONFIG } from './config';

// Use a global variable to persist across hot reloads in development
// Note: In serverless environments (Vercel), this memory is scoped to the instance.
// If scaling, this should be replaced with Redis/Upstash KV or similar.
const globalRateLimiter = global.rateLimiter || new Map();
if (process.env.NODE_ENV !== 'production') {
  global.rateLimiter = globalRateLimiter;
}

// Memory cleanup to prevent unbounded growth from unique IPs
if (!global.rateLimiterCleanupScheduled) {
  global.rateLimiterCleanupScheduled = true;
  setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of globalRateLimiter.entries()) {
      record.minute = record.minute.filter(timestamp => now - timestamp < 60 * 1000);
      if (record.minute.length === 0) {
        globalRateLimiter.delete(ip);
      }
    }
  }, 5 * 60 * 1000); // Run cleanup every 5 minutes
}

export function checkRateLimit(ip) {
  const now = Date.now();
  const minuteWindow = 60 * 1000;

  if (!globalRateLimiter.has(ip)) {
    globalRateLimiter.set(ip, {
      minute: [now],
    });
    return { success: true };
  }

  const record = globalRateLimiter.get(ip);
  
  // Filter timestamps within the current window
  record.minute = record.minute.filter(timestamp => now - timestamp < minuteWindow);

  if (record.minute.length >= AI_CONFIG.RATE_LIMITS.MAX_REQUESTS_PER_MINUTE) {
    return { 
      success: false, 
      message: "You're sending messages a little too quickly. Please wait a moment and try again." 
    };
  }

  record.minute.push(now);
  
  return { success: true };
}

export function validateMessage(message) {
  if (!message || typeof message !== 'string') {
    return { isValid: false, error: 'Invalid message format.' };
  }
  
  const trimmed = message.trim();
  if (trimmed.length === 0) {
    return { isValid: false, error: 'Message cannot be empty.' };
  }
  
  if (trimmed.length > 1500) {
    return { isValid: false, error: 'Message is too long. Please keep it under 1500 characters.' };
  }
  
  return { isValid: true, sanitizedMessage: trimmed };
}
