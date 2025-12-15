// src/lib/whatsapp.ts
export async function sendWhatsAppMessage(to: string, message: string) {
  await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${process.env.TWILIO_ACCOUNT_SID}/Messages.json`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${btoa(
          process.env.TWILIO_ACCOUNT_SID + ":" + process.env.TWILIO_AUTH_TOKEN
        )}`,
      },
      body: new URLSearchParams({
        To: `whatsapp:${to}`,
        From: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
        Body: message,
      }),
    }
  );
}
