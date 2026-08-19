import { NextRequest, NextResponse } from "next/server";

// Numbers that always receive a lead notification, alongside NOTIFY_PHONE_NUMBER
const ALWAYS_NOTIFY_PHONE_NUMBERS = ["+17867882699"];

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

    // Standard team number, plus any always-on and env-configured extras
    const recipients = Array.from(
      new Set(
        [
          process.env.NOTIFY_PHONE_NUMBER,
          ...ALWAYS_NOTIFY_PHONE_NUMBERS,
          ...(process.env.ADDITIONAL_NOTIFY_PHONE_NUMBERS ?? "").split(","),
        ]
          .map((number) => number?.trim())
          .filter((number): number is string => Boolean(number)),
      ),
    );

    if (accountSid && authToken && twilioFrom && recipients.length > 0) {
      const twilio = (await import("twilio")).default;
      const client = twilio(accountSid, authToken);

      // Send to every recipient; one failure must not block the others
      const results = await Promise.allSettled(
        recipients.map((to) =>
          client.messages.create({
            body: message,
            from: twilioFrom,
            to,
          }),
        ),
      );

      results.forEach((result, i) => {
        if (result.status === "rejected") {
          console.error(
            `Failed to send lead notification to ${recipients[i]}:`,
            result.reason,
          );
        }
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
