import type { Metadata } from "next";
import Image from "next/image";
import RegistrationForm from "@/components/RegistrationForm";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title:
    "RRAR Agent Power Panel | How to Compete Like a Top Agent | Register Free",
  description:
    "Register for the RRAR Agent Power Panel — “How to Compete Like a Top Agent,” Monday August 18, 10:00–11:30 AM. Jenny Hensley, April Stephens and Amir Hunter, moderated by Michael Martin of Martin Mortgage Group.",
  keywords: [
    "RRAR Agent Power Panel",
    "Raleigh realtor event",
    "how to compete like a top agent",
    "Raleigh Regional Association of Realtors panel",
    "realtor listing presentation training Raleigh",
    "Michael Martin Martin Mortgage Group",
    "real estate agent event Raleigh NC",
  ],
};

const panelists = [
  {
    name: "Jenny Hensley",
    role: "Panelist",
    company: "Luxe Residential",
    initials: "JH",
  },
  {
    name: "April Stephens",
    role: "Panelist",
    company: "The April Stephens Team",
    initials: "AS",
  },
  {
    name: "Amir Hunter",
    role: "Panelist",
    company: "eXp Realty",
    initials: "AH",
  },
];

const takeaways = [
  {
    title: "Win the Listing Appointment",
    description:
      "How top producers prepare for, run and follow up on a listing presentation — and what separates the agent who gets signed from the one who gets thanked.",
  },
  {
    title: "The Costly Mistakes",
    description:
      "The specific missteps that quietly cost agents listings, straight from producers who see them happen every week.",
  },
  {
    title: "Pricing and Objections",
    description:
      "How to hold a pricing conversation with a seller who has a number in mind, and answer the objections that come up every time.",
  },
  {
    title: "Competing Without a Big Budget",
    description:
      "What actually moves the needle when you can't outspend the team down the street — and what to stop paying for.",
  },
];

const details = [
  { label: "Date", value: "Monday, August 18" },
  { label: "Time", value: "10:00 – 11:30 AM" },
  { label: "Cost", value: "Free to attend" },
  { label: "Who It's For", value: "Licensed agents at any level" },
];

const faqItems = [
  {
    question: "Who should attend the RRAR Agent Power Panel?",
    answer:
      "Any licensed real estate agent who wants to win more listings — whether you're in your first year or you've been producing for a decade. The panel is built around what top producers actually do differently, so there's something to take back to your next appointment regardless of experience level.",
  },
  {
    question: "Is there a cost to attend?",
    answer:
      "No. The panel is free for agents. Registration just helps us plan seating and send you the location details and a reminder before the event.",
  },
  {
    question: "Who is on the panel?",
    answer:
      "Jenny Hensley of Luxe Residential, April Stephens of The April Stephens Team, and Amir Hunter of eXp Realty. Michael Martin of Martin Mortgage Group is moderating.",
  },
  {
    question: "What does “every listing is an interview” mean?",
    answer:
      "It's the theme of the panel: sellers are evaluating you from the first touch, not just during the presentation. The panelists will walk through how they treat every interaction — the pre-appointment research, the walkthrough, the follow-up — as part of the interview for the listing.",
  },
  {
    question: "Will there be time for questions?",
    answer:
      "Yes. There's time for audience questions, and you can submit one during registration so the moderator can work it into the discussion.",
  },
  {
    question: "What if I register and can't make it?",
    answer:
      "No problem — just let us know. You can call or text Michael at (919) 612-9978 and we'll make your seat available to another agent.",
  },
];

export default function RrarPanelPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-400/20 rounded-full mb-6">
                <span className="text-accent-200 text-sm font-medium uppercase tracking-widest">
                  RRAR Agent Power Panel · Mon Aug 18
                </span>
              </span>
              <p className="text-accent-300 font-semibold uppercase tracking-widest text-sm mb-3">
                Every listing is an interview
              </p>
              <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                How to Compete Like a
                <span className="text-accent-300"> Top Agent</span>
              </h1>
              <p className="text-navy-100 text-lg leading-relaxed mb-8">
                What top producers are doing to win more listings — and the
                costly mistakes that make other agents lose them. Three of the
                Triangle&apos;s highest-performing agents, moderated by Michael
                Martin. Free for agents, 90 minutes, no fluff.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {details.map((d) => (
                  <div key={d.label} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="text-navy-200 text-xs uppercase tracking-wide">{d.label}</div>
                      <div className="text-white font-medium text-sm mt-0.5">{d.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="register" className="scroll-mt-28">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </section>

      {/* The panel */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
              Your Panel
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4">
              Agents Who Are Actually Winning Listings
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Three top-producing Triangle agents share what&apos;s working right
              now, moderated by Michael Martin of Martin Mortgage Group.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {panelists.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-navy-700 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-black text-xl">{p.initials}</span>
                </div>
                <div className="font-bold text-gray-900">{p.name}</div>
                <div className="text-accent-500 text-xs font-semibold uppercase tracking-wider mt-1">
                  {p.role}
                </div>
                <div className="text-gray-500 text-sm mt-2">{p.company}</div>
              </div>
            ))}

            <div className="bg-white rounded-xl border-2 border-accent-200 shadow-sm p-6 text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 relative bg-navy-700">
                <Image
                  src="/images/michael-headshot.png"
                  alt="Michael Martin, Martin Mortgage Group"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div className="font-bold text-gray-900">Michael Martin</div>
              <div className="text-accent-500 text-xs font-semibold uppercase tracking-wider mt-1">
                Moderator
              </div>
              <div className="text-gray-500 text-sm mt-2">Martin Mortgage Group</div>
            </div>
          </div>
        </div>
      </section>

      {/* What you'll walk away with */}
      <section className="section-padding bg-gray-50">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
              What We&apos;ll Cover
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4">
              What You&apos;ll Walk Away With
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
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
                <p className="text-gray-600 text-sm leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-navy-800 py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans text-2xl md:text-3xl font-black text-white mb-4">
            Monday, August 18 · 10:00 – 11:30 AM
          </h2>
          <p className="text-navy-100 mb-8 max-w-xl mx-auto">
            Seats are limited. Register now and we&apos;ll send you the location
            details plus a reminder before the panel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#register" className="btn-primary text-sm px-8 py-3">
              Register Free
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
        title="Panel FAQ"
        subtitle="Everything you need to know before Monday, August 18"
      />
    </>
  );
}
