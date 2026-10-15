import { NextRequest, NextResponse } from "next/server";

// Google Apps Script Web App that appends each registration to the sheet
const SHEET_WEBHOOK_URL =
  process.env.WEBINAR_SHEET_WEBHOOK_URL ??
  "https://script.google.com/macros/s/AKfycbwDU_StZkFNpF_Fx4_OoT5ssJ-Hp_iNRwOs84lgXBr2bDMwjfbxmn7eGAEyN2Zorhmr/exec";

// Zapier catch hook that receives every webinar signup
const ZAPIER_WEBHOOK_URL =
  process.env.WEBINAR_ZAPIER_WEBHOOK_URL ??
  "https://hooks.zapier.com/hooks/catch/17690982/41iyvmx/";

const TIME_ZONE = "America/New_York";

// "Mon 10:15 AM" in Eastern time, regardless of where this runs
function formatLeadReceived(date: Date) {
  const day = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    weekday: "short",
  }).format(date);
  const time = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);

  return `${day} ${time}`;
}

export async function POST(req: NextRequest) {
  try {
    const {
      firstName = "",
      lastName = "",
      email = "",
      phone = "",
      brokerage = "",
      loanType = "Retire In Peace Webinar",
      registrationDate = "Aug 25",
    } = await req.json();

    const payload = {
      name: `${firstName} ${lastName}`.trim(),
      email,
      phone,
      loanType,
      registrationDate,
      leadReceived: formatLeadReceived(new Date()),
    };

    const post = async (label: string, url: string, body: object) => {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        redirect: "follow",
      });
      if (!res.ok) {
        throw new Error(`${label} responded with ${res.status} ${res.statusText}`);
      }
    };

    // Sheet and Zapier run independently — one failing never blocks the other
    const [sheet, zapier] = await Promise.allSettled([
      post("Google Sheet webhook", SHEET_WEBHOOK_URL, payload),
      post("Zapier webhook", ZAPIER_WEBHOOK_URL, {
        ...payload,
        firstName,
        lastName,
        brokerage,
        webinar: loanType,
        receivedAt: new Date().toISOString(),
      }),
    ]);

    if (zapier.status === "rejected") {
      console.error("Webinar registration Zapier sync error:", zapier.reason);
    }
    if (sheet.status === "rejected") throw sheet.reason;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webinar registration sheet sync error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to record registration" },
      { status: 500 },
    );
  }
}
