/**
 * Canonical origin for metadata, sitemap, robots and JSON-LD.
 *
 * Michael's handoff names www.YourNCLender.com as the destination. If the
 * site ends up on a different domain, set NEXT_PUBLIC_SITE_URL in Vercel
 * rather than editing this — canonical tags and the sitemap follow it.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.yournclender.com"
).replace(/\/$/, "");
