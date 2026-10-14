import type { Metadata } from "next";
import Image from "next/image";
import WebinarForm from "@/components/WebinarForm";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title:
    "Realtor Webinar | Get More Business and Help Your Sellers Move Faster | Oct 21",
  description:
    "Free webinar for real estate agents: win the listings stuck behind “we’d sell, but where would we go?” Buy-before-you-sell and bridge financing, non-contingent offers and faster listing timelines. Wednesday, October 21 at 11:00 AM ET on Zoom.",
  keywords: [
    "realtor webinar Raleigh",
    "real estate agent webinar",
    "buy before you sell for agents",
    "bridge loan realtor training",
    "help sellers move faster",
    "non-contingent offer financing",
    "move-up seller listings",
    "Martin Mortgage Group realtor webinar",
  ],
};

const details = [
  { label: "Date", value: "Wednesday, October 21" },
  { label: "Time", value: "11:00 AM ET" },
  { label: "Cost", value: "Free to attend" },
  { label: "Where", value: "Zoom — join link sent when you register" },
];

const takeaways = [
  {
    title: "Unlock the Listings Stuck at “Where Would We Go?”",
    description:
      "Plenty of homeowners want to sell and won't, because they can't buy their next home first. How to find them in your sphere and give them a plan that gets the sign in the yard.",
  },
  {
    title: "Buy First, Sell Second",
    description:
      "How bridge and buy-before-you-sell financing work in plain English, so your sellers can purchase the next home without a home-sale contingency.",
  },
  {
    title: "Turn Equity Into the Down Payment",
    description:
      "How sellers can put the equity in their current home to work before it closes — and what that does to their buying power on the next one.",
  },
  {
    title: "Write Offers That Win",
    description:
      "Why a contingent offer loses in a competitive market, and how to present your buyer-side clients as non-contingent when they still have a house to sell.",
  },
  {
    title: "Shorter, Cleaner Listings",
    description:
      "Listing a home after the seller has moved out: easier showings, better staging, no double move, and fewer deals falling apart over timing.",
  },
  {
    title: "What to Say at the Listing Appointment",
    description:
      "Simple language for bringing up financing with a seller who has to buy too — and when to loop in your lender so the plan is real before you list.",
  },
];

const audience = [
  {
    title: "Listing Agents",
    description:
      "You're hearing “we'd love to move, but…” from sellers who can't line up the next house first. Leave with a way to turn those conversations into signed listings.",
  },
  {
    title: "Buyer's Agents",
    description:
      "Your buyers keep losing to cleaner offers because they still own a home. Learn how to take the sale contingency off the table so they can compete.",
  },
  {
    title: "Team Leads & Brokers",
    description:
      "You want a repeatable, client-friendly answer to the move-up problem that your whole team can use at the kitchen table.",
  },
];

const faqItems = [
  {
    question: "Who should attend this webinar?",
    answer:
      "Licensed real estate agents at any level — listing agents, buyer's agents, team leads and brokers. If you work with homeowners who need to buy their next home before (or while) they sell, this session is built for you.",
  },
  {
    question: "Is there a cost to attend?",
    answer:
      "No. The webinar is free and there's no obligation of any kind.",
  },
  {
    question: "How do I join on October 21?",
    answer:
      "After you sign up on this page, you'll be taken to finish a quick Zoom registration. Zoom then emails you a confirmation with your personal join link and a calendar invite. At 11:00 AM ET on Wednesday, October 21, click that link to join.",
  },
  {
    question: "I didn't get the Zoom confirmation email. What should I do?",
    answer:
      "Check your spam or promotions folder for an email from Zoom first. If it isn't there, make sure you completed the Zoom registration step after signing up here, or call or text Michael at (919) 612-9978 and we'll get you sorted.",
  },
  {
    question: "Will this be a sales pitch?",
    answer:
      "It's an education session for agents. You'll leave with ideas you can use whichever lender your clients choose. If you want to talk through a specific seller's situation afterward, we're glad to.",
  },
  {
    question: "What if I can't make it live?",
    answer:
      "Register anyway — we'll follow up with everyone who signs up. You can also call or text Michael at (919) 612-9978 with a client scenario any time.",
  },
];

export default function RealtorWebinarPage() {
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
                  Free Webinar · Wed Oct 21 · 11:00 AM ET
                </span>
              </span>
              <p className="text-accent-300 font-semibold uppercase tracking-widest text-sm mb-3">
                For real estate agents
              </p>
              <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Get More Business and
                <span className="text-accent-300">
                  {" "}
                  Help Your Sellers Move Faster
                </span>
              </h1>
              <p className="text-primary-100 text-lg leading-relaxed mb-8">
                Your next listings are sitting with homeowners who would sell
                tomorrow if they could buy their next home first. Learn how to
                give them that path — and win more listings and stronger
                offers because of it.
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
                webinarName="Realtor Webinar — Get More Business and Help Your Sellers Move Faster"
                registrationDate="Oct 21"
                zoomRegistrationUrl="https://fairwaymc.zoom.us/webinar/register/WN_jNiyDdTXTCuAEr96VIxqBA"
                showBrokerage
                showPrivacyNote={false}
                subheadline="Free for agents. Takes about 20 seconds."
                confirmation="See you Wednesday, October 21 at 11:00 AM ET."
              />
            </div>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl text-center">
          <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
            Why This Webinar
          </span>
          <h2 className="font-sans text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-6">
            The Listing You&apos;re Missing Is Stuck on Timing
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            The seller wants to move. They&apos;ve outgrown the house, or the
            job changed, or the kids are gone. But they can&apos;t buy without
            selling first, they don&apos;t want to move twice, and a contingent
            offer won&apos;t win the home they want. So they wait — and the
            listing waits with them.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            On Wednesday, October 21 we&apos;ll show you how to solve the
            timing problem with financing, so your sellers can buy first, list
            on their schedule, and you can take the listing now instead of
            &ldquo;sometime next year.&rdquo;
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
              Practical ideas you can use at your very next listing
              appointment.
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
              Built for Agents Who Want More Listings
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
              Michael partners with Triangle agents every week on move-up
              buyers, relocations and sellers who need to buy first. He&apos;ll
              walk through how these deals actually come together, the way
              he&apos;d explain it to your client at the kitchen table — so you
              can explain it too.
            </p>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-primary-800 py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans text-2xl md:text-3xl font-black text-white mb-4">
            Wednesday, October 21 · 11:00 AM ET
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Register free, confirm your seat on Zoom, and your personal join
            link and calendar invite land in your inbox.
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
        subtitle="Everything you need to know before Wednesday, October 21"
      />

      {/* Disclosure */}
      <section className="bg-white border-t border-gray-100 py-10">
        <div className="container-max max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400 text-xs leading-relaxed">
            This webinar is intended for real estate professionals and is for
            educational purposes only. It is not a commitment to lend. Loan
            program guidelines, rates and qualification requirements are
            subject to change without notice and vary by property, borrower
            and product. Not all applicants will qualify. Any figures discussed
            are illustrative examples only.
          </p>
        </div>
      </section>
    </>
  );
}
