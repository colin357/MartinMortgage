import type { Metadata } from "next";
import VideoEmbed from "@/components/mmg/VideoEmbed";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The MMG Way — A Mortgage Process Built Around Confidence",
  description: "The Confidence Chain: how Martin Mortgage Group turns uncertainty into clarity, strategy, preparation and confidence at every step of the mortgage process.",
  alternates: { canonical: "/mmg-way" },
  openGraph: {
    title: "The MMG Way — A Mortgage Process Built Around Confidence | Martin Mortgage Group",
    description: "The Confidence Chain: how Martin Mortgage Group turns uncertainty into clarity, strategy, preparation and confidence at every step of the mortgage process.",
    url: "/mmg-way",
  },
};

export default function Page() {
  return (
    <>
      <header className="hero page-hero">
      <div className="wrap hero-grid">
      <div>
      <div className="eyebrow">The MMG Way</div>
      <h1 style={{ fontSize: "clamp(40px,5.4vw,66px)" }}>A Mortgage Process Built Around <em>Confidence.</em></h1>
      <p className="lead">Most mortgage companies are built around processing loans. Martin Mortgage Group is built around something different: making sure you understand what&apos;s happening, why it&apos;s happening, and what happens next — at every single step.</p>
      <div className="hero-ctas">
      <Link className="btn btn-primary" href="/#contact">Start a Conversation</Link>
      <a className="textlink" href="#chain">See How It Works ↓</a>
      </div>
      <div className="fairway-badge"><span className="pb">Powered by</span><Image priority src="/images/mmg/fairway-logo.png" width={420} height={156} alt="Fairway Home Mortgage" /></div>
      </div>
      <div className="hero-photo">
      <div className="photo-frame"><Image src="/images/mmg/michael-mmgway-hero.jpg" width={900} height={1347} alt="Michael Martin, Martin Mortgage Group" sizes="(max-width: 900px) 100vw, 45vw" /></div>
      </div>
      </div>
      </header>
      <section className="problem" style={{ paddingTop: "0" }}>
      <div className="wrap">
      <div className="eyebrow">Why the Confidence Chain Exists</div>
      <h2 style={{ fontSize: "clamp(32px,4.4vw,54px)", maxWidth: "880px", marginBottom: "32px" }}>Nobody walks into a mortgage feeling confident. <span className="accent">That&apos;s the whole point.</span></h2>
      <div className="problem-cols">
      <div>
      <p>People come to a lender with uncertainty. Can I afford this? Should I wait? Which loan? What happens next? Am I making the right call?</p>
      <p>Most of the industry answers those questions with a rate quote and an application link. We think that&apos;s backwards.</p>
      <p><strong>Our job is to replace uncertainty with clarity, build a strategy around your goals, prepare you to act, execute exceptionally well — and hand you the confidence to move forward.</strong></p>
      <p>We call that the Confidence Chain. Every conversation, every update, and every handoff on our team is designed to leave you more confident than it found you.</p>
      </div>
      <div className="q-stack">
      <div className="q">&quot;Can I afford this?&quot;</div>
      <div className="q">&quot;Should I buy now or wait?&quot;</div>
      <div className="q">&quot;Which loan should I use?&quot;</div>
      <div className="q">&quot;What happens next?&quot;</div>
      </div>
      </div>
      </div>
      </section>
      <section className="chain" id="chain" style={{ background: "#fff" }}>
      <div className="wrap" style={{ maxWidth: "900px" }}>
      <div className="eyebrow">The Six Links</div>
      <h2 style={{ fontSize: "clamp(34px,4.6vw,56px)", marginBottom: "20px" }}>From &quot;I don&apos;t know&quot; to &quot;we&apos;ve got this.&quot;</h2>
      <div className="deep-link fade-up"><div className="dnum">01</div><div>
      <h3>Clarity</h3><div className="dsub">I understand where I stand.</div>
      <p>Before we talk about loans, we talk about you. Your goals, your worries, your timeline, your numbers. Most mortgage problems aren&apos;t loan problems — they&apos;re understanding problems. We fix that first.</p>
      </div></div>
      <div className="deep-link fade-up"><div className="dnum">02</div><div>
      <h3>Strategy</h3><div className="dsub">I understand my options.</div>
      <p>There is rarely only one way to structure a mortgage. Down payment size, loan type, timing, and how a purchase fits your bigger financial picture all involve tradeoffs. We lay them out in plain English and build the strategy around what you&apos;re actually trying to accomplish — even when the right answer is &quot;not yet.&quot;</p>
      </div></div>
      <div className="deep-link fade-up"><div className="dnum">03</div><div>
      <h3>Preparation</h3><div className="dsub">I&apos;m ready when the opportunity comes.</div>
      <p>Confidence comes from being prepared before the pressure starts. Documentation gathered, pre-approval in hand, questions answered — so when you find the house, you&apos;re competing from a position of strength instead of scrambling.</p>
      </div></div>
      <div className="deep-link fade-up"><div className="dnum">04</div><div>
      <h3>Confidence</h3><div className="dsub">I know why I&apos;m making this decision.</div>
      <p>The goal isn&apos;t simply approval. The goal is understanding. When you know the numbers, the risks, and the plan, the decision stops feeling like a leap and starts feeling like a step.</p>
      </div></div>
      <div className="deep-link fade-up"><div className="dnum">05</div><div>
      <h3>Execution</h3><div className="dsub">I know my team has this handled.</div>
      <p>Communication, deadlines, documentation, and details are managed by people who know exactly what they own. You&apos;re never wondering who has the ball, because someone always does — and you&apos;ll hear from them before you have to ask.</p>
      </div></div>
      <div className="deep-link fade-up"><div className="dnum">06</div><div>
      <h3>Relationship</h3><div className="dsub">I know who to call when life changes.</div>
      <p>Closing isn&apos;t goodbye. Rates change, equity grows, families grow, plans change. MMG stays your mortgage and homeownership resource long after the moving boxes are gone.</p>
      </div></div>
      </div>
      </section>
      <section className="story">
      <div className="wrap">
      <div className="eyebrow on-dark">The Communication Promise</div>
      <h2 style={{ fontSize: "clamp(32px,4.4vw,52px)", color: "#fff", maxWidth: "800px", marginBottom: "20px" }}>You shouldn&apos;t have to ask us what&apos;s happening.</h2>
      <p style={{ color: "rgba(255,255,255,.75)", maxWidth: "640px", fontSize: "17px" }}>Every lender says they communicate well. Here&apos;s the difference between saying it and doing it.</p>
      <div className="msg-compare">
      <div className="msg vague fade-up">
      <span className="m-tag">What most people get</span>
      <p>&quot;Your loan is moving along.&quot;</p>
      </div>
      <div className="msg real fade-up">
      <span className="m-tag">What MMG clients get</span>
      <p>&quot;Your appraisal is back and we&apos;re good there. Underwriting has reviewed the file and we have two remaining items. Jodie will contact you this afternoon about those. We&apos;re still on schedule for your closing on Friday.&quot;</p>
      </div>
      </div>
      <p style={{ color: "rgba(255,255,255,.7)", marginTop: "40px", fontSize: "16px", maxWidth: "640px" }}>Specific. Proactive. Before you had to wonder. That&apos;s what fanatical proactive communication actually means — and it&apos;s the standard for every person on this team.</p>
      </div>
      </section>
      <section className="michael">
      <div className="wrap michael-grid">
      <div>
      <div className="eyebrow">How Handoffs Work</div>
      <h2 style={{ fontSize: "clamp(30px,4vw,46px)" }}>You&apos;re not being passed around. You&apos;re moving through the chain.</h2>
      <p>In a lot of mortgage operations, a handoff is where things fall apart. The person who knew your story disappears, and someone new starts from zero.</p>
      <p>MMG is intentionally structured around ownership. Michael owns your strategy. Nicole owns momentum. Jodie owns the details and the path to clear-to-close. Christy owns access. Alex owns the experience and the relationship after closing.</p>
      <p className="creed">Nobody simply hands off a loan. We hand off confidence.</p>
      <p>When your file moves from one person to the next, your story moves with it — and you&apos;ll know exactly who has it, what they&apos;re doing, and when you&apos;ll hear from them.</p>
      </div>
      <div className="michael-photo">
      <div className="photo-frame"><Image src="/images/mmg/michael-mmgway-conversation.jpg" width={900} height={1347} alt="Michael Martin in conversation" sizes="(max-width: 900px) 100vw, 45vw" /></div>
      </div>
      </div>
      </section>
      <section className="pathways">
      <div className="wrap">
      <div className="eyebrow">What to Expect</div>
      <h2 style={{ marginBottom: "48px" }}>Clear expectations. On both sides of the deal.</h2>
      <div className="expect-grid">
      <div className="expect-col fade-up">
      <h3>If you&apos;re a client</h3>
      <ul>
      <li>A real conversation before any recommendation</li>
      <li>Options explained in plain English, with tradeoffs</li>
      <li>Honest advice — including &quot;not yet&quot; when that&apos;s the truth</li>
      <li>Proactive updates before you have to ask</li>
      <li>One team, clear ownership, no wondering who has the ball</li>
      <li>A relationship that continues after closing</li>
      </ul>
      </div>
      <div className="expect-col dark fade-up">
      <h3>If you&apos;re a Realtor</h3>
      <ul>
      <li>Pre-approvals your listing agents can trust</li>
      <li>Proactive status updates to you, not just the client</li>
      <li>Financing positioned to strengthen your client&apos;s offer</li>
      <li>Problems flagged early and solved, not hidden</li>
      <li>On-time closings treated as the standard, not the goal</li>
      <li>Clients who come back to you feeling great about the process</li>
      </ul>
      </div>
      </div>
      </div>
      </section>
      <section className="values" style={{ paddingTop: "90px" }}>
      <div className="wrap">
      <div className="eyebrow">When Something Goes Wrong</div>
      <h2 style={{ fontSize: "clamp(30px,4vw,46px)", maxWidth: "860px", marginBottom: "28px" }}>Real estate transactions hit bumps. Here&apos;s what happens when ours do.</h2>
      <div className="problem-cols">
      <div>
      <p style={{ fontSize: "17px", color: "var(--slate)", marginBottom: "16px" }}>Appraisals come in short. Underwriters ask for one more document. Sellers get difficult. Anyone who promises a bump-free transaction every time is selling you something.</p>
      <p style={{ fontSize: "17px", color: "var(--slate)", marginBottom: "16px" }}>What we promise instead: <strong>you&apos;ll hear it from us first, with a plan attached.</strong> Problems at MMG don&apos;t get passed around, and they don&apos;t get hidden until they&apos;re emergencies. They get owned, communicated, and solved.</p>
      <p style={{ fontSize: "17px", color: "var(--slate)" }}>That&apos;s usually when clients figure out why the Confidence Chain matters. Anybody can look good when everything goes smoothly.</p>
      </div>
      <div className="q-stack">
      <div className="q">We tell you first. Before you have to find out.</div>
      <div className="q">Every problem comes with a plan, not just bad news.</div>
      <div className="q">One owner per problem. It gets solved.</div>
      </div>
      </div>
      </div>
      </section>
      {/* VIDEO — Script 2 — The MMG Way. Drop the YouTube ID (or a self-hosted src)
          on the VideoEmbed below once the studio edit is delivered:
          <VideoEmbed title="…" youtubeId="abc123" /> */}
      <section className="video-section">
      <div className="wrap">
      <div className="vs-head">
      <div className="eyebrow">See It In Action</div>
      <h2>What fanatical proactive communication actually means</h2>
      <p>Every mortgage company says they communicate well. Here&apos;s the difference between saying it and doing it.</p>
      </div>
      <VideoEmbed title="What fanatical proactive communication actually means" />
      </div>
      </section>
      <section className="final">
      <div className="wrap">
      <h2>Experience it for yourself.</h2>
      <p>The Confidence Chain starts with one conversation about what you&apos;re trying to accomplish. No pressure. No obligation.</p>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
      <Link className="btn btn-primary" href="/#contact">Start a Conversation</Link>
      <a className="btn btn-outline on-dark" href="https://fairway.tidalwave.ai/login" target="_blank" rel="noopener">Get Pre-Approved</a>
      </div>
      </div>
      </section>
    </>
  );
}
