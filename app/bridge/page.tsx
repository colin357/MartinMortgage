import type { Metadata } from "next";
import ChatForm from "@/components/ChatForm";
import FAQ from "@/components/FAQ";
import { bridgeSteps } from "@/lib/chat-steps";

export const metadata: Metadata = {
  title: "Bridge Loans Raleigh NC | Fairway Bridge Loan | Buy Before You Sell",
  description:
    "Buy your next home before selling your current one. Martin Mortgage Group offers the Fairway Bridge Loan in Raleigh, NC — short-term financing up to $750,000 with no selling contingency required.",
  keywords: [
    "bridge loan Raleigh NC",
    "Fairway bridge loan",
    "buy before you sell NC",
    "short term home financing Raleigh",
    "bridge financing North Carolina",
    "remove contingency offer NC",
    "sell and buy home simultaneously",
  ],
};

const benefits = [
  {
    title: "Strengthens Your Offer",
    description: "Removes the selling contingency so sellers see your offer as stronger and more competitive.",
  },
  {
    title: "Relieves the Stress",
    description: "Buy your next home first, then move and sell your current home on your own timeline.",
  },
  {
    title: "Move Quickly",
    description: "Gives you the flexibility to act fast when you need to purchase without delay.",
  },
  {
    title: "Access Your Equity",
    description: "Tap the equity in your current home to cover your down payment or pay off debt.",
  },
];

const idealClients = [
  "Buyers who need to relocate quickly, such as for a new job",
  "Anyone wanting to make a strong offer on their dream home before someone else gets it",
  "Growing families who need more space immediately",
  "Couples navigating a separation or divorce",
  "Individuals who need to pay off debt or secure a down payment",
];

const loanDetails = [
  { stat: "$750,000", label: "Maximum loan amount" },
  { stat: "90%", label: "Loan-to-value (LTV)*" },
  { stat: "680", label: "Minimum credit score" },
  { stat: "48 States", label: "Available everywhere except Texas and New York" },
];

const faqItems = [
  {
    question: "What is a bridge loan?",
    answer:
      "A bridge loan is a home loan option that provides short-term financing for a new property until you’re able to sell your existing home. It “bridges” the gap between buying your next home and selling your current one, so you don’t have to make your offer contingent on a sale.",
  },
  {
    question: "What are the benefits of using a bridge loan when buying a new home?",
    answer:
      "A bridge loan strengthens your offer by removing the selling contingency, relieves the stress of coordinating two closings, gives you flexibility to move quickly on the right home, and lets you use the equity in your current home to cover your down payment or pay off debt.",
  },
  {
    question: "Who is a good candidate for a bridge loan?",
    answer:
      "Bridge loans work well for buyers relocating quickly for a new job, anyone making a strong offer on a dream home before it’s gone, growing families who need more space right away, couples navigating a separation or divorce, and individuals who need to pay off debt or secure a down payment.",
  },
  {
    question: "What are Fairway’s bridge loan requirements?",
    answer:
      "Fairway’s bridge loan offers loan amounts up to $750,000 with up to 90% loan-to-value (LTV) and a minimum 680 credit score. Loan-to-value and combined loan-to-value (CLTV) may vary depending on the loan amount.",
  },
  {
    question: "Is a bridge loan available in every state?",
    answer:
      "The Fairway Bridge Loan is available in every state except Texas and New York. State eligibility is based on the location of the departure property obtaining the bridge loan, not the location of the new home you’re purchasing.",
  },
];

export default function BridgePage() {
  return (
    <>
      <section className="relative bg-navy-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-400/20 rounded-full mb-6">
                <span className="text-accent-200 text-sm font-medium">Fairway Bridge Loan</span>
              </span>
              <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Bridge the Buying and
                <span className="text-accent-300"> Selling Gap</span>
              </h1>
              <p className="text-navy-100 text-lg leading-relaxed mb-8">
                A bridge loan provides short-term financing for your new home
                until you sell your existing one — so you can make a strong
                offer today without waiting to sell first.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {benefits.map((b) => (
                  <div key={b.title} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="text-white font-medium text-sm">{b.title}</div>
                      <div className="text-navy-200 text-xs mt-0.5">{b.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <ChatForm
                steps={bridgeSteps}
                loanType="bridge loan"
                headline="See If a Bridge Loan Fits"
                subheadline="Answer a few quick questions and we’ll reach out shortly."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
              Is It Right For You?
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4">
              Who Bridge Loans Are Ideal For
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {idealClients.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pt-1">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan details */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
              The Details
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4">
              Fairway&apos;s Bridge Loan Program
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {loanDetails.map((d) => (
              <div key={d.label} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
                <div className="font-sans text-3xl font-black text-navy-700 mb-2">{d.stat}</div>
                <div className="text-gray-500 text-sm">{d.label}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs max-w-2xl mx-auto text-center leading-relaxed">
            Available in all states except Texas and New York. State eligibility
            is based on the location of the departure property obtaining the
            bridge loan, not the location of the new home. *Loan-to-value (LTV)
            and combined loan-to-value (CLTV) may vary by loan amount.
          </p>
        </div>
      </section>

      <FAQ
        items={faqItems}
        title="Bridge Loan FAQ"
        subtitle="Common questions about Fairway's bridge loan program"
      />
    </>
  );
}
