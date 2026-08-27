import type { Metadata } from "next";
import VideoEmbed from "@/components/mmg/VideoEmbed";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "New Construction & Renovation Financing",
  description: "Buying new construction, building from the ground up, or renovating? Construction-to-perm and renovation financing options from Martin Mortgage Group. Don't just look at the rate — evaluate the whole transaction.",
  alternates: { canonical: "/new-construction-renovation" },
  openGraph: {
    title: "New Construction & Renovation Financing | Martin Mortgage Group",
    description: "Buying new construction, building from the ground up, or renovating? Construction-to-perm and renovation financing options from Martin Mortgage Group. Don't just look at the rate — evaluate the whole transaction.",
    url: "/new-construction-renovation",
  },
};

export default function Page() {
  return (
    <>
      <header className="hero page-hero" style={{ padding: "182px 0 80px" }}>
      <div className="wrap"><div style={{ maxWidth: "800px" }}>
      <div className="eyebrow">New Construction &amp; Renovation</div>
      <h1 style={{ fontSize: "clamp(38px,5vw,58px)" }}>Building, buying new, or renovating? <em>Look past the rate.</em></h1>
      <p className="lead" style={{ maxWidth: "680px" }}>New construction and renovation deals have more moving parts than any other purchase — incentives, timelines, draws, buydowns, budgets. The winners evaluate the whole transaction. We&apos;ll show you how.</p>
      <div className="hero-ctas"><Link className="btn btn-primary" href="/#contact">Compare My Options</Link></div>
      <div className="fairway-badge"><span className="pb">Powered by</span><Image priority src="/images/mmg/fairway-logo.png" width={420} height={156} alt="Fairway Home Mortgage" /></div>
      </div></div>
      </header>
      <section className="chain" style={{ background: "#fff", paddingTop: "80px" }}>
      <div className="wrap" style={{ maxWidth: "900px" }}>
      <div className="eyebrow">Three Paths</div>
      <h2 style={{ fontSize: "clamp(30px,4.2vw,48px)", marginBottom: "20px" }}>Which one are you on?</h2>
      <div className="prod fade-up"><div className="pnum">01</div><div>
      <h3>Buying From a Builder</h3><div className="pfor">The model home caught your eye</div>
      <p>Builder incentives can be genuinely great — or not as good as they look. Closing cost credits, rate buydowns, and preferred-lender offers only make sense when you compare the complete package: price, total costs, whether that buydown is permanent or temporary, and what the payment looks like in year one and year ten. Get the builder&apos;s quote in writing, then let&apos;s put it side by side with your other options. If their deal wins, we&apos;ll tell you — and you&apos;ve lost nothing by checking.</p>
      </div></div>
      <div className="prod fade-up"><div className="pnum">02</div><div>
      <h3>Building From the Ground Up</h3><div className="pfor">Construction-to-permanent financing</div>
      <p>Building on your own lot with your own builder? Construction-to-perm financing may combine the construction phase and your long-term mortgage into a single process — one qualification, with funds drawn as your build progresses, converting to your permanent loan at completion. The structure, timeline, and builder requirements have real nuance, which is exactly why this conversation happens before you break ground, not after.</p>
      </div></div>
      <div className="prod fade-up"><div className="pnum">03</div><div>
      <h3>Renovating a Home</h3><div className="pfor">Renovation financing — for the house you&apos;re buying or the one you own</div>
      <p>Found a house with great bones in the right neighborhood — but a kitchen from 1987? Renovation loan options may allow you to finance the purchase and the improvements together, based on the home&apos;s projected post-renovation value. Also worth exploring if you already own and the &quot;should we move or improve?&quot; debate is live at your dinner table. We&apos;ll walk through how budgets, contractors and draws work in plain English.</p>
      </div></div>
      </div>
      </section>
      <section style={{ padding: "110px 0", background: "var(--ivory)" }}>
      <div className="wrap">
      <div className="eyebrow">The Honest Part</div>
      <h2 style={{ fontSize: "clamp(30px,4.2vw,48px)", maxWidth: "860px", marginBottom: "36px" }}>Why these deals reward preparation.</h2>
      <div className="truth-box fade-up">
      <h3>Timelines move. Budgets get tested. Details decide everything.</h3>
      <p>Construction delays happen. Renovation budgets meet reality. Long-term rate locks, deposit protection, appraisal timing, and draw schedules all matter more here than in a standard purchase — and they&apos;re all manageable when someone maps them before you commit.</p>
      <p>That&apos;s the job. We&apos;ll walk the whole transaction with you — the exciting parts and the fine print — so the house you&apos;re dreaming about gets financed on terms you actually understand.</p>
      </div>
      </div>
      </section>
      {/* VIDEO — Script 5 — New Construction. Drop the YouTube ID (or a self-hosted src)
          on the VideoEmbed below once the studio edit is delivered:
          <VideoEmbed title="…" youtubeId="abc123" /> */}
      <section className="video-section">
      <div className="wrap">
      <div className="vs-head">
      <div className="eyebrow">Before You Sign</div>
      <h2>The truth about builder incentives</h2>
      <p>Sometimes those incentives are genuinely great deals. Sometimes they&apos;re not as good as they look.</p>
      </div>
      <VideoEmbed title="The truth about builder incentives" />
      </div>
      </section>
      <section className="final">
      <div className="wrap">
      <h2>Before you sign with a builder — or a contractor — talk to us.</h2>
      <p>The comparison is free. The clarity is the point.</p>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}><Link className="btn btn-primary" href="/#contact">Compare My Options</Link></div>
      <p className="small">All loan options subject to credit and property approval and program availability. Not all borrowers will qualify. Programs, requirements and terms are subject to change. This is not an offer of credit or a commitment to lend.</p>
      </div>
      </section>
    </>
  );
}
