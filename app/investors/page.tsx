import type { Metadata } from "next";
import ChatForm from "@/components/ChatForm";
import FAQ from "@/components/FAQ";
import { investorSteps } from "@/lib/chat-steps";

export const metadata: Metadata = {
  title: "Investment Property Loans Raleigh NC | Investor Mortgage Financing",
  description:
    "Financing for real estate investors in Raleigh, NC. DSCR loans, fix-and-flip, rental property mortgages, and multi-family financing from Martin Mortgage Group.",
  keywords: [
    "investment property loans Raleigh NC",
    "DSCR loan North Carolina",
    "rental property mortgage Raleigh",
    "fix and flip loans NC",
    "real estate investor financing",
    "multi-family mortgage Raleigh Durham",
    "investment property mortgage rates",
  ],
};

const loanTypes = [
  {
    title: "DSCR Loans",
    description: "Qualify based on property cash flow, not personal income. Ideal for portfolio investors.",
  },
  {
    title: "Fix & Flip Financing",
    description: "Short-term loans with fast funding for property renovation and resale projects.",
  },
  {
    title: "Rental Property Mortgages",
    description: "Long-term financing for buy-and-hold investors with hands-on guidance throughout.",
  },
  {
    title: "Multi-Family Financing",
    description: "Loans for 2\u20134 unit properties and small apartment buildings.",
  },
];

const faqItems = [
  {
    question: "What types of investment property loans do you offer in Raleigh?",
    answer:
      "We offer DSCR (Debt Service Coverage Ratio) loans, conventional investment property mortgages, fix-and-flip bridge loans, portfolio loans, and multi-family financing. Each product is designed for different investor strategies, and our team will help you choose the right one.",
  },
  {
    question: "What is a DSCR loan and how does it work?",
    answer:
      "A DSCR loan qualifies you based on the rental income the property generates rather than your personal income. If the property\u2019s rental income covers the mortgage payment (typically at a 1.0\u20131.25x ratio), you can qualify. This is ideal for investors who may not show high personal income on tax returns.",
  },
  {
    question: "How much down payment do I need for an investment property in NC?",
    answer:
      "Investment property loans typically require 15\u201325% down depending on the loan type and number of units. DSCR loans generally require 20\u201325% down. We'll work closely with you to structure your financing and minimize cash out of pocket.",
  },
  {
    question: "Can I finance multiple investment properties?",
    answer:
      "Yes! We work with investors who own anywhere from 1 to 20+ properties. DSCR loans in particular have no limit on the number of properties you can finance. We\u2019ll help you build a financing strategy that scales with your portfolio.",
  },
  {
    question: "Is the Raleigh-Durham area a good market for real estate investment?",
    answer:
      "The Triangle is one of the strongest real estate markets in the Southeast. With consistent population growth, a strong job market anchored by Research Triangle Park, top universities, and rising home values, Raleigh-Durham continues to attract investors nationally. Our local expertise helps you identify and finance the right opportunities.",
  },
];

export default function InvestorsPage() {
  return (
    <>
      <section className="relative bg-primary-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent-400 rounded-full blur-3xl" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-400/20 rounded-full mb-6">
                <span className="text-accent-200 text-sm font-medium">Investor Loans</span>
              </span>
              <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Financing Built for
                <span className="text-accent-300"> Real Estate Investors</span>
              </h1>
              <p className="text-primary-100 text-lg leading-relaxed mb-8">
                From your first rental property to a full portfolio, Martin
                Mortgage Group offers investor-focused financing with fast
                closings and flexible qualification.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {loanTypes.map((lt) => (
                  <div key={lt.title} className="bg-white/5 rounded-xl p-4">
                    <h3 className="text-white font-semibold text-sm mb-1">{lt.title}</h3>
                    <p className="text-primary-200 text-xs">{lt.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <ChatForm
                steps={investorSteps}
                loanType="investment property"
                headline="Get Investor Financing"
                subheadline="Tell us about your investment goals."
              />
            </div>
          </div>
        </div>
      </section>

      <FAQ
        items={faqItems}
        title="Investor Loan FAQ"
        subtitle="Common questions about investment property financing in NC"
      />
    </>
  );
}
