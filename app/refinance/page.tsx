import type { Metadata } from "next";
import ChatForm from "@/components/ChatForm";
import FAQ from "@/components/FAQ";
import { refinanceSteps } from "@/lib/chat-steps";

export const metadata: Metadata = {
  title: "Refinance Your Mortgage in Raleigh NC | Lower Your Rate",
  description:
    "Refinance your home loan in Raleigh, NC with Martin Mortgage Group. Lower your rate, shorten your term, or access your home equity. Fast closings and competitive rates.",
  keywords: [
    "refinance mortgage Raleigh NC",
    "home refinance North Carolina",
    "cash out refinance Raleigh",
    "lower mortgage rate NC",
    "refinance rates Raleigh Durham",
    "rate and term refinance",
  ],
};

const refinanceTypes = [
  {
    title: "Rate & Term Refinance",
    description: "Lower your interest rate or change your loan term to save money over the life of your loan.",
    icon: "\u2193",
  },
  {
    title: "Cash-Out Refinance",
    description: "Tap into your home\u2019s equity for renovations, debt consolidation, or other financial goals.",
    icon: "\u0024",
  },
  {
    title: "Streamline Refinance",
    description: "FHA and VA streamline options with minimal documentation and faster processing.",
    icon: "\u26A1",
  },
];

const faqItems = [
  {
    question: "When does it make sense to refinance my mortgage in Raleigh, NC?",
    answer:
      "Refinancing typically makes sense when you can lower your rate by at least 0.5\u20131%, when you want to switch from an adjustable to a fixed rate, when you need to access home equity, or when you want to remove PMI. Our team can run a break-even analysis to determine if refinancing is right for your situation.",
  },
  {
    question: "How much does it cost to refinance?",
    answer:
      "Refinance closing costs typically range from 2\u20135% of the loan amount and may include appraisal fees, title insurance, and origination fees. In many cases, these costs can be rolled into the new loan. We\u2019ll provide a detailed estimate upfront so there are no surprises.",
  },
  {
    question: "Can I do a cash-out refinance in North Carolina?",
    answer:
      "Yes! If you have sufficient equity in your home, you can refinance for more than you owe and receive the difference in cash. This is a popular option for home improvements, debt consolidation, or funding major expenses. Most lenders allow you to borrow up to 80% of your home\u2019s value.",
  },
  {
    question: "How long does a refinance take to close?",
    answer:
      "At Martin Mortgage Group, we typically close refinances in 21\u201330 days. The timeline depends on the loan type, appraisal scheduling, and documentation. Our streamlined process and experienced team keep things moving efficiently.",
  },
  {
    question: "Will refinancing affect my credit score?",
    answer:
      "The initial credit inquiry may temporarily lower your score by a few points, but this is minor and recovers quickly. If refinancing improves your debt-to-income ratio or eliminates higher-interest debt, it can actually benefit your credit profile in the long run.",
  },
];

export default function RefinancePage() {
  return (
    <>
      <section className="relative bg-primary-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-400 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold-400/20 rounded-full mb-6">
                <span className="text-gold-300 text-sm font-medium">Refinance Loans</span>
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Refinance & Save on Your
                <span className="text-gold-400"> Monthly Payment</span>
              </h1>
              <p className="text-primary-200 text-lg leading-relaxed mb-8">
                Whether you want to lower your rate, shorten your term, or access
                your equity, Martin Mortgage Group makes refinancing simple and
                stress-free.
              </p>

              <div className="space-y-4">
                {refinanceTypes.map((rt) => (
                  <div key={rt.title} className="flex items-start gap-4 bg-white/5 rounded-xl p-4">
                    <div className="w-10 h-10 bg-gold-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-gold-400 font-bold text-lg">{rt.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm">{rt.title}</h3>
                      <p className="text-primary-300 text-xs mt-0.5">{rt.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <ChatForm
                steps={refinanceSteps}
                loanType="refinance"
                headline="Explore Refinancing Options"
                subheadline="Let\u2019s see how much you could save."
              />
            </div>
          </div>
        </div>
      </section>

      <FAQ
        items={faqItems}
        title="Refinance FAQ"
        subtitle="Common questions about refinancing your mortgage in North Carolina"
      />
    </>
  );
}
