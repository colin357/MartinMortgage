import type { Metadata } from "next";
import Link from "next/link";
import Calculators from "@/components/mmg/Calculators";

export const metadata: Metadata = {
  title: "Mortgage Calculators — Payment & Affordability Estimates",
  description: "Estimate your monthly mortgage payment with taxes, insurance and PMI, or get a ballpark affordability range. Free calculators from Martin Mortgage Group. Estimates only — not a loan approval.",
  alternates: { canonical: "/calculators" },
  openGraph: {
    title: "Mortgage Calculators — Payment & Affordability Estimates | Martin Mortgage Group",
    description: "Estimate your monthly mortgage payment with taxes, insurance and PMI, or get a ballpark affordability range. Free calculators from Martin Mortgage Group. Estimates only — not a loan approval.",
    url: "/calculators",
  },
};

export default function Page() {
  return (
    <>
      <header className="hero page-hero" style={{ padding: "182px 0 60px" }}>
      <div className="wrap"><div style={{ maxWidth: "780px" }}>
      <div className="eyebrow">Calculators</div>
      <h1 style={{ fontSize: "clamp(36px,4.8vw,56px)" }}>Run the numbers. <em>Then let&apos;s talk about yours.</em></h1>
      <p className="lead" style={{ maxWidth: "660px" }}>These tools give you honest ballparks — great for getting oriented. But your real numbers depend on your credit, your loan program, and your full picture. That&apos;s a conversation, not a calculator.</p>
      </div></div>
      </header>
      <section style={{ padding: "20px 0 110px" }}>
      <Calculators />
      </section>
      <section className="final">
      <div className="wrap">
      <h2>Calculators estimate. Conversations answer.</h2>
      <p>Fifteen minutes with our team turns ballparks into your actual numbers — and a plan to go with them.</p>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
      <Link className="btn btn-primary" href="/#contact">Start a Conversation</Link>
      <a className="btn btn-outline on-dark" href="https://fairway.tidalwave.ai/login" target="_blank" rel="noopener">Get Pre-Approved</a>
      </div>
      </div>
      </section>
    </>
  );
}
