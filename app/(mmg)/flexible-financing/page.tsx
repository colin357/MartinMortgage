import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Self-Employed & Investor Mortgage Options",
  description: "Self-employed? Business owner? Real estate investor? Your income doesn't fit in a box — and there are mortgage options built for exactly that. Bank statement, DSCR and asset-based loan options in NC, SC, VA & GA.",
  alternates: { canonical: "/flexible-financing" },
  openGraph: {
    title: "Self-Employed & Investor Mortgage Options | Martin Mortgage Group",
    description: "Self-employed? Business owner? Real estate investor? Your income doesn't fit in a box — and there are mortgage options built for exactly that. Bank statement, DSCR and asset-based loan options in NC, SC, VA & GA.",
    url: "/flexible-financing",
  },
};

export default function Page() {
  return (
    <>
      <header className="hero page-hero" style={{ padding: "182px 0 80px" }}>
      <div className="wrap"><div style={{ maxWidth: "800px" }}>
      <div className="eyebrow">Self-Employed · Business Owners · Investors</div>
      <h1 style={{ fontSize: "clamp(38px,5vw,60px)" }}>Your income doesn&apos;t fit in a box. <em>There are loans built for that.</em></h1>
      <p className="lead" style={{ maxWidth: "680px" }}>You run a business. You invest in property. You earn on 1099s, or your tax returns tell a very different story than your bank account does. Traditional mortgage underwriting wasn&apos;t designed for you — but a whole category of loan options was.</p>
      <div className="hero-ctas"><Link className="btn btn-primary" href="/#contact">Discuss My Financing Strategy</Link></div>
      <div className="fairway-badge"><span className="pb">Powered by</span><Image priority src="/images/mmg/fairway-logo.png" width={420} height={156} alt="Fairway Home Mortgage" /></div>
      </div></div>
      </header>
      <section className="problem" style={{ paddingTop: "0" }}>
      <div className="wrap">
      <div className="eyebrow">The Problem</div>
      <h2 style={{ fontSize: "clamp(30px,4.2vw,50px)", maxWidth: "880px", marginBottom: "32px" }}>You&apos;ve heard &quot;sorry, your income is too complicated.&quot; <span className="accent">We speak complicated.</span></h2>
      <div className="problem-cols">
      <div>
      <p>Here&apos;s what happens to a lot of successful self-employed people: your accountant does a great job minimizing your taxable income. Then you apply for a mortgage, and the underwriter looks at that same minimized number and says you don&apos;t qualify — even though your business is thriving.</p>
      <p>Frustrating? Absolutely. A dead end? Usually not.</p>
      <p><strong>There&apos;s a category of loan options — often called non-QM or non-traditional — designed to document income differently.</strong> Bank statements instead of tax returns. Rental income instead of personal income. Assets instead of paychecks. Different documentation, real loans.</p>
      </div>
      <div className="q-stack">
      <div className="q">&quot;My tax returns don&apos;t show what I actually make.&quot;</div>
      <div className="q">&quot;I was told to come back after two more years of returns.&quot;</div>
      <div className="q">&quot;I want the property to qualify on its own rents.&quot;</div>
      <div className="q">&quot;I have assets, but not a paycheck.&quot;</div>
      </div>
      </div>
      </div>
      </section>
      <section className="chain" style={{ background: "#fff" }}>
      <div className="wrap" style={{ maxWidth: "900px" }}>
      <div className="eyebrow">The Options</div>
      <h2 style={{ fontSize: "clamp(30px,4.2vw,48px)", marginBottom: "20px" }}>Five ways income gets documented differently.</h2>
      <div className="prod fade-up"><div className="pnum">01</div><div>
      <h3>Bank Statement Loans</h3><div className="pfor">For self-employed borrowers and business owners</div>
      <p>Instead of tax returns, qualifying income may be calculated from your personal or business bank statement deposits — typically over 12 to 24 months. Built for exactly the &quot;my returns don&apos;t tell the real story&quot; situation.</p>
      </div></div>
      <div className="prod fade-up"><div className="pnum">02</div><div>
      <h3>DSCR Loans</h3><div className="pfor">For real estate investors</div>
      <p>Debt Service Coverage Ratio loans qualify the property, not your personal income — the question is whether the rents can cover the payment. Popular with investors building portfolios, and LLC ownership may be an option.</p>
      </div></div>
      <div className="prod fade-up"><div className="pnum">03</div><div>
      <h3>1099 Loans</h3><div className="pfor">For contractors, gig workers and commission earners</div>
      <p>Qualifying income may be documented from your 1099s rather than full tax returns — a middle path for independent earners whose write-offs complicate the traditional picture.</p>
      </div></div>
      <div className="prod fade-up"><div className="pnum">04</div><div>
      <h3>Asset-Based Qualification</h3><div className="pfor">For retirees and high-asset borrowers</div>
      <p>Significant assets but modest monthly income on paper? Some programs can calculate qualifying income from your asset base itself. Common for early retirees and business-sale situations.</p>
      </div></div>
      <div className="prod fade-up"><div className="pnum">05</div><div>
      <h3>Jumbo &amp; Complex-Income Structures</h3><div className="pfor">For larger loans and layered income</div>
      <p>Business distributions, bonuses, RSUs, multiple entities, multiple properties — larger loans with layered income need careful structuring. This is strategy work, and it&apos;s some of our favorite work.</p>
      </div></div>
      </div>
      </section>
      <section style={{ padding: "110px 0", background: "var(--ivory)" }}>
      <div className="wrap">
      <div className="eyebrow">The Honest Part</div>
      <h2 style={{ fontSize: "clamp(30px,4.2vw,48px)", maxWidth: "860px", marginBottom: "36px" }}>Straight talk about these loans.</h2>
      <div className="truth-box fade-up">
      <h3>Flexibility has a price tag. We&apos;ll show you exactly what it is.</h3>
      <p>Non-traditional documentation typically comes with different pricing and requirements than conventional loans — often larger down payments, reserve requirements, and different rate structures. That&apos;s the honest tradeoff for flexibility.</p>
      <p>So here&apos;s how we approach it: first we check whether you can qualify conventionally, because sometimes &quot;complicated&quot; income fits traditional guidelines better than people were told. If it does, that&apos;s usually the better deal, and that&apos;s what we&apos;ll recommend.</p>
      <p>If it doesn&apos;t, we&apos;ll lay out the non-traditional options side by side — total costs, requirements, tradeoffs — so you can decide with the whole picture in front of you. No surprises at the closing table. That&apos;s the MMG Way, whatever loan it turns out to be.</p>
      </div>
      </div>
      </section>
      <section className="final">
      <div className="wrap">
      <h2>&quot;Complicated income&quot; is our kind of puzzle.</h2>
      <p>Bring us the real picture — the business, the properties, the 1099s, all of it. We&apos;ll tell you what&apos;s possible and what it costs. Plain English, real numbers.</p>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
      <Link className="btn btn-primary" href="/#contact">Discuss My Financing Strategy</Link>
      </div>
      <p className="small">All loan options subject to credit and property approval and program availability. Not all borrowers will qualify. Programs, requirements and terms are subject to change. This is not an offer of credit or a commitment to lend.</p>
      </div>
      </section>
    </>
  );
}
