"use client";

import { useState } from "react";

interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function HeroImage({ src, alt, className = "" }: HeroImageProps) {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHidden(true)}
    />
  );
}

interface HeadshotProps {
  src: string;
  alt: string;
  fallback: string;
}

export function HeadshotImage({ src, alt, fallback }: HeadshotProps) {
  const [useFallback, setUseFallback] = useState(false);
  if (useFallback) {
    return <span className="text-white font-black text-3xl">{fallback}</span>;
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      onError={() => setUseFallback(true)}
    />
  );
}
