"use client";

import { useState } from "react";
import { zoomWebinars, type ZoomWebinarKey } from "@/lib/webinars";

interface WebinarFormProps {
  /** Written to the lead record and the registration sheet. */
  webinarName?: string;
  /** Short date stamp stored alongside the registration, e.g. "Sep 10". */
  registrationDate?: string;
  headline?: string;
  subheadline?: string;
  /** Sentence under "You're registered!" — say when the session runs. */
  confirmation?: string;
  submitLabel?: string;
  /**
   * Also register the attendee in this Zoom webinar (see lib/webinars.ts).
   * Zoom then sends its own confirmation email with their join link.
   */
  zoomWebinar?: ZoomWebinarKey;
  /** Ask for the attendee's brokerage — for agent-facing events. */
  showBrokerage?: boolean;
  /** Show the "we'll only use your info…" line under the button. */
  showPrivacyNote?: boolean;
}

export default function WebinarForm({
  webinarName = "Retire In Peace Webinar",
  registrationDate = "Aug 25",
  headline = "Save Your Seat",
  subheadline = "Free to attend. Takes about 20 seconds.",
  confirmation = "We\u2019ll email you the webinar link and send a reminder before we go live. See you Tuesday, August 25 at 1:00 PM.",
  submitLabel = "Reserve My Free Seat",
  zoomWebinar,
  showBrokerage = false,
  showPrivacyNote = true,
}: WebinarFormProps) {
  const zoom = zoomWebinar ? zoomWebinars[zoomWebinar] : undefined;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  // Only meaningful when `zoom` is set: the personal join link on success,
  // or null when the attendee still has to finish on Zoom's own page.
  const [zoomJoinUrl, setZoomJoinUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const [leadResult, , zoomResult] = await Promise.allSettled([
        fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...payload,
            loanType: `${webinarName} — ${registrationDate} Registration`,
          }),
        }),
        // Also record the registration in the Google Sheet. A failure here
        // must not cost us the lead, so it is settled independently.
        fetch("/api/webinar-registration", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...payload,
            loanType: webinarName,
            registrationDate,
          }),
        }),
        // Register them in Zoom too. If this fails, the thank-you panel
        // links to Zoom's registration page so they can finish there.
        zoom
          ? fetch("/api/zoom-registration", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ...payload, webinar: zoomWebinar }),
            }).then((res) => res.json() as Promise<{ joinUrl?: string }>)
          : Promise.resolve(null),
      ]);

      if (leadResult.status === "rejected" || !leadResult.value.ok) {
        throw new Error("Request failed");
      }
      setZoomJoinUrl(
        zoomResult.status === "fulfilled" ? zoomResult.value?.joinUrl ?? null : null,
      );
      setIsComplete(true);
    } catch {
      setIsSubmitting(false);
      setError(
        "Something went wrong. Please try again or call us at (919) 612-9978.",
      );
    }
  };

  const inputClass =
    "w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:opacity-50";
  const labelClass = "block text-xs font-semibold text-gray-700 mb-1.5";

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
          {headline}
        </h2>
        <p className="text-primary-100 text-sm">{subheadline}</p>
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
              {zoom && !zoomJoinUrl ? "Almost done!" : "You’re registered!"}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
              {confirmation}
            </p>

            {zoom && zoomJoinUrl && (
              <div className="mt-6 space-y-3">
                <p className="text-gray-500 text-xs leading-relaxed max-w-sm mx-auto">
                  You&apos;re also registered in Zoom — watch for a
                  confirmation email from Zoom with your personal join link
                  and calendar invite.
                </p>
                <a
                  href={zoomJoinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block text-sm px-6 py-2.5"
                >
                  Save My Join Link
                </a>
              </div>
            )}

            {zoom && !zoomJoinUrl && (
              <div className="mt-6 space-y-3">
                <p className="text-gray-700 text-sm font-semibold">
                  One last step: confirm your seat on Zoom.
                </p>
                <a
                  href={zoom.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block text-sm px-6 py-2.5"
                >
                  Finish Zoom Registration
                </a>
              </div>
            )}
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
                  placeholder="Susan"
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
                  placeholder="Whitfield"
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
                Phone
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

            {showBrokerage && (
              <div>
                <label htmlFor="brokerage" className={labelClass}>
                  Brokerage
                </label>
                <input
                  id="brokerage"
                  name="brokerage"
                  type="text"
                  autoComplete="organization"
                  placeholder="Your brokerage"
                  disabled={isSubmitting}
                  className={inputClass}
                />
              </div>
            )}

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
              {isSubmitting ? "Registering..." : submitLabel}
            </button>

            {showPrivacyNote && (
              <p className="text-center text-xs text-gray-400 leading-relaxed">
                We&apos;ll only use your info to send the webinar link and a
                reminder.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
