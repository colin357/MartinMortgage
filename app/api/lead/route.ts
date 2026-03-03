import { NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      TWILIO_ACCOUNT_SID,
      TWILIO_AUTH_TOKEN,
      TWILIO_FROM_NUMBER,
      TWILIO_TO_NUMBER = "+19190000000"
    } = process.env;

    if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_FROM_NUMBER) {
      return NextResponse.json({ ok: false, message: "Twilio environment vars missing" }, { status: 500 });
    }

    const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

    const message = [
      "New Martin Mortgage Group Lead",
      `Type: ${body.leadType}`,
      `Name: ${body.name}`,
      `Phone: ${body.phone}`,
      `Email: ${body.email}`,
      `Goal Payment: ${body.goalMonthlyPayment}`,
      `Current Homeowner: ${body.currentHomeowner}`,
      `Credit: ${body.creditRange}`,
      `Timeline: ${body.timeline}`
    ].join("\n");

    await client.messages.create({ body: message, from: TWILIO_FROM_NUMBER, to: TWILIO_TO_NUMBER });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead submission error", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
