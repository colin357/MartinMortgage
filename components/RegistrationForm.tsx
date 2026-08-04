"use client";

import { useState } from "react";

const experienceOptions = [
  "Less than 1 year",
  "1–3 years",
  "3–10 years",
  "10+ years",
];

export default function RegistrationForm() {
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
          loanType: "RRAR Agent Power Panel — Aug 18 Registration",
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
    "w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent disabled:opacity-50";
  const labelClass = "block text-xs font-semibold text-gray-700 mb-1.5";

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
          Save Your Seat
        </h2>
        <p className="text-navy-200 text-sm">
          Free for agents. Takes about 30 seconds.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        {isComplete ? (
          <div className="px-6 py-12 text-center">
            <div className="w-14 h-14 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3">
              You&apos;re registered!
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
              We&apos;ll send you a confirmation with the location details and a
              reminder before the panel. See you Monday, August 18 at 10:00 AM.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
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

            <div>
              <label htmlFor="email" className={labelClass}>
                Email
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
                Mobile phone
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

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="brokerage" className={labelClass}>
                  Brokerage
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
              <div>
                <label htmlFor="experience" className={labelClass}>
                  Years in real estate
                </label>
                <select
                  id="experience"
                  name="experience"
                  defaultValue=""
                  disabled={isSubmitting}
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  {experienceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="panelQuestion" className={labelClass}>
                A question for the panel{" "}
                <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <textarea
                id="panelQuestion"
                name="panelQuestion"
                rows={3}
                placeholder="What would you want the panel to answer?"
                disabled={isSubmitting}
                className={`${inputClass} resize-none`}
              />
            </div>

            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full text-sm py-3 disabled:opacity-60"
            >
              {isSubmitting ? "Registering..." : "Register Free"}
            </button>
          </form>
        )}
      </div>

      <p className="text-center text-xs text-navy-200 mt-4">
        We&apos;ll only use your info to send event details and a reminder.
      </p>
    </div>
  );
}
