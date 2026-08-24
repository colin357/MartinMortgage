"use client";

import { useState } from "react";

const yearsSellingOptions = [
  "Less than 1 year",
  "1-2 years",
  "3-5 years",
  "6-10 years",
  "10+ years",
];

const transactionsOptions = ["0-2", "3-5", "6-10", "11-20", "21-30", "31+"];

const buyerSideOptions = ["0", "1-2", "3-5", "6-10", "11+"];

const volumeOptions = [
  "Under $1M",
  "$1M - $2.5M",
  "$2.5M - $5M",
  "$5M - $10M",
  "$10M - $20M",
  "$20M+",
];

const businessOptions = [
  "I'm actively growing and want to increase production",
  "I'm established but want to become more efficient",
  "I'm a high producer looking for new ways to scale",
  "I'm rebuilding or restarting my business",
  "I'm relatively new and still building my business",
];

const aiComfortOptions = [
  {
    value: "Brand new",
    label: "Brand new",
    description:
      "I've never intentionally used an AI tool, or I've never even downloaded one.",
  },
  {
    value: "Experimenting",
    label: "Experimenting",
    description:
      "I've created an account or tried an AI tool a few times, but I don't use AI regularly in my business.",
  },
  {
    value: "Regular User",
    label: "Regular User",
    description:
      "I use AI several times a week for writing, brainstorming, research, marketing, or other everyday business tasks.",
  },
  {
    value: "Advanced User",
    label: "Advanced User",
    description:
      "I use AI multiple times per day and have built custom GPTs, Projects, Gems, Agents, AI assistants, automations, or repeatable workflows.",
  },
  {
    value: "Power User",
    label: "Power User",
    description:
      "AI is deeply integrated into how I work. I regularly use multiple AI platforms, build advanced workflows or agents, and I'm comfortable helping others use AI.",
  },
];

export default function AiLabApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          loanType: "AI Agent Lab 101 — Sept 8 Application",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setIsComplete(true);
    } catch {
      setIsSubmitting(false);
      setError(
        "Something went wrong. Please try again or call us at (919) 612-9978.",
      );
    }
  };

  const inputClass =
    "w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent disabled:opacity-50";
  const labelClass = "block text-xs font-semibold text-gray-700 mb-1.5";
  const legendClass =
    "block text-sm font-bold text-gray-900 mb-3";

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
          Apply For A Spot
        </h2>
        <p className="text-gray-300 text-sm">
          Limited to 16 active real estate professionals. Takes about 2 minutes.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {isComplete ? (
          <div className="px-6 py-12 text-center">
            <div className="w-14 h-14 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg
                className="w-7 h-7 text-accent-600"
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
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3">
              Application received!
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
              Thanks for applying. We review every application and only 16 seats
              are available — we&apos;ll be in touch shortly to confirm your
              spot and send you everything you need before Tuesday, September 8.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Contact */}
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className={labelClass}>
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    placeholder="Jordan"
                    disabled={isSubmitting}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelClass}>
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    autoComplete="family-name"
                    placeholder="Reyes"
                    disabled={isSubmitting}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@email.com"
                    disabled={isSubmitting}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Cell phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="(919) 555-1234"
                    disabled={isSubmitting}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="brokerage" className={labelClass}>
                  Brokerage / Real estate company
                </label>
                <input
                  id="brokerage"
                  name="brokerage"
                  type="text"
                  required
                  placeholder="e.g. eXp Realty"
                  disabled={isSubmitting}
                  className={inputClass}
                />
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Years selling */}
            <fieldset disabled={isSubmitting}>
              <legend className={legendClass}>
                How many years have you been actively selling real estate?
              </legend>
              <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                {yearsSellingOptions.map((opt) => (
                  <label
                    key={opt}
                    className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="yearsSellingRealEstate"
                      value={opt}
                      required
                      className="h-4 w-4 border-gray-300 text-accent-500 focus:ring-accent-400"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Transactions closed */}
            <fieldset disabled={isSubmitting}>
              <legend className={legendClass}>
                Approximately how many transactions have you personally closed
                in the last 12 months?
              </legend>
              <div className="grid sm:grid-cols-3 gap-x-4 gap-y-2">
                {transactionsOptions.map((opt) => (
                  <label
                    key={opt}
                    className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="transactionsLast12Months"
                      value={opt}
                      required
                      className="h-4 w-4 border-gray-300 text-accent-500 focus:ring-accent-400"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Buyer side */}
            <fieldset disabled={isSubmitting}>
              <legend className={legendClass}>
                Approximately how many of those transactions were buyer side?
              </legend>
              <div className="grid sm:grid-cols-3 gap-x-4 gap-y-2">
                {buyerSideOptions.map((opt) => (
                  <label
                    key={opt}
                    className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="buyerSideTransactions"
                      value={opt}
                      required
                      className="h-4 w-4 border-gray-300 text-accent-500 focus:ring-accent-400"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Volume */}
            <fieldset disabled={isSubmitting}>
              <legend className={legendClass}>
                Approximately what is your 2026 YTD closed sales volume?
              </legend>
              <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                {volumeOptions.map((opt) => (
                  <label
                    key={opt}
                    className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="ytdClosedSalesVolume2026"
                      value={opt}
                      required
                      className="h-4 w-4 border-gray-300 text-accent-500 focus:ring-accent-400"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Business description */}
            <fieldset disabled={isSubmitting}>
              <legend className={legendClass}>
                How would you describe your current real estate business?
              </legend>
              <div className="space-y-2">
                {businessOptions.map((opt) => (
                  <label
                    key={opt}
                    className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="businessDescription"
                      value={opt}
                      required
                      className="mt-0.5 h-4 w-4 shrink-0 border-gray-300 text-accent-500 focus:ring-accent-400"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* AI comfort */}
            <fieldset disabled={isSubmitting}>
              <legend className={legendClass}>
                How would you rate your current comfort level using AI?
              </legend>
              <div className="space-y-3">
                {aiComfortOptions.map((opt) => (
                  <label
                    key={opt.value}
                    className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="aiComfortLevel"
                      value={opt.value}
                      required
                      className="mt-0.5 h-4 w-4 shrink-0 border-gray-300 text-accent-500 focus:ring-accent-400"
                    />
                    <span>
                      <span className="font-semibold text-gray-900">
                        {opt.label}
                      </span>{" "}
                      &mdash; {opt.description}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-accent w-full text-sm py-3 disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Apply For A Spot"}
            </button>

            <p className="text-center text-xs text-gray-400">
              Applying does not guarantee a seat. We&apos;ll confirm by phone or
              email.
            </p>
          </form>
        )}
      </div>

      <p className="text-center text-xs text-gray-400 mt-4">
        We&apos;ll only use your info to review your application and send event
        details.
      </p>
    </div>
  );
}
