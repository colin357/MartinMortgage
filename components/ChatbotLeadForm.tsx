"use client";

import { FormEvent, useMemo, useState } from "react";

type Field = {
  key: string;
  prompt: string;
  placeholder?: string;
  type?: "text" | "email" | "tel";
  options?: string[];
};

const fields: Field[] = [
  { key: "name", prompt: "Great! What is your full name?", placeholder: "Jane Homebuyer" },
  { key: "phone", prompt: "What is the best mobile number?", type: "tel", placeholder: "(919) 555-0123" },
  { key: "email", prompt: "What email should we send your options to?", type: "email", placeholder: "you@email.com" },
  {
    key: "goalMonthlyPayment",
    prompt: "What is your goal monthly housing payment?",
    placeholder: "$2,400"
  },
  {
    key: "currentHomeowner",
    prompt: "Are you currently a homeowner?",
    options: ["Yes", "No"]
  },
  {
    key: "creditRange",
    prompt: "What is your estimated credit score range?",
    options: ["760+", "700-759", "640-699", "Below 640", "Not sure"]
  },
  {
    key: "timeline",
    prompt: "When are you hoping to move forward?",
    options: ["ASAP", "30-90 days", "3-6 months", "6+ months"]
  }
];

export default function ChatbotLeadForm({ leadType }: { leadType: string }) {
  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState("");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const currentField = fields[idx];

  const messages = useMemo(() => {
    const msgs: { role: "bot" | "user"; text: string }[] = [
      {
        role: "bot",
        text: `Welcome to Martin Mortgage Group's ${leadType} prequalification assistant.`
      }
    ];

    fields.forEach((field) => {
      msgs.push({ role: "bot", text: field.prompt });
      if (answers[field.key]) msgs.push({ role: "user", text: answers[field.key] });
    });

    return msgs;
  }, [answers, leadType]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!currentField || !input.trim()) return;

    const updated = { ...answers, [currentField.key]: input.trim() };
    setAnswers(updated);
    setInput("");

    if (idx < fields.length - 1) {
      setIdx(idx + 1);
      return;
    }

    setLoading(true);
    setStatus("Submitting your information...");

    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ leadType, ...updated })
    });

    setLoading(false);
    setStatus(
      res.ok
        ? "Thanks! Michael's team has your request and will text/call you shortly."
        : "We saved your request but had trouble delivering the alert. Please call us directly."
    );
  }

  return (
    <div className="chat" aria-live="polite">
      <div className="chat-log">
        {messages.map((m, i) => (
          <div key={`${m.role}-${i}`} className={`msg ${m.role}`}>
            {m.text}
          </div>
        ))}
      </div>
      <form className="chat-form" onSubmit={handleSubmit}>
        {currentField?.options ? (
          <select value={input} onChange={(e) => setInput(e.target.value)} required>
            <option value="">Select one</option>
            {currentField.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={currentField?.type ?? "text"}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={currentField?.placeholder ?? "Type your answer"}
            required
          />
        )}
        <button className="btn" type="submit" disabled={loading || !currentField}>
          {loading ? "Sending..." : "Next"}
        </button>
      </form>
      {status && <p style={{ padding: "0 0.9rem 0.9rem", margin: 0 }}>{status}</p>}
    </div>
  );
}
