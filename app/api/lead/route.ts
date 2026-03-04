import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      loanType,
      goalPayment,
      currentHomeowner,
      timeline,
      creditRange,
      ...rest
    } = data;

    // Build notification message
    const lines = [
      `New Lead from Martin Mortgage Website`,
      ``,
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Loan Type: ${loanType}`,
    ];

    if (goalPayment) lines.push(`Goal Payment: ${goalPayment}`);
    if (currentHomeowner) lines.push(`Current Homeowner: ${currentHomeowner}`);
    if (timeline) lines.push(`Timeline: ${timeline}`);
    if (creditRange) lines.push(`Credit Range: ${creditRange}`);

    // Include any extra fields
    for (const [key, value] of Object.entries(rest)) {
      if (value) {
        const label = key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());
        lines.push(`${label}: ${value}`);
      }
    }

    const message = lines.join("\n");

    // Send SMS via Twilio
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioFrom = process.env.TWILIO_PHONE_NUMBER;
    const notifyTo = process.env.NOTIFY_PHONE_NUMBER;

    if (accountSid && authToken && twilioFrom && notifyTo) {
      const twilio = (await import("twilio")).default;
      const client = twilio(accountSid, authToken);

      await client.messages.create({
        body: message,
        from: twilioFrom,
        to: notifyTo,
      });
    } else {
      // Log to console when Twilio is not configured
      console.log("--- NEW LEAD (Twilio not configured) ---");
      console.log(message);
      console.log("--- END LEAD ---");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process lead" },
      { status: 500 }
    );
  }
}
