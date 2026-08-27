/**
 * Lead delivery: CRM webhook + email copy.
 *
 * Per the MMG handoff spec, every website lead should:
 *   1) land in Jungo (CRM), and
 *   2) send a copy to mmg@fairwaymc.com
 *
 * Both hops are optional and configured by environment variable, so the
 * site works with either a Zapier/Make/Jungo webhook, transactional email,
 * or both. Neither failure blocks the response to the visitor — the SMS
 * notification in app/api/lead/route.ts is the guaranteed path.
 *
 * Environment variables:
 *   LEAD_WEBHOOK_URL        Jungo / Zapier / Make endpoint (POST JSON)
 *   LEAD_WEBHOOK_TOKEN      optional, sent as Authorization: Bearer <token>
 *   RESEND_API_KEY          enables the email copy
 *   LEAD_EMAIL_FROM         verified sender, e.g. "MMG Website <leads@yournclender.com>"
 *   LEAD_EMAIL_TO           comma-separated; defaults to mmg@fairwaymc.com
 *                           (add the Jungo lead-capture address here to
 *                            deliver into the CRM by email instead of webhook)
 */

const DEFAULT_LEAD_EMAIL_TO = "mmg@fairwaymc.com";

export type LeadDeliveryResult = {
  webhook: "sent" | "failed" | "skipped";
  email: "sent" | "failed" | "skipped";
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendWebhook(payload: Record<string, unknown>) {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return "skipped" as const;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (process.env.LEAD_WEBHOOK_TOKEN) {
    headers.Authorization = `Bearer ${process.env.LEAD_WEBHOOK_TOKEN}`;
  }

  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Lead webhook responded ${res.status}: ${await res.text()}`);
  }
  return "sent" as const;
}

async function sendEmail(
  subject: string,
  rows: [string, string][],
  payload: Record<string, unknown>,
) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_EMAIL_FROM;
  if (!apiKey || !from) return "skipped" as const;

  const to = (process.env.LEAD_EMAIL_TO ?? DEFAULT_LEAD_EMAIL_TO)
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);
  if (to.length === 0) return "skipped" as const;

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 16px 6px 0;color:#3F4444;font-size:13px;white-space:nowrap;vertical-align:top">${escapeHtml(
          label,
        )}</td><td style="padding:6px 0;color:#16211C;font-size:14px">${escapeHtml(
          value,
        )}</td></tr>`,
    )
    .join("");

  const html = `<div style="font-family:-apple-system,Segoe UI,Arial,sans-serif;max-width:560px">
<h2 style="color:#006848;font-size:18px;margin:0 0 4px">New website lead</h2>
<p style="color:#3F4444;font-size:13px;margin:0 0 20px">Martin Mortgage Group &middot; YourNCLender.com</p>
<table style="border-collapse:collapse;width:100%">${tableRows}</table>
</div>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
      text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
      reply_to:
        typeof payload.email === "string" && payload.email
          ? payload.email
          : undefined,
    }),
  });

  if (!res.ok) {
    throw new Error(`Lead email responded ${res.status}: ${await res.text()}`);
  }
  return "sent" as const;
}

export async function deliverLead(
  payload: Record<string, unknown>,
  rows: [string, string][],
  subject: string,
): Promise<LeadDeliveryResult> {
  const [webhook, email] = await Promise.allSettled([
    sendWebhook(payload),
    sendEmail(subject, rows, payload),
  ]);

  if (webhook.status === "rejected") {
    console.error("Lead webhook delivery failed:", webhook.reason);
  }
  if (email.status === "rejected") {
    console.error("Lead email delivery failed:", email.reason);
  }

  return {
    webhook: webhook.status === "fulfilled" ? webhook.value : "failed",
    email: email.status === "fulfilled" ? email.value : "failed",
  };
}
