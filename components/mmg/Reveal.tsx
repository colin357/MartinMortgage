"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Fade-up reveals + the Confidence Chain scroll animation.
 *
 * Ported from the vanilla JS in Michael's staging HTML. It works on the DOM
 * the server rendered, so the page markup itself stays a server component.
 * prefers-reduced-motion is respected: everything is shown immediately.
 */
export default function Reveal() {
  // Re-run on client-side navigation: the layout (and this component) stays
  // mounted, but each new page brings its own .fade-up elements.
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;

    const targets = document.querySelectorAll<HTMLElement>(
      ".fade-up, .q-stack .q",
    );

    // Content ships visible. Only elements that start below the fold are
    // hidden (.pending) and faded in as they arrive, so nothing is ever blank
    // for crawlers, full-page screenshots, print, or a slow observer.
    let observer: IntersectionObserver | undefined;
    const revealAll = () =>
      targets.forEach((el) => el.classList.remove("pending"));
    if (!reduced && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove("pending");
              observer?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -40px 0px" },
      );
      const vh = window.innerHeight;
      targets.forEach((el) => {
        if (el.getBoundingClientRect().top > vh) {
          el.classList.add("pending");
          observer?.observe(el);
        }
      });
      window.addEventListener("beforeprint", revealAll);
    }

    // Confidence Chain: fill the line and light up nodes as they scroll past
    const track = document.getElementById("chainTrack");
    const fill = document.getElementById("chainFill");
    const links = document.querySelectorAll<HTMLElement>(".link-item");

    function updateChain() {
      if (!track || !fill) return;
      const rect = track.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(
        1,
        Math.max(0, (vh * 0.65 - rect.top) / rect.height),
      );
      fill.style.height = `${progress * 100}%`;
      links.forEach((link) => {
        const linkRect = link.getBoundingClientRect();
        link.classList.toggle("active", linkRect.top < vh * 0.65);
      });
    }

    let onScroll: (() => void) | undefined;
    if (track) {
      if (reduced) {
        if (fill) fill.style.height = "100%";
        links.forEach((link) => link.classList.add("active"));
      } else {
        onScroll = updateChain;
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        updateChain();
      }
    }

    return () => {
      observer?.disconnect();
      window.removeEventListener("beforeprint", revealAll);
      if (onScroll) {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    };
  }, [pathname]);

  return null;
}
