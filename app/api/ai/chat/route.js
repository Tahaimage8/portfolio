import { NextResponse } from 'next/server';
import { checkRateLimit, validateMessage } from '@/lib/ai/security';
import { handleAIChat } from '@/lib/ai/agent';

export async function POST(request) {
  try {
    // Basic rate limit by IP (in a real app, you might use headers['x-forwarded-for'])
    // For Vercel edge/serverless, this is the best effort without a DB.
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    
    const rateLimitCheck = checkRateLimit(ip);
    if (!rateLimitCheck.success) {
      return NextResponse.json(
        { success: false, message: rateLimitCheck.message, actions: [] },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { message, history } = body;

    // Validate input
    const validation = validateMessage(message);
    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, message: validation.error, actions: [] },
        { status: 400 }
      );
    }

    // Call the AI Agent
    const result = await handleAIChat(validation.sanitizedMessage, history || []);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message, actions: [] },
        { status: 503 }
      );
    }

    return NextResponse.json(result);
    
  } catch (error) {
    console.error("AI API Error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Taha AI is temporarily unavailable. You can still explore the portfolio using the buttons below.",
        actions: [{ type: 'show_contact_cta' }]
      },
      { status: 500 }
    );
  }
}
