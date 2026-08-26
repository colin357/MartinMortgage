/**
 * Thin GA4 wrapper. Safe to call from anywhere — if no measurement ID is
 * configured (NEXT_PUBLIC_GA_MEASUREMENT_ID), every call is a no-op.
 *
 * The events we care about, per the handoff doc, are conversation-shaped
 * rather than pageview-shaped:
 *   start_conversation_click, pre_approval_click, phone_tap,
 *   lead_form_start, lead_form_submit, calculator_use,
 *   video_play, outbound_click
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function trackEvent(
  name: string,
  params: Record<string, unknown> = {},
): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
    return;
  }
  // Queue for GTM / a late-loading gtag snippet
  window.dataLayer?.push({ event: name, ...params });
}
