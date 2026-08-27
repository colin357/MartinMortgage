import type { Metadata } from "next";
import VideoEmbed from "@/components/mmg/VideoEmbed";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Move-Up Buyers — Buy Before You Sell & Move-Up Strategy",
  description: "Buy before you sell? Sell first? Use your equity? Martin Mortgage Group helps move-up buyers in NC, SC, VA & GA build the right strategy for getting from this house to the next one.",
  alternates: { canonical: "/move-up-buyers" },
  openGraph: {
    title: "Move-Up Buyers — Buy Before You Sell & Move-Up Strategy | Martin Mortgage Group",
    description: "Buy before you sell? Sell first? Use your equity? Martin Mortgage Group helps move-up buyers in NC, SC, VA & GA build the right strategy for getting from this house to the next one.",
    url: "/move-up-buyers",
  },
};

export default function Page() {
  return (
    <>
      <header className="hero page-hero" style={{ padding: "182px 0 90px" }}>
      <div className="wrap hero-grid">
      <div>
      <div className="eyebrow">Move-Up Buyers</div>
      <h1 style={{ fontSize: "clamp(36px,4.8vw,58px)" }}>The next house is easy to fall in love with. <em>Getting there is the hard part.</em></h1>
      <p className="lead">You already own a home. Now the questions get more interesting: Sell first? Buy first? Where does the down payment come from? What happens to your current mortgage? This is strategy territory — and it&apos;s where we do our best work.</p>
      <div className="hero-ctas">
      <Link className="btn btn-primary" href="/#contact">Build My Move-Up Strategy</Link>
      <a className="textlink" href="#story">Read a Real Move-Up Story ↓</a>
      </div>
      <div className="fairway-badge"><span className="pb">Powered by</span><Image priority src="/images/mmg/fairway-logo.png" width={420} height={156} alt="Fairway Home Mortgage" /></div>
      </div>
      <div className="hero-photo">
      <div className="photo-frame"><Image src="/images/mmg/michael-moveup-conversation.jpg" width={900} height={1347} alt="Michael Martin discussing move-up mortgage strategy" sizes="(max-width: 900px) 100vw, 45vw" /></div>
      </div>
      </div>
      </header>
      <section className="pathways" style={{ paddingTop: "0" }}>
      <div className="wrap">
      <div className="eyebrow">The Core Question</div>
      <h2 style={{ fontSize: "clamp(32px,4.4vw,52px)", maxWidth: "820px" }}>Sell first, or buy first?</h2>
      <div className="path-compare">
      <div className="pc-col fade-up">
      <h3>Sell First</h3>
      <div className="pc-sub">The traditional path</div>
      <ul>
      <li>Your equity is in hand for the next down payment</li>
      <li>No overlap carrying two homes</li>
      <li>You know exactly what your sale netted</li>
      <li>But: you may need temporary housing and could move twice</li>
      <li>And: shopping under time pressure after selling</li>
      </ul>
      </div>
      <div className="pc-col dark fade-up">
      <h3>Buy First</h3>
      <div className="pc-sub">The path most people don&apos;t realize is available</div>
      <ul>
      <li>Move once, on your timeline</li>
      <li>No contingent offer weakening your position</li>
      <li>Sell your current home empty, staged, unhurried</li>
      <li>But: requires a financing strategy for the overlap</li>
      <li>And: the numbers have to be structured carefully</li>
      </ul>
      </div>
      <div className="pc-verdict fade-up">There&apos;s no universally right answer. There&apos;s a right answer for your equity, your reserves, your market, and your tolerance for moving boxes. That&apos;s what the strategy conversation figures out.</div>
      </div>
      </div>
      </section>
      <section className="values" style={{ paddingTop: "90px" }}>
      <div className="wrap">
      <div className="eyebrow">Sound Familiar?</div>
      <h2 style={{ fontSize: "clamp(30px,4.2vw,48px)", marginBottom: "44px" }}>Three conversations we have every week.</h2>
      <div className="path-grid">
      <div className="scenario fade-up">
      <div className="sq">We found the house, but we haven&apos;t even listed ours.</div>
      <p>The clock is ticking and the math feels impossible. It usually isn&apos;t.</p>
      <div className="look">What we map: your equity, bridge options, qualifying with both homes</div>
      </div>
      <div className="scenario fade-up">
      <div className="sq">All our cash is tied up in this house.</div>
      <p>Your equity can often become your down payment — before you sell.</p>
      <div className="look">What we map: equity access strategies, timing, payment overlap</div>
      </div>
      <div className="scenario fade-up">
      <div className="sq">We refuse to move twice.</div>
      <p>Fair. Nobody wants to live out of storage units for three months.</p>
      <div className="look">What we map: buy-first structures, closing timing, reserves</div>
      </div>
      </div>
      </div>
      </section>
      <section className="story" id="story">
      <div className="wrap">
      <div className="eyebrow on-dark">A Real Move-Up Story</div>
      <p className="story-quote">We thought we had to sell our house before we could buy the next one.</p>
      <p style={{ color: "rgba(255,255,255,.75)", maxWidth: "680px", margin: "-36px 0 48px", fontSize: "16px" }}>They found the house they wanted, but most of their cash was tied up in their current home. They were worried about carrying two homes, didn&apos;t want to write a contingent offer, and weren&apos;t sure moving forward was even possible. So we started with the numbers.</p>
      <div className="story-steps">
      <div className="story-step fade-up"><div className="stg">Clarity</div><p>We looked at their equity, available cash, future sale proceeds, and what temporarily owning both homes would actually mean.</p></div>
      <div className="story-step fade-up"><div className="stg">Strategy</div><p>Then we showed them several ways the purchase could be structured, including options they didn&apos;t know existed. The question changed from &quot;Can we even do this?&quot; to &quot;Which option makes the most sense for us?&quot;</p></div>
      <div className="story-step fade-up"><div className="stg">Confidence</div><p>Once they understood the numbers, the risks, and the plan, they made the decision with confidence.</p></div>
      <div className="story-step fade-up"><div className="stg">Execution</div><p>MMG worked alongside their Realtor, managed the financing, and kept everyone informed through closing. They bought the new home and sold their previous home afterward.</p></div>
      </div>
      <p className="story-close">&quot;We went from thinking there was no way we could make this move to feeling completely comfortable with the plan. Michael didn&apos;t pressure us to buy. He showed us what was possible, explained the numbers, and gave us the confidence to make the decision ourselves.&quot;</p>
      </div>
      </section>
      <section className="michael">
      <div className="wrap">
      <div className="eyebrow">What We Map Out Together</div>
      <h2 style={{ fontSize: "clamp(30px,4.2vw,46px)", maxWidth: "820px", marginBottom: "44px" }}>Your move-up strategy session covers the whole board.</h2>
      <div className="expect-grid">
      <div className="expect-col fade-up" style={{ background: "var(--ivory)" }}>
      <h3>The money questions</h3>
      <ul>
      <li>How much equity you actually have — and how to access it</li>
      <li>Where the down payment comes from, in each scenario</li>
      <li>What your new payment looks like, with real numbers</li>
      <li>Cash reserves: what you need, what you keep</li>
      <li>What happens to your current mortgage</li>
      </ul>
      </div>
      <div className="expect-col dark fade-up">
      <h3>The timing questions</h3>
      <ul>
      <li>Sell-first vs. buy-first for your specific numbers</li>
      <li>Whether a contingent offer helps or hurts you here</li>
      <li>How to sequence two closings without losing your mind</li>
      <li>Bridge and overlap strategies, explained in plain English</li>
      <li>What &quot;ready&quot; looks like before you fall in love with a listing</li>
      </ul>
      </div>
      </div>
      </div>
      </section>
      {/* VIDEO — Script 4 — Move-Up Buyers. Drop the YouTube ID (or a self-hosted src)
          on the VideoEmbed below once the studio edit is delivered:
          <VideoEmbed title="…" youtubeId="abc123" /> */}
      <section className="video-section">
      <div className="wrap">
      <div className="vs-head">
      <div className="eyebrow">Watch This First</div>
      <h2>Can you buy before you sell?</h2>
      <p>The question Michael gets every single week — and why the answer is usually “you&apos;re not stuck.”</p>
      </div>
      <VideoEmbed title="Can you buy before you sell?" />
      </div>
      </section>
      <section className="final">
      <div className="wrap">
      <h2>Fall in love with the house. We&apos;ll handle the &quot;how.&quot;</h2>
      <p>One strategy conversation tells you what&apos;s actually possible with your equity, your timing, and your goals — before the pressure starts.</p>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
      <Link className="btn btn-primary" href="/#contact">Build My Move-Up Strategy</Link>
      </div>
      <p className="small">No pressure. No obligation. Just a conversation about what you&apos;re trying to accomplish.</p>
      </div>
      </section>
    </>
  );
}
