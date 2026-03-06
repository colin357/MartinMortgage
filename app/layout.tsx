import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://martinmortgagegroup.com"),
  title: {
    default: "Martin Mortgage Group | Raleigh NC Home Loans & Mortgage Lender",
    template: "%s | Martin Mortgage Group",
  },
  description:
    "Martin Mortgage Group is Raleigh, NC's trusted mortgage lender. We offer personalized expert guidance on home purchases, refinancing, FHA, VA, jumbo loans, and down payment assistance programs. Get preapproved today.",
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
      "Your trusted mortgage partner in Raleigh, NC. Personalized service and expert guidance for every step of your home financing journey.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin Mortgage Group | Raleigh NC Home Loans",
    description:
      "Your trusted mortgage partner in Raleigh, NC. Personalized service and expert guidance every step of the way.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://martinmortgagegroup.com",
              name: "Martin Mortgage Group",
              description:
                "Trusted mortgage lender in Raleigh, NC offering home purchase loans, refinancing, FHA, VA, jumbo loans, and down payment assistance.",
              url: "https://martinmortgagegroup.com",
              telephone: "(919) 238-4934",
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
              areaServed: {
                "@type": "State",
                name: "North Carolina",
              },
              sameAs: [],
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
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
