import type { Metadata } from "next";
import VideoEmbed from "@/components/mmg/VideoEmbed";
import Image from "next/image";
import Link from "next/link";
import HeroPanel from "@/components/mmg/HeroPanel";
import PageContact from "@/components/mmg/PageContact";
import PageFaq from "@/components/mmg/PageFaq";
import PageReviews from "@/components/mmg/PageReviews";
import RelatedPages from "@/components/mmg/RelatedPages";

export const metadata: Metadata = {
  title: "Homeowners — Annual Mortgage Review, Equity & Refinance",
  description: "Your mortgage shouldn't go on autopilot for 30 years. Annual mortgage reviews, home equity strategy, refinance analysis and investment property financing from Martin Mortgage Group.",
  alternates: { canonical: "/homeowners" },
  openGraph: {
    title: "Homeowners — Annual Mortgage Review, Equity & Refinance | Martin Mortgage Group",
    description: "Your mortgage shouldn't go on autopilot for 30 years. Annual mortgage reviews, home equity strategy, refinance analysis and investment property financing from Martin Mortgage Group.",
    url: "/homeowners",
  },
};

const services = [
  { n: "01", href: "#review", title: "Annual Mortgage Review", blurb: "Fifteen minutes, once a year. Where you stand and whether anything should change." },
  { n: "02", href: "#equity", title: "Home Equity Strategy", blurb: "What your equity could help you accomplish — and when to leave it alone." },
  { n: "03", href: "#refinance", title: "Refinance Analysis", blurb: "Break-even math, not marketing. Worth it, or not right now." },
  { n: "04", href: "#investment", title: "Investment Property", blurb: "Pressure-test the numbers before you fall in love with a duplex." },
  { n: "05", href: "#moveup", title: "Move-Up Planning", blurb: "Sell first, buy first, and how to avoid moving twice." },
];

const faqs = [
  {
    q: "Do I have to be an MMG client to get an annual review?",
    a: "No. MMG clients get it automatically, but if your mortgage is with another lender, we're still happy to look at where you stand. No obligation, and no pressure to change anything that's working.",
  },
  {
    q: "Does an annual review check my credit?",
    a: "Not by default. Most of the review — your balance, payment, amortization, estimated value and equity — doesn't require a credit pull. If you decide you want to explore a specific option, we'll tell you before anything touches your credit.",
  },
  {
    q: "How do I know if refinancing is actually worth it?",
    a: "Compare what the refinance costs, all-in, to what it saves each month, and how long you plan to keep the loan. If you'll keep it well past the break-even point, it may make sense. If not, it probably doesn't — no matter what the ad says. We run that math with you.",
  },
  {
    q: "When can PMI come off my loan?",
    a: "On many conventional loans, you can request PMI removal once your balance reaches 80% of the home's original value, and it typically ends automatically around 78% if your payments are current. Rising home values may also open a path sooner on some loans. Rules vary by loan type and servicer, so we'll check yours.",
  },
  {
    q: "What's the difference between a cash-out refinance and a home equity line?",
    a: "A cash-out refinance replaces your current mortgage with a new, larger one and pays you the difference. A home equity line of credit (HELOC) leaves your first mortgage alone and adds a separate line you can draw from. Which fits depends on your current rate, how much you need, and how you plan to use it.",
  },
  {
    q: "Is it a bad idea to use home equity to pay off debt?",
    a: "Not automatically, but it deserves care. Consolidating higher-interest debt can lower your monthly costs — it also turns unsecured debt into debt secured by your home. We'll walk through the full picture, including the option of not touching your equity at all.",
  },
];

export default function Page() {
  return (
    <>
      <header className="hero page-hero" style={{ padding: "182px 0 90px" }}>
      <div className="wrap hero-grid">
      <div>
      <div className="eyebrow">For Homeowners</div>
      <h1 style={{ fontSize: "clamp(38px,5vw,60px)" }}>Your mortgage shouldn&apos;t go on autopilot <em>for 30 years.</em></h1>
      <p className="lead" style={{ maxWidth: "560px" }}>Life changes. Rates change. Equity grows. The mortgage that was right when you closed deserves a check-in now and then — and as an MMG client, that&apos;s part of the deal. Forever.</p>
      <div className="hero-ctas">
      <a className="btn btn-primary" href="#contact">Schedule My Annual Review</a>
      <a className="textlink" href="#services">See What We Cover ↓</a>
      </div>
      <div className="fairway-badge"><span className="pb">Powered by</span><Image priority src="/images/mmg/fairway-logo.png" width={420} height={156} alt="Fairway Home Mortgage" /></div>
      </div>
      <HeroPanel
        label="Your Annual Review"
        title="Fifteen minutes. Once a year. Straight answers."
        items={[
          "Payment, balance & amortization check",
          "Estimated home value and equity position",
          "PMI removal check, if you're paying it",
          "Refinance math — only if it benefits you",
          "A plan for what's coming next",
        ]}
        footStat="$0"
        footText="Included for MMG clients. Open to everyone else."
      />
      </div>
      </header>

      <section className="pathways" id="services" style={{ paddingTop: "40px" }}>
      <div className="wrap">
      <div className="eyebrow">Closing Isn&apos;t Goodbye</div>
      <h2 style={{ fontSize: "clamp(30px,4.2vw,48px)", maxWidth: "820px" }}>Five ways we stay in your corner after the keys.</h2>
      <p className="sub">Most people never hear from their lender again. Our clients hear from us every year — with something useful to say.</p>
      <div className="jump-grid">
      {services.map((s) => (
        <a className="jump fade-up" href={s.href} key={s.href}>
          <span className="jn">{s.n}</span>
          <h3>{s.title}</h3>
          <p>{s.blurb}</p>
          <span className="go">Learn more ↓</span>
        </a>
      ))}
      <a className="jump dark fade-up" href="#contact">
        <span className="jn">?</span>
        <h3>Not sure what you need?</h3>
        <p>Tell us what&apos;s on your mind. We&apos;ll figure out which conversation it is.</p>
        <span className="go">Start a conversation →</span>
      </a>
      </div>
      </div>
      </section>

      <section className="ho-section" id="review">
      <div className="wrap ho-grid">
      <div>
      <div className="eyebrow">01 · Annual Mortgage Review</div>
      <h2>Your mortgage deserves an annual checkup.</h2>
      <div className="ho-sub">Fifteen minutes, once a year. That&apos;s it.</div>
      <p>You review your insurance. Your doctor reviews your health. Your mortgage — probably the largest debt of your life — shouldn&apos;t be the one thing nobody ever looks at again.</p>
      <p>Every year, we&apos;ll look at where you stand and tell you the truth: sometimes &quot;there&apos;s an opportunity here,&quot; and very often &quot;you&apos;re in great shape, don&apos;t touch a thing.&quot; Both answers are worth fifteen minutes.</p>
      <p style={{ marginTop: "22px" }}><a className="btn btn-primary" href="#contact">Schedule My Annual Review</a></p>
      </div>
      <div>
      <ul className="ho-points">
      <li>Current balance, payment, and how your amortization is tracking</li>
      <li>Estimated home value and equity position</li>
      <li>Whether PMI can come off, if you&apos;re paying it</li>
      <li>Refinance math — only if it actually benefits you</li>
      <li>Equity opportunities for goals you have coming up</li>
      <li>Early planning if a move is on the horizon</li>
      </ul>
      <div className="ho-callout"><strong>&quot;You&apos;re in great shape.&quot;</strong>That&apos;s the most common outcome of an annual review — and it&apos;s a good one. Knowing you don&apos;t need to do anything is worth something too.</div>
      </div>
      </div>
      </section>

      <section className="journey">
      <div className="wrap">
      <div className="eyebrow on-dark">How the Review Works</div>
      <h2>No paperwork marathon. No sales pitch.</h2>
      <p className="sub">Here&apos;s what fifteen minutes with our team actually looks like.</p>
      <div className="journey-grid four">
      <div className="j-step fade-up"><div className="num">01 — REACH OUT</div><h3>Pick a time</h3><p>Send a note below or call. We&apos;ll find fifteen minutes that work for you — phone or video.</p></div>
      <div className="j-step fade-up"><div className="num">02 — WE PREP</div><h3>We do the homework</h3><p>We pull together your loan details and an estimate of your home&apos;s value before we talk.</p></div>
      <div className="j-step fade-up"><div className="num">03 — WE TALK</div><h3>Your numbers, explained</h3><p>Where you stand, what&apos;s changed, and any goals coming up — in plain English.</p></div>
      <div className="j-step fade-up"><div className="num">04 — YOU DECIDE</div><h3>A straight answer</h3><p>&quot;Leave it alone&quot; or &quot;here&apos;s an opportunity.&quot; Either way, the decision stays yours.</p></div>
      </div>
      </div>
      </section>

      <section className="ho-section white" id="equity">
      <div className="wrap ho-grid flip">
      <div>
      <div className="eyebrow">02 · Home Equity Strategy</div>
      <h2>Your equity is an asset. Treat it like one.</h2>
      <div className="ho-sub">What could it help you accomplish?</div>
      <p>Renovations. Education. Consolidating higher-interest debt. A down payment on the next property. Your equity can potentially help fund goals — but accessing it is a strategy decision, not a transaction.</p>
      <p>We&apos;ll walk through the options for your situation, the tradeoffs of each, and — importantly — whether touching your equity is the right move at all. Sometimes the answer is &quot;leave it alone.&quot; We&apos;ll tell you that too.</p>
      <p style={{ marginTop: "22px" }}><a className="textlink" href="#contact">Explore My Equity →</a></p>
      </div>
      <div>
      <ul className="ho-points">
      <li>How much equity you actually have — and how much is accessible</li>
      <li>The different ways to access it, explained in plain English</li>
      <li>What each option costs, short-term and long-term</li>
      <li>How each choice affects your monthly picture</li>
      <li>When keeping your equity untouched is the smarter play</li>
      </ul>
      <div className="ho-callout"><strong>Cash-out refinance or equity line?</strong>One replaces your mortgage; the other sits alongside it. If you have a rate you love, that difference matters a lot. We&apos;ll show you both.</div>
      </div>
      </div>
      </section>

      <section className="ho-section dark" id="refinance">
      <div className="wrap ho-grid">
      <div>
      <div className="eyebrow">03 · Refinance Analysis</div>
      <h2>Refinancing is math, not marketing.</h2>
      <div className="ho-sub">We&apos;ll run the real numbers.</div>
      <p>You&apos;ve seen the ads. What they never show is the break-even math: what the refinance costs, what it saves, and how long you&apos;d need to keep the loan for it to pay off.</p>
      <p>We run that math with you, honestly. If a refinance genuinely benefits you, we&apos;ll show you exactly why and how. If it doesn&apos;t, we&apos;ll show you that too — and you&apos;ll know to ignore the ads.</p>
      <p style={{ marginTop: "22px" }}><a className="textlink" href="#contact">Request My Refinance Analysis →</a></p>
      </div>
      <div>
      <ul className="ho-points">
      <li>Total cost of the refinance, all-in — no surprises</li>
      <li>Monthly savings and break-even timeline</li>
      <li>Term strategy: restarting the clock vs. shortening it</li>
      <li>Cash-out considerations, if that&apos;s on your mind</li>
      <li>A straight answer: worth it, or not right now</li>
      </ul>
      <div className="ho-callout"><strong>The break-even question</strong>Total cost of the refinance ÷ monthly savings = months to break even. If you&apos;ll keep the loan well past that point, it may be worth a closer look. If not, it probably isn&apos;t.</div>
      </div>
      </div>
      </section>

      <section className="ho-section" id="investment">
      <div className="wrap ho-grid flip">
      <div>
      <div className="eyebrow">04 · Investment Property Financing</div>
      <h2>Thinking about becoming a landlord?</h2>
      <div className="ho-sub">Let&apos;s pressure-test the numbers first.</div>
      <p>Rental property can be a powerful wealth builder — and an expensive lesson when the numbers were never real. Before you fall in love with a duplex, we&apos;ll walk through how investment financing actually works and what the full financial picture looks like.</p>
      <p>Down payment requirements, reserves, how rental income factors in, and how this purchase fits alongside your current mortgage. Strategy first, property second.</p>
      <p style={{ marginTop: "22px" }}><a className="textlink" href="#contact">Talk Investment Strategy →</a> <span style={{ margin: "0 10px", color: "var(--slate)" }}>·</span> <Link className="textlink" href="/flexible-financing">DSCR &amp; Investor Loans →</Link></p>
      </div>
      <div>
      <ul className="ho-points">
      <li>How financing differs for investment properties</li>
      <li>What lenders look for: reserves, down payment, income</li>
      <li>Running honest numbers on a property you&apos;re considering</li>
      <li>Using existing equity toward the purchase — pros and cons</li>
      <li>Building toward property number two, three, and beyond</li>
      </ul>
      </div>
      </div>
      </section>

      <section className="ho-section white" id="moveup" style={{ borderBottom: "none" }}>
      <div className="wrap ho-grid">
      <div>
      <div className="eyebrow">05 · Move-Up Planning</div>
      <h2>Outgrowing this house?</h2>
      <div className="ho-sub">There&apos;s a whole strategy for that.</div>
      <p>Sell first or buy first? Where does the down payment come from? Can you avoid moving twice? Move-up strategy is its own discipline, and we built a full page for it — including the real story of a family who bought before selling when they didn&apos;t think it was possible.</p>
      <p style={{ marginTop: "22px" }}><Link className="btn btn-primary" href="/move-up-buyers">Explore Move-Up Strategy</Link></p>
      </div>
      <ul className="ho-points">
      <li>Buy-before-you-sell structures, explained</li>
      <li>Turning current equity into the next down payment</li>
      <li>Timing two transactions without losing your mind</li>
      <li>What &quot;ready&quot; looks like before you start browsing listings</li>
      </ul>
      </div>
      </section>

      <PageReviews
        eyebrow="Years After Closing"
        title="“Almost 3 years later, they are still regularly checking in with us.”"
        names={["Mollie Ward", "Jennifer Batten"]}
      />

      {/* VIDEO — Script 8 — After Closing. Drop the YouTube ID (or a self-hosted src)
          on the VideoEmbed below once the studio edit is delivered:
          <VideoEmbed title="…" youtubeId="abc123" /> */}
      <section className="video-section on-ivory">
      <div className="wrap">
      <div className="vs-head">
      <div className="eyebrow">After Closing</div>
      <h2>Closing isn&apos;t goodbye</h2>
      <p>Most people never hear from their lender again. We do it differently.</p>
      </div>
      <VideoEmbed title="Closing isn't goodbye" />
      </div>
      </section>

      <PageFaq
        white
        eyebrow="Homeowner Questions"
        title="The questions homeowners ask us most."
        items={faqs}
      />

      <section className="final">
      <div className="wrap">
      <h2>Already an MMG client? This is all included.</h2>
      <p>Closing wasn&apos;t goodbye. Reach out any time — about your mortgage, your equity, your plans, or a question that&apos;s been bugging you. Not an MMG client yet? The door&apos;s open.</p>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
      <a className="btn btn-primary" href="#contact">Schedule My Annual Review</a>
      <Link className="btn btn-outline on-dark" href="/calculators">Run the Numbers</Link>
      </div>
      <p className="small">Refinancing or accessing equity may increase total finance charges over the life of the loan. All loans subject to credit and property approval. Not all borrowers will qualify. This is not an offer of credit or a commitment to lend.</p>
      </div>
      </section>

      <PageContact
        title="Let's check in on your mortgage."
        sub="Tell us what's on your mind — an annual review, your equity, a refinance question, or the next house. A real person from MMG will follow up, usually the same business day."
        goal="Annual mortgage review"
      />

      <RelatedPages hrefs={["/move-up-buyers", "/flexible-financing", "/calculators"]} />
    </>
  );
}
