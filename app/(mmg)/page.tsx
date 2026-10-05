import type { Metadata } from "next";
import VideoEmbed from "@/components/mmg/VideoEmbed";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/mmg/ContactForm";
import ReviewSlider from "@/components/mmg/ReviewSlider";
import { testimonials } from "@/lib/testimonials";

/** The homepage welcome video is hidden until the studio edit is ready. */
const SHOW_WELCOME_VIDEO = false;

const pathways = [
  { title: "Buy My First Home", blurb: "I need someone to show me where to start.", href: "/first-time-buyers" },
  { title: "Buy My Next Home", blurb: "I already own and need a strategy for what’s next.", href: "/move-up-buyers" },
  { title: "Buy Before I Sell", blurb: "I found the next house but still own my current one.", href: "/move-up-buyers" },
  { title: "Relocate", blurb: "I’m moving to NC, SC, VA or GA and need a mortgage team on the ground.", href: "/relocation" },
  { title: "Build or Buy New", blurb: "New construction, building or renovating, and I want to understand the financing.", href: "/new-construction-renovation" },
  { title: "Use My Home Equity", blurb: "I want to understand what my equity could help me accomplish.", href: "/homeowners#equity" },
  { title: "Self-Employed or Investing", blurb: "My income doesn’t fit in a box, or I want the property to qualify on its rents.", href: "/flexible-financing" },
];

const values = [
  { tag: "Fanatical Proactive Communication", title: "You shouldn’t have to ask us what’s happening.", body: "We communicate before uncertainty has a chance to grow." },
  { tag: "Details Matter", title: "Small details can become big problems.", body: "We sweat them." },
  { tag: "Authentic", title: "We’ll tell you what we actually think.", body: "Sometimes good advice means recommending something different from what you expected." },
  { tag: "Committed & Determined", title: "Problems don’t get passed around.", body: "They get solved." },
  { tag: "Positive Energy", title: "Buying a home is stressful enough.", body: "We don’t need to add to it." },
  { tag: "Have Fun", title: "This is a big deal.", body: "That doesn’t mean it has to be miserable." },
];

export const metadata: Metadata = {
  title: {
    absolute: "Michael Martin — Raleigh Mortgage Advisor | Martin Mortgage Group",
  },
  description: "Martin Mortgage Group helps homebuyers and homeowners understand their options, build the right mortgage strategy, and move forward with confidence. Licensed in NC, SC, VA & GA. Rooted in Raleigh.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Michael Martin — Raleigh Mortgage Advisor | Martin Mortgage Group",
    description: "Martin Mortgage Group helps homebuyers and homeowners understand their options, build the right mortgage strategy, and move forward with confidence. Licensed in NC, SC, VA & GA. Rooted in Raleigh.",
    url: "/",
  },
};

export default function Page() {
  return (
    <>
      {/* HERO */}

      <header className="hero" id="top">
      <div className="wrap hero-grid">
      <div>
      <h1>Confidence to <em>Move Forward.</em></h1>
      <p className="lead">Buying a home comes with big questions. You deserve more than a rate and a pre-approval. You deserve a mortgage team that helps you understand your options, build the right strategy, and move forward with confidence.</p>
      <div className="hero-ctas">
      <a className="btn btn-primary" href="https://fairway.tidalwave.ai/signup/d1lbzp" target="_blank" rel="noopener">Apply Now</a>
      </div>
      <div className="hero-meta">
      <strong>Martin Mortgage Group</strong><br />
              Licensed across NC, SC, VA &amp; GA. Rooted in Raleigh.
            </div>
      </div>
      <div className="hero-photo">
      <div className="photo-frame">
      <Image src="/images/mmg/michael-home-hero.jpg" width={900} height={1347} alt="Michael Martin, Raleigh mortgage advisor" sizes="(max-width: 900px) 100vw, 45vw" />
      </div>
      <div className="hero-badge">
      <div className="num">400+</div>
      <div className="lbl">5-Star Google Reviews</div>
      </div>
      </div>
      </div>
      </header>
      {/* TRUST */}

      <section className="trust">
      <div className="wrap">
      <div className="eyebrow on-dark">Experience You Can Lean On</div>
      <div className="trust-grid">
      <div className="stat fade-up"><div className="num">$750M+</div><div className="lbl">Career Mortgage Production</div></div>
      <div className="stat fade-up"><div className="num">2,500+</div><div className="lbl">Families Served</div></div>
      <div className="stat fade-up"><div className="num">400+</div><div className="lbl">5-Star Google Reviews</div></div>
      <div className="stat fade-up"><div className="num">1,000+</div><div className="lbl">5-Star Online Reviews</div></div>
      <div className="stat fade-up"><div className="num">Top 1%</div><div className="lbl">Mortgage Originator Since 2019</div></div>
      <div className="stat fade-up"><div className="num">20+ Yrs</div><div className="lbl">Mortgage Experience</div></div>
      </div>
      </div>
      </section>
      {/* THE REAL PROBLEM */}

      <section className="problem">
      <div className="wrap">
      <div className="eyebrow">The Real Problem</div>
      <h2>Most people don&apos;t need more mortgage information. <span className="accent">They need to know what to do with it.</span></h2>
      <div className="problem-body">
      <p>Rates matter. Payments matter. Loan programs matter.</p>
      <p>But none of those things mean much until we understand the person making the decision. What are you trying to accomplish? What are you worried about? What&apos;s keeping you from moving forward?</p>
      <p><strong>That&apos;s where the MMG Way starts.</strong></p>
      </div>
      </div>
      </section>
      {/* CONFIDENCE CHAIN */}

      <section className="chain" id="mmg-way">
      <div className="wrap">
      <div className="chain-head">
      <h2>From &quot;I Don&apos;t Know&quot; to &quot;We&apos;ve Got This.&quot;</h2>
      </div>
      <div className="chain-track" id="chainTrack">
      <div className="chain-line"></div>
      <div className="chain-fill" id="chainFill"></div>
      <div className="link-item"><div className="link-node">01</div>
      <div className="tag">Clarity</div><h3>I understand where I stand.</h3>
      <p>We start by understanding the client before recommending the mortgage.</p>
      </div>
      <div className="link-item"><div className="link-node">02</div>
      <div className="tag">Strategy</div><h3>I understand my options.</h3>
      <p>There is rarely only one way to structure a mortgage. We explain the tradeoffs and build the strategy around your actual goals.</p>
      </div>
      <div className="link-item"><div className="link-node">03</div>
      <div className="tag">Preparation</div><h3>I&apos;m ready when the opportunity comes.</h3>
      <p>Confidence comes from being prepared before the pressure starts.</p>
      </div>
      <div className="link-item"><div className="link-node">04</div>
      <div className="tag">Confidence</div><h3>I know why I&apos;m making this decision.</h3>
      <p>The goal isn&apos;t simply approval. The goal is understanding.</p>
      </div>
      <div className="link-item"><div className="link-node">05</div>
      <div className="tag">Execution</div><h3>I know my team has this handled.</h3>
      <p>Communication, deadlines, documentation and details are managed by people who know exactly what they own.</p>
      </div>
      <div className="link-item"><div className="link-node">06</div>
      <div className="tag">Relationship</div><h3>I know who to call when life changes.</h3>
      <p>Closing isn&apos;t goodbye. MMG remains your mortgage and homeownership resource long after the moving boxes are gone.</p>
      </div>
      </div>
      </div>
      </section>
      {/* CONFIDENCE STORY */}

      <section className="story">
      <div className="wrap">
      <p className="story-quote">We thought we had to sell our house before we could buy the next one.</p>
      <p style={{ color: "rgba(255,255,255,.75)", maxWidth: "680px", margin: "-36px 0 48px", fontSize: "16px" }}>They found the house they wanted, but most of their cash was tied up in their current home. They were worried about carrying two homes, didn&apos;t want to write a contingent offer, and weren&apos;t sure moving forward was even possible. So we started with the numbers.</p>
      <div className="story-steps">
      <div className="story-step fade-up"><div className="stg">Clarity</div><p>We looked at their equity, available cash, future sale proceeds, and what temporarily owning both homes would actually mean.</p></div>
      <div className="story-step fade-up"><div className="stg">Strategy</div><p>Then we showed them several ways the purchase could be structured, including options they didn&apos;t know existed. The question changed from &quot;Can we even do this?&quot; to &quot;Which option makes the most sense for us?&quot;</p></div>
      <div className="story-step fade-up"><div className="stg">Confidence</div><p>Once they understood the numbers, the risks, and the plan, they made the decision with confidence.</p></div>
      <div className="story-step fade-up"><div className="stg">Execution</div><p>MMG worked alongside their Realtor, managed the financing, and kept everyone informed through closing. They bought the new home and sold their previous home afterward.</p></div>
      </div>
      <p className="story-close">&quot;We went from thinking there was no way we could make this move to feeling completely comfortable with the plan. Michael didn&apos;t pressure us to buy. He showed us what was possible, explained the numbers, and gave us the confidence to make the decision ourselves.&quot;</p>
      <a className="btn btn-outline on-dark" href="#reviews">Read More Confidence Stories</a>
      </div>
      </section>
      {/* MEET MICHAEL */}

      <section className="michael" id="michael">
      <div className="wrap michael-grid">
      <div className="michael-photo">
      <div className="photo-frame"><Image src="/images/mmg/michael-home-studio.jpg" width={900} height={1347} alt="Michael Martin in the Beyond the Closing Table studio" sizes="(max-width: 900px) 100vw, 45vw" /></div>
      </div>
      <div>
      <div className="eyebrow">Meet Michael</div>
      <h2>I&apos;ve been doing this a long time. I still think it&apos;s about people.</h2>
      <p>For more than two decades, Michael Martin has helped people navigate changing markets, changing interest rates and changing seasons of life. He&apos;s seen mortgage markets boom, crash, refinance, recover and reinvent themselves.</p>
      <p>But the job hasn&apos;t really changed.</p>
      <div className="mini-stats">
      <div><strong>$750M+</strong><span>Career Production</span></div>
      <div><strong>2,500+</strong><span>Families Served</span></div>
      <div><strong>Top 1%</strong><span>Since 2019</span></div>
      </div>
      <p>Off the clock, you&apos;ll find him on a Raleigh golf course, in the kitchen, or at a Canes game. This is home. It has been for a long time.</p>
      </div>
      </div>
      </section>
      {/* PATHWAYS */}

      <section className="pathways" id="pathways">
      <div className="wrap pw-grid">
      <div className="pw-head">
      <div className="eyebrow">Start Where You Are</div>
      <h2>What are you trying to do?</h2>
      <p className="sub">Not sure which loan you need? Good. That&apos;s our job, not yours.</p>
      <a className="btn btn-primary" href="#contact">Not Sure? Start a Conversation</a>
      </div>
      <ul className="pw-list">
      {pathways.map((p, i) => (
        <li key={p.title}>
          <Link className="pw-row" href={p.href as never}>
            <span className="pw-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            <span className="pw-text">
              <span className="pw-title">{p.title}</span>
              <span className="pw-blurb">{p.blurb}</span>
            </span>
            <span className="pw-go" aria-hidden="true">→</span>
          </Link>
        </li>
      ))}
      </ul>
      </div>
      </section>
      {/* VALUES */}

      <section className="values">
      <div className="wrap">
      <div className="eyebrow">The MMG Way</div>
      <h2>Relationships First. <span className="accent">Excellence Always.</span></h2>
      <div className="val-grid">
      {values.map((v, i) => (
        <div className="val fade-up" key={v.tag}>
          <span className="val-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
          <div className="vt">{v.tag}</div>
          <h3>{v.title}</h3>
          <p>{v.body}</p>
        </div>
      ))}
      </div>
      </div>
      </section>
      {/* REVIEWS */}

      <section className="reviews" id="reviews">
      <div className="wrap">
      <div className="eyebrow">Client Reviews</div>
      <h2>Don&apos;t take our word for it.</h2>
      {/* COMPLIANCE NOTE: Fairway's marketing guide says Google reviews may
          only be republished with a signed Testimonial Consent & Release form
          per reviewer (or shown through Google's official widget). Confirm
          consent is on file for each review in lib/testimonials.ts. */}
      <div className="rev-score fade-up">
      <span className="big-score">5.0</span>
      <span className="stars" style={{ fontSize: "22px", letterSpacing: "4px" }}>★★★★★</span>
      <span className="score-lbl">400+ Google Reviews</span>
      </div>
      <ReviewSlider reviews={testimonials} />
      <a className="btn btn-primary rev-cta" href="https://www.google.com/search?q=martin+mortgage+group+raleigh+reviews" target="_blank" rel="noopener">Read Our Google Reviews</a>
      </div>
      </section>
      {/* FINAL CTA */}

      {/* VIDEO — Script 1 — Homepage Welcome. Hidden for now: set
          SHOW_WELCOME_VIDEO to true to bring it back. Drop the YouTube ID (or a self-hosted src)
          on the VideoEmbed below once the studio edit is delivered:
          <VideoEmbed title="…" youtubeId="abc123" /> */}
      {SHOW_WELCOME_VIDEO && (
      <section className="video-section">
      <div className="wrap">
      <div className="vs-head">
      <div className="eyebrow">A Word From Michael</div>
      <h2>Why confidence matters more than approval</h2>
      <p>Approval is a number. Confidence is understanding that number.</p>
      </div>
      <VideoEmbed title="Why confidence matters more than approval" />
      </div>
      </section>
      )}
      <section className="final">
      <div className="wrap">
      <h2>What&apos;s keeping you from moving forward?</h2>
      <p>Buying now, six months from now, or just trying to figure out whether buying makes sense? That&apos;s exactly what the first conversation is for.</p>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
      <a className="btn btn-primary" href="#contact">Start a Conversation</a>
      <a className="btn btn-outline on-dark" href="https://fairway.tidalwave.ai/login" target="_blank" rel="noopener">Get Pre-Approved</a>
      </div>
      <p className="small">No pressure. No obligation. Just a conversation about what you&apos;re trying to accomplish.</p>
      </div>
      </section>
      {/* CONTACT */}

      <section className="contact" id="contact">
      <div className="wrap contact-grid">
      <div>
      <div className="eyebrow">Get Started</div>
      <h2>Let&apos;s talk about what you&apos;re trying to accomplish.</h2>
      <p className="sub">Send a note and a real person from MMG will follow up — usually the same business day. Prefer to talk now? Call anytime.</p>
      <div className="c-info">
      <div><div className="lbl">Call or Text</div><a href="tel:9196129978">919-612-9978</a></div>
      <div><div className="lbl">Email</div><a href="mailto:michael.martin@fairwaymc.com">michael.martin@fairwaymc.com</a></div>
      <div><div className="lbl">Web</div><a href="https://www.YourNCLender.com">YourNCLender.com</a></div>
      <div><div className="lbl">Home Base</div>Raleigh, North Carolina<br />Licensed in NC, SC, VA &amp; GA</div>
      </div>
      </div>
      <ContactForm />
      </div>
      </section>
    </>
  );
}
