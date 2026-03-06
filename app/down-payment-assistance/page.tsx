import type { Metadata } from "next";
import ChatForm from "@/components/ChatForm";
import FAQ from "@/components/FAQ";
import { dpaSteps } from "@/lib/chat-steps";

export const metadata: Metadata = {
  title: "Down Payment Assistance Programs NC | First-Time Home Buyer Help",
  description:
    "Discover down payment assistance programs in North Carolina. Martin Mortgage Group helps Raleigh-area first-time buyers access grants and programs to cover down payments and closing costs.",
  keywords: [
    "down payment assistance North Carolina",
    "NC Home Advantage Mortgage",
    "first time home buyer Raleigh NC",
    "down payment help Raleigh",
    "NC housing finance agency",
    "closing cost assistance NC",
    "affordable home buying Raleigh Durham",
  ],
};

const programs = [
  {
    name: "NC Home Advantage Mortgage\u2122",
    description:
      "Offers down payment assistance up to 5% of the loan amount as a 0% interest, deferred second mortgage for qualifying buyers across North Carolina.",
  },
  {
    name: "NC 1st Home Advantage Down Payment",
    description:
      "Provides up to $15,000 in down payment help for first-time buyers and military veterans purchasing in North Carolina.",
  },
  {
    name: "Community Partners Loan Pool",
    description:
      "Local programs through Wake County and the City of Raleigh offering additional assistance for income-qualified buyers in the Triangle.",
  },
  {
    name: "FHA & USDA Low Down Payment Options",
    description:
      "Federal loan programs with as little as 0\u20133.5% down, which can be combined with state assistance programs for maximum benefit.",
  },
];

const faqItems = [
  {
    question: "What down payment assistance programs are available in Raleigh, NC?",
    answer:
      "Several programs are available including the NC Home Advantage Mortgage (up to 5% assistance), NC 1st Home Advantage Down Payment (up to $15,000 for first-time buyers), and local programs through Wake County and the City of Raleigh. Our team stays current on all available programs and can determine which ones you qualify for.",
  },
  {
    question: "Do I have to be a first-time home buyer to get down payment assistance in NC?",
    answer:
      "Not always. While some programs like the NC 1st Home Advantage are specifically for first-time buyers and veterans, the NC Home Advantage Mortgage is available to both first-time and repeat buyers. Income limits and other criteria may apply depending on the program.",
  },
  {
    question: "What are the income limits for NC down payment assistance programs?",
    answer:
      "Income limits vary by program and county. The NC Home Advantage Mortgage generally has a household income limit that varies by county. The NC 1st Home Advantage has its own thresholds. We\u2019ll review your income and help you identify every program you qualify for.",
  },
  {
    question: "Can I combine down payment assistance with an FHA or VA loan?",
    answer:
      "Yes! Many down payment assistance programs can be layered with FHA, VA, USDA, or conventional loans. This combination can significantly reduce your out-of-pocket costs at closing. Our team specializes in structuring these combinations to maximize your savings.",
  },
  {
    question: "Do I have to pay back down payment assistance in North Carolina?",
    answer:
      "It depends on the program. Some programs are structured as forgivable second mortgages (forgiven after you live in the home for a certain period), while others are deferred-payment loans that are due when you sell, refinance, or pay off the first mortgage. We\u2019ll explain the terms of each program so you can make an informed decision.",
  },
];

export default function DPAPage() {
  return (
    <>
      <section className="relative bg-primary-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl translate-x-1/3" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-400/20 rounded-full mb-6">
                <span className="text-accent-200 text-sm font-medium">Down Payment Assistance</span>
              </span>
              <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Buy Your Home with
                <span className="text-accent-300"> Less Out of Pocket</span>
              </h1>
              <p className="text-primary-100 text-lg leading-relaxed mb-8">
                North Carolina offers excellent down payment assistance programs
                for qualifying buyers. We&apos;ll help you navigate the options and
                maximize your savings.
              </p>

              <div className="space-y-3">
                {programs.map((p) => (
                  <div key={p.name} className="bg-white/5 rounded-xl p-4">
                    <h3 className="text-white font-semibold text-sm mb-1">{p.name}</h3>
                    <p className="text-primary-200 text-xs">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <ChatForm
                steps={dpaSteps}
                loanType="down payment assistance"
                headline="Check Your Eligibility"
                subheadline="See what assistance programs you may qualify for."
              />
            </div>
          </div>
        </div>
      </section>

      <FAQ
        items={faqItems}
        title="Down Payment Assistance FAQ"
        subtitle="Common questions about DPA programs in North Carolina"
      />
    </>
  );
}
