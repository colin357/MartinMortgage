/**
 * Zoom webinar registration via a Server-to-Server OAuth app.
 *
 * Needs ZOOM_ACCOUNT_ID, ZOOM_CLIENT_ID and ZOOM_CLIENT_SECRET from a
 * Server-to-Server OAuth app created in the Zoom account that hosts the
 * webinar, with the scope `zoom_webinar:write:registrant:admin` (or the
 * classic `webinar:write:admin`). See README → Zoom webinar registration.
 */

export interface ZoomRegistrant {
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  /** Shown in Zoom's registrant report as "Organization". */
  org?: string;
}

export interface ZoomRegistrationResult {
  registrantId: string;
  joinUrl: string;
}

export function isZoomConfigured() {
  return Boolean(
    process.env.ZOOM_ACCOUNT_ID &&
      process.env.ZOOM_CLIENT_ID &&
      process.env.ZOOM_CLIENT_SECRET,
  );
}

// Tokens last an hour. Reuse one per warm serverless instance rather than
// minting a new token on every registration.
let cachedToken: { value: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) {
    return cachedToken.value;
  }

  const accountId = process.env.ZOOM_ACCOUNT_ID ?? "";
  const credentials = Buffer.from(
    `${process.env.ZOOM_CLIENT_ID}:${process.env.ZOOM_CLIENT_SECRET}`,
  ).toString("base64");

  const res = await fetch(
    `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${encodeURIComponent(accountId)}`,
    {
      method: "POST",
      headers: { Authorization: `Basic ${credentials}` },
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error(
      `Zoom token request failed: ${res.status} ${await res.text()}`,
    );
  }

  const { access_token, expires_in } = (await res.json()) as {
    access_token: string;
    expires_in: number;
  };
  cachedToken = {
    value: access_token,
    expiresAt: Date.now() + expires_in * 1000,
  };
  return access_token;
}

export async function registerForZoomWebinar(
  webinarId: string,
  registrant: ZoomRegistrant,
): Promise<ZoomRegistrationResult> {
  const token = await getAccessToken();

  const res = await fetch(
    `https://api.zoom.us/v2/webinars/${encodeURIComponent(webinarId)}/registrants`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: registrant.email,
        first_name: registrant.firstName,
        last_name: registrant.lastName,
        ...(registrant.phone ? { phone: registrant.phone } : {}),
        ...(registrant.org ? { org: registrant.org } : {}),
      }),
      cache: "no-store",
    },
  );

  if (!res.ok) {
    // A revoked or rotated token shows up as 401 — drop it so the next
    // request mints a fresh one.
    if (res.status === 401) cachedToken = null;
    throw new Error(
      `Zoom registration failed: ${res.status} ${await res.text()}`,
    );
  }

  const data = (await res.json()) as {
    registrant_id?: string;
    id?: string | number;
    join_url: string;
  };
  return {
    registrantId: String(data.registrant_id ?? data.id ?? ""),
    joinUrl: data.join_url,
  };
}
