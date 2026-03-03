import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

const faqs = [
  {
    q: "How fast can I get prequalified in Raleigh, NC?",
    a: "Most buyers receive a same-day prequalification review once we collect income, credit, and down payment details."
  },
  {
    q: "Do you offer North Carolina down payment assistance?",
    a: "Yes. We guide clients through available NC and local Raleigh assistance options based on income and location eligibility."
  },
  {
    q: "Can Martin Mortgage Group help self-employed borrowers?",
    a: "Absolutely. We structure loan options for business owners and 1099 borrowers with clear documentation planning."
  }
];

export default function HomePage() {
  const services = [
    ["Purchase Loans", "/landing/purchase"],
    ["Refinance", "/landing/refinance"],
    ["Down Payment Assistance", "/landing/down-payment-assistance"],
    ["Investor Loans", "/landing/investors"],
    ["New Construction", "/landing/new-construction"]
  ] as const;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Martin Mortgage Group",
    areaServed: "Raleigh, North Carolina",
    url: "https://www.martinmortgagegroup.com"
  };

  return (
    <main className="container">
      <section className="hero">
        <div>
          <span className="badge">Raleigh, NC Mortgage Experts</span>
          <h1>Luxury-level service for every home financing journey.</h1>
          <p>
            Martin Mortgage Group combines modern digital convenience with personalized local strategy
            for buyers, refinancers, investors, and new construction clients across North Carolina.
          </p>
          <div className="grid-2">
            {services.map(([label, href]) => (
              <Link key={href} href={href} className="section-card">
                <strong>{label}</strong>
                <p>Start a streamlined prequalification with our guided assistant.</p>
              </Link>
            ))}
          </div>
        </div>
        <aside className="hero-card">
          <h2>Why clients choose Martin Mortgage Group</h2>
          <ul>
            <li>Fast communication and transparent loan strategy</li>
            <li>Tailored financing structures to match monthly payment goals</li>
            <li>Local insight for Raleigh neighborhoods and market trends</li>
          </ul>
          <Link href="/landing/purchase" className="btn">
            Begin Prequalification
          </Link>
        </aside>
      </section>

      <section className="section-card">
        <h2>Mortgage FAQ (SEO + AEO)</h2>
        <FaqAccordion items={faqs} />
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </main>
  );
}
