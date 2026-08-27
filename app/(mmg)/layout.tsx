import { Archivo, Fraunces } from "next/font/google";
import "./mmg.css";
import Analytics from "@/components/mmg/Analytics";
import ClickTracking from "@/components/mmg/ClickTracking";
import MmgFooter from "@/components/mmg/MmgFooter";
import MmgNav from "@/components/mmg/MmgNav";
import Reveal from "@/components/mmg/Reveal";
import { CONTACT } from "@/lib/mmg-nav";
import { SITE_URL } from "@/lib/site";

// Self-hosted at build time by next/font — no render-blocking request to
// Google, no layout shift. The CSS variables match Michael's original
// --display / --body custom properties.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialService",
      "@id": `${SITE_URL}/#organization`,
      name: "Martin Mortgage Group",
      alternateName: "Martin Mortgage Group at Fairway Home Mortgage",
      description:
        "Martin Mortgage Group helps homebuyers and homeowners understand their options, build the right mortgage strategy, and move forward with confidence.",
      url: `${SITE_URL}`,
      telephone: "(919) 612-9978",
      email: CONTACT.email,
      image: `${SITE_URL}/images/mmg/mmg-logo.png`,
      logo: `${SITE_URL}/images/mmg/mmg-logo.png`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Raleigh",
        addressRegion: "NC",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 35.7796,
        longitude: -78.6382,
      },
      areaServed: [
        { "@type": "State", name: "North Carolina" },
        { "@type": "State", name: "South Carolina" },
        { "@type": "State", name: "Virginia" },
        { "@type": "State", name: "Georgia" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#michael`,
      name: "Michael Martin",
      jobTitle: "Mortgage Advisor",
      identifier: CONTACT.nmls,
      telephone: "(919) 612-9978",
      email: CONTACT.email,
      url: `${SITE_URL}/meet-michael`,
      image: `${SITE_URL}/images/mmg/michael-home-hero.jpg`,
      worksFor: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

/**
 * Layout for the Martin Mortgage Group site — Michael's design system,
 * shared nav/footer, scroll animations and analytics.
 */
export default function MmgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${fraunces.variable} ${archivo.variable}`}>
      {/* Reveal animations are progressive enhancement — without JS the
          content must still be readable, not stuck at opacity 0. */}
      <noscript>
        <style>{`.fade-up,.q-stack .q{opacity:1 !important;transform:none !important}
.link-item .link-node{background:var(--forest);border-color:var(--forest);color:#fff}
.chain-fill{height:100% !important}`}</style>
      </noscript>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <MmgNav />
      <main id="main">{children}</main>
      <MmgFooter />

      <Reveal />
      <ClickTracking />
      <Analytics />
    </div>
  );
}
