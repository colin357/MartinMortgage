import type { Metadata } from "next";
import ChatForm from "@/components/ChatForm";
import FAQ from "@/components/FAQ";
import { adamsHomesSteps } from "@/lib/chat-steps";

export const metadata: Metadata = {
  title: "Adams Homes Financing | Preferred Lender",
  description:
    "Michael Martin is a preferred lender for Adams Homes communities. Get personalized financing for your new Adams Homes build in NC, SC, or VA with expert guidance from Martin Mortgage Group.",
  keywords: [
    "Adams Homes financing",
    "Adams Homes preferred lender",
    "Adams Homes mortgage",
    "Adams Homes new construction loan",
    "Adams Homes NC",
    "Adams Homes SC",
    "Adams Homes VA",
  ],
};

const features = [
  {
    title: "Preferred Lender",
    description:
      "As an Adams Homes preferred lender, Michael Martin offers streamlined financing designed to work seamlessly with their build process.",
  },
  {
    title: "New Construction Expertise",
    description:
      "25+ years of experience financing new builds — we know the timelines, the paperwork, and how to keep your closing on track.",
  },
  {
    title: "Rate Lock Protection",
    description:
      "Lock your rate while your Adams Home is being built so you're protected from market fluctuations.",
  },
  {
    title: "All Loan Types Welcome",
    description:
      "Conventional, FHA, VA, USDA — we'll find the right loan program for your Adams Homes purchase.",
  },
];

const faqItems = [
  {
    question: "Why use a preferred lender for my Adams Homes purchase?",
    answer:
      "As a preferred lender, Michael Martin and the Martin Mortgage Group have a direct relationship with Adams Homes. This means smoother communication between your lender and builder, faster processing, and a team that already understands Adams Homes' contracts, timelines, and community details.",
  },
  {
    question: "What loan programs are available for Adams Homes?",
    answer:
      "We offer the full range of loan products for Adams Homes purchases including conventional loans, FHA loans, VA loans (0% down for eligible veterans), and USDA loans in eligible areas. We also help buyers access down payment assistance programs that can be combined with your new construction financing.",
  },
  {
    question: "Can I get preapproved before selecting my Adams Homes floor plan?",
    answer:
      "Absolutely — and we recommend it. Getting preapproved first helps you understand your budget so you can choose the right floor plan and options with confidence. Our preapproval process is quick and easy.",
  },
  {
    question: "How does the financing timeline work with Adams Homes?",
    answer:
      "Once you select your lot and floor plan, we begin the loan process in parallel with construction. We stay in close contact with Adams Homes throughout the build, and 80% of our clients are clear to close at least 5 business days before closing day.",
  },
  {
    question: "Does Martin Mortgage Group serve Adams Homes communities outside North Carolina?",
    answer:
      "Yes. We are licensed in NC, SC, and VA and can finance Adams Homes purchases across all three states. Wherever Adams Homes is building, we can help you get into your new home.",
  },
];

export default function AdamsHomesPage() {
  return (
    <>
      <section className="relative bg-primary-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-400 rounded-full blur-3xl translate-y-1/3" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-400/20 rounded-full mb-6">
                <span className="text-accent-200 text-sm font-medium">
                  Adams Homes Preferred Lender
                </span>
              </span>
              <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Your Adams Homes
                <span className="text-accent-300"> Financing Expert</span>
              </h1>
              <p className="text-primary-100 text-lg leading-relaxed mb-8">
                Michael Martin is a preferred lender for Adams Homes. Whether
                you&apos;re building in North Carolina, South Carolina, or
                Virginia, we provide personalized mortgage guidance to make your
                new home purchase simple and stress-free.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {features.map((f) => (
                  <div key={f.title} className="bg-white/5 rounded-xl p-4">
                    <h3 className="text-white font-semibold text-sm mb-1">
                      {f.title}
                    </h3>
                    <p className="text-primary-200 text-xs">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <ChatForm
                steps={adamsHomesSteps}
                loanType="Adams Homes new construction"
                headline="Get Preapproved for Adams Homes"
                subheadline="Answer a few quick questions and we'll get you started."
              />
            </div>
          </div>
        </div>
      </section>

      <FAQ
        items={faqItems}
        title="Adams Homes Financing FAQ"
        subtitle="Common questions about financing your Adams Homes purchase"
      />
    </>
  );
}
