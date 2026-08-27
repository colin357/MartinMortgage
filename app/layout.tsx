import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Michael Martin — Raleigh Mortgage Advisor | Martin Mortgage Group",
    template: "%s | Martin Mortgage Group",
  },
  description:
    "Martin Mortgage Group helps homebuyers and homeowners understand their options, build the right mortgage strategy, and move forward with confidence. Licensed in NC, SC, VA & GA. Rooted in Raleigh.",
  keywords: [
    "mortgage lender Raleigh NC",
    "home loans Raleigh",
    "mortgage broker North Carolina",
    "FHA loans Raleigh",
    "VA loans NC",
    "refinance Raleigh NC",
    "down payment assistance NC",
    "first time home buyer Raleigh",
    "Martin Mortgage Group",
    "Michael Martin mortgage",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Martin Mortgage Group",
    title: "Martin Mortgage Group | Raleigh NC Home Loans",
    description:
      "Confidence to move forward. Understand your options, build the right mortgage strategy, and know exactly where you stand.",
    images: ["/images/mmg/michael-home-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin Mortgage Group | Raleigh NC Home Loans",
    description:
      "Confidence to move forward. Understand your options, build the right mortgage strategy, and know exactly where you stand.",
    images: ["/images/mmg/michael-home-hero.jpg"],
  },
  icons: {
    apple: "/apple-touch-icon.png",
    other: [{ rel: "icon", url: "/icon-512.png", sizes: "512x512" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/**
 * Root shell only. Each route group brings its own stylesheet, header
 * and footer:
 *   app/(mmg)     — the Martin Mortgage Group site (Fraunces/Archivo)
 *   app/(legacy)  — the original Tailwind campaign landing pages
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
