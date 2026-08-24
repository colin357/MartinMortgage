"use client";

import { useEffect, useRef, useState } from "react";

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

const steps = [
  { title: "About you", subtitle: "So we know who we're saving a seat for." },
  {
    title: "Your production",
    subtitle: "This helps us group the room and pitch the session right.",
  },
  {
    title: "Your business",
    subtitle: "Where things stand and where you're headed.",
  },
  {
    title: "Your AI experience",
    subtitle: "Every level is welcome — we just want to meet you there.",
  },
];

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  brokerage: "",
  yearsSellingRealEstate: "",
  transactionsLast12Months: "",
  buyerSideTransactions: "",
  ytdClosedSalesVolume2026: "",
  businessDescription: "",
  aiComfortLevel: "",
};

type Values = typeof initialValues;
type Errors = Partial<Record<keyof Values, string>>;

function validateStep(step: number, values: Values): Errors {
  const errors: Errors = {};

  if (step === 0) {
    if (!values.firstName.trim()) errors.firstName = "Enter your first name.";
    if (!values.lastName.trim()) errors.lastName = "Enter your last name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      errors.email = "Enter a valid email address.";
    if (values.phone.replace(/\D/g, "").length < 10)
      errors.phone = "Enter a valid cell phone number.";
    if (!values.brokerage.trim())
      errors.brokerage = "Enter your brokerage or real estate company.";
  }

  if (step === 1) {
    if (!values.yearsSellingRealEstate)
      errors.yearsSellingRealEstate = "Pick one.";
    if (!values.transactionsLast12Months)
      errors.transactionsLast12Months = "Pick one.";
    if (!values.buyerSideTransactions)
      errors.buyerSideTransactions = "Pick one.";
  }

  if (step === 2) {
    if (!values.ytdClosedSalesVolume2026)
      errors.ytdClosedSalesVolume2026 = "Pick one.";
    if (!values.businessDescription) errors.businessDescription = "Pick one.";
  }

  if (step === 3) {
    if (!values.aiComfortLevel) errors.aiComfortLevel = "Pick one.";
  }

  return errors;
}

export default function AiLabApplicationForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const hasMoved = useRef(false);

  // Keep the top of the card in view when the step changes
  useEffect(() => {
    if (!hasMoved.current) {
      hasMoved.current = true;
      return;
    }
    cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step, isComplete]);

  const setValue = (name: keyof Values, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const submit = async (finalValues: Values) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...finalValues,
          loanType: "AI Agent Lab 101 — Sept 8 Application",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setIsComplete(true);
    } catch {
      setIsSubmitting(false);
      setSubmitError(
        "Something went wrong. Please try again or call us at (919) 612-9978.",
      );
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const stepErrors = validateStep(step, values);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    if (step < steps.length - 1) {
      setStep((prev) => prev + 1);
      return;
    }

    void submit(values);
  };

  const goBack = () => {
    if (isSubmitting || step === 0) return;
    setErrors({});
    setStep((prev) => prev - 1);
  };

  const inputClass =
    "w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent disabled:opacity-50";
  const errorInputClass =
    "w-full px-4 py-2.5 border border-red-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 bg-red-50/40 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent disabled:opacity-50";
  const labelClass = "block text-xs font-semibold text-gray-700 mb-1.5";
  const questionClass = "block text-sm font-bold text-gray-900 mb-3";

  const fieldError = (name: keyof Values) =>
    errors[name] ? (
      <p className="text-xs text-red-600 mt-1.5">{errors[name]}</p>
    ) : null;

  const textField = (
    name: keyof Values,
    label: string,
    props: React.InputHTMLAttributes<HTMLInputElement> = {},
  ) => (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={values[name]}
        onChange={(e) => setValue(name, e.target.value)}
        disabled={isSubmitting}
        className={errors[name] ? errorInputClass : inputClass}
        {...props}
      />
      {fieldError(name)}
    </div>
  );

  const radioGroup = (
    name: keyof Values,
    question: string,
    options: string[],
    columns: string,
  ) => (
    <fieldset disabled={isSubmitting}>
      <legend className={questionClass}>{question}</legend>
      <div className={`grid ${columns} gap-x-4 gap-y-2`}>
        {options.map((opt) => (
          <label
            key={opt}
            className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer"
          >
            <input
              type="radio"
              name={name}
              value={opt}
              checked={values[name] === opt}
              onChange={() => setValue(name, opt)}
              className="mt-0.5 h-4 w-4 shrink-0 border-gray-300 text-accent-500 focus:ring-accent-400"
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
      {fieldError(name)}
    </fieldset>
  );

  const progress = Math.round(((step + 1) / steps.length) * 100);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
          Apply For A Spot
        </h2>
        <p className="text-gray-300 text-sm">
          Limited to 16 active real estate professionals. Four quick steps.
        </p>
      </div>

      <div
        ref={cardRef}
        className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden scroll-mt-32"
      >
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
          <>
            {/* Progress */}
            <div className="px-6 pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-accent-600">
                  Step {step + 1} of {steps.length}
                </span>
                <span className="text-xs font-medium text-gray-400">
                  {progress}% complete
                </span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent-400 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-black text-gray-900">
                  {steps[step].title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {steps[step].subtitle}
                </p>
              </div>

              {/* Step 1 — contact */}
              {step === 0 && (
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {textField("firstName", "First name", {
                      type: "text",
                      autoComplete: "given-name",
                      placeholder: "Jordan",
                    })}
                    {textField("lastName", "Last name", {
                      type: "text",
                      autoComplete: "family-name",
                      placeholder: "Reyes",
                    })}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {textField("email", "Email address", {
                      type: "email",
                      autoComplete: "email",
                      placeholder: "you@email.com",
                    })}
                    {textField("phone", "Cell phone", {
                      type: "tel",
                      autoComplete: "tel",
                      placeholder: "(919) 555-1234",
                    })}
                  </div>
                  {textField("brokerage", "Brokerage / Real estate company", {
                    type: "text",
                    placeholder: "e.g. eXp Realty",
                  })}
                </div>
              )}

              {/* Step 2 — production */}
              {step === 1 && (
                <div className="space-y-6">
                  {radioGroup(
                    "yearsSellingRealEstate",
                    "How many years have you been actively selling real estate?",
                    yearsSellingOptions,
                    "sm:grid-cols-2",
                  )}
                  {radioGroup(
                    "transactionsLast12Months",
                    "Approximately how many transactions have you personally closed in the last 12 months?",
                    transactionsOptions,
                    "grid-cols-2 sm:grid-cols-3",
                  )}
                  {radioGroup(
                    "buyerSideTransactions",
                    "Approximately how many of those transactions were buyer side?",
                    buyerSideOptions,
                    "grid-cols-2 sm:grid-cols-3",
                  )}
                </div>
              )}

              {/* Step 3 — business */}
              {step === 2 && (
                <div className="space-y-6">
                  {radioGroup(
                    "ytdClosedSalesVolume2026",
                    "Approximately what is your 2026 YTD closed sales volume?",
                    volumeOptions,
                    "sm:grid-cols-2",
                  )}
                  {radioGroup(
                    "businessDescription",
                    "How would you describe your current real estate business?",
                    businessOptions,
                    "grid-cols-1",
                  )}
                </div>
              )}

              {/* Step 4 — AI comfort */}
              {step === 3 && (
                <fieldset disabled={isSubmitting}>
                  <legend className={questionClass}>
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
                          checked={values.aiComfortLevel === opt.value}
                          onChange={() => setValue("aiComfortLevel", opt.value)}
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
                  {fieldError("aiComfortLevel")}
                </fieldset>
              )}

              {submitError && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                  {submitError}
                </p>
              )}

              <div className="flex items-center gap-3 pt-2">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={goBack}
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-md border-2 border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition-colors disabled:opacity-60"
                  >
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
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-accent flex-1 text-sm py-3 disabled:opacity-60"
                >
                  {step < steps.length - 1
                    ? "Continue"
                    : isSubmitting
                      ? "Submitting..."
                      : "Apply For A Spot"}
                </button>
              </div>

              <p className="text-center text-xs text-gray-400">
                Applying does not guarantee a seat. We&apos;ll confirm by phone
                or email.
              </p>
            </form>
          </>
        )}
      </div>

      <p className="text-center text-xs text-gray-400 mt-4">
        We&apos;ll only use your info to review your application and send event
        details.
      </p>
    </div>
  );
}
