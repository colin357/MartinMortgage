"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Testimonial {
  name: string;
  text: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const count = testimonials.length;

  const goTo = useCallback((index: number) => {
    setCurrent(((index % count) + count) % count);
  }, [count]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-advance every 6s, pause on hover/drag
  useEffect(() => {
    autoPlayRef.current = setInterval(next, 6000);
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [next]);

  const pauseAuto = () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  const resumeAuto = () => {
    pauseAuto();
    autoPlayRef.current = setInterval(next, 6000);
  };

  // Touch / drag handling for mobile swipe
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollStart(current);
    pauseAuto();
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const diff = e.clientX - startX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) next();
      else prev();
    }
    resumeAuto();
  };

  return (
    <div
      className="relative"
      onMouseEnter={pauseAuto}
      onMouseLeave={resumeAuto}
    >
      {/* ── Desktop: 3-card slider with arrows ── */}
      <div className="hidden md:block">
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * (100 / 3)}%)` }}
          >
            {/* Duplicate cards at end for seamless wrapping visual */}
            {[...testimonials, ...testimonials.slice(0, 3)].map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="w-1/3 flex-shrink-0 px-3"
              >
                <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 italic flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-50">
                    <div className="font-bold text-gray-800 text-sm">{t.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-primary-50 hover:border-primary-300 transition-all duration-200 group"
        >
          <svg className="w-5 h-5 text-gray-600 group-hover:text-primary-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-primary-50 hover:border-primary-300 transition-all duration-200 group"
        >
          <svg className="w-5 h-5 text-gray-600 group-hover:text-primary-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* ── Mobile: single card with peek edges ── */}
      <div
        className="md:hidden overflow-hidden touch-pan-y"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => { setIsDragging(false); resumeAuto(); }}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            /* Show ~16px peek on each side */
            transform: `translateX(calc(-${current * 100}% + ${current === 0 ? "0px" : "0px"}))`,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="w-full flex-shrink-0"
              style={{ padding: "0 4px" }}
            >
              <div
                className={`bg-white rounded-xl p-6 border shadow-sm transition-all duration-300 mx-2 ${
                  i === current
                    ? "border-primary-200 shadow-md scale-100 opacity-100"
                    : "border-gray-100 scale-[0.97] opacity-60"
                }`}
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="pt-3 border-t border-gray-50">
                  <div className="font-bold text-gray-800 text-sm">{t.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 bg-primary-700"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
