import type { Metadata } from "next";
import ChatForm from "@/components/ChatForm";
import FAQ from "@/components/FAQ";
import { newConstructionSteps } from "@/lib/chat-steps";

export const metadata: Metadata = {
  title: "New Construction Home Loans Raleigh NC | Build Your Dream Home",
  description:
    "New construction financing in Raleigh, NC. Martin Mortgage Group offers construction-to-permanent loans, new build mortgages, and builder financing with competitive rates.",
  keywords: [
    "new construction loan Raleigh NC",
    "construction to permanent loan NC",
    "build a home Raleigh",
    "new build mortgage North Carolina",
    "builder financing Raleigh Durham",
    "custom home construction loan",
    "new home communities Raleigh",
  ],
};

const features = [
  {
    title: "Construction-to-Permanent",
    description: "One loan that converts from a construction loan to a permanent mortgage \u2014 one closing, one set of fees.",
  },
  {
    title: "Builder Community Loans",
    description: "Financing for homes in new construction communities across the Raleigh-Durham area with preferred builder programs.",
  },
  {
    title: "Custom Home Builds",
    description: "Financing for custom homes on your own lot with draw schedules that keep your project on track.",
  },
  {
    title: "Extended Rate Locks",
    description: "Lock your rate for up to 12 months while your home is being built, protecting you from rate increases.",
  },
];

const faqItems = [
  {
    question: "How does a construction-to-permanent loan work in North Carolina?",
    answer:
      "A construction-to-permanent loan (also called a one-time close loan) finances both the building phase and the permanent mortgage in a single loan. During construction, you typically make interest-only payments on the drawn amount. Once construction is complete, the loan automatically converts to a standard mortgage. This saves you from paying two sets of closing costs.",
  },
  {
    question: "How much down payment do I need for a new construction loan?",
    answer:
      "Down payment requirements for new construction loans vary by loan type. Conventional construction loans typically require 5\u201320% down, FHA construction loans require 3.5%, and VA construction loans may offer 0% down for eligible veterans. We\u2019ll help you find the best option for your financial situation.",
  },
  {
    question: "Can I use down payment assistance for new construction in NC?",
    answer:
      "In many cases, yes. Programs like the NC Home Advantage Mortgage can be used for new construction purchases, depending on the builder and community. Our team can help you explore combining DPA programs with your new construction financing.",
  },
  {
    question: "How do I choose between a builder\u2019s preferred lender and an independent mortgage broker?",
    answer:
      "While builders often offer incentives to use their preferred lender, an independent broker like Martin Mortgage Group can shop multiple lenders to find the best overall deal. We frequently beat builder-lender rates even after incentives. Always get a comparison quote \u2014 we\u2019re happy to provide one.",
  },
  {
    question: "What if my new construction takes longer than expected?",
    answer:
      "We offer extended rate locks of up to 12 months, and we can work with you on extensions if construction runs longer. Communication is key \u2014 our team stays in regular contact with your builder to monitor progress and ensure your financing stays on track.",
  },
];

export default function NewConstructionPage() {
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
                <span className="text-accent-200 text-sm font-medium">New Construction</span>
              </span>
              <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Build Your Dream Home with
                <span className="text-accent-300"> Confidence</span>
              </h1>
              <p className="text-primary-100 text-lg leading-relaxed mb-8">
                From new communities in the Triangle to custom builds on your own
                lot, we offer construction financing that keeps your project on
                budget and on schedule.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {features.map((f) => (
                  <div key={f.title} className="bg-white/5 rounded-xl p-4">
                    <h3 className="text-white font-semibold text-sm mb-1">{f.title}</h3>
                    <p className="text-primary-200 text-xs">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <ChatForm
                steps={newConstructionSteps}
                loanType="new construction"
                headline="Start Your New Build"
                subheadline="Let\u2019s explore your construction financing options."
              />
            </div>
          </div>
        </div>
      </section>

      <FAQ
        items={faqItems}
        title="New Construction FAQ"
        subtitle="Common questions about building a new home in Raleigh, NC"
      />
    </>
  );
}
