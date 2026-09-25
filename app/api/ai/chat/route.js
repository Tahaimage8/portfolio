import { NextResponse } from 'next/server';
import { checkRateLimit, validateMessage } from '@/lib/ai/security';
import { handleAIChat } from '@/lib/ai/agent';

export async function POST(request) {
  try {
    const forwardedFor = request.headers.get('x-forwarded-for');
    let ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';
    if (ip.length > 45) ip = '127.0.0.1'; // basic sanity check for IPv6 length
    
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

    if (!result || !result.success) {
      return NextResponse.json(
        { 
          success: false, 
          text: result?.text || result?.message || "I am currently undergoing maintenance. Please reach out to Ibtasam directly.", 
          message: result?.message || result?.text || "I am currently undergoing maintenance. Please reach out to Ibtasam directly.", 
          actions: result?.actions || [{ type: 'show_contact_cta' }] 
        },
        { status: 200 }
      );
    }

    return NextResponse.json(result);
    
  } catch (error) {
    console.error("AI API Error:", error);
    return NextResponse.json(
      { 
        success: false, 
        text: "I am currently undergoing maintenance. Please reach out to Ibtasam directly.",
        message: "I am currently undergoing maintenance. Please reach out to Ibtasam directly.",
        actions: [{ type: 'show_contact_cta' }]
      },
      { status: 200 }
    );
  }
}
