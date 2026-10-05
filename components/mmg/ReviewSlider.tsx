"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Review = { name: string; text: string };

/**
 * Review carousel for the homepage. Shows 3 cards on desktop, 2 on tablet and
 * 1 on phones (widths come from .rev-slide in mmg.css). Auto-advances every
 * 7s, pauses on hover/focus, and supports swipe and arrow keys.
 */
export default function ReviewSlider({ reviews }: { reviews: Review[] }) {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    const update = () =>
      setPerView(window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pages = Math.max(1, reviews.length - perView + 1);

  useEffect(() => {
    setIndex((i) => Math.min(i, pages - 1));
  }, [pages]);

  const go = useCallback(
    (to: number) => setIndex(((to % pages) + pages) % pages),
    [pages],
  );

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % pages), 7000);
    return () => clearInterval(id);
  }, [paused, pages]);

  return (
    <div
      className="rev-slider fade-up"
      role="region"
      aria-roledescription="carousel"
      aria-label="Client reviews"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(index + 1);
        if (e.key === "ArrowLeft") go(index - 1);
      }}
    >
      <div
        className="rev-viewport"
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
          setPaused(true);
        }}
        onTouchEnd={(e) => {
          if (touchX.current !== null) {
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 40) go(dx < 0 ? index + 1 : index - 1);
          }
          touchX.current = null;
          setPaused(false);
        }}
      >
        <div
          className="rev-track"
          style={{ transform: `translateX(-${(index * 100) / perView}%)` }}
        >
          {reviews.map((r, i) => (
            <div
              className="rev-slide"
              key={r.name}
              aria-hidden={i < index || i >= index + perView}
            >
              <figure className="rev-card">
                <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote>
                  <p>&ldquo;{r.text}&rdquo;</p>
                </blockquote>
                <figcaption className="who">{r.name}</figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="rev-controls">
        <div className="rev-dots">
          {Array.from({ length: pages }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show reviews ${i + 1}`}
              aria-current={i === index}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <div className="rev-arrows">
          <button type="button" aria-label="Previous reviews" onClick={() => go(index - 1)}>
            ←
          </button>
          <button type="button" aria-label="Next reviews" onClick={() => go(index + 1)}>
            →
          </button>
        </div>
      </div>
    </div>
  );
}
