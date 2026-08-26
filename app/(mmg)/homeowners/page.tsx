import type { Metadata } from "next";
import VideoEmbed from "@/components/mmg/VideoEmbed";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Homeowners — Annual Mortgage Review, Equity & Refinance",
  description: "Your mortgage shouldn't go on autopilot for 30 years. Annual mortgage reviews, home equity strategy, refinance analysis and investment property financing from Martin Mortgage Group.",
  alternates: { canonical: "/homeowners" },
  openGraph: {
    title: "Homeowners — Annual Mortgage Review, Equity & Refinance | Martin Mortgage Group",
    description: "Your mortgage shouldn't go on autopilot for 30 years. Annual mortgage reviews, home equity strategy, refinance analysis and investment property financing from Martin Mortgage Group.",
    url: "/homeowners",
  },
};

export default function Page() {
  return (
    <>
      <header className="hero page-hero" style={{ padding: "182px 0 70px" }}>
      <div className="wrap"><div style={{ maxWidth: "780px" }}>
      <div className="eyebrow">For Homeowners</div>
      <h1 style={{ fontSize: "clamp(38px,5vw,60px)" }}>Your mortgage shouldn&apos;t go on autopilot <em>for 30 years.</em></h1>
      <p className="lead" style={{ maxWidth: "660px" }}>Life changes. Rates change. Equity grows. The mortgage that was right when you closed deserves a check-in now and then — and as an MMG client, that&apos;s part of the deal. Forever.</p>
      <div className="hero-ctas"><a className="btn btn-primary" href="#review">Schedule My Annual Review</a></div>
      <div className="fairway-badge"><span className="pb">Powered by</span><Image priority src="/images/mmg/fairway-logo.png" width={420} height={156} alt="Fairway Home Mortgage" /></div>
      </div></div>
      </header>
      <section className="ho-section" id="review" style={{ paddingTop: "60px" }}>
      <div className="wrap ho-grid">
      <div>
      <div className="eyebrow">Annual Mortgage Review</div>
      <h2>Your mortgage deserves an annual checkup.</h2>
      <div className="ho-sub">Fifteen minutes, once a year. That&apos;s it.</div>
      <p>You review your insurance. Your doctor reviews your health. Your mortgage — probably the largest debt of your life — shouldn&apos;t be the one thing nobody ever looks at again.</p>
      <p>Every year, we&apos;ll look at where you stand and tell you the truth: sometimes &quot;there&apos;s an opportunity here,&quot; and very often &quot;you&apos;re in great shape, don&apos;t touch a thing.&quot; Both answers are worth fifteen minutes.</p>
      <p style={{ marginTop: "22px" }}><Link className="btn btn-primary" href="/#contact">Schedule My Annual Review</Link></p>
      </div>
      <ul className="ho-points">
      <li>Current balance, payment, and how your amortization is tracking</li>
      <li>Estimated home value and equity position</li>
      <li>Whether PMI can come off, if you&apos;re paying it</li>
      <li>Refinance math — only if it actually benefits you</li>
      <li>Equity opportunities for goals you have coming up</li>
      <li>Early planning if a move is on the horizon</li>
      </ul>
      </div>
      </section>
      <section className="ho-section" id="equity">
      <div className="wrap ho-grid">
      <div>
      <div className="eyebrow">Home Equity Strategy</div>
      <h2>Your equity is an asset. Treat it like one.</h2>
      <div className="ho-sub">What could it help you accomplish?</div>
      <p>Renovations. Education. Consolidating higher-interest debt. A down payment on the next property. Your equity can potentially help fund goals — but accessing it is a strategy decision, not a transaction.</p>
      <p>We&apos;ll walk through the options for your situation, the tradeoffs of each, and — importantly — whether touching your equity is the right move at all. Sometimes the answer is &quot;leave it alone.&quot; We&apos;ll tell you that too.</p>
      <p style={{ marginTop: "22px" }}><Link className="textlink" href="/#contact">Explore My Equity →</Link></p>
      </div>
      <ul className="ho-points">
      <li>How much equity you actually have — and how much is accessible</li>
      <li>The different ways to access it, explained in plain English</li>
      <li>What each option costs, short-term and long-term</li>
      <li>How each choice affects your monthly picture</li>
      <li>When keeping your equity untouched is the smarter play</li>
      </ul>
      </div>
      </section>
      <section className="ho-section" id="refinance">
      <div className="wrap ho-grid">
      <div>
      <div className="eyebrow">Refinance Analysis</div>
      <h2>Refinancing is math, not marketing.</h2>
      <div className="ho-sub">We&apos;ll run the real numbers.</div>
      <p>You&apos;ve seen the ads. What they never show is the break-even math: what the refinance costs, what it saves, and how long you&apos;d need to keep the loan for it to pay off.</p>
      <p>We run that math with you, honestly. If a refinance genuinely benefits you, we&apos;ll show you exactly why and how. If it doesn&apos;t, we&apos;ll show you that too — and you&apos;ll know to ignore the ads.</p>
      <p style={{ marginTop: "22px" }}><Link className="textlink" href="/#contact">Request My Refinance Analysis →</Link></p>
      </div>
      <ul className="ho-points">
      <li>Total cost of the refinance, all-in — no surprises</li>
      <li>Monthly savings and break-even timeline</li>
      <li>Term strategy: restarting the clock vs. shortening it</li>
      <li>Cash-out considerations, if that&apos;s on your mind</li>
      <li>A straight answer: worth it, or not right now</li>
      </ul>
      </div>
      </section>
      <section className="ho-section" id="investment">
      <div className="wrap ho-grid">
      <div>
      <div className="eyebrow">Investment Property Financing</div>
      <h2>Thinking about becoming a landlord?</h2>
      <div className="ho-sub">Let&apos;s pressure-test the numbers first.</div>
      <p>Rental property can be a powerful wealth builder — and a expensive lesson when the numbers were never real. Before you fall in love with a duplex, we&apos;ll walk through how investment financing actually works and what the full financial picture looks like.</p>
      <p>Down payment requirements, reserves, how rental income factors in, and how this purchase fits alongside your current mortgage. Strategy first, property second.</p>
      <p style={{ marginTop: "22px" }}><Link className="textlink" href="/#contact">Talk Investment Strategy →</Link></p>
      </div>
      <ul className="ho-points">
      <li>How financing differs for investment properties</li>
      <li>What lenders look for: reserves, down payment, income</li>
      <li>Running honest numbers on a property you&apos;re considering</li>
      <li>Using existing equity toward the purchase — pros and cons</li>
      <li>Building toward property number two, three, and beyond</li>
      </ul>
      </div>
      </section>
      <section className="ho-section" id="moveup" style={{ borderBottom: "none" }}>
      <div className="wrap ho-grid">
      <div>
      <div className="eyebrow">Move-Up Planning</div>
      <h2>Outgrowing this house?</h2>
      <div className="ho-sub">There&apos;s a whole strategy for that.</div>
      <p>Sell first or buy first? Where does the down payment come from? Can you avoid moving twice? Move-up strategy is its own discipline, and we built a full page for it — including the real story of a family who bought before selling when they didn&apos;t think it was possible.</p>
      <p style={{ marginTop: "22px" }}><Link className="btn btn-primary" href="/move-up-buyers">Explore Move-Up Strategy</Link></p>
      </div>
      <ul className="ho-points">
      <li>Buy-before-you-sell structures, explained</li>
      <li>Turning current equity into the next down payment</li>
      <li>Timing two transactions without losing your mind</li>
      <li>What &quot;ready&quot; looks like before you start browsing listings</li>
      </ul>
      </div>
      </section>
      {/* VIDEO — Script 8 — After Closing. Drop the YouTube ID (or a self-hosted src)
          on the VideoEmbed below once the studio edit is delivered:
          <VideoEmbed title="…" youtubeId="abc123" /> */}
      <section className="video-section">
      <div className="wrap">
      <div className="vs-head">
      <div className="eyebrow">After Closing</div>
      <h2>Closing isn&apos;t goodbye</h2>
      <p>Most people never hear from their lender again. We do it differently.</p>
      </div>
      <VideoEmbed title="Closing isn't goodbye" />
      </div>
      </section>
      <section className="final">
      <div className="wrap">
      <h2>Already an MMG client? This is all included.</h2>
      <p>Closing wasn&apos;t goodbye. Reach out any time — about your mortgage, your equity, your plans, or a question that&apos;s been bugging you. Not an MMG client yet? The door&apos;s open.</p>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
      <Link className="btn btn-primary" href="/#contact">Start a Conversation</Link>
      </div>
      </div>
      </section>
    </>
  );
}
