// src/lib/mailer.ts
import nodemailer from "nodemailer";

/**
 * Sends an email using Gmail SMTP.
 * Works with App Passwords (2FA must be enabled).
 *
 * @param to - recipient email address
 * @param subject - subject line of the email
 * @param text - plain text message content
 */
export async function sendContactEmail({
  to,
  subject,
  text,
}: {
  to: string;
  subject: string;
  text: string;
}) {
  try {
    // 🧩 Ensure environment variables exist
    const mailUser = process.env.MAIL_USER;
    const mailPass = process.env.MAIL_PASS;

    if (!mailUser || !mailPass) {
      throw new Error("Missing MAIL_USER or MAIL_PASS environment variables.");
    }

    // ✉️ Create transporter (Gmail App Password required)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: mailUser,
        pass: mailPass,
      },
    });

    // 🔍 Verify connection configuration
    await transporter.verify();
    console.log("✅ Gmail transporter verified successfully");

    // 📤 Send email
    const info = await transporter.sendMail({
      from: `"Ram Packers" <${mailUser}>`,
      to,
      subject,
      text,
    });

    console.log("✅ Message sent:", info.messageId);
    return { success: true, id: info.messageId };
  } catch (error) {
    console.error("❌ Error in sendContactEmail:", error);
    return { success: false, error: String(error) };
  }
}
