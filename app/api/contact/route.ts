// src/app/api/contact/route.ts
export const runtime = "nodejs"; // ✅ Force Node.js environment

import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mailer";
import { businessConfig } from "@/config/business";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await sendContactEmail({
      to: businessConfig.contact.email,
      subject: `New inquiry from ${name}`,
      text: `
New contact request from ${name}:

Email: ${email}
Phone: ${phone}

Message:
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
