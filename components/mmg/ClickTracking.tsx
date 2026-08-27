"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * One delegated click listener for the whole MMG site, so individual links
 * stay plain markup in server components.
 *
 * Events, per the handoff doc: the measure of success is conversations
 * created, not pageviews.
 */
export default function ClickTracking() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const anchor = (event.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      // Where on the page the click happened, for GA4 breakdowns
      const location =
        anchor.closest("nav")
          ? "nav"
          : anchor.closest("footer")
            ? "footer"
            : anchor.closest(".mobile-menu")
              ? "mobile_menu"
              : anchor.closest("section, header")?.id ||
                anchor.closest("section, header")?.className.split(" ")[0] ||
                "page";

      if (href.startsWith("tel:")) {
        trackEvent("phone_tap", { location });
      } else if (href.includes("tidalwave.ai")) {
        trackEvent("pre_approval_click", { location });
      } else if (href.endsWith("#contact")) {
        trackEvent("start_conversation_click", { location });
      } else if (href.startsWith("mailto:")) {
        trackEvent("email_click", { location });
      } else if (/^https?:\/\//.test(href)) {
        trackEvent("outbound_click", {
          location,
          link_url: href,
          link_domain: (() => {
            try {
              return new URL(href).hostname;
            } catch {
              return "";
            }
          })(),
        });
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
