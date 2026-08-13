import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, website } = body;

    // Honeypot spam check: if 'website' field is populated, silently reject spam bots
    if (website && website.trim() !== "") {
      return NextResponse.json(
        { success: true, message: "Thank you! Your message has been sent successfully." },
        { status: 200 }
      );
    }

    // Input Validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!subject || subject.trim().length < 3) {
      return NextResponse.json(
        { success: false, message: "Please provide a subject (at least 3 characters)." },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, message: "Please provide a message (at least 10 characters)." },
        { status: 400 }
      );
    }

    // Process valid contact message safely
    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you! Your message has been sent successfully. I will get back to you soon." 
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
