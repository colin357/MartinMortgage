import { NextRequest, NextResponse } from "next/server";

// Google Apps Script Web App that appends each registration to the sheet
const SHEET_WEBHOOK_URL =
  process.env.WEBINAR_SHEET_WEBHOOK_URL ??
  "https://script.google.com/macros/s/AKfycbwDU_StZkFNpF_Fx4_OoT5ssJ-Hp_iNRwOs84lgXBr2bDMwjfbxmn7eGAEyN2Zorhmr/exec";

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

    const res = await fetch(SHEET_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    if (!res.ok) {
      throw new Error(
        `Google Sheet webhook responded with ${res.status} ${res.statusText}`,
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webinar registration sheet sync error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to record registration" },
      { status: 500 },
    );
  }
}
