import type { Metadata } from "next";
import VideoEmbed from "@/components/mmg/VideoEmbed";
import Image from "next/image";
import Link from "next/link";
import BreakEven from "@/components/mmg/BreakEven";
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
  { href: "#review", title: "Annual Mortgage Review", blurb: "Fifteen minutes, once a year. Where you stand and whether anything should change." },
  { href: "#equity", title: "Home Equity Strategy", blurb: "What your equity could help you accomplish — and when to leave it alone." },
  { href: "#refinance", title: "Refinance Analysis", blurb: "Break-even math, not marketing. Worth it, or not right now." },
  { href: "#investment", title: "Investment Property", blurb: "Pressure-test the numbers before you fall in love with a duplex." },
  { href: "#moveup", title: "Move-Up Planning", blurb: "Sell first, buy first, and how to avoid moving twice." },
];

const changes = [
  { t: "Rates moved", p: "Up, down, sideways. Whether that matters depends on your rate, your balance and how long you're staying — not the headline." },
  { t: "Your home's value moved", p: "Equity you didn't have at closing can open doors: PMI removal, a renovation, the next down payment." },
  { t: "PMI may be done", p: "Plenty of homeowners keep paying mortgage insurance they could ask to remove. It's worth checking." },
  { t: "Your plans changed", p: "A new baby, a new job, a parent moving in, a business to fund. The mortgage should keep up with the life." },
];

const reviewRows = [
  { k: "Balance & amortization", v: "Tracking on schedule", s: "ok" },
  { k: "Estimated equity", v: "Up since closing", s: "ok" },
  { k: "Mortgage insurance", v: "May be eligible to remove", s: "flag" },
  { k: "Refinance", v: "Not worth it right now", s: "ok" },
  { k: "Coming up", v: "Kitchen remodel in 2 years", s: "plan" },
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
      <h1 style={{ fontSize: "clamp(38px,5vw,62px)" }}>Your mortgage shouldn&apos;t go on autopilot <em>for 30 years.</em></h1>
      <p className="lead">Life changes. Rates change. Equity grows. The mortgage that was right when you closed deserves a check-in now and then — and as an MMG client, that&apos;s part of the deal. Forever.</p>
      <div className="hero-ctas">
      <a className="btn btn-primary" href="#contact">Schedule My Annual Review</a>
      <a className="textlink" href="#services">See What We Cover ↓</a>
      </div>
      <div className="fairway-badge"><span className="pb">Powered by</span><Image priority src="/images/mmg/fairway-logo.png" width={420} height={156} alt="Fairway Home Mortgage" /></div>
      </div>
      <div className="hero-photo">
      <div className="photo-frame"><Image priority src="/images/mmg/michael-mmgway-conversation.jpg" width={900} height={1347} alt="Michael Martin talking through a homeowner's annual mortgage review" sizes="(max-width: 900px) 100vw, 45vw" /></div>
      <div className="hero-badge">
      <div className="num">$0</div>
      <div className="lbl">Annual review for MMG clients</div>
      </div>
      </div>
      </div>
      </header>

      <section className="trust">
      <div className="wrap">
      <div className="eyebrow on-dark">The Annual Review, In Short</div>
      <div className="trust-grid four">
      <div className="stat fade-up"><div className="num">15 min</div><div className="lbl">Phone or video, once a year</div></div>
      <div className="stat fade-up"><div className="num">$0</div><div className="lbl">Included for every MMG client</div></div>
      <div className="stat fade-up"><div className="num">No pull</div><div className="lbl">No credit check to see where you stand</div></div>
      <div className="stat fade-up"><div className="num">30 yrs</div><div className="lbl">For the life of your loan, not just closing day</div></div>
      </div>
      </div>
      </section>

      <section className="problem ho-changes">
      <div className="wrap">
      <div className="eyebrow">Since You Closed</div>
      <h2>You closed on one version of your life. <span className="accent">You&apos;re living in another.</span></h2>
      <div className="problem-body">
      <p>Most people never hear from their lender again after closing. Meanwhile, almost everything that shaped the loan has moved.</p>
      </div>
      <div className="change-grid">
      {changes.map((c, i) => (
        <div className="change fade-up" key={c.t}>
          <span className="cn">{String(i + 1).padStart(2, "0")}</span>
          <h3>{c.t}</h3>
          <p>{c.p}</p>
        </div>
      ))}
      </div>
      </div>
      </section>

      <section className="pathways" id="services">
      <div className="wrap pw-grid">
      <div className="pw-head">
      <div className="eyebrow">Closing Isn&apos;t Goodbye</div>
      <h2>Five ways we stay in your corner after the keys.</h2>
      <p className="sub">Our clients hear from us every year — with something useful to say. Pick the one that&apos;s on your mind, or just ask.</p>
      <a className="btn btn-primary" href="#contact">Not Sure? Start Here</a>
      </div>
      <ul className="pw-list">
      {services.map((s, i) => (
        <li key={s.href}>
          <a className="pw-row" href={s.href}>
            <span className="pw-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            <span className="pw-text">
              <span className="pw-title">{s.title}</span>
              <span className="pw-blurb">{s.blurb}</span>
            </span>
            <span className="pw-go" aria-hidden="true">↓</span>
          </a>
        </li>
      ))}
      </ul>
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
      <p style={{ marginTop: "26px" }}><a className="btn btn-primary" href="#contact">Schedule My Annual Review</a></p>
      </div>
      <div className="review-card fade-up">
      <div className="rc-head">
      <div>
      <div className="rc-label">Your Annual Review</div>
      <div className="rc-title">What you walk away with</div>
      </div>
      <span className="rc-tag">Example</span>
      </div>
      <ul className="rc-rows">
      {reviewRows.map((r) => (
        <li key={r.k}>
          <span className="rc-k">{r.k}</span>
          <span className={`rc-v ${r.s}`}>{r.v}</span>
        </li>
      ))}
      </ul>
      <div className="rc-verdict">
      <strong>The verdict: you&apos;re in great shape.</strong>
      Ask your servicer about dropping PMI, and let&apos;s talk again before the remodel. See you next year.
      </div>
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
      <div className="wrap">
      <div className="ho-head">
      <div className="eyebrow">02 · Home Equity Strategy</div>
      <h2>Your equity is an asset. Treat it like one.</h2>
      <p>Renovations. Education. Consolidating higher-interest debt. A down payment on the next property. Your equity can potentially help fund goals — but accessing it is a strategy decision, not a transaction. Here are the three paths we walk through with you.</p>
      </div>
      <div className="opt-grid">
      <div className="opt fade-up">
      <div className="opt-tag">Option A</div>
      <h3>Cash-out refinance</h3>
      <div className="opt-sub">Replaces your current mortgage</div>
      <ul>
      <li>One loan, one payment</li>
      <li>Can make sense if today&apos;s terms beat your current ones</li>
      <li>Trades away your existing rate — matters a lot if you love it</li>
      </ul>
      </div>
      <div className="opt fade-up">
      <div className="opt-tag">Option B</div>
      <h3>Home equity line</h3>
      <div className="opt-sub">Sits alongside your mortgage</div>
      <ul>
      <li>Keeps your first mortgage untouched</li>
      <li>Draw what you need, when you need it</li>
      <li>Usually a variable rate — plan for it moving</li>
      </ul>
      </div>
      <div className="opt dark fade-up">
      <div className="opt-tag">Option C</div>
      <h3>Leave it alone</h3>
      <div className="opt-sub">Sometimes the smartest play</div>
      <ul>
      <li>Your equity keeps building quietly</li>
      <li>No new costs, no new debt on the house</li>
      <li>We&apos;ll tell you when this is the right answer</li>
      </ul>
      </div>
      </div>
      <div className="ho-foot">
      <p>We&apos;ll show you how much equity you actually have, what each path costs short- and long-term, and how it changes your monthly picture.</p>
      <a className="textlink" href="#contact">Explore My Equity →</a>
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
      <p>Try it yourself. Then let us run it properly — with your actual loan, the term question (restart the clock or shorten it), and any cash-out considerations. If it doesn&apos;t pay off, you&apos;ll know to ignore the ads.</p>
      <ul className="ho-ticks">
      <li>Total cost, all-in — no surprises</li>
      <li>Monthly savings and break-even timeline</li>
      <li>Term strategy and total interest over the life of the loan</li>
      <li>A straight answer: worth it, or not right now</li>
      </ul>
      <p style={{ marginTop: "26px" }}><a className="btn btn-primary" href="#contact">Request My Refinance Analysis</a></p>
      </div>
      <BreakEven />
      </div>
      </section>

      <section className="ho-section" style={{ borderBottom: "none" }}>
      <div className="wrap">
      <div className="ho-head">
      <div className="eyebrow">04 &amp; 05 · What&apos;s Next</div>
      <h2>Thinking about the next property?</h2>
      <p>Whether it&apos;s a rental or the next family home, the strategy starts with the house you already own.</p>
      </div>
      <div className="duo-grid">
      <div className="duo fade-up" id="investment">
      <div className="duo-tag">04 · Investment Property</div>
      <h3>Thinking about becoming a landlord?</h3>
      <div className="duo-sub">Let&apos;s pressure-test the numbers first.</div>
      <p>Rental property can be a powerful wealth builder — and an expensive lesson when the numbers were never real. Strategy first, property second.</p>
      <ul>
      <li>How financing differs for investment properties</li>
      <li>Reserves, down payment and how rental income counts</li>
      <li>Using existing equity toward the purchase — pros and cons</li>
      <li>Building toward property number two, three, and beyond</li>
      </ul>
      <div className="duo-cta">
      <a className="btn btn-primary" href="#contact">Talk Investment Strategy</a>
      <Link className="textlink" href="/flexible-financing">DSCR &amp; Investor Loans →</Link>
      </div>
      </div>
      <div className="duo dark fade-up" id="moveup">
      <div className="duo-tag">05 · Move-Up Planning</div>
      <h3>Outgrowing this house?</h3>
      <div className="duo-sub">There&apos;s a whole strategy for that.</div>
      <p>Sell first or buy first? Where does the down payment come from? Can you avoid moving twice? We built a full page for it — including a real family who bought before selling.</p>
      <ul>
      <li>Buy-before-you-sell structures, explained</li>
      <li>Turning current equity into the next down payment</li>
      <li>Timing two transactions without losing your mind</li>
      <li>What &quot;ready&quot; looks like before you browse listings</li>
      </ul>
      <div className="duo-cta">
      <Link className="btn btn-primary" href="/move-up-buyers">Explore Move-Up Strategy</Link>
      </div>
      </div>
      </div>
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
