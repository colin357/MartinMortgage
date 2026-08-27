import type { Metadata } from "next";
import VideoEmbed from "@/components/mmg/VideoEmbed";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meet Michael Martin — Raleigh Mortgage Advisor",
  description: "Michael Martin has spent 20+ years helping people make confident mortgage decisions. Raleigh roots, straight answers, and a story about a $108,000 house that explains everything.",
  alternates: { canonical: "/meet-michael" },
  openGraph: {
    title: "Meet Michael Martin — Raleigh Mortgage Advisor | Martin Mortgage Group",
    description: "Michael Martin has spent 20+ years helping people make confident mortgage decisions. Raleigh roots, straight answers, and a story about a $108,000 house that explains everything.",
    url: "/meet-michael",
  },
};

export default function Page() {
  return (
    <>
      <header className="hero page-hero" style={{ padding: "182px 0 90px" }}>
      <div className="wrap hero-grid">
      <div>
      <div className="eyebrow">Meet Michael</div>
      <h1 style={{ fontSize: "clamp(38px,5vw,62px)" }}>Mortgage guy is what I do. <em>It&apos;s not who I am.</em></h1>
      <p className="lead">I grew up around this business. My mom was a Realtor for over 30 years. My dad was a builder, architect and developer most of his life. And I hated finance class in college — which makes what happened next pretty funny.</p>
      <div className="hero-ctas">
      <Link className="btn btn-primary" href="/#contact">Start a Conversation</Link>
      <a className="textlink" href="#the-story">The $108,000 Story ↓</a>
      </div>
      <div className="fairway-badge"><span className="pb">Powered by</span><Image priority src="/images/mmg/fairway-logo.png" width={420} height={156} alt="Fairway Home Mortgage" /></div>
      </div>
      <div className="hero-photo">
      <div className="photo-frame"><Image src="/images/mmg/michael-about-hero.jpg" width={900} height={1347} alt="Michael Martin, Martin Mortgage Group, Raleigh NC" sizes="(max-width: 900px) 100vw, 45vw" /></div>
      </div>
      </div>
      </header>
      <section className="chain" id="the-story" style={{ background: "#fff" }}>
      <div className="wrap">
      <div className="story-editorial">
      <div className="eyebrow">Why I Do This</div>
      <h2 style={{ fontSize: "clamp(30px,4.2vw,46px)", marginBottom: "36px" }}>The $108,000 house that taught me everything.</h2>
      <p className="drop">In 1998, I bought my first house. I was pre-approved for $200,000 — but my wife and I didn&apos;t want the payment that came with a $200,000 house. So I asked our Realtor to show us homes under $150,000.</p>
      <p>She took us out and showed us four or five homes. Every one of them was right around $200,000.</p>
      <p>When she asked if we liked what we&apos;d seen, I told her the truth: they were beautiful homes — for someone else. They didn&apos;t fit our budget, and I couldn&apos;t figure out why we were looking at houses that far above what I&apos;d asked for.</p>
      <p>Then I understood. The more expensive the house, the bigger her commission. She wasn&apos;t looking out for what we needed.</p>
      <p>We ended up finding a home on our own. We bought it for $108,000.</p>
      <p>The loan side wasn&apos;t much better. My best friend from high school was a loan officer and handled my mortgage. We&apos;re still great friends — he&apos;s actually the guy who got me into this business three years later — but he messed that loan up, and we closed three days late. And like a lot of loan officers who make mistakes, the blame rolled downhill to the processor and the underwriter.</p>
      <p><strong>I&apos;ve never forgotten what it felt like to be on the client side of both of those experiences. Twenty-plus years and thousands of families later, they&apos;re still the two rules I run this business on.</strong></p>
      </div>
      <div className="lesson-cards">
      <div className="lesson l1 fade-up">
      <div className="ln">Rule One</div>
      <h3>&quot;My advice works for you — even when it costs me.&quot;</h3>
      <p>The advisor showing you $200,000 houses when you asked for $150,000 isn&apos;t advising you. If the right answer for you is spending less, waiting a year, or structuring things differently than you expected, that&apos;s the advice you&apos;ll get. I was the client who got upsold. I don&apos;t do that to people.</p>
      </div>
      <div className="lesson l2 fade-up">
      <div className="ln">Rule Two</div>
      <h3>&quot;If a mistake happens on the lending side, it&apos;s mine.&quot;</h3>
      <p>We never blame the underwriter. We never blame the processor. Truly — it&apos;s never their fault. When you work with Martin Mortgage Group, one person is accountable for your experience, and you&apos;re looking at him. That standard is why our team sweats details other teams let slide.</p>
      </div>
      </div>
      </div>
      </section>
      <section className="michael">
      <div className="wrap michael-grid">
      <div className="michael-photo">
      <div className="photo-frame"><Image src="/images/mmg/michael-about-studio.jpg" width={900} height={1347} alt="Michael Martin in conversation on the Beyond the Closing Table podcast" sizes="(max-width: 900px) 100vw, 45vw" /></div>
      </div>
      <div>
      <div className="eyebrow">What 20+ Years Has Taught Me</div>
      <h2 style={{ fontSize: "clamp(30px,4vw,46px)" }}>Markets change constantly. The job doesn&apos;t.</h2>
      <p>Since I started, mortgage markets have boomed, crashed, refinanced, recovered and reinvented themselves more times than I can count. Rates have been shockingly low and stubbornly high. Every version of the market convinces people it&apos;s the wrong time to make a move.</p>
      <p className="creed">Listen first. Tell people the truth. Explain their options. Solve problems. Sweat the details. And help people make decisions they feel good about.</p>
      <p>That&apos;s the job. It was the job in 1998 and it&apos;ll be the job in ten years. The people who do it well aren&apos;t the ones with a crystal ball — they&apos;re the ones who help you understand your own numbers well enough to decide with confidence.</p>
      <div className="mini-stats">
      <div><strong>$750M+</strong><span>Career Production</span></div>
      <div><strong>2,500+</strong><span>Families Served</span></div>
      <div><strong>Top 1%</strong><span>Originator Since 2019</span></div>
      <div><strong>20+ Yrs</strong><span>Experience</span></div>
      </div>
      </div>
      </div>
      </section>
      <section className="values">
      <div className="wrap">
      <div className="eyebrow">Outside the Office</div>
      <h2 style={{ fontSize: "clamp(30px,4.2vw,48px)", marginBottom: "44px" }}>Raleigh is home. Has been for a long time.</h2>
      <div className="life-grid">
      <div className="life fade-up"><div className="lt">Family</div><p>Married to Tonya, and thoroughly outnumbered by his daughter Finley, who runs the household and knows it.</p></div>
      <div className="life fade-up"><div className="lt">Golf</div><p>Scrambles, destination trips, and an ongoing negotiation with his short game.</p></div>
      <div className="life fade-up"><div className="lt">The Kitchen</div><p>Cooking, entertaining, good wine, better bourbon, and long dinners with people worth talking to.</p></div>
      <div className="life fade-up"><div className="lt">Hockey</div><p>Carolina Hurricanes, through thick and thin. Mostly thick lately.</p></div>
      <div className="life fade-up"><div className="lt">The Podcast</div><p>Host of Beyond the Closing Table — conversations with the people who make real estate in the Triangle actually work.</p></div>
      <div className="life fade-up"><div className="lt">Community</div><p>RRAR events, local causes, and the occasional fundraiser where he talks too much on the microphone.</p></div>
      </div>
      </div>
      </section>
      <section className="team" style={{ paddingTop: "90px" }}>
      <div className="wrap">
      <div className="eyebrow">The Team Behind Him</div>
      <h2 style={{ fontSize: "clamp(30px,4.2vw,48px)", marginBottom: "16px" }}>Nobody does this alone.</h2>
      <p className="sub">Martin Mortgage Group is built so that every part of your experience has an owner. Meet the people who make the Confidence Chain real.</p>
      <div className="team-banner"><Image src="/images/mmg/team-banner-about.jpg" width={1300} height={731} alt="The Martin Mortgage Group team" sizes="(max-width: 1180px) 100vw, 1180px" /></div>
      <Link className="btn btn-primary" href="/#team">Meet the MMG Team</Link>
      </div>
      </section>
      {/* VIDEO — Script 7 — Meet Michael. Drop the YouTube ID (or a self-hosted src)
          on the VideoEmbed below once the studio edit is delivered:
          <VideoEmbed title="…" youtubeId="abc123" /> */}
      <section className="video-section">
      <div className="wrap">
      <div className="vs-head">
      <div className="eyebrow">Michael&apos;s Story</div>
      <h2>The $108,000 house</h2>
      <p>The 1998 purchase that became the two rules Michael has run his business on ever since.</p>
      </div>
      <VideoEmbed title="The $108,000 house" />
      </div>
      </section>
      <section className="final">
      <div className="wrap">
      <h2>Come tell me what you&apos;re trying to do.</h2>
      <p>Twenty-plus years in, the first conversation is still my favorite part of the job. No pressure, no pitch — just your situation and your options, in plain English.</p>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
      <Link className="btn btn-primary" href="/#contact">Start a Conversation</Link>
      </div>
      </div>
      </section>
    </>
  );
}
