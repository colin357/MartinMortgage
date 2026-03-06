"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Animation = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "fade";

interface AnimateInProps {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  duration?: number;
  className?: string;
  /** If true, animate immediately on mount (for hero elements) */
  once?: boolean;
}

const baseStyles: Record<Animation, { from: string; to: string }> = {
  "fade-up":    { from: "translate-y-8 opacity-0",  to: "translate-y-0 opacity-100" },
  "fade-down":  { from: "-translate-y-8 opacity-0", to: "translate-y-0 opacity-100" },
  "fade-left":  { from: "translate-x-8 opacity-0",  to: "translate-x-0 opacity-100" },
  "fade-right": { from: "-translate-x-8 opacity-0", to: "translate-x-0 opacity-100" },
  "zoom-in":    { from: "scale-95 opacity-0",       to: "scale-100 opacity-100" },
  "fade":       { from: "opacity-0",                to: "opacity-100" },
};

export default function AnimateIn({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
  once = true,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const { from, to } = baseStyles[animation];

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${visible ? to : from} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
