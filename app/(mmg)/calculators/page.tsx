import type { Metadata } from "next";
import Calculators from "@/components/mmg/Calculators";
import PageContact from "@/components/mmg/PageContact";
import RelatedPages from "@/components/mmg/RelatedPages";

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
      <section className="page-reviews">
      <div className="wrap">
      <div className="eyebrow">Reading the Results</div>
      <h2>What a calculator can tell you — and what it can&apos;t.</h2>
      <p style={{ fontSize: "17px", color: "var(--slate)", maxWidth: "640px", margin: "-8px 0 44px" }}>Ballparks are useful. Knowing where they stop being reliable is even more useful.</p>
      <div className="check-grid">
      <div className="check-card fade-up" style={{ background: "var(--ivory)" }}>
      <h3>Built into these estimates</h3>
      <div className="cc-for">Good for getting oriented</div>
      <ul>
      <li>Principal and interest at the rate you enter</li>
      <li>Property taxes and homeowner&apos;s insurance</li>
      <li>An estimate of PMI on conventional loans under 20% down</li>
      <li>HOA dues, if you add them</li>
      <li>A debt-to-income based price range</li>
      </ul>
      </div>
      <div className="check-card dark fade-up">
      <h3>What only a real conversation answers</h3>
      <div className="cc-for">Where your actual numbers come from</div>
      <ul>
      <li>The rate and loan program you actually qualify for</li>
      <li>Closing costs and cash needed at the table</li>
      <li>Down payment assistance or seller credits you could use</li>
      <li>How your credit profile changes the math</li>
      <li>The payment that fits your life — not just your approval</li>
      </ul>
      </div>
      </div>
      </div>
      </section>
      <section className="final">
      <div className="wrap">
      <h2>Calculators estimate. Conversations answer.</h2>
      <p>Fifteen minutes with our team turns ballparks into your actual numbers — and a plan to go with them.</p>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
      <a className="btn btn-primary" href="#contact">Start a Conversation</a>
      <a className="btn btn-outline on-dark" href="https://fairway.tidalwave.ai/login" target="_blank" rel="noopener">Get Pre-Approved</a>
      </div>
      </div>
      </section>
      <PageContact
        title="Turn the ballpark into your real numbers."
        sub="Share what you're thinking about and a real person from MMG will follow up — usually the same business day — with numbers built on your actual situation."
      />
      <RelatedPages hrefs={["/first-time-buyers", "/homeowners", "/financial-literacy"]} />
    </>
  );
}
