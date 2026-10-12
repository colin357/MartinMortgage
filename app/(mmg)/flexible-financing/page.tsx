import type { Metadata } from "next";
import Image from "next/image";
import HeroPanel from "@/components/mmg/HeroPanel";
import PageContact from "@/components/mmg/PageContact";
import PageFaq from "@/components/mmg/PageFaq";
import PageReviews from "@/components/mmg/PageReviews";
import RelatedPages from "@/components/mmg/RelatedPages";

export const metadata: Metadata = {
  title: "Self-Employed & Investor Mortgage Options",
  description: "Self-employed? Business owner? Real estate investor? Your income doesn't fit in a box — and there are mortgage options built for exactly that. Bank statement, DSCR and asset-based loan options in NC, SC, VA & GA.",
  alternates: { canonical: "/flexible-financing" },
  openGraph: {
    title: "Self-Employed & Investor Mortgage Options | Martin Mortgage Group",
    description: "Self-employed? Business owner? Real estate investor? Your income doesn't fit in a box — and there are mortgage options built for exactly that. Bank statement, DSCR and asset-based loan options in NC, SC, VA & GA.",
    url: "/flexible-financing",
  },
};

const faqs = [
  {
    q: "How many months of bank statements will I need?",
    a: "Bank statement programs typically look at 12 or 24 months of personal or business statements. Which works better depends on how your deposits look over time — we'll help you figure that out before you gather anything.",
  },
  {
    q: "Can I buy an investment property in my LLC?",
    a: "With some DSCR programs, yes — LLC ownership may be an option. It depends on the program and how your entity is set up. We'll walk through the requirements and any tradeoffs before you decide how to title the property.",
  },
  {
    q: "How much do I need for a down payment?",
    a: "Non-traditional loans often require more down than conventional loans, and reserve requirements are common. The exact numbers depend on the program, the property and your credit profile. We'll give you a real figure for your scenario.",
  },
  {
    q: "Are rates higher on these loans?",
    a: "Typically, yes. Flexibility in how income is documented usually comes with different pricing than conventional loans. That's why we always check whether you can qualify conventionally first — and show you the total cost of each option side by side.",
  },
  {
    q: "Can I refinance into a conventional loan later?",
    a: "Possibly. If your documented income changes — say, after another year or two of tax returns — a conventional refinance may become an option down the road. We'll factor that into the strategy from day one.",
  },
];

export default function Page() {
  return (
    <>
      <header className="hero page-hero" style={{ padding: "182px 0 80px" }}>
      <div className="wrap hero-grid">
      <div>
      <div className="eyebrow">Self-Employed · Business Owners · Investors</div>
      <h1 style={{ fontSize: "clamp(36px,4.6vw,56px)" }}>Your income doesn&apos;t fit in a box. <em>There are loans built for that.</em></h1>
      <p className="lead" style={{ maxWidth: "560px" }}>You run a business. You invest in property. You earn on 1099s, or your tax returns tell a very different story than your bank account does. Traditional mortgage underwriting wasn&apos;t designed for you — but a whole category of loan options was.</p>
      <div className="hero-ctas"><a className="btn btn-primary" href="#contact">Discuss My Financing Strategy</a><a className="textlink" href="#options">See the Options ↓</a></div>
      <div className="fairway-badge"><span className="pb">Powered by</span><Image priority src="/images/mmg/fairway-logo.png" width={420} height={156} alt="Fairway Home Mortgage" /></div>
      </div>
      <HeroPanel
        label="Ways to Qualify"
        title="Different documentation. Real loans."
        items={[
          "Bank statements instead of tax returns",
          "Property rents instead of personal income (DSCR)",
          "1099s instead of full returns",
          "Your assets instead of a paycheck",
          "Jumbo and layered-income structures",
        ]}
        footText="We check conventional first — it's often the better deal."
      />
      </div>
      </header>
      <section className="problem" style={{ paddingTop: "0" }}>
      <div className="wrap">
      <div className="eyebrow">The Problem</div>
      <h2 style={{ fontSize: "clamp(30px,4.2vw,50px)", maxWidth: "880px", marginBottom: "32px" }}>You&apos;ve heard &quot;sorry, your income is too complicated.&quot; <span className="accent">We speak complicated.</span></h2>
      <div className="problem-cols">
      <div>
      <p>Here&apos;s what happens to a lot of successful self-employed people: your accountant does a great job minimizing your taxable income. Then you apply for a mortgage, and the underwriter looks at that same minimized number and says you don&apos;t qualify — even though your business is thriving.</p>
      <p>Frustrating? Absolutely. A dead end? Usually not.</p>
      <p><strong>There&apos;s a category of loan options — often called non-QM or non-traditional — designed to document income differently.</strong> Bank statements instead of tax returns. Rental income instead of personal income. Assets instead of paychecks. Different documentation, real loans.</p>
      </div>
      <div className="q-stack">
      <div className="q">&quot;My tax returns don&apos;t show what I actually make.&quot;</div>
      <div className="q">&quot;I was told to come back after two more years of returns.&quot;</div>
      <div className="q">&quot;I want the property to qualify on its own rents.&quot;</div>
      <div className="q">&quot;I have assets, but not a paycheck.&quot;</div>
      </div>
      </div>
      </div>
      </section>
      <section className="chain" id="options" style={{ background: "#fff" }}>
      <div className="wrap" style={{ maxWidth: "900px" }}>
      <div className="eyebrow">The Options</div>
      <h2 style={{ fontSize: "clamp(30px,4.2vw,48px)", marginBottom: "20px" }}>Five ways income gets documented differently.</h2>
      <div className="prod fade-up"><div className="pnum">01</div><div>
      <h3>Bank Statement Loans</h3><div className="pfor">For self-employed borrowers and business owners</div>
      <p>Instead of tax returns, qualifying income may be calculated from your personal or business bank statement deposits — typically over 12 to 24 months. Built for exactly the &quot;my returns don&apos;t tell the real story&quot; situation.</p>
      </div></div>
      <div className="prod fade-up"><div className="pnum">02</div><div>
      <h3>DSCR Loans</h3><div className="pfor">For real estate investors</div>
      <p>Debt Service Coverage Ratio loans qualify the property, not your personal income — the question is whether the rents can cover the payment. Popular with investors building portfolios, and LLC ownership may be an option.</p>
      </div></div>
      <div className="prod fade-up"><div className="pnum">03</div><div>
      <h3>1099 Loans</h3><div className="pfor">For contractors, gig workers and commission earners</div>
      <p>Qualifying income may be documented from your 1099s rather than full tax returns — a middle path for independent earners whose write-offs complicate the traditional picture.</p>
      </div></div>
      <div className="prod fade-up"><div className="pnum">04</div><div>
      <h3>Asset-Based Qualification</h3><div className="pfor">For retirees and high-asset borrowers</div>
      <p>Significant assets but modest monthly income on paper? Some programs can calculate qualifying income from your asset base itself. Common for early retirees and business-sale situations.</p>
      </div></div>
      <div className="prod fade-up"><div className="pnum">05</div><div>
      <h3>Jumbo &amp; Complex-Income Structures</h3><div className="pfor">For larger loans and layered income</div>
      <p>Business distributions, bonuses, RSUs, multiple entities, multiple properties — larger loans with layered income need careful structuring. This is strategy work, and it&apos;s some of our favorite work.</p>
      </div></div>
      </div>
      </section>
      <section style={{ padding: "110px 0", background: "var(--ivory)" }}>
      <div className="wrap">
      <div className="eyebrow">The Honest Part</div>
      <h2 style={{ fontSize: "clamp(30px,4.2vw,48px)", maxWidth: "860px", marginBottom: "36px" }}>Straight talk about these loans.</h2>
      <div className="truth-box fade-up">
      <h3>Flexibility has a price tag. We&apos;ll show you exactly what it is.</h3>
      <p>Non-traditional documentation typically comes with different pricing and requirements than conventional loans — often larger down payments, reserve requirements, and different rate structures. That&apos;s the honest tradeoff for flexibility.</p>
      <p>So here&apos;s how we approach it: first we check whether you can qualify conventionally, because sometimes &quot;complicated&quot; income fits traditional guidelines better than people were told. If it does, that&apos;s usually the better deal, and that&apos;s what we&apos;ll recommend.</p>
      <p>If it doesn&apos;t, we&apos;ll lay out the non-traditional options side by side — total costs, requirements, tradeoffs — so you can decide with the whole picture in front of you. No surprises at the closing table. That&apos;s the MMG Way, whatever loan it turns out to be.</p>
      </div>
      </div>
      </section>
      <section className="values" style={{ paddingTop: "0" }}>
      <div className="wrap">
      <div className="eyebrow">Come Prepared</div>
      <h2 style={{ fontSize: "clamp(30px,4.2vw,48px)", marginBottom: "44px" }}>What to have handy for the first conversation.</h2>
      <div className="check-grid">
      <div className="check-card fade-up">
      <h3>Self-employed &amp; business owners</h3>
      <div className="cc-for">Don&apos;t gather everything yet — just know where it is</div>
      <ul>
      <li>Your last two years of personal and business tax returns</li>
      <li>12–24 months of business or personal bank statements</li>
      <li>How long you&apos;ve owned the business, and your ownership share</li>
      <li>A rough sense of monthly deposits and expenses</li>
      <li>Your CPA&apos;s contact info, if you&apos;d like us to coordinate</li>
      </ul>
      </div>
      <div className="check-card dark fade-up">
      <h3>Real estate investors</h3>
      <div className="cc-for">For the property you&apos;re buying and the ones you own</div>
      <ul>
      <li>The address or listing for the property you&apos;re considering</li>
      <li>Current or projected rents, and any existing leases</li>
      <li>A list of properties you own and their mortgages</li>
      <li>Whether you plan to buy in your name or an LLC</li>
      <li>Cash available for down payment and reserves</li>
      </ul>
      </div>
      </div>
      </div>
      </section>
      <PageReviews
        eyebrow="Client Reviews"
        title="Complicated files. Smooth closings."
        names={["Kayla Beckman", "Amanda Viele"]}
      />
      <PageFaq eyebrow="Self-Employed & Investor Questions" title="The questions we hear from business owners and investors." items={faqs} />
      <section className="final">
      <div className="wrap">
      <h2>&quot;Complicated income&quot; is our kind of puzzle.</h2>
      <p>Bring us the real picture — the business, the properties, the 1099s, all of it. We&apos;ll tell you what&apos;s possible and what it costs. Plain English, real numbers.</p>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
      <a className="btn btn-primary" href="#contact">Discuss My Financing Strategy</a>
      </div>
      <p className="small">All loan options subject to credit and property approval and program availability. Not all borrowers will qualify. Programs, requirements and terms are subject to change. This is not an offer of credit or a commitment to lend.</p>
      </div>
      </section>
      <PageContact
        title="Bring us the real picture."
        sub="The business, the properties, the 1099s — all of it. A real person from MMG will follow up, usually the same business day, with what's possible and what it costs."
        goal="Self-employed / non-traditional income"
      />
      <RelatedPages hrefs={["/homeowners", "/move-up-buyers", "/calculators"]} />
    </>
  );
}
