import type { Metadata } from "next";
import VideoEmbed from "@/components/mmg/VideoEmbed";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Literacy — Free Homebuyer Education",
  description: "Free financial literacy and homebuyer education for teens, students and adults. Michael Martin is a FirstHome IQ Ambassador working to close the homeownership education gap.",
  alternates: { canonical: "/financial-literacy" },
  openGraph: {
    title: "Financial Literacy — Free Homebuyer Education | Martin Mortgage Group",
    description: "Free financial literacy and homebuyer education for teens, students and adults. Michael Martin is a FirstHome IQ Ambassador working to close the homeownership education gap.",
    url: "/financial-literacy",
  },
};

export default function Page() {
  return (
    <>
      <header className="hero page-hero" style={{ padding: "182px 0 90px" }}>
      <div className="wrap">
      <div style={{ maxWidth: "780px" }}>
      <div className="eyebrow">Financial Literacy</div>
      <h1 style={{ fontSize: "clamp(38px,5vw,62px)" }}>Nobody taught us how to buy a home. <em>Let&apos;s fix that.</em></h1>
      <p className="lead" style={{ maxWidth: "660px" }}>Most people learn about mortgages the expensive way — in the middle of the biggest purchase of their life. Michael is an Ambassador for FirstHome IQ, a 501(c)(3) nonprofit closing the homeownership education gap, because he believes this stuff should be taught before you need it. Every resource below is free.</p>
      <div className="fairway-badge"><span className="pb">Powered by</span><Image priority src="/images/mmg/fairway-logo.png" width={420} height={156} alt="Fairway Home Mortgage" /></div>
      </div>
      </div>
      </header>
      <section className="values" style={{ paddingTop: "0" }}>
      <div className="wrap">
      <div className="eyebrow">Who This Is For</div>
      <h2 style={{ fontSize: "clamp(30px,4.2vw,48px)", marginBottom: "44px" }}>Start wherever you are.</h2>
      <div className="aud-grid">
      <div className="aud fade-up"><div className="at">Teens & Students</div><p>Money basics, credit, and how homeownership actually works — before the stakes are real. The head start most of us never got.</p></div>
      <div className="aud fade-up"><div className="at">Future First-Time Buyers</div><p>Renting now, buying someday? Learn the path from zero to keys in hand, at your own pace, with zero sales pressure.</p></div>
      <div className="aud fade-up"><div className="at">Parents & Educators</div><p>Want to teach this at home, in a classroom, or in a workshop? FirstHome IQ provides free ready-to-use materials.</p></div>
      </div>
      </div>
      </section>
      <section className="pathways" id="resources">
      <div className="wrap">
      <div className="eyebrow">Free Tools & Courses</div>
      <h2 style={{ fontSize: "clamp(30px,4.2vw,48px)" }}>Real numbers. Real skills. Zero cost.</h2>
      <div className="res-grid">
      <a className="res fade-up" href="https://learn.firsthomeiq.com/#quiz" target="_blank" rel="noopener">
      <div className="rt">Quiz · 5 Minutes</div><h3>What&apos;s Your Homebuyer IQ?</h3>
      <p>Fifteen questions that teach as you go. Most people are surprised by their score — and learn something from every question.</p>
      <div className="go">Test Your Knowledge →</div>
      </a>
      <a className="res fade-up" href="https://learn.firsthomeiq.com/#calculators" target="_blank" rel="noopener">
      <div className="rt">Interactive Tool</div><h3>The Big Picture</h3>
      <p>Renting and owning, side by side, over your years as a homeowner. Five minutes, no signup, leave with your first step either way.</p>
      <div className="go">See Your Big Picture →</div>
      </a>
      <a className="res fade-up" href="https://learn.firsthomeiq.com/#calculators" target="_blank" rel="noopener">
      <div className="rt">Calculators</div><h3>Affordability & Down Payment</h3>
      <p>The most a lender would approve versus the price that fits your life — plus how much you really need down, and a plan to save for it.</p>
      <div className="go">Run Your Numbers →</div>
      </a>
      <a className="res fade-up" href="https://learn.firsthomeiq.com/#calculators" target="_blank" rel="noopener">
      <div className="rt">Worksheets</div><h3>Budget & Home Wishlist</h3>
      <p>Income, needs, wants, savings — and a wishlist tool that sorts must-haves from nice-to-haves you can hand straight to your agent.</p>
      <div className="go">Get Organized →</div>
      </a>
      <a className="res fade-up" href="https://learn.firsthomeiq.com/#courses" target="_blank" rel="noopener">
      <div className="rt">Free Courses · Videos + Worksheets</div><h3>Money Basics · Credit & Debt · Buying Your First Home</h3>
      <p>Three full courses with a free account: money mindset and budgeting, how credit really works, and the path to keys in hand.</p>
      <div className="go">Start Learning →</div>
      </a>
      <a className="res fade-up" href="https://learn.firsthomeiq.com/#teach" target="_blank" rel="noopener">
      <div className="rt">For Educators</div><h3>Teach It Yourself</h3>
      <p>Running a classroom, a workshop, or a family conversation? FirstHome IQ brings the material, free for anyone who wants to teach it.</p>
      <div className="go">Get Teaching Materials →</div>
      </a>
      </div>
      <div className="fhiq-note">FirstHome IQ is an independent 501(c)(3) nonprofit organization. Resources are provided by FirstHome IQ for educational purposes and are linked here as part of Michael&apos;s work as a FirstHome IQ Ambassador. Educational content is not an offer of credit or a commitment to lend.</div>
      </div>
      </section>
      <section className="story">
      <div className="wrap">
      <div className="eyebrow on-dark">Why Michael Cares About This</div>
      <p className="story-quote">I was pre-approved for $200,000 in 1998. Nobody explained why that didn&apos;t mean I should spend it.</p>
      <p style={{ color: "rgba(255,255,255,.78)", maxWidth: "660px", margin: "-30px 0 36px", fontSize: "16.5px", lineHeight: "1.75" }}>Michael bought his first home for $108,000 — barely half his approval — because the payment was what fit his life. Nobody taught him that. He had to figure it out himself, standing in beautiful houses he knew belonged to someone else&apos;s budget. Twenty-plus years later, closing the education gap isn&apos;t a side project. It&apos;s the reason the MMG Way starts with understanding instead of applications.</p>
      <Link className="btn btn-outline on-dark" href="/meet-michael">Read Michael&apos;s Story</Link>
      </div>
      </section>
      {/* VIDEO — Script 6 — Rates. Drop the YouTube ID (or a self-hosted src)
          on the VideoEmbed below once the studio edit is delivered:
          <VideoEmbed title="…" youtubeId="abc123" /> */}
      <section className="video-section">
      <div className="wrap">
      <div className="vs-head">
      <div className="eyebrow">Straight Talk</div>
      <h2>Why asking “what&apos;s your rate?” isn&apos;t enough</h2>
      <p>A rate quote by itself tells you almost nothing. Here&apos;s what actually matters.</p>
      </div>
      <VideoEmbed title="Why asking “what's your rate?” isn't enough" />
      </div>
      </section>
      <section className="final">
      <div className="wrap">
      <h2>Learned something? Have questions the tools can&apos;t answer?</h2>
      <p>Education first, always. And when you&apos;re ready to talk about your actual situation, that conversation is free too.</p>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
      <Link className="btn btn-primary" href="/#contact">Start a Conversation</Link>
      </div>
      <p className="small">No pressure. No obligation. Just a conversation.</p>
      </div>
      </section>
    </>
  );
}
