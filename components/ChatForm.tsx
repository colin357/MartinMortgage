"use client";

import { useState, useRef, useEffect } from "react";

interface ChatStep {
  id: string;
  question: string;
  type: "text" | "email" | "phone" | "select" | "currency";
  placeholder?: string;
  options?: string[];
  field: string;
}

interface ChatFormProps {
  steps: ChatStep[];
  loanType: string;
  headline?: string;
  subheadline?: string;
}

interface Message {
  role: "bot" | "user";
  text: string;
}

export default function ChatForm({
  steps,
  loanType,
  headline = "Let\u2019s Get You Pre-Qualified",
  subheadline = "Answer a few quick questions and we\u2019ll reach out shortly.",
}: ChatFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => { scrollToBottom(); }, [messages, isTyping]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages([{
        role: "bot",
        text: `Hi there! I\u2019m here to help you get started with your ${loanType} journey. Let\u2019s get a few details from you.`,
      }]);
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages((prev) => [...prev, { role: "bot", text: steps[0].question }]);
        }, 800);
      }, 500);
    }, 300);
    return () => clearTimeout(timer);
  }, [loanType, steps]);

  const advanceStep = (answer: string) => {
    const step = steps[currentStep];
    const newAnswers = { ...answers, [step.field]: answer };
    setAnswers(newAnswers);
    setMessages((prev) => [...prev, { role: "user", text: answer }]);
    setInputValue("");

    if (currentStep < steps.length - 1) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);
        setMessages((prev) => [...prev, { role: "bot", text: steps[nextStep].question }]);
        inputRef.current?.focus({ preventScroll: true });
      }, 900);
    } else {
      setIsTyping(true);
      setIsSubmitting(true);
      fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...newAnswers, loanType }),
      })
        .then((res) => res.json())
        .then(() => {
          setIsTyping(false);
          setIsComplete(true);
          setMessages((prev) => [
            ...prev,
            { role: "bot", text: "Thank you! A member of our team will reach out to you shortly. We look forward to helping you with your home financing goals!" },
          ]);
        })
        .catch(() => {
          setIsTyping(false);
          setIsSubmitting(false);
          setMessages((prev) => [
            ...prev,
            { role: "bot", text: "Something went wrong. Please try again or call us directly at (919) 612-9978." },
          ]);
        });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping || isComplete) return;
    advanceStep(inputValue.trim());
  };

  const step = steps[currentStep];

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
          {headline}
        </h2>
        <p className="text-primary-200 text-sm">{subheadline}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        {/* Chat header — dark green */}
        <div className="bg-primary-700 px-5 py-4 flex items-center gap-3">
          <div className="w-9 h-9 bg-accent-400 rounded-full flex items-center justify-center">
            <span className="text-white font-black text-sm">M</span>
          </div>
          <div>
            <div className="text-white font-bold text-sm">Martin Mortgage Group</div>
            <div className="text-primary-200 text-xs flex items-center gap-1">
              <span className="w-2 h-2 bg-accent-400 rounded-full inline-block" />
              Online now
            </div>
          </div>
        </div>

        {/* Messages */}
        <div ref={messagesContainerRef} className="h-80 overflow-y-auto px-5 py-4 space-y-3 bg-gray-50">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`chat-bubble-animate flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-primary-700 text-white rounded-br-md"
                    : "bg-white text-gray-800 shadow-sm border border-gray-200 rounded-bl-md"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start chat-bubble-animate">
              <div className="bg-white shadow-sm border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3 flex gap-1.5">
                <span className="typing-dot w-2 h-2 bg-gray-400 rounded-full" />
                <span className="typing-dot w-2 h-2 bg-gray-400 rounded-full" />
                <span className="typing-dot w-2 h-2 bg-gray-400 rounded-full" />
              </div>
            </div>
          )}

        </div>

        {/* Input area */}
        {!isComplete && (
          <div className="border-t border-gray-200 p-4 bg-white">
            {step?.type === "select" && step.options ? (
              <div className="flex flex-wrap gap-2">
                {step.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => advanceStep(opt)}
                    disabled={isTyping || isSubmitting}
                    className="px-4 py-2 bg-gray-100 hover:bg-primary-700 hover:text-white text-gray-700 rounded-full text-sm font-semibold transition-colors border border-gray-200 disabled:opacity-50"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  ref={inputRef}
                  type={step?.type === "currency" ? "text" : step?.type || "text"}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={step?.placeholder || "Type your answer..."}
                  disabled={isTyping || isSubmitting}
                  className="flex-1 px-4 py-2.5 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:opacity-50 bg-gray-50"
                />
                <button
                  type="submit"
                  disabled={isTyping || !inputValue.trim() || isSubmitting}
                  className="w-10 h-10 bg-primary-700 hover:bg-primary-800 text-white rounded-full flex items-center justify-center transition-colors disabled:opacity-50"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        )}
      </div>

      <p className="text-center text-xs text-primary-200 mt-4">
        Your information is secure and will only be used to help you with your mortgage needs.
      </p>
    </div>
  );
}
