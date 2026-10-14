/**
 * Webinars that register attendees straight into Zoom.
 *
 * The browser only ever sends the key (e.g. "realtor-oct-21"); the Zoom
 * webinar ID is looked up here on the server, so the registration endpoint
 * can't be pointed at an arbitrary webinar on the account.
 */
export interface ZoomWebinar {
  /** Webinar ID from the Zoom webinar page, digits only. */
  zoomWebinarId: string;
  /** Zoom's own registration page — the fallback if the API call fails. */
  registrationUrl: string;
  /** Written to the lead record and the registration sheet. */
  name: string;
  /** Short date stamp stored alongside the registration. */
  registrationDate: string;
}

export const zoomWebinars = {
  "realtor-oct-21": {
    zoomWebinarId: "98032885875",
    registrationUrl:
      "https://fairwaymc.zoom.us/webinar/register/WN_jNiyDdTXTCuAEr96VIxqBA",
    name: "Realtor Webinar — Get More Business and Help Your Sellers Move Faster",
    registrationDate: "Oct 21",
  },
} satisfies Record<string, ZoomWebinar>;

export type ZoomWebinarKey = keyof typeof zoomWebinars;

export function getZoomWebinar(key: unknown): ZoomWebinar | undefined {
  return typeof key === "string" && key in zoomWebinars
    ? zoomWebinars[key as ZoomWebinarKey]
    : undefined;
}
