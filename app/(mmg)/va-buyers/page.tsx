import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VA Home Loans — For Veterans & Service Members",
  description: "You've earned the VA home loan benefit. Martin Mortgage Group helps Veterans and service members in NC, SC, VA & GA understand and use it — with a team that genuinely shows up for the Veteran community.",
  alternates: { canonical: "/va-buyers" },
  openGraph: {
    title: "VA Home Loans — For Veterans & Service Members | Martin Mortgage Group",
    description: "You've earned the VA home loan benefit. Martin Mortgage Group helps Veterans and service members in NC, SC, VA & GA understand and use it — with a team that genuinely shows up for the Veteran community.",
    url: "/va-buyers",
  },
};

export default function Page() {
  return (
    <>
      <header className="hero page-hero" style={{ padding: "182px 0 80px" }}>
      <div className="wrap"><div style={{ maxWidth: "800px" }}>
      <div className="eyebrow">VA Home Loans</div>
      <h1 style={{ fontSize: "clamp(38px,5vw,58px)" }}>You&apos;ve earned this benefit. <em>Let&apos;s make sure you understand it.</em></h1>
      <p className="lead" style={{ maxWidth: "680px" }}>The VA home loan is one of the most powerful benefits ever offered to those who served — and one of the most misunderstood. Our job is to make sure you get the full value of what you earned, explained straight, with zero games.</p>
      <div className="hero-ctas"><Link className="btn btn-primary" href="/#contact">Talk Through My VA Options</Link></div>
      <div className="fairway-badge"><span className="pb">Powered by</span><Image priority src="/images/mmg/fairway-logo.png" width={420} height={156} alt="Fairway Home Mortgage" /></div>
      </div></div>
      </header>
      <section className="problem" style={{ paddingTop: "0" }}>
      <div className="wrap">
      <div className="eyebrow">Why This Matters to Us</div>
      <h2 style={{ fontSize: "clamp(30px,4.2vw,48px)", maxWidth: "880px", marginBottom: "32px" }}>Serving Veterans isn&apos;t a product line here. <span className="accent">It&apos;s personal.</span></h2>
      <div className="problem-cols">
      <div>
      <p>Michael serves on the board of <a className="textlink" href="https://www.thejoelfund.org/about-us/" target="_blank" rel="noopener">The Joel Fund</a>, a Wake Forest nonprofit serving the Veteran community, and supports the <a className="textlink" href="https://americanwarriorinitiative.com/" target="_blank" rel="noopener">American Warrior Initiative</a>, the nonprofit founded through Fairway that&apos;s dedicated to giving back to Veterans and first responders across the country.</p>
      <p>That&apos;s not resume filler. It means when a Veteran sits down with our team, they&apos;re sitting with people who show up for this community when there&apos;s no loan involved at all.</p>
      <p><strong>And it means one more thing: you will never get rushed, upsold, or talked past here.</strong> You&apos;ll get your benefit explained clearly, your options laid out honestly, and a team that treats your service with the respect it&apos;s owed.</p>
      </div>
      <div className="q-stack">
      <a className="q" href="https://www.thejoelfund.org/about-us/" target="_blank" rel="noopener" style={{ display: "block", textDecoration: "none", color: "inherit" }}>Board member — The Joel Fund ↗</a>
      <a className="q" href="https://americanwarriorinitiative.com/" target="_blank" rel="noopener" style={{ display: "block", textDecoration: "none", color: "inherit" }}>Supporter — American Warrior Initiative ↗</a>
      <div className="q">Serving Veterans across NC, SC, VA &amp; GA</div>
      </div>
      </div>
      </div>
      </section>
      <section className="values" style={{ paddingTop: "90px" }}>
      <div className="wrap">
      <div className="eyebrow">Myth vs. Reality</div>
      <h2 style={{ fontSize: "clamp(30px,4.2vw,48px)", marginBottom: "44px" }}>The myths cost Veterans real money. Let&apos;s kill them.</h2>
      <div className="myth-grid">
      <div className="myth fade-up"><div className="m-myth">&quot;Sellers won&apos;t accept VA offers.&quot;</div><div className="m-truth"><strong>Reality:</strong> A well-prepared VA offer competes just fine. What loses deals is a poorly positioned offer with an unprepared lender behind it — any loan type. We work with your agent to position VA financing as the strength it is.</div></div>
      <div className="myth fade-up"><div className="m-myth">&quot;VA loans take forever to close.&quot;</div><div className="m-truth"><strong>Reality:</strong> With a team that knows the VA process and prepares the file properly, VA timelines are competitive. Preparation is the difference — and preparation is our whole thing.</div></div>
      <div className="myth fade-up"><div className="m-myth">&quot;You can only use it once.&quot;</div><div className="m-truth"><strong>Reality:</strong> VA eligibility can be restored and reused — and in some situations, you may even have remaining entitlement to use while keeping another VA loan. If you used your benefit years ago, it&apos;s absolutely worth a conversation.</div></div>
      <div className="myth fade-up"><div className="m-myth">&quot;The funding fee makes it a bad deal.&quot;</div><div className="m-truth"><strong>Reality:</strong> The funding fee is one input in the total math — and some Veterans, including many with service-connected disability ratings, may be exempt from it entirely. We&apos;ll run your complete numbers so you can judge the whole picture, not one line item.</div></div>
      </div>
      </div>
      </section>
      <section className="chain" style={{ background: "#fff" }}>
      <div className="wrap" style={{ maxWidth: "900px" }}>
      <div className="eyebrow">Understanding Your Benefit</div>
      <h2 style={{ fontSize: "clamp(30px,4.2vw,48px)", marginBottom: "20px" }}>What we&apos;ll walk through together.</h2>
      <div className="prod fade-up"><div className="pnum">01</div><div><h3>Eligibility &amp; Entitlement</h3><p>Whether you qualify, how much entitlement you have, and what it means for your purchase — including restored and remaining entitlement if you&apos;ve used the benefit before.</p></div></div>
      <div className="prod fade-up"><div className="pnum">02</div><div><h3>Down Payment &amp; the $0-Down Option*</h3><p>Many eligible Veterans can purchase with no down payment* — and we&apos;ll talk honestly about when putting something down might still serve your goals.</p></div></div>
      <div className="prod fade-up"><div className="pnum">03</div><div><h3>The Funding Fee &amp; Possible Exemptions</h3><p>What it is, how it works, and whether you may be exempt — a detail that surprises a lot of Veterans in the best way.</p></div></div>
      <div className="prod fade-up"><div className="pnum">04</div><div><h3>Competing &amp; Closing</h3><p>Seller concessions, the VA appraisal, positioning your offer, and getting to the closing table on time with your agent fully in the loop.</p></div></div>
      </div>
      </section>
      <section className="final">
      <div className="wrap">
      <h2>Thank you for your service. Now let us serve you.</h2>
      <p>Whether you&apos;re buying this year or just want to finally understand the benefit you earned — the conversation is free, and it&apos;s an honor to have it.</p>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}><Link className="btn btn-primary" href="/#contact">Talk Through My VA Options</Link></div>
      <p className="small">*A down payment is required if the borrower does not have full VA entitlement or when the loan amount exceeds the VA county limits. VA loans subject to individual VA Entitlement amounts and eligibility, qualifying factors such as income and credit guidelines, and property limits. Martin Mortgage Group and Fairway are not affiliated with any government agency, including the Department of Veterans Affairs. Not all borrowers will qualify. This is not an offer of credit or a commitment to lend.</p>
      </div>
      </section>
    </>
  );
}
