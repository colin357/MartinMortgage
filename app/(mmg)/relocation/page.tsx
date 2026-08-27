import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Moving to Raleigh & the Triangle — Relocation Mortgage Guide",
  description: "Relocating to Raleigh, Cary, Apex or the Triangle? Martin Mortgage Group helps out-of-state buyers finance a home remotely — with local knowledge, trusted Realtor connections, and a process built for buying from a distance.",
  alternates: { canonical: "/relocation" },
  openGraph: {
    title: "Moving to Raleigh & the Triangle — Relocation Mortgage Guide | Martin Mortgage Group",
    description: "Relocating to Raleigh, Cary, Apex or the Triangle? Martin Mortgage Group helps out-of-state buyers finance a home remotely — with local knowledge, trusted Realtor connections, and a process built for buying from a distance.",
    url: "/relocation",
  },
};

export default function Page() {
  return (
    <>
      <header className="hero page-hero" style={{ padding: "182px 0 80px" }}>
      <div className="wrap"><div style={{ maxWidth: "800px" }}>
      <div className="eyebrow">Relocation</div>
      <h1 style={{ fontSize: "clamp(38px,5vw,58px)" }}>Moving somewhere new is complicated enough. <em>Your mortgage shouldn&apos;t add to it.</em></h1>
      <p className="lead" style={{ maxWidth: "680px" }}>Buying a home in a city you don&apos;t live in yet — maybe haven&apos;t even visited — takes a local team you can trust from a distance. We&apos;ve been Raleigh&apos;s people for a long time. Let us be yours.</p>
      <div className="hero-ctas"><Link className="btn btn-primary" href="/#contact">Plan My Move</Link></div>
      <div className="fairway-badge"><span className="pb">Powered by</span><Image priority src="/images/mmg/fairway-logo.png" width={420} height={156} alt="Fairway Home Mortgage" /></div>
      </div></div>
      </header>
      <section className="problem" style={{ paddingTop: "0" }}>
      <div className="wrap">
      <div className="eyebrow">Buying From a Distance</div>
      <h2 style={{ fontSize: "clamp(30px,4.2vw,48px)", maxWidth: "880px", marginBottom: "32px" }}>Here&apos;s how buying remotely actually works. <span className="accent">Smoothly, if you build it right.</span></h2>
      <div className="problem-cols">
      <div>
      <p>Almost everything can happen from wherever you are now: video strategy calls, digital documentation, remote review of every disclosure. Your Realtor walks homes with you on video. Our team keeps you updated so distance never turns into doubt.</p>
      <p>What you need on the ground is a team that already knows the market: which towns fit your life, what different areas mean for taxes and commutes, and which local Realtors to trust — we&apos;ll connect you with great ones we know personally.</p>
      <p><strong>One critical timing note:</strong> if a new job is part of your move, when and how you buy relative to your start date matters for financing. Talk to us early — it can save your whole timeline.</p>
      </div>
      <div className="q-stack">
      <div className="q">Strategy calls on video, on your schedule</div>
      <div className="q">Trusted local Realtor introductions</div>
      <div className="q">Digital process, built for distance</div>
      <div className="q">Selling your current home? We&apos;ll sequence it.</div>
      </div>
      </div>
      </div>
      </section>
      <section className="values" style={{ paddingTop: "90px" }}>
      <div className="wrap">
      <div className="eyebrow">Where To?</div>
      <h2 style={{ fontSize: "clamp(30px,4.2vw,48px)", marginBottom: "16px" }}>The Triangle, town by town.</h2>
      <p style={{ fontSize: "16px", color: "var(--slate)", maxWidth: "640px", marginBottom: "40px" }}>Every town here has a different personality, and matching yours is half the fun. A few of the places our relocating clients land — and we&apos;re happy to talk through all of them with you.</p>
      <div className="area-grid">
      <div className="area fade-up"><h3>Raleigh</h3><p>The anchor. Big-city amenities, museums, dining and pro hockey — with neighborhoods ranging from historic to brand new.</p></div>
      <div className="area fade-up"><h3>Cary</h3><p>Consistently ranked among the most livable places in the country. Parks, planning and polish.</p></div>
      <div className="area fade-up"><h3>Apex</h3><p>&quot;The Peak of Good Living&quot; — charming downtown, strong community feel, and steady growth for a reason.</p></div>
      <div className="area fade-up"><h3>Wake Forest</h3><p>Historic small-town character north of Raleigh with room to breathe and a booming main street.</p></div>
      <div className="area fade-up"><h3>Holly Springs</h3><p>Family-forward, fast-growing, and full of new construction options south of town.</p></div>
      <div className="area fade-up"><h3>Durham &amp; Chapel Hill</h3><p>University energy, food scene credibility, and a research-driven economy on the Triangle&apos;s west side.</p></div>
      </div>
      </div>
      </section>
      <section className="story">
      <div className="wrap">
      <div className="eyebrow on-dark">Licensed Where You&apos;re Landing</div>
      <h2 style={{ fontSize: "clamp(30px,4.2vw,48px)", color: "#fff", maxWidth: "840px", marginBottom: "16px" }}>Rooted in Raleigh. Licensed across NC, SC, VA &amp; GA.</h2>
      <p style={{ color: "rgba(255,255,255,.78)", maxWidth: "660px", fontSize: "16.5px", lineHeight: "1.75" }}>Moving to Charlotte, Charleston, Richmond or Atlanta instead? We&apos;re licensed there too. And if your move takes you somewhere we&apos;re not, we&apos;ll tell you straight and point you to someone good. Relationships first — even when the relationship is a referral.</p>
      </div>
      </section>
      <section className="final">
      <div className="wrap">
      <h2>Tell us where you&apos;re coming from. We&apos;ll handle where you&apos;re going.</h2>
      <p>One call covers your timeline, your financing, your questions about the area — and ends with actual next steps instead of a sales pitch.</p>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}><Link className="btn btn-primary" href="/#contact">Plan My Move</Link></div>
      <p className="small">No pressure. No obligation. Just a conversation about what you&apos;re trying to accomplish.</p>
      </div>
      </section>
    </>
  );
}
