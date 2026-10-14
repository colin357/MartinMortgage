import { NextRequest, NextResponse } from "next/server";
import { getZoomWebinar } from "@/lib/webinars";
import { isZoomConfigured, registerForZoomWebinar } from "@/lib/zoom";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Registers a landing-page signup as a Zoom webinar registrant, so Zoom
 * sends its own confirmation email and personal join link.
 *
 * Fails soft: the form treats any non-success here as "send them to Zoom's
 * registration page to finish", and the lead itself goes through /api/lead
 * independently.
 */
export async function POST(req: NextRequest) {
  try {
    const {
      webinar: webinarKey,
      firstName = "",
      lastName = "",
      email = "",
      phone = "",
      brokerage = "",
    } = await req.json();

    const webinar = getZoomWebinar(webinarKey);
    if (!webinar) {
      return NextResponse.json(
        { success: false, error: "Unknown webinar" },
        { status: 400 },
      );
    }

    if (!firstName.trim() || !lastName.trim() || !EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { success: false, error: "Name and a valid email are required" },
        { status: 400 },
      );
    }

    if (!isZoomConfigured()) {
      console.warn(
        "Zoom registration skipped: ZOOM_ACCOUNT_ID / ZOOM_CLIENT_ID / ZOOM_CLIENT_SECRET not set",
      );
      return NextResponse.json(
        { success: false, error: "Zoom is not configured" },
        { status: 503 },
      );
    }

    const result = await registerForZoomWebinar(webinar.zoomWebinarId, {
      email: email.trim(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      phone: phone.trim(),
      org: brokerage.trim(),
    });

    return NextResponse.json({ success: true, joinUrl: result.joinUrl });
  } catch (error) {
    console.error("Zoom webinar registration error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to register with Zoom" },
      { status: 502 },
    );
  }
}
