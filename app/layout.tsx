import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Martin Mortgage Group | Raleigh, NC Mortgage Lending",
  description:
    "Martin Mortgage Group helps buyers and homeowners in Raleigh, NC with purchase, refinance, down payment assistance, investor, and new construction loans.",
  keywords: [
    "Raleigh mortgage lender",
    "North Carolina home loan",
    "purchase mortgage",
    "refinance rates",
    "down payment assistance NC",
    "new construction loans",
    "investor loans"
  ],
  alternates: { canonical: "https://www.martinmortgagegroup.com" },
  openGraph: {
    title: "Martin Mortgage Group",
    description: "Upscale mortgage guidance for Raleigh and all of North Carolina.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container nav">
            <Link href="/">
              <strong>Martin Mortgage Group</strong>
            </Link>
            <nav className="nav-links" aria-label="Main navigation">
              <Link href="/landing/purchase">Purchase</Link>
              <Link href="/landing/refinance">Refinance</Link>
              <Link href="/landing/down-payment-assistance">Down Payment Assistance</Link>
              <Link href="/landing/investors">Investors</Link>
              <Link href="/landing/new-construction">New Construction</Link>
              <Link href="/local-recommendations">Raleigh Favorites</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer>
          <div className="container">
            <strong>Martin Mortgage Group</strong>
            <p>
              Raleigh, NC mortgage team focused on clear advice, fast prequalification, and a premium
              client experience.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
