import type { Metadata } from "next";
import AiLabApplicationForm from "@/components/AiLabApplicationForm";
import AiLabHeroBackground from "@/components/AiLabHeroBackground";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title:
    "AI Agent Lab 101 | Build Your AI Toolkit | Hands-On AI Workshop for Realtors",
  description:
    "Apply for AI Agent Lab 101 — a hands-on AI workshop for active real estate professionals. Tuesday, September 8, 11:30 AM – 1:30 PM in Raleigh, NC. Limited to 16 agents. Lunch provided. Laptop required.",
  keywords: [
    "AI Agent Lab",
    "AI workshop for realtors Raleigh",
    "AI training real estate agents",
    "ChatGPT for real estate agents",
    "Claude AI real estate",
    "AI tools for realtors",
    "Raleigh realtor event",
    "Martin Mortgage Group event",
    "real estate AI toolkit",
  ],
  openGraph: {
    title: "AI Agent Lab 101 | Build Your AI Toolkit",
    description:
      "A hands-on AI workshop for active real estate professionals. 16 agents only. Tuesday, September 8 in Raleigh, NC. Application required.",
  },
};

const details = [
  { label: "Date", value: "Tuesday, September 8" },
  { label: "Time", value: "11:30 AM – 1:30 PM" },
  { label: "Location", value: "Raleigh, NC" },
  { label: "Seats", value: "16 agents only" },
];

const stats = [
  {
    value: "16",
    label: "Agents Only",
    sub: "Small enough for real help",
  },
  {
    value: "2",
    label: "Hours Hands-On",
    sub: "Not a presentation",
  },
  {
    value: "Lunch",
    label: "Provided",
    sub: "Come hungry, leave capable",
  },
];

const tools = [
  "ChatGPT",
  "Claude",
  "Gemini",
  "Copilot",
  "Grok",
  "& more",
];

const questions = [
  "Which AI tools should you actually use?",
  "What's worth paying for vs. what's free?",
  "How to get better answers every single time",
  "Real estate use cases that save time & win business",
  "What you should NEVER put into AI",
];

const outcomes = [
  {
    title: "Learn",
    description:
      "Get a clear, jargon-free picture of what today's AI platforms actually do — and where each one is strongest for a real estate business.",
  },
  {
    title: "Apply",
    description:
      "Open your laptop and build it live. You'll leave with prompts, workflows and tools set up in your own accounts, not notes you never use.",
  },
  {
    title: "Save Time",
    description:
      "Cut the hours you spend on listing copy, follow-up, market research, CMAs, social content and admin down to minutes.",
  },
  {
    title: "Grow Your Business",
    description:
      "Use AI where it moves the needle — more conversations, faster response times, sharper presentations and better client experience.",
  },
];

const faqItems = [
  {
    question: "Who is AI Agent Lab 101 for?",
    answer:
      "Active real estate professionals. Because seats are limited to 16 and the session is hands-on, we ask a few questions about your production and your current AI experience so we can group the room well and tailor the workshop. Every experience level is welcome — from agents who have never opened an AI tool to power users building their own agents.",
  },
  {
    question: "Why is an application required?",
    answer:
      "There are only 16 seats. The workshop is built so that you get real, personal help with your own business — that only works with a small room. The application lets us confirm you're actively selling and understand where you are with AI before we finalize the group.",
  },
  {
    question: "Do I need to bring anything?",
    answer:
      "Yes — a laptop is required, and bring your phone too. This is a working session: you'll be setting up accounts, writing prompts and building workflows during the two hours. Lunch is provided.",
  },
  {
    question: "Do I need any AI experience to attend?",
    answer:
      "None at all. If you've never intentionally used an AI tool, you're exactly who this was designed for. If you're already advanced, tell us on the application and we'll make sure you're pushed past the basics.",
  },
  {
    question: "Which AI tools will we cover?",
    answer:
      "We'll work with today's top platforms — ChatGPT, Claude, Gemini, Copilot, Grok and a few others — and talk honestly about which ones are worth paying for, which free versions are good enough, and which ones to skip.",
  },
  {
    question: "Is it a sales pitch for a mortgage product?",
    answer:
      "No. It's a working AI lab hosted by Martin Mortgage Group as a resource for the agents we partner with. You'll spend the two hours building your AI toolkit.",
  },
  {
    question: "What if I apply and can't make it?",
    answer:
      "Just let us know as early as you can so we can release your seat to another agent. Call or text Michael at (919) 612-9978.",
  },
];

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  name: "AI Agent Lab 101 — Build Your AI Toolkit",
  description:
    "A hands-on AI workshop for active real estate professionals. Learn which AI tools to use, what's worth paying for, how to get better answers, real estate use cases that save time, and what you should never put into AI. Limited to 16 agents. Lunch provided. Laptop required.",
  startDate: "2026-09-08T11:30:00-04:00",
  endDate: "2026-09-08T13:30:00-04:00",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  maximumAttendeeCapacity: 16,
  location: {
    "@type": "Place",
    name: "Martin Mortgage Group",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7721 Six Forks Road, Suite 120",
      addressLocality: "Raleigh",
      addressRegion: "NC",
      postalCode: "27615",
      addressCountry: "US",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Martin Mortgage Group",
    url: "https://martinmortgagegroup.com",
  },
  url: "https://martinmortgagegroup.com/ai-agent-lab",
};

export default function AiAgentLabPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-gray-950 overflow-hidden">
        <AiLabHeroBackground />

        <div className="relative container-max px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-400/20 rounded-full mb-6">
                <span className="text-accent-200 text-xs font-bold uppercase tracking-widest">
                  Application Required · 16 Seats
                </span>
              </span>

              <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-4">
                AI <span className="text-accent-400">AGENT LAB</span>
                <span className="ml-3 inline-block px-3 py-0.5 border-2 border-accent-400 text-accent-400 rounded-lg align-middle text-2xl md:text-3xl">
                  101
                </span>
              </h1>

              <p className="inline-block bg-accent-400 text-gray-950 font-black text-lg md:text-xl px-4 py-1 rounded mb-5 uppercase tracking-tight">
                Build Your AI Toolkit
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                A hands-on workshop for{" "}
                <span className="text-white font-semibold">
                  active real estate professionals
                </span>
                . Stop hearing about AI — start using it.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Two hours, sixteen agents, laptops open. You won&apos;t sit
                through a slideshow. You&apos;ll leave with tools set up, prompts
                that work and a real AI workflow for your business.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {details.map((d) => (
                  <div key={d.label} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <div className="text-gray-500 text-xs uppercase tracking-wide">
                        {d.label}
                      </div>
                      <div className="text-white font-medium text-sm mt-0.5">
                        {d.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a href="#apply" className="btn-accent text-sm px-8 py-3">
                  Apply For A Spot
                </a>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-400/40 text-accent-200 text-xs font-bold uppercase tracking-wider">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Laptop Required
                </span>
              </div>
            </div>

            <div id="apply" className="scroll-mt-28">
              <AiLabApplicationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-gray-950 border-t border-white/10 py-12">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-accent-400/30 bg-white/5 px-6 py-6 text-center"
              >
                <div className="text-4xl font-black text-white">{s.value}</div>
                <div className="text-accent-400 font-bold uppercase tracking-widest text-xs mt-2">
                  {s.label}
                </div>
                <div className="text-gray-400 text-xs mt-2">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we'll cover */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
                The Tools
              </span>
              <h2 className="font-sans text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4">
                We&apos;ll Dive Into Today&apos;s Top AI Tools
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Not a tour of every AI app on the internet — the handful that
                actually earn a place in a real estate business, and how to tell
                which one to reach for.
              </p>
              <div className="flex flex-wrap gap-3">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="px-5 py-2.5 rounded-full bg-gray-50 border border-gray-200 text-gray-800 font-semibold text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-950 rounded-2xl p-8 shadow-xl">
              <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">
                The Questions We Answer
              </span>
              <ul className="mt-6 space-y-4">
                {questions.map((q) => (
                  <li key={q} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-accent-400 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-gray-950"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-200 text-sm leading-relaxed">
                      {q}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding bg-gray-50">
        <div className="container-max max-w-5xl">
          <div className="text-center mb-14">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
              Work Smarter, Not Harder
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4">
              Learn. Apply. Save Time. Grow Your Business.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Four outcomes, two hours. Here&apos;s what you walk out with.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {outcomes.map((o, i) => (
              <div
                key={o.title}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-accent-50 rounded-full flex items-center justify-center text-accent-600 font-black text-sm">
                    {i + 1}
                  </div>
                  <div className="font-black text-gray-900 text-lg">
                    {o.title}
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {o.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="rounded-2xl border-2 border-accent-200 bg-accent-50/40 p-8 md:p-10">
            <h2 className="font-sans text-2xl md:text-3xl font-black text-gray-900 mb-6">
              The Details
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="text-gray-500 uppercase tracking-wide text-xs font-semibold mb-1">
                  When
                </div>
                <div className="text-gray-900 font-medium">
                  Tuesday, September 8 · 11:30 AM – 1:30 PM
                </div>
              </div>
              <div>
                <div className="text-gray-500 uppercase tracking-wide text-xs font-semibold mb-1">
                  Where
                </div>
                <div className="text-gray-900 font-medium">
                  Martin Mortgage Group
                  <br />
                  7721 Six Forks Road, Suite 120
                  <br />
                  Raleigh, NC 27615
                </div>
              </div>
              <div>
                <div className="text-gray-500 uppercase tracking-wide text-xs font-semibold mb-1">
                  Bring
                </div>
                <div className="text-gray-900 font-medium">
                  Your laptop and your phone. Lunch is on us.
                </div>
              </div>
              <div>
                <div className="text-gray-500 uppercase tracking-wide text-xs font-semibold mb-1">
                  Who
                </div>
                <div className="text-gray-900 font-medium">
                  16 active real estate professionals. Application required.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-gray-950 py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent-400 font-bold uppercase tracking-widest text-xs mb-3">
            Stop hearing about AI. Start using it.
          </p>
          <h2 className="font-sans text-2xl md:text-3xl font-black text-white mb-4">
            Tuesday, September 8 · 11:30 AM – 1:30 PM
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Only 16 seats, and every one is reviewed. Apply now and we&apos;ll
            confirm your spot along with everything you need to bring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#apply" className="btn-accent text-sm px-8 py-3">
              Apply For A Spot
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
        title="AI Agent Lab FAQ"
        subtitle="Everything you need to know before Tuesday, September 8"
      />
    </>
  );
}
