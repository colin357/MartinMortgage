import type { Metadata } from "next";
import ChatForm from "@/components/ChatForm";
import FAQ from "@/components/FAQ";
import { purchaseSteps } from "@/lib/chat-steps";

export const metadata: Metadata = {
  title: "Home Purchase Loans in Raleigh NC | Get Preapproved",
  description:
    "Buy your dream home in Raleigh, Durham, or anywhere in North Carolina. Martin Mortgage Group offers FHA, VA, conventional, and jumbo purchase loans with personalized expert guidance. Get preapproved in minutes.",
  keywords: [
    "home purchase loan Raleigh NC",
    "buy a home Raleigh",
    "first time home buyer NC",
    "FHA loan Raleigh",
    "VA loan North Carolina",
    "mortgage preapproval Raleigh",
    "home buyer Cary Durham",
  ],
};

const benefits = [
  {
    title: "Dedicated to You",
    description: "You get a personal mortgage expert who genuinely cares about getting this right for you.",
  },
  {
    title: "Fast Pre-Approval",
    description: "Get your pre-approval letter in as little as 24 hours so you can make offers with confidence.",
  },
  {
    title: "Expert Guidance",
    description: "Our experienced team walks you through every step, from application to closing day.",
  },
  {
    title: "All Loan Types",
    description: "Conventional, FHA, VA, USDA, jumbo \u2014 we match you with the right program.",
  },
];

const faqItems = [
  {
    question: "How much house can I afford in the Raleigh, NC area?",
    answer:
      "The amount you can afford depends on your income, debts, down payment, and the current interest rate. As a general rule, your monthly mortgage payment should be no more than 28-31% of your gross monthly income. Our team can run detailed numbers for your specific situation and help you understand exactly what you can comfortably afford.",
  },
  {
    question: "What is the difference between pre-qualification and pre-approval?",
    answer:
      "Pre-qualification is an initial estimate based on information you provide, while pre-approval involves a thorough review of your credit, income, and assets. Pre-approval carries more weight with sellers. At Martin Mortgage Group, we offer both and can get you a pre-approval letter quickly to strengthen your offers.",
  },
  {
    question: "How much do I need for a down payment on a home in North Carolina?",
    answer:
      "Down payment requirements vary by loan type. Conventional loans may require as little as 3% down, FHA loans require 3.5%, VA and USDA loans offer 0% down options, and North Carolina has down payment assistance programs that can help cover your upfront costs.",
  },
  {
    question: "What documents do I need to apply for a home purchase loan?",
    answer:
      "Typically you\u2019ll need recent pay stubs (30 days), W-2s or tax returns (2 years), bank statements (2 months), a valid ID, and information about any debts. Self-employed borrowers may need additional documentation. We\u2019ll provide you with a complete checklist tailored to your situation.",
  },
  {
    question: "Can I buy a home with less-than-perfect credit in Raleigh?",
    answer:
      "Yes! FHA loans accept credit scores as low as 580, and some programs allow even lower scores with a larger down payment. We specialize in finding solutions for buyers with various credit profiles and can also advise you on steps to improve your score before applying.",
  },
];

export default function PurchasePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-400/20 rounded-full mb-6">
                <span className="text-accent-200 text-sm font-medium">
                  Home Purchase Loans
                </span>
              </span>
              <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Find the Perfect Loan for Your
                <span className="text-accent-300"> Dream Home</span>
              </h1>
              <p className="text-primary-100 text-lg leading-relaxed mb-8">
                Whether you&apos;re a first-time buyer or upgrading to your
                forever home, Martin Mortgage Group will guide you through every
                step with personalized service and the attention you deserve.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {benefits.map((b) => (
                  <div key={b.title} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="text-white font-medium text-sm">{b.title}</div>
                      <div className="text-primary-200 text-xs mt-0.5">{b.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <ChatForm
                steps={purchaseSteps}
                loanType="home purchase"
                headline="Start Your Home Purchase"
                subheadline="Answer a few quick questions to get preapproved."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4">
              Your Path to Homeownership
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Get Preapproved", desc: "Share your info and goals. We\u2019ll run the numbers and show you what you qualify for." },
              { step: "02", title: "Find Your Home", desc: "Shop with confidence knowing your budget. We work with top Raleigh-area agents." },
              { step: "03", title: "Lock Your Rate", desc: "We\u2019ll secure the best available rate and finalize your loan terms." },
              { step: "04", title: "Close & Move In", desc: "We handle the paperwork. Average close time: 21 days. Welcome home!" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-600 font-sans font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="font-sans text-lg font-black text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        items={faqItems}
        title="Home Purchase FAQ"
        subtitle="Common questions about buying a home in Raleigh, NC"
      />
    </>
  );
}
