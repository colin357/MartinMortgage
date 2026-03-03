import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ChatbotLeadForm from "@/components/ChatbotLeadForm";
import FaqAccordion from "@/components/FaqAccordion";

const pageData: Record<string, { title: string; description: string; keywords: string[] }> = {
  purchase: {
    title: "Purchase Mortgage Loans in Raleigh, NC",
    description: "Personalized mortgage solutions for first-time and move-up buyers in Raleigh.",
    keywords: ["purchase mortgage Raleigh", "home loan preapproval NC", "mortgage lender Raleigh NC"]
  },
  refinance: {
    title: "Refinance Options in Raleigh, NC",
    description: "Lower payments, adjust terms, or tap equity with expert refinance guidance.",
    keywords: ["refinance Raleigh NC", "mortgage refinance rates", "cash-out refinance"]
  },
  "down-payment-assistance": {
    title: "Down Payment Assistance in North Carolina",
    description: "Explore local and statewide assistance programs to reduce upfront buying costs.",
    keywords: ["down payment assistance NC", "first-time buyer programs Raleigh", "DPA mortgage"]
  },
  investors: {
    title: "Investor Mortgage Programs",
    description: "Financing built for rental property investors and portfolio growth.",
    keywords: ["DSCR loans NC", "investor mortgage Raleigh", "rental property loan"]
  },
  "new-construction": {
    title: "New Construction Financing",
    description: "Structured mortgage planning for custom builds and builder inventory homes.",
    keywords: ["new construction loans Raleigh", "builder lender NC", "construction mortgage"]
  }
};

export function generateStaticParams() {
  return Object.keys(pageData).map((type) => ({ type }));
}

export async function generateMetadata({ params }: { params: { type: string } }): Promise<Metadata> {
  const data = pageData[params.type];
  if (!data) return {};
  return {
    title: `Martin Mortgage Group | ${data.title}`,
    description: data.description,
    keywords: data.keywords
  };
}

export default function LandingPage({ params }: { params: { type: string } }) {
  const data = pageData[params.type];
  if (!data) notFound();

  const faqs = [
    {
      q: `What documents are needed for ${data.title.toLowerCase()}?`,
      a: "We typically begin with pay stubs, W-2s or tax returns, asset statements, and a soft credit review."
    },
    {
      q: "How do you calculate my target monthly mortgage payment?",
      a: "We include principal, interest, taxes, insurance, and HOA factors to match your budget goals."
    }
  ];

  return (
    <main className="container" style={{ padding: "2rem 0" }}>
      <section className="grid-2">
        <div className="section-card">
          <span className="badge">{data.title}</span>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <p>
            Our step-by-step prequalification chat collects one detail at a time so your application feels
            simple, modern, and stress-free.
          </p>
        </div>
        <div className="section-card">
          <h2>Quick Prequalification Chat</h2>
          <ChatbotLeadForm leadType={params.type.replace(/-/g, " ")} />
        </div>
      </section>

      <section className="section-card" style={{ marginTop: "1rem" }}>
        <h2>Common Questions</h2>
        <FaqAccordion items={faqs} />
      </section>
    </main>
  );
}
