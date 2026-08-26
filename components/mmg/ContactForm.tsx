"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT } from "@/lib/mmg-nav";
import { trackEvent } from "@/lib/analytics";

const GOALS = [
  "Buy my first home",
  "Buy my next home",
  "Buy before selling",
  "Relocate",
  "Build / buy new construction",
  "Refinance",
  "Use home equity",
  "Buy investment property",
  "I'm not sure yet",
];

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
] as const;

type Errors = Partial<Record<"firstName" | "lastName" | "email" | "phone", string>>;

function camel(key: string) {
  return key.replace(/_([a-z])/g, (_, letter: string) => letter.toUpperCase());
}

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [failure, setFailure] = useState<string | null>(null);
  const started = useRef(false);
  const successRef = useRef<HTMLDivElement>(null);

  // Attribution: UTMs are read from the URL on first load and remembered for
  // the session, so a lead submitted three pages later keeps its source.
  const attribution = useRef<Record<string, string>>({});
  useEffect(() => {
    const stored = (() => {
      try {
        return JSON.parse(sessionStorage.getItem("mmg_attribution") ?? "{}");
      } catch {
        return {};
      }
    })();

    const params = new URLSearchParams(window.location.search);
    const fresh: Record<string, string> = {};
    UTM_KEYS.forEach((key) => {
      const value = params.get(key);
      if (value) fresh[camel(key)] = value;
    });

    attribution.current = { ...stored, ...fresh };
    if (Object.keys(fresh).length > 0) {
      try {
        sessionStorage.setItem(
          "mmg_attribution",
          JSON.stringify(attribution.current),
        );
      } catch {
        /* private mode — attribution is best-effort */
      }
    }
  }, []);

  function onFirstInput() {
    if (started.current) return;
    started.current = true;
    trackEvent("lead_form_start", { form: "mmg_contact" });
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFailure(null);

    const form = event.currentTarget;
    const values = Object.fromEntries(
      new FormData(form).entries(),
    ) as Record<string, string>;

    const nextErrors: Errors = {};
    if (!values.first_name?.trim()) nextErrors.firstName = "Please add your first name.";
    if (!values.last_name?.trim()) nextErrors.lastName = "Please add your last name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email?.trim() ?? "")) {
      nextErrors.email = "Please add an email we can reach you at.";
    }
    if ((values.phone?.replace(/\D/g, "") ?? "").length < 10) {
      nextErrors.phone = "Please add a 10-digit phone number.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      form
        .querySelector<HTMLElement>('[aria-invalid="true"]')
        ?.focus();
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: values.first_name.trim(),
          lastName: values.last_name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          loanType: values.goal,
          biggestQuestion: values.biggest_question?.trim() || "",
          leadSource: "website",
          pageUrl: window.location.href,
          referrer: document.referrer || "",
          ...attribution.current,
        }),
      });

      if (!res.ok) throw new Error(`Lead endpoint responded ${res.status}`);

      trackEvent("lead_form_submit", {
        form: "mmg_contact",
        goal: values.goal,
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Lead submission failed:", error);
      setFailure(
        "Something went wrong sending that. Please try again, or call or text us — we'd rather hear from you than have you fight a form.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  useEffect(() => {
    if (submitted) successRef.current?.focus();
  }, [submitted]);

  if (submitted) {
    return (
      <div className="form-card">
        <div
          className="form-success"
          ref={successRef}
          tabIndex={-1}
          role="status"
        >
          <div className="fs-check" aria-hidden="true">
            ✓
          </div>
          <h3>Got it. We&apos;ll be in touch.</h3>
          <p>
            Your note is with the MMG team. A real person will follow up —
            usually the same business day.
          </p>
          <div className="fs-next">
            <strong>What happens next?</strong>
            1. You told us what you&apos;re trying to accomplish. 2. A real
            person from MMG reaches out. 3. We talk through your situation. 4.
            We determine the right next step.
          </div>
          <p className="fs-contact">
            Need us sooner? Call or text{" "}
            <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card">
      <form id="mmg-lead-form" onSubmit={onSubmit} onInput={onFirstInput} noValidate>
        <label htmlFor="goal">What are you trying to accomplish?</label>
        <select id="goal" name="goal" defaultValue={GOALS[0]}>
          {GOALS.map((goal) => (
            <option key={goal}>{goal}</option>
          ))}
        </select>

        <div className="form-row">
          <div>
            <label htmlFor="fn">First name</label>
            <input
              id="fn"
              name="first_name"
              type="text"
              autoComplete="given-name"
              aria-invalid={Boolean(errors.firstName)}
            />
            {errors.firstName && (
              <span className="field-error">{errors.firstName}</span>
            )}
          </div>
          <div>
            <label htmlFor="ln">Last name</label>
            <input
              id="ln"
              name="last_name"
              type="text"
              autoComplete="family-name"
              aria-invalid={Boolean(errors.lastName)}
            />
            {errors.lastName && (
              <span className="field-error">{errors.lastName}</span>
            )}
          </div>
        </div>

        <div className="form-row">
          <div>
            <label htmlFor="em">Email</label>
            <input
              id="em"
              name="email"
              type="email"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && (
              <span className="field-error">{errors.email}</span>
            )}
          </div>
          <div>
            <label htmlFor="ph">Phone</label>
            <input
              id="ph"
              name="phone"
              type="tel"
              autoComplete="tel"
              aria-invalid={Boolean(errors.phone)}
            />
            {errors.phone && (
              <span className="field-error">{errors.phone}</span>
            )}
          </div>
        </div>

        <label htmlFor="bq">
          What&apos;s the biggest question you have right now?{" "}
          <span style={{ fontWeight: 400, color: "#8a8f8c" }}>(optional)</span>
        </label>
        <textarea id="bq" name="biggest_question" rows={3} />

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%" }}
          disabled={submitting}
        >
          {submitting ? "Sending…" : "Start the Conversation"}
        </button>

        {failure && (
          <p className="form-status error" role="alert">
            {failure}
          </p>
        )}

        <div className="next-steps">
          <strong>What happens next?</strong>
          <br />
          1. You tell us what you&apos;re trying to accomplish. &nbsp;2. A real
          person from MMG reaches out. &nbsp;3. We talk through your situation.
          &nbsp;4. We determine the right next step.
          <br />
          No pressure. No mystery. No wondering whether a form disappeared into
          the internet.
        </div>
      </form>
    </div>
  );
}
