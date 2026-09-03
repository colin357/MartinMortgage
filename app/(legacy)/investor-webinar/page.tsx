import type { Metadata } from "next";
import Image from "next/image";
import WebinarForm from "@/components/WebinarForm";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title:
    "Real Estate Investor Webinar | Financing Your Next Rental | Sep 10, 5:30 PM",
  description:
    "Free investor webinar: how to finance your next rental property in the Triangle. DSCR loans, down payment and reserve requirements, cash-out refinances and portfolio strategy. Thursday, September 10 at 5:30 PM ET.",
  keywords: [
    "real estate investor webinar Raleigh",
    "DSCR loan webinar",
    "investment property financing webinar",
    "rental property loans Raleigh NC",
    "BRRRR financing North Carolina",
    "cash-out refinance investment property",
    "Triangle real estate investing",
    "Martin Mortgage Group investor webinar",
  ],
};

const details = [
  { label: "Date", value: "Thursday, September 10" },
  { label: "Time", value: "5:30 PM ET" },
  { label: "Cost", value: "Free to attend" },
  { label: "Where", value: "Online — link sent after you register" },
];

const takeaways = [
  {
    title: "Qualify on the Property, Not Your Tax Returns",
    description:
      "How DSCR loans work in practice — what ratio you need, how rents are documented, and why write-offs that sink a conventional approval don't matter here.",
  },
  {
    title: "What You Actually Need to Close",
    description:
      "Real numbers on down payment, reserves and credit for 1–4 unit investment properties, and the levers that move each one.",
  },
  {
    title: "Financing the BRRRR",
    description:
      "How the purchase, the renovation money and the refinance fit together — including the seasoning rules that decide when you can pull your capital back out.",
  },
  {
    title: "Turning Equity Into the Next Door",
    description:
      "Cash-out refinances, HELOCs and bridge financing on property you already own, and how to weigh the cost against the return on the next deal.",
  },
  {
    title: "Scaling Past the Ten-Loan Wall",
    description:
      "What changes after four financed properties, where conventional limits stop, and which portfolio and non-QM products pick up from there.",
  },
  {
    title: "The Triangle Right Now",
    description:
      "What we're seeing on rents, rates and appraisals in Raleigh, Durham and Chapel Hill — and how investors are structuring offers around it.",
  },
];

const audience = [
  {
    title: "First-Time Investors",
    description:
      "You've owned a home, you're ready to buy a rental, and you want to know what the loan side actually looks like before you write an offer.",
  },
  {
    title: "Two to Ten Doors",
    description:
      "You're past the first deal and starting to hit conventional limits, reserve requirements and DTI ceilings. This is where DSCR and portfolio products come in.",
  },
  {
    title: "Agents & Advisors",
    description:
      "You work with investor clients and want to speak fluently about what will and won't get financed, so you can price and structure deals with confidence.",
  },
];

const faqItems = [
  {
    question: "Who should attend this investor webinar?",
    answer:
      "Anyone buying or holding investment real estate in the Triangle — from a first rental purchase to a growing portfolio. Real estate agents, CPAs and financial advisors who work with investor clients are welcome as well.",
  },
  {
    question: "Is there a cost to attend?",
    answer:
      "No. The webinar is free and there's no obligation of any kind. Registering just lets us send you the link and a reminder before we go live.",
  },
  {
    question: "How long is the webinar?",
    answer:
      "Plan on about 45 minutes of material with time for questions at the end. You can submit questions live during the session.",
  },
  {
    question: "What is a DSCR loan, and will you cover it?",
    answer:
      "Yes — it's a large part of the session. A DSCR loan qualifies on the property's rental income rather than your personal income. If the rent covers the payment at the required ratio, the deal can work regardless of what your tax returns show. We'll walk through how the ratio is calculated and what it takes to hit it.",
  },
  {
    question: "I already own several rentals. Is this too basic for me?",
    answer:
      "No. A good portion of the hour is aimed at investors who have run into conventional financing limits — reserves, DTI, the financed-property count — and need to know what the next products look like. Bring your scenario and ask about it live.",
  },
  {
    question: "Will this be a sales pitch?",
    answer:
      "It's an education session, including the cases where borrowing is the wrong move. If you want to talk through your own numbers afterward we're glad to, but nothing on the webinar asks you to commit to anything.",
  },
  {
    question: "What if I can't make it on September 10?",
    answer:
      "Register anyway. We'll send the recording to everyone who signs up, so you can watch when it works for you. You can also call or text Michael at (919) 612-9978 with questions any time.",
  },
];

export default function InvestorWebinarPage() {
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
                  Free Webinar · Thu Sep 10 · 5:30 PM
                </span>
              </span>
              <p className="text-accent-300 font-semibold uppercase tracking-widest text-sm mb-3">
                For Triangle real estate investors
              </p>
              <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Financing Your
                <span className="text-accent-300"> Next Rental</span>
              </h1>
              <p className="text-primary-100 text-lg leading-relaxed mb-8">
                DSCR loans, down payment and reserve requirements, cash-out
                refinances, and how to keep qualifying once conventional
                financing runs out. One hour, real numbers, no pressure.
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
              <WebinarForm
                webinarName="Investor Webinar — Financing Your Next Rental"
                registrationDate="Sep 10"
                subheadline="Free to attend. Takes about 20 seconds."
                confirmation="We’ll email you the webinar link and send a reminder before we go live. See you Thursday, September 10 at 5:30 PM."
              />
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
            Most Investors Stall on Financing, Not on Deals
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            The property pencils. The rent is there. Then the loan side gets
            complicated — the tax returns show a loss, the reserves come up
            short, or the fourth financed property changes every rule you
            learned on the first three.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            On Thursday, September 10 we&apos;ll go through the financing
            structures investors are actually using in the Triangle right now,
            what each one requires, and how to line up your next purchase before
            you&apos;re under contract with a clock running.
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
              Six things you&apos;ll be able to run the numbers on yourself by
              the time we&apos;re done.
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

      {/* Who it's for */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
              Who It&apos;s For
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4">
              Come Whether You Own One Door or Twenty
            </h2>
          </div>
          <div className="space-y-5">
            {audience.map((a) => (
              <div
                key={a.title}
                className="bg-gray-50 rounded-xl border border-gray-200 p-6 sm:p-7"
              >
                <div className="font-bold text-gray-900 mb-2 text-lg">
                  {a.title}
                </div>
                <p className="text-gray-600 leading-relaxed">{a.description}</p>
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
              Michael works with Triangle investors from their first rental
              through full portfolios, structuring financing around the return
              rather than the other way around. He&apos;ll walk through these
              loans the way he does at the kitchen table: the numbers, the
              tradeoffs, and a straight answer on whether the deal works.
            </p>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-primary-800 py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans text-2xl md:text-3xl font-black text-white mb-4">
            Thursday, September 10 · 5:30 PM
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
        subtitle="Everything you need to know before Thursday, September 10"
      />

      {/* Disclosure */}
      <section className="bg-white border-t border-gray-100 py-10">
        <div className="container-max max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400 text-xs leading-relaxed">
            This webinar is for educational purposes only and is not financial,
            tax, legal or investment advice. Loan program guidelines, rates and
            qualification requirements are subject to change without notice and
            vary by property, borrower and product. Not all applicants will
            qualify. Any figures discussed are illustrative examples, not an
            offer or commitment to lend. Consult your own tax and legal advisors
            before making an investment decision.
          </p>
        </div>
      </section>
    </>
  );
}
