import type { Metadata } from "next";
import Image from "next/image";
import HeroPanel from "@/components/mmg/HeroPanel";
import PageContact from "@/components/mmg/PageContact";
import PageFaq from "@/components/mmg/PageFaq";
import PageReviews from "@/components/mmg/PageReviews";
import RelatedPages from "@/components/mmg/RelatedPages";

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

const faqs = [
  {
    q: "Can I get pre-approved before I move?",
    a: "Yes — and you should. Pre-approval happens remotely, and knowing your numbers before you visit means house-hunting trips are spent on homes that actually fit. If a new job is part of the move, we'll factor in how your offer letter and start date affect qualifying.",
  },
  {
    q: "Can I buy a home without seeing it in person?",
    a: "Plenty of our relocating clients do. Your Realtor can walk homes with you on video, and inspections and appraisals happen locally either way. Most people visit at least once, but the financing never requires you to be here.",
  },
  {
    q: "Do I have to be in North Carolina to close?",
    a: "Not always. North Carolina closings are handled by a closing attorney, and depending on the attorney and your loan, remote or mail-away signing options may be available. We'll coordinate the logistics early so closing day isn't a surprise.",
  },
  {
    q: "Should I sell my current home before I buy here?",
    a: "It depends on your equity, your reserves and your timeline. Selling first frees up cash; buying first means moving once. We'll map both paths with real numbers so you can choose the one that fits.",
  },
  {
    q: "How do I pick the right town?",
    a: "Start with your commute, your budget and the kind of neighborhood you want. Every Triangle town has a different feel and a different tax picture. We'll talk it through and connect you with a local Realtor we trust who knows the area block by block.",
  },
];

export default function Page() {
  return (
    <>
      <header className="hero page-hero" style={{ padding: "182px 0 80px" }}>
      <div className="wrap hero-grid">
      <div>
      <div className="eyebrow">Relocation</div>
      <h1 style={{ fontSize: "clamp(36px,4.4vw,54px)" }}>Moving somewhere new is complicated enough. <em>Your mortgage shouldn&apos;t add to it.</em></h1>
      <p className="lead" style={{ maxWidth: "560px" }}>Buying a home in a city you don&apos;t live in yet — maybe haven&apos;t even visited — takes a local team you can trust from a distance. We&apos;ve been Raleigh&apos;s people for a long time. Let us be yours.</p>
      <div className="hero-ctas"><a className="btn btn-primary" href="#contact">Plan My Move</a><a className="textlink" href="#towns">Explore the Triangle ↓</a></div>
      <div className="fairway-badge"><span className="pb">Powered by</span><Image priority src="/images/mmg/fairway-logo.png" width={420} height={156} alt="Fairway Home Mortgage" /></div>
      </div>
      <HeroPanel
        label="Buying From a Distance"
        title="Everything you need from wherever you are now."
        items={[
          "Pre-approval before your first house-hunting trip",
          "Video strategy calls on your schedule",
          "Introductions to local Realtors we trust",
          "Digital documents and disclosures",
          "Your current home's sale, sequenced",
        ]}
        footStat="4"
        footText="States we're licensed in: NC, SC & VA"
      />
      </div>
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
      <section className="journey">
      <div className="wrap">
      <div className="eyebrow on-dark">How a Remote Purchase Works</div>
      <h2>Four steps. One team. Any distance.</h2>
      <p className="sub">Here&apos;s how we keep a long-distance move from feeling like a long shot.</p>
      <div className="journey-grid four">
      <div className="j-step fade-up"><div className="num">01 — TALK</div><h3>Map the move</h3><p>Your timeline, your job start date, your current home, and the budget that fits your life here.</p></div>
      <div className="j-step fade-up"><div className="num">02 — PREPARE</div><h3>Pre-approved from home</h3><p>Documents uploaded digitally, numbers confirmed, so you shop with confidence on day one.*</p></div>
      <div className="j-step fade-up"><div className="num">03 — CONNECT</div><h3>Meet your local Realtor</h3><p>We introduce you to agents we know personally — people who&apos;ll walk homes with you on video.</p></div>
      <div className="j-step fade-up"><div className="num">04 — CLOSE</div><h3>Keys, on schedule</h3><p>We coordinate with the closing attorney and keep you updated, so distance never turns into doubt.</p></div>
      </div>
      </div>
      </section>
      <section className="values" id="towns" style={{ paddingTop: "90px" }}>
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
      <h2 style={{ fontSize: "clamp(30px,4.2vw,48px)", color: "#fff", maxWidth: "840px", marginBottom: "16px" }}>Rooted in Raleigh. Licensed across NC, SC &amp; VA.</h2>
      <p style={{ color: "rgba(255,255,255,.78)", maxWidth: "660px", fontSize: "16.5px", lineHeight: "1.75" }}>Moving to Charlotte, Charleston or Richmond instead? We&apos;re licensed there too. And if your move takes you somewhere we&apos;re not, we&apos;ll tell you straight and point you to someone good. Relationships first — even when the relationship is a referral.</p>
      <div className="state-grid">
      <div className="state fade-up"><div className="st">NC</div><div className="sn">North Carolina</div><p>Home base. Raleigh, Durham, Chapel Hill, Charlotte, the coast and the mountains.</p></div>
      <div className="state fade-up"><div className="st">SC</div><div className="sn">South Carolina</div><p>Charleston, Greenville, Columbia, Myrtle Beach and everywhere between.</p></div>
      <div className="state fade-up"><div className="st">VA</div><div className="sn">Virginia</div><p>Richmond, Hampton Roads, Northern Virginia and beyond.</p></div>
      </div>
      </div>
      </section>
      <PageReviews
        eyebrow="A Real Relocation"
        title="From Long Island to North Carolina."
        names={["Anthony Tramondo"]}
      />
      <PageFaq eyebrow="Relocation Questions" title="What people ask before a long-distance move." items={faqs} />
      <section className="final">
      <div className="wrap">
      <h2>Tell us where you&apos;re coming from. We&apos;ll handle where you&apos;re going.</h2>
      <p>One call covers your timeline, your financing, your questions about the area — and ends with actual next steps instead of a sales pitch.</p>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}><a className="btn btn-primary" href="#contact">Plan My Move</a></div>
      <p className="small">No pressure. No obligation. Just a conversation about what you&apos;re trying to accomplish.</p>
      </div>
      </section>
      <PageContact
        title="Tell us about the move."
        sub="Where you're coming from, when you need to be here, and what you're hoping to find. A real person from MMG will follow up — usually the same business day."
        goal="Relocate"
      />
      <RelatedPages hrefs={["/move-up-buyers", "/first-time-buyers", "/va-buyers"]} />
    </>
  );
}
