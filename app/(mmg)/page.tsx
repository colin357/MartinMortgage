import type { Metadata } from "next";
import VideoEmbed from "@/components/mmg/VideoEmbed";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/mmg/ContactForm";

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
      <div className="kicker">Raleigh Mortgage Advisor · NMLS #131445</div>
      <h1>Confidence to <em>Move Forward.</em></h1>
      <p className="lead">Buying a home comes with big questions. You deserve more than a rate and a pre-approval. You deserve a mortgage team that helps you understand your options, build the right strategy, and move forward with confidence.</p>
      <div className="hero-ctas">
      <a className="btn btn-primary" href="#contact">Start a Conversation</a>
      <a className="btn btn-outline" href="https://fairway.tidalwave.ai/login" target="_blank" rel="noopener">Get Pre-Approved</a>
      <Link className="textlink" href="/meet-michael">Meet Michael →</Link>
      </div>
      <div className="hero-meta">
      <strong>Martin Mortgage Group</strong><br />
              Licensed across NC, SC, VA &amp; GA. Rooted in Raleigh.
            </div>
      <div className="fairway-badge"><span className="pb">Powered by</span><Image priority src="/images/mmg/fairway-logo.png" width={420} height={156} alt="Fairway Home Mortgage" /></div>
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
      <p className="trust-line">That&apos;s a lot of mortgages. More importantly, it&apos;s a lot of people who trusted us with a really big decision.</p>
      <p className="trust-note">Production and review figures pending final compliance verification prior to publication.</p>
      </div>
      </section>
      {/* THE REAL PROBLEM */}

      <section className="problem">
      <div className="wrap">
      <div className="eyebrow">The Real Problem</div>
      <h2>Most people don&apos;t need more mortgage information. <span className="accent">They need to know what to do with it.</span></h2>
      <div className="problem-cols">
      <div>
      <p>Rates matter. Payments matter. Loan programs matter.</p>
      <p>But none of those things mean much until we understand the person making the decision. What are you trying to accomplish? What are you worried about? What&apos;s keeping you from moving forward?</p>
      <p><strong>That&apos;s where the MMG Way starts.</strong></p>
      <p style={{ marginTop: "30px" }}><a className="textlink" href="#contact">Tell Us What You&apos;re Trying to Do →</a></p>
      </div>
      <div className="q-stack">
      <div className="q">&quot;Can I actually afford this?&quot;</div>
      <div className="q">&quot;Should I buy now or wait?&quot;</div>
      <div className="q">&quot;Can I buy before I sell?&quot;</div>
      <div className="q">&quot;Am I making the right decision?&quot;</div>
      </div>
      </div>
      </div>
      </section>
      {/* CONFIDENCE CHAIN */}

      <section className="chain" id="mmg-way">
      <div className="wrap">
      <div className="chain-head">
      <div className="eyebrow" style={{ justifyContent: "center", display: "flex" }}>The Confidence Chain</div>
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
      <div className="chain-quote fade-up">
      <p className="big">Nobody simply hands off a loan. <span className="green">We hand off confidence.</span></p>
      <p className="sub">Every conversation. Every update. Every handoff. Every detail.</p>
      </div>
      </div>
      </section>
      {/* CONFIDENCE STORY */}

      <section className="story">
      <div className="wrap">
      <div className="eyebrow on-dark">A Confidence Story</div>
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
      <p className="creed">Listen first. Tell people the truth. Explain their options. Solve problems. Sweat the details. And help people make decisions they feel good about.</p>
      <div className="mini-stats">
      <div><strong>$750M+</strong><span>Career Production</span></div>
      <div><strong>2,500+</strong><span>Families Served</span></div>
      <div><strong>Top 1%</strong><span>Since 2019</span></div>
      </div>
      <p>Off the clock, you&apos;ll find him on a Raleigh golf course, in the kitchen, or at a Canes game. This is home. It has been for a long time.</p>
      <p style={{ marginTop: "28px" }}><a className="textlink" href="#contact">Meet Michael →</a></p>
      </div>
      </div>
      </section>
      {/* PATHWAYS */}

      <section className="pathways" id="pathways">
      <div className="wrap">
      <div className="eyebrow">Start Where You Are</div>
      <h2>What are you trying to do?</h2>
      <p className="sub">Not sure which loan you need? Good. That&apos;s our job, not yours.</p>
      <div className="path-grid">
      <Link className="path-card fade-up" href="/first-time-buyers"><div><h3>Buy My First Home</h3><p>I need someone to show me where to start.</p></div><div className="go">Start Here →</div></Link>
      <Link className="path-card fade-up" href="/move-up-buyers"><div><h3>Buy My Next Home</h3><p>I already own and need a strategy for what&apos;s next.</p></div><div className="go">Explore My Options →</div></Link>
      <Link className="path-card fade-up" href="/relocation"><div><h3>Relocate</h3><p>I&apos;m moving to NC, SC, VA or GA and need a mortgage team on the ground.</p></div><div className="go">Plan My Move →</div></Link>
      <Link className="path-card fade-up" href="/move-up-buyers"><div><h3>Buy Before I Sell</h3><p>I found the next house but still own my current one.</p></div><div className="go">Show Me How This Works →</div></Link>
      <Link className="path-card fade-up" href="/new-construction-renovation"><div><h3>Build or Buy New</h3><p>I&apos;m considering new construction, building, or renovating and want to understand the financing.</p></div><div className="go">Explore My Options →</div></Link>
      <Link className="path-card fade-up" href="/homeowners#equity"><div><h3>Use My Home Equity</h3><p>I want to understand what my equity could help me accomplish.</p></div><div className="go">Explore My Equity →</div></Link>
      <Link className="path-card fade-up" href="/flexible-financing"><div><h3>Self-Employed or Investing</h3><p>My income doesn&apos;t fit in a box, or I want the property to qualify on its rents.</p></div><div className="go">See My Options →</div></Link>
      </div>
      </div>
      </section>
      {/* EDUCATION */}

      <section className="edu" id="learn">
      <div className="wrap">
      <div className="eyebrow">MMG Learning Center</div>
      <h2>Straight answers. No mortgage BS.</h2>
      <p className="sub">You shouldn&apos;t need a finance degree to understand your mortgage.</p>
      <div className="edu-grid">
      <a className="edu-card fade-up" href="#contact"><div className="edu-thumb"><div className="play">▶</div></div><div className="body"><h3>How Much Home Can I Really Afford?</h3><div className="len">2 min watch</div></div></a>
      <a className="edu-card fade-up" href="#contact"><div className="edu-thumb"><div className="play">▶</div></div><div className="body"><h3>Should I Wait for Rates to Come Down?</h3><div className="len">3 min watch</div></div></a>
      <a className="edu-card fade-up" href="#contact"><div className="edu-thumb"><div className="play">▶</div></div><div className="body"><h3>Should I Put 20% Down?</h3><div className="len">2 min watch</div></div></a>
      <a className="edu-card fade-up" href="#contact"><div className="edu-thumb"><div className="play">▶</div></div><div className="body"><h3>Can I Buy Before I Sell?</h3><div className="len">3 min watch</div></div></a>
      <a className="edu-card fade-up" href="#contact"><div className="edu-thumb"><div className="play">▶</div></div><div className="body"><h3>Builder Incentives: What&apos;s the Catch?</h3><div className="len">3 min watch</div></div></a>
      <a className="edu-card fade-up" href="#contact"><div className="edu-thumb"><div className="play">▶</div></div><div className="body"><h3>What NOT to Do Before Closing</h3><div className="len">2 min watch</div></div></a>
      </div>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}><a className="btn btn-primary" href="#contact">Explore the MMG Learning Center</a><Link className="btn btn-outline" href="/financial-literacy">Free Financial Literacy Resources</Link><Link className="btn btn-outline" href="/calculators">Mortgage Calculators</Link></div>
      </div>
      </section>
      {/* CLIENT JOURNEY */}

      <section className="journey">
      <div className="wrap">
      <div className="eyebrow on-dark">The Client Journey</div>
      <h2>From &quot;Could we?&quot; to &quot;Welcome home.&quot;</h2>
      <div className="journey-grid">
      <div className="j-step fade-up"><div className="num">01 — TALK</div><h3>What are you trying to accomplish?</h3><p>Before we recommend anything, we listen.</p></div>
      <div className="j-step fade-up"><div className="num">02 — PLAN</div><h3>Let&apos;s build the strategy.</h3><p>We&apos;ll review the numbers, options and tradeoffs.</p></div>
      <div className="j-step fade-up"><div className="num">03 — PREPARE</div><h3>Get ready before opportunity knocks.</h3><p>Pre-approval, documentation and planning.</p></div>
      <div className="j-step fade-up"><div className="num">04 — COMPETE</div><h3>Found the house? Let&apos;s go.</h3><p>MMG and your Realtor position the financing and keep the transaction moving.</p></div>
      <div className="j-step fade-up"><div className="num">05 — CLOSE</div><h3>No mystery. No surprises.</h3><p>Our team manages the details and keeps everyone informed.</p></div>
      <div className="j-step fade-up"><div className="num">06 — STAY CONNECTED</div><h3>Closing isn&apos;t goodbye.</h3><p>Welcome to the MMG family.</p></div>
      </div>
      </div>
      </section>
      {/* TEAM */}

      <section className="team" id="team">
      <div className="wrap">
      <div className="eyebrow">The Team Behind the Experience</div>
      <h2>You get Michael. And you get a team.</h2>
      <p className="sub">Each person at MMG owns a specific part of your experience. You&apos;re not being passed around. You&apos;re moving through the Confidence Chain.</p>
      <div className="team-banner"><Image src="/images/mmg/team-banner-home.jpg" width={1400} height={787} alt="The Martin Mortgage Group team in Raleigh" sizes="(max-width: 1180px) 100vw, 1180px" /></div>
      <div className="team-grid">
      <div className="tm-card fade-up"><div className="tm-photo"><Image src="/images/mmg/team-michael-martin.jpg" width={400} height={400} alt="Michael Martin" sizes="(max-width: 768px) 45vw, 220px" /></div><h3>Michael Martin</h3><div className="role">Advisor &amp; Strategist</div><p>Owns your strategy. The plan, the options, the honest advice.</p></div>
      <div className="tm-card fade-up"><div className="tm-photo"><Image src="/images/mmg/team-nicole-blakeman.jpg" width={400} height={400} alt="Nicole Blakeman" sizes="(max-width: 768px) 45vw, 220px" /></div><h3>Nicole Blakeman</h3><div className="role">Partner</div><p>Owns momentum. Keeps your file, your Realtor and your timeline aligned.</p></div>
      <div className="tm-card fade-up"><div className="tm-photo"><Image src="/images/mmg/team-jodie-stueve.jpg" width={400} height={400} alt="Jodie Stueve" sizes="(max-width: 768px) 45vw, 220px" /></div><h3>Jodie Stueve</h3><div className="role">Operations</div><p>Owns the details. Documentation, deadlines and the path to clear-to-close.</p></div>
      <div className="tm-card fade-up"><div className="tm-photo"><Image src="/images/mmg/team-christy-evans.jpg" width={400} height={400} alt="Christy Evans" sizes="(max-width: 768px) 45vw, 220px" /></div><h3>Christy Evans</h3><div className="role">Executive Assistant</div><p>Owns access. Keeps Michael available, responsive and focused on your strategy.</p></div>
      <div className="tm-card fade-up"><div className="tm-photo"><Image src="/images/mmg/team-alex-jamieson.jpg" width={400} height={400} alt="Alex Jamieson" sizes="(max-width: 768px) 45vw, 220px" /></div><h3>Alex Jamieson</h3><div className="role">Client Experience</div><p>Owns the experience. Events, touches and the relationship after closing.</p></div>
      </div>
      </div>
      </section>
      {/* VALUES */}

      <section className="values">
      <div className="wrap">
      <div className="eyebrow">The MMG Way</div>
      <h2>Relationships First. <span className="accent">Excellence Always.</span></h2>
      <div className="val-grid">
      <div className="val fade-up"><div className="vt">Fanatical Proactive Communication</div><h3>You shouldn&apos;t have to ask us what&apos;s happening.</h3><p>We communicate before uncertainty has a chance to grow.</p></div>
      <div className="val fade-up"><div className="vt">Details Matter</div><h3>Small details can become big problems.</h3><p>We sweat them.</p></div>
      <div className="val fade-up"><div className="vt">Authentic</div><h3>We&apos;ll tell you what we actually think.</h3><p>Sometimes good advice means recommending something different from what you expected.</p></div>
      <div className="val fade-up"><div className="vt">Committed &amp; Determined</div><h3>Problems don&apos;t get passed around.</h3><p>They get solved.</p></div>
      <div className="val fade-up"><div className="vt">Positive Energy</div><h3>Buying a home is stressful enough.</h3><p>We don&apos;t need to add to it.</p></div>
      <div className="val fade-up"><div className="vt">Have Fun</div><h3>This is a big deal.</h3><p>That doesn&apos;t mean it has to be miserable.</p></div>
      </div>
      </div>
      </section>
      {/* REVIEWS */}

      <section className="reviews" id="reviews">
      <div className="wrap">
      <div className="eyebrow">Client Reviews</div>
      <h2>Don&apos;t take our word for it.</h2>
      {/* ============================================================
               COMPLIANCE NOTE FOR COLIN:
               Per Fairway Marketing Compliance guide, Google reviews may NOT
               be republished (copy/paste or screenshot) without a signed
               Testimonial Consent & Release form per reviewer. Google reviews
               MAY be displayed via an official Google embeddable widget, and
               Experience.com reviews may be used without consent forms.
               Replace this summary block with the Google review widget and/or
               an Experience.com feed at build time.
               ============================================================ */}

      <div className="rev-summary fade-up">
      <div className="rev-score"><span className="big-score">5.0</span><span className="stars" style={{ fontSize: "22px", letterSpacing: "4px" }}>★★★★★</span><span className="score-lbl">400+ Google Reviews</span></div>
      <p>Martin Mortgage Group clients consistently describe the same experience in their reviews: proactive communication at every step, seamless handoffs between team members, expectations set clearly from the first meeting, and a process that felt calm instead of stressful. First-time buyers say they felt supported rather than overwhelmed. Repeat clients come back — some three and four times. Realtors say their clients actually enjoy the process.</p>
      <p>Don&apos;t take our word for it. Read them yourself.</p>
      <a className="btn btn-primary" href="https://www.google.com/search?q=martin+mortgage+group+raleigh+reviews" target="_blank" rel="noopener">Read Our Google Reviews</a>
      </div>
      <p className="rev-note">Review count pending final compliance verification. Reviews summary reflects themes from publicly posted Google reviews of Martin Mortgage Group.</p>
      </div>
      </section>
      {/* AFTER CLOSING */}

      <section className="after" id="after">
      <div className="wrap after-grid">
      <div>
      <div className="eyebrow">For Homeowners</div>
      <h2>Closing day isn&apos;t the finish line.</h2>
      <p>Your mortgage should change as your life changes. MMG remains available after closing to help you evaluate opportunities and make better homeownership decisions.</p>
      <Link className="btn btn-primary" href="/homeowners">Already an MMG Client? Start Here</Link>
      </div>
      <ul className="after-list">
      {[
        { label: "Annual Mortgage Review", href: "/homeowners#review" },
        { label: "Home Equity Strategy", href: "/homeowners#equity" },
        { label: "Refinance Analysis", href: "/homeowners#refinance" },
        { label: "Move-Up Planning", href: "/move-up-buyers" },
        { label: "Investment Property Financing", href: "/homeowners#investment" },
      ].map((item) => (
        <li key={item.href}>
          <Link href={item.href as never}>
            {item.label} <span aria-hidden="true">→</span>
          </Link>
        </li>
      ))}
      </ul>
      </div>
      </section>
      {/* FINAL CTA */}

      {/* VIDEO — Script 1 — Homepage Welcome. Drop the YouTube ID (or a self-hosted src)
          on the VideoEmbed below once the studio edit is delivered:
          <VideoEmbed title="…" youtubeId="abc123" /> */}
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
