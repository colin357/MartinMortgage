import { NextRequest, NextResponse } from "next/server";
import { deliverLead } from "@/lib/lead-delivery";

// Numbers that always receive a lead notification, alongside NOTIFY_PHONE_NUMBER
const ALWAYS_NOTIFY_PHONE_NUMBERS = ["+17867882699"];

// Friendly SMS labels for fields that don't read well when auto-formatted
const FIELD_LABELS: Record<string, string> = {
  brokerage: "Brokerage",
  yearsSellingRealEstate: "Years Selling Real Estate",
  transactionsLast12Months: "Transactions (Last 12 Mo)",
  buyerSideTransactions: "Buyer Side Transactions",
  ytdClosedSalesVolume2026: "2026 YTD Sales Volume",
  businessDescription: "Business Description",
  aiComfortLevel: "AI Comfort Level",
  biggestQuestion: "Biggest Question",
  leadSource: "Lead Source",
  pageUrl: "Page",
  utmSource: "UTM Source",
  utmMedium: "UTM Medium",
  utmCampaign: "UTM Campaign",
  utmTerm: "UTM Term",
  utmContent: "UTM Content",
  gclid: "Google Click ID",
  referrer: "Referrer",
};

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

    // Build the field list once — used for the SMS body, the email copy,
    // and (as the raw payload) the CRM webhook.
    const rows: [string, string][] = [
      ["Name", `${firstName ?? ""} ${lastName ?? ""}`.trim()],
      ["Email", email],
      ["Phone", phone],
      ["Loan Type", loanType],
    ];

    if (goalPayment) rows.push(["Goal Payment", goalPayment]);
    if (currentHomeowner) rows.push(["Current Homeowner", currentHomeowner]);
    if (timeline) rows.push(["Timeline", timeline]);
    if (creditRange) rows.push(["Credit Range", creditRange]);

    // Include any extra fields
    for (const [key, value] of Object.entries(rest)) {
      if (value) {
        const label =
          FIELD_LABELS[key] ??
          key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());
        rows.push([label, String(value)]);
      }
    }

    const populated = rows.filter(([, value]) => value);
    const message = [
      "New Lead from Martin Mortgage Website",
      "",
      ...populated.map(([label, value]) => `${label}: ${value}`),
    ].join("\n");

    // CRM webhook + email copy to mmg@fairwaymc.com. Runs alongside the SMS
    // below; a delivery failure is logged, never surfaced to the visitor.
    const delivery = await deliverLead(
      { ...data, receivedAt: new Date().toISOString() },
      populated,
      `New website lead — ${`${firstName ?? ""} ${lastName ?? ""}`.trim() || email || phone || "unknown"}`,
    );
    console.log("Lead delivery:", delivery);

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
