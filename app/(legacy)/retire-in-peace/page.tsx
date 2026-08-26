import type { Metadata } from "next";
import Image from "next/image";
import WebinarForm from "@/components/WebinarForm";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title:
    "Retire In Peace Webinar | Reverse Mortgage as a Financial Planning Tool | Aug 25",
  description:
    "Free webinar: Retire In Peace — how to use a reverse mortgage as a financial planning tool. Retire without the stress of a mortgage payment and take advantage of your home's equity earlier in life. Tuesday, August 25 at 1:00 PM.",
  keywords: [
    "reverse mortgage webinar",
    "retire in peace",
    "reverse mortgage financial planning tool",
    "HECM reverse mortgage",
    "retire without a mortgage payment",
    "home equity retirement income",
    "reverse mortgage Raleigh NC",
    "Martin Mortgage Group reverse mortgage",
  ],
};

const details = [
  { label: "Date", value: "Tuesday, August 25" },
  { label: "Time", value: "1:00 PM ET" },
  { label: "Cost", value: "Free to attend" },
  { label: "Where", value: "Online — link sent after you register" },
];

const takeaways = [
  {
    title: "Know You Can Afford to Retire",
    description:
      "Walk through the math on what retirement actually costs you each month, and see where a reverse mortgage can close the gap between your income and your expenses.",
  },
  {
    title: "A Planning Tool, Not a Last Resort",
    description:
      "How financial planners use a reverse mortgage line of credit on purpose — to protect a portfolio in a down market, delay Social Security, or fund a Roth conversion.",
  },
  {
    title: "Retire Without a Mortgage Payment",
    description:
      "Eliminate your required monthly mortgage payment and free up cash flow for the bills, care costs and travel that actually make up your retirement.",
  },
  {
    title: "Use Your Equity Earlier in Life",
    description:
      "Why waiting until you're 80 to touch your equity may be the expensive choice, and how accessing it in your 60s can change the shape of your whole retirement.",
  },
  {
    title: "The Rules, Plainly Explained",
    description:
      "Who qualifies, what you still owe (taxes, insurance, upkeep), how the FHA insurance works, and what the non-recourse protection actually means.",
  },
  {
    title: "What It Means for Your Heirs",
    description:
      "What happens to the home and the loan balance when you pass, and the options your children have — straight answers, no sales pitch.",
  },
];

const myths = [
  {
    myth: "“The bank takes your house.”",
    truth:
      "You keep the title. You own the home just as you do today, and you stay in it as long as it's your primary residence and you keep up taxes, insurance and maintenance.",
  },
  {
    myth: "“It's only for people who are out of money.”",
    truth:
      "Some of the strongest uses come from homeowners with healthy portfolios who use it strategically to reduce sequence-of-returns risk and preserve investments.",
  },
  {
    myth: "“My kids will be stuck with the debt.”",
    truth:
      "These are non-recourse loans. Your heirs never owe more than the home is worth, and they keep any equity above the loan balance when the home is sold.",
  },
];

const faqItems = [
  {
    question: "Who should attend the Retire In Peace webinar?",
    answer:
      "Homeowners 62 and older who want to retire with confidence, anyone within a few years of retirement who is still carrying a mortgage payment, and adult children helping a parent plan. Financial advisors and real estate agents are welcome too.",
  },
  {
    question: "Is there a cost to attend?",
    answer:
      "No. The webinar is completely free and there's no obligation of any kind. Registering just lets us send you the link and a reminder before we go live.",
  },
  {
    question: "How long is the webinar?",
    answer:
      "Plan on about 45 minutes of material with time for questions at the end. You can submit questions live during the session.",
  },
  {
    question: "What exactly is a reverse mortgage?",
    answer:
      "It's a loan available to homeowners 62 and older that converts part of your home equity into cash, a line of credit, or monthly income — without a required monthly mortgage payment. You keep the title to your home, and the loan is repaid when the home is sold or is no longer your primary residence. You remain responsible for property taxes, homeowners insurance and upkeep.",
  },
  {
    question: "How can a reverse mortgage be a financial planning tool?",
    answer:
      "Used deliberately, it can eliminate a required mortgage payment, create a standby line of credit that grows over time, and give you a source of funds to draw from when markets are down so you're not forced to sell investments at a loss. We'll walk through several of these strategies on the webinar.",
  },
  {
    question: "Do I have to own my home free and clear?",
    answer:
      "No. Many people use a reverse mortgage specifically to pay off an existing mortgage and eliminate that monthly payment. You do need enough equity to cover the existing balance, which is one of the first things we can check for you.",
  },
  {
    question: "Will this be a sales pitch?",
    answer:
      "No. It's an education session — including the situations where a reverse mortgage is the wrong answer. If you want to talk about your own numbers afterward, we're glad to, but nothing on the webinar asks you to commit to anything.",
  },
  {
    question: "What if I can't make it on August 25?",
    answer:
      "Register anyway. We'll send a recording to everyone who signs up, so you can watch when it works for you. You can also call or text Michael at (919) 612-9978 with questions any time.",
  },
];

export default function RetireInPeacePage() {
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
                <span className="text-accent-200 text-sm font-medium uppercase tracking-widest">
                  Free Webinar · Tue Aug 25 · 1:00 PM
                </span>
              </span>
              <p className="text-accent-300 font-semibold uppercase tracking-widest text-sm mb-3">
                Know that you are financially able to retire
              </p>
              <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Retire In
                <span className="text-accent-300"> Peace</span>
              </h1>
              <p className="text-primary-100 text-lg leading-relaxed mb-8">
                How to use a reverse mortgage as a financial planning tool —
                retire without the stress of a mortgage payment or other bills,
                and take advantage of your home&apos;s equity earlier in life.
                One hour, plain English, no pressure.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {details.map((d) => (
                  <div key={d.label} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="text-primary-200 text-xs uppercase tracking-wide">
                        {d.label}
                      </div>
                      <div className="text-white font-medium text-sm mt-0.5">
                        {d.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="register" className="scroll-mt-28">
              <WebinarForm />
            </div>
          </div>
        </div>
      </section>

      {/* The promise */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl text-center">
          <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
            Why This Webinar
          </span>
          <h2 className="font-sans text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-6">
            Retirement Shouldn&apos;t Come With a Mortgage Payment
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Most people reach their sixties with the majority of their net worth
            sitting inside their house — and no plan for how to use it. So they
            keep making a mortgage payment out of a fixed income, put off the
            repairs, delay the trip, and hope the market cooperates.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            A reverse mortgage is one of the few tools that can change that math
            directly. On August 25 we&apos;ll show you exactly how it works, when
            it makes sense, and when it doesn&apos;t — so you can make the call
            with real numbers instead of headlines.
          </p>
        </div>
      </section>

      {/* What we'll cover */}
      <section className="section-padding bg-gray-50">
        <div className="container-max max-w-5xl">
          <div className="text-center mb-14">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
              What We&apos;ll Cover
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4">
              What You&apos;ll Walk Away With
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Six things you&apos;ll be able to explain to your spouse — or your
              kids — by the time we&apos;re done.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {takeaways.map((t) => (
              <div
                key={t.title}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
              >
                <div className="w-10 h-10 bg-accent-50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="font-bold text-gray-900 mb-2">{t.title}</div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Myths */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
              Straight Answers
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4">
              What You&apos;ve Probably Heard — and What&apos;s Actually True
            </h2>
          </div>
          <div className="space-y-5">
            {myths.map((m) => (
              <div
                key={m.myth}
                className="bg-gray-50 rounded-xl border border-gray-200 p-6 sm:p-7"
              >
                <div className="font-bold text-gray-900 mb-2 text-lg">
                  {m.myth}
                </div>
                <p className="text-gray-600 leading-relaxed">{m.truth}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host */}
      <section className="section-padding bg-gray-50">
        <div className="container-max max-w-3xl">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 sm:p-10 text-center">
            <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-5 relative bg-gray-100 ring-2 ring-accent-100">
              <Image
                src="/images/michael.png"
                alt="Michael Martin, Martin Mortgage Group"
                fill
                sizes="112px"
                className="object-cover object-top"
              />
            </div>
            <div className="text-accent-500 text-xs font-semibold uppercase tracking-wider mb-2">
              Your Host
            </div>
            <div className="text-2xl font-black text-gray-900">
              Michael Martin
            </div>
            <div className="text-gray-500 text-sm mt-1 mb-5">
              Martin Mortgage Group
            </div>
            <p className="text-gray-600 leading-relaxed">
              Michael has spent his career helping Triangle families make
              financing decisions they can live with for decades — not just
              close a loan. He&apos;ll walk through reverse mortgages the same
              way he does at his kitchen-table meetings: the numbers, the
              tradeoffs, and an honest answer about whether it fits your
              situation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-primary-800 py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans text-2xl md:text-3xl font-black text-white mb-4">
            Tuesday, August 25 · 1:00 PM
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Register free and we&apos;ll send you the webinar link, a reminder
            before we start, and the recording afterward in case you can&apos;t
            make it live.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#register" className="btn-accent text-sm px-8 py-3">
              Reserve My Free Seat
            </a>
            <a
              href="tel:9196129978"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Questions? Call (919) 612-9978
            </a>
          </div>
        </div>
      </section>

      <FAQ
        items={faqItems}
        title="Webinar FAQ"
        subtitle="Everything you need to know before Tuesday, August 25"
      />

      {/* Disclosure */}
      <section className="bg-white border-t border-gray-100 py-10">
        <div className="container-max max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400 text-xs leading-relaxed">
            This webinar is for educational purposes only and is not financial,
            tax or legal advice. A reverse mortgage is a loan that must be repaid
            when the last borrower dies, sells the home, or no longer occupies it
            as a principal residence. Borrowers remain responsible for property
            taxes, homeowners insurance, and property maintenance, and failure to
            meet those obligations may cause the loan to become due. Borrowers
            must be 62 or older and complete HUD-approved counseling. Not all
            applicants will qualify. Consult your financial advisor and family
            before making a decision.
          </p>
        </div>
      </section>
    </>
  );
}
