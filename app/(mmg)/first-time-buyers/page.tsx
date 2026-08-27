import type { Metadata } from "next";
import VideoEmbed from "@/components/mmg/VideoEmbed";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "First-Time Home Buyers in Raleigh, NC",
  description: "Your first home comes with a lot of questions. That's normal. Martin Mortgage Group helps first-time buyers in NC, SC, VA & GA understand their options and buy with confidence.",
  alternates: { canonical: "/first-time-buyers" },
  openGraph: {
    title: "First-Time Home Buyers in Raleigh, NC | Martin Mortgage Group",
    description: "Your first home comes with a lot of questions. That's normal. Martin Mortgage Group helps first-time buyers in NC, SC, VA & GA understand their options and buy with confidence.",
    url: "/first-time-buyers",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      "name": "Can I actually afford to buy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "That's the first question we answer together, and it isn't answered by an online calculator. Affordability is about your whole picture: income, debts, savings, and — most importantly — the monthly payment you're actually comfortable with. Approved-for and comfortable-with are two different numbers. We'll help you find yours."
      }
    },
    {
      "@type": "Question",
      "name": "How much should I spend?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Usually less than your maximum approval. Lenders will tell you the most you can borrow. We'd rather help you figure out what fits your life — with room left over for furniture, travel, savings, and the life you actually want to live in that house."
      }
    },
    {
      "@type": "Question",
      "name": "How much cash do I need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Less than most people think. Between low down payment loan options, closing costs, and reserves, we'll build a real number for your situation. Many first-time buyers are surprised to learn they were closer to ready than they assumed."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need 20% down?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. That's one of the most persistent myths in this business. Plenty of loan programs allow significantly lower down payments. Putting 20% down avoids mortgage insurance, but it isn't the only smart strategy — sometimes keeping cash in reserve matters more. We'll walk through the tradeoffs."
      }
    },
    {
      "@type": "Question",
      "name": "What is PMI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Private mortgage insurance — a monthly cost that typically applies when you put less than 20% down on a conventional loan. It isn't a penalty; it's the thing that makes lower down payments possible. In many cases it can be removed later as you build equity. We'll show you exactly how it affects your payment."
      }
    },
    {
      "@type": "Question",
      "name": "What credit score do I need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It varies by loan program, and it's often lower than people expect. More importantly: if your score needs work, we can point out what's actually moving the needle so you have a path, not just a no. Don't rule yourself out before we've looked together."
      }
    },
    {
      "@type": "Question",
      "name": "What are closing costs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The costs of completing the transaction — things like lender fees, title work, attorney fees, taxes, and prepaid items like insurance and escrow. We'll estimate them early so there's no sticker shock, and we'll talk through strategies like seller credits that can reduce what you bring to the table."
      }
    },
    {
      "@type": "Question",
      "name": "What is escrow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An account your loan servicer uses to pay your property taxes and homeowner's insurance from your monthly payment, so you're not hit with big bills once or twice a year. One payment, spread out, handled."
      }
    },
    {
      "@type": "Question",
      "name": "How does pre-approval work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We review your income, assets, and credit up front, so when you make an offer, your financing carries real weight. It's also where strategy starts — pre-approval tells us what's possible so we can plan what's smart. And it's the step that lets you move fast when you find the right house.*"
      }
    },
    {
      "@type": "Question",
      "name": "Will checking my credit hurt my score?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A mortgage credit check is a single inquiry with a small, temporary effect — and credit scoring models account for rate shopping. The bigger risk isn't the inquiry. It's guessing about your credit instead of knowing."
      }
    },
    {
      "@type": "Question",
      "name": "What happens after I'm pre-approved?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You shop with confidence, we stay in your corner. When you find the house, we work with your Realtor to position your offer, then our team manages the financing from contract to closing — with proactive updates the whole way, so you always know what's happening and what comes next."
      }
    }
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <header className="hero page-hero" style={{ padding: "170px 0 90px" }}>
      <div className="wrap hero-grid">
      <div>
      <div className="eyebrow">First-Time Buyers</div>
      <h1 style={{ fontSize: "clamp(38px,5vw,62px)" }}>Your first home comes with a lot of <em>questions.</em></h1>
      <p className="lead">That&apos;s normal. Our job is to help you answer them — in plain English, at your pace, with zero pressure to be further along than you are.</p>
      <div className="hero-ctas">
      <Link className="btn btn-primary" href="/#contact">Build My Homebuying Plan</Link>
      <a className="textlink" href="#faqs">Start With the Questions ↓</a>
      </div>
      <div className="hero-meta"><strong>You don&apos;t need to know the answers yet.</strong><br />That&apos;s what the conversation is for.</div>
      <div className="fairway-badge"><span className="pb">Powered by</span><Image priority src="/images/mmg/fairway-logo.png" width={420} height={156} alt="Fairway Home Mortgage" /></div>
      </div>
      <div className="hero-photo">
      <div className="photo-frame"><Image src="/images/mmg/michael-ftb-hero.jpg" width={900} height={1347} alt="Michael Martin, Raleigh mortgage advisor for first-time buyers" sizes="(max-width: 900px) 100vw, 45vw" /></div>
      </div>
      </div>
      </header>
      <section className="chain" id="faqs" style={{ background: "#fff", paddingTop: "80px" }}>
      <div className="wrap">
      <div className="eyebrow">The Questions Everyone Has</div>
      <h2 style={{ fontSize: "clamp(32px,4.4vw,52px)", marginBottom: "16px" }}>Straight answers. No mortgage BS.</h2>
      <p style={{ fontSize: "17px", color: "var(--slate)", marginBottom: "40px", maxWidth: "620px" }}>Tap any question. If yours isn&apos;t here, that&apos;s what the first conversation is for.</p>
      <div className="faq-list">
      <details className="faq"><summary>Can I actually afford to buy?</summary><div className="a"><p>That&apos;s the first question we answer together, and it isn&apos;t answered by an online calculator. Affordability is about your whole picture: income, debts, savings, and — most importantly — the monthly payment you&apos;re actually comfortable with. Approved-for and comfortable-with are two different numbers. We&apos;ll help you find yours.</p></div></details><details className="faq"><summary>How much should I spend?</summary><div className="a"><p>Usually less than your maximum approval. Lenders will tell you the most you can borrow. We&apos;d rather help you figure out what fits your life — with room left over for furniture, travel, savings, and the life you actually want to live in that house.</p></div></details><details className="faq"><summary>How much cash do I need?</summary><div className="a"><p>Less than most people think. Between low down payment loan options, closing costs, and reserves, we&apos;ll build a real number for your situation. Many first-time buyers are surprised to learn they were closer to ready than they assumed.</p></div></details><details className="faq"><summary>Do I need 20% down?</summary><div className="a"><p>No. That&apos;s one of the most persistent myths in this business. Plenty of loan programs allow significantly lower down payments. Putting 20% down avoids mortgage insurance, but it isn&apos;t the only smart strategy — sometimes keeping cash in reserve matters more. We&apos;ll walk through the tradeoffs.</p></div></details><details className="faq"><summary>What is PMI?</summary><div className="a"><p>Private mortgage insurance — a monthly cost that typically applies when you put less than 20% down on a conventional loan. It isn&apos;t a penalty; it&apos;s the thing that makes lower down payments possible. In many cases it can be removed later as you build equity. We&apos;ll show you exactly how it affects your payment.</p></div></details><details className="faq"><summary>What credit score do I need?</summary><div className="a"><p>It varies by loan program, and it&apos;s often lower than people expect. More importantly: if your score needs work, we can point out what&apos;s actually moving the needle so you have a path, not just a no. Don&apos;t rule yourself out before we&apos;ve looked together.</p></div></details><details className="faq"><summary>What are closing costs?</summary><div className="a"><p>The costs of completing the transaction — things like lender fees, title work, attorney fees, taxes, and prepaid items like insurance and escrow. We&apos;ll estimate them early so there&apos;s no sticker shock, and we&apos;ll talk through strategies like seller credits that can reduce what you bring to the table.</p></div></details><details className="faq"><summary>What is escrow?</summary><div className="a"><p>An account your loan servicer uses to pay your property taxes and homeowner&apos;s insurance from your monthly payment, so you&apos;re not hit with big bills once or twice a year. One payment, spread out, handled.</p></div></details><details className="faq"><summary>How does pre-approval work?</summary><div className="a"><p>We review your income, assets, and credit up front, so when you make an offer, your financing carries real weight. It&apos;s also where strategy starts — pre-approval tells us what&apos;s possible so we can plan what&apos;s smart. And it&apos;s the step that lets you move fast when you find the right house.*</p></div></details><details className="faq"><summary>Will checking my credit hurt my score?</summary><div className="a"><p>A mortgage credit check is a single inquiry with a small, temporary effect — and credit scoring models account for rate shopping. The bigger risk isn&apos;t the inquiry. It&apos;s guessing about your credit instead of knowing.</p></div></details><details className="faq"><summary>What happens after I&apos;m pre-approved?</summary><div className="a"><p>You shop with confidence, we stay in your corner. When you find the house, we work with your Realtor to position your offer, then our team manages the financing from contract to closing — with proactive updates the whole way, so you always know what&apos;s happening and what comes next.</p></div></details>
      </div>
      </div>
      </section>
      <section className="story">
      <div className="wrap">
      <div className="eyebrow on-dark">Protect Your Closing</div>
      <h2 style={{ fontSize: "clamp(30px,4.2vw,50px)", color: "#fff", maxWidth: "820px", marginBottom: "16px" }}>What NOT to do between contract and closing.</h2>
      <p style={{ color: "rgba(255,255,255,.75)", maxWidth: "620px", fontSize: "17px" }}>Your loan approval is based on your financial picture at application. Big changes before closing can put it at risk. When in doubt, call us first — a two-minute conversation beats a closing-day surprise.</p>
      <div className="dont-list">
      <div className="dont fade-up"><div className="x">Don&apos;t</div><p>Open new credit cards or finance furniture, appliances, or a car — even &quot;12 months same as cash&quot; deals.</p></div>
      <div className="dont fade-up"><div className="x">Don&apos;t</div><p>Change jobs, quit, or switch from W-2 to self-employed without talking to us first.</p></div>
      <div className="dont fade-up"><div className="x">Don&apos;t</div><p>Move large amounts of money between accounts or make big cash deposits without documentation.</p></div>
      <div className="dont fade-up"><div className="x">Don&apos;t</div><p>Miss any payments — on anything.</p></div>
      <div className="dont fade-up"><div className="x">Don&apos;t</div><p>Close old credit accounts. Longer history helps you.</p></div>
      <div className="dont fade-up"><div className="x">Don&apos;t</div><p>Guess. If you&apos;re not sure whether something matters, ask us. That&apos;s literally what we&apos;re here for.</p></div>
      </div>
      </div>
      </section>
      <section className="michael">
      <div className="wrap">
      <div className="eyebrow">How This Works</div>
      <h2 style={{ fontSize: "clamp(30px,4.2vw,48px)", maxWidth: "800px", marginBottom: "48px" }}>From &quot;could we?&quot; to &quot;welcome home.&quot; Here&apos;s the path.</h2>
      <div className="journey-grid" style={{ color: "var(--ink)" }}>
      <div className="j-step fade-up"><div className="num" style={{ color: "var(--forest)" }}>01 — TALK</div><h3 style={{ color: "var(--ink)" }}>Tell us what you&apos;re trying to do</h3><p style={{ color: "var(--slate)" }}>A real conversation, not an application. Where you are, where you want to be, what&apos;s in the way.</p></div>
      <div className="j-step fade-up"><div className="num" style={{ color: "var(--forest)" }}>02 — PLAN</div><h3 style={{ color: "var(--ink)" }}>Build your buying plan</h3><p style={{ color: "var(--slate)" }}>Numbers, options, tradeoffs — and a target that fits your life, not just your approval.</p></div>
      <div className="j-step fade-up"><div className="num" style={{ color: "var(--forest)" }}>03 — PREPARE</div><h3 style={{ color: "var(--ink)" }}>Get pre-approved and ready</h3><p style={{ color: "var(--slate)" }}>So when the right house shows up, you&apos;re competing from strength.*</p></div>
      <div className="j-step fade-up"><div className="num" style={{ color: "var(--forest)" }}>04 — COMPETE</div><h3 style={{ color: "var(--ink)" }}>Make your offer count</h3><p style={{ color: "var(--slate)" }}>We work with your Realtor to position the financing behind your offer.</p></div>
      <div className="j-step fade-up"><div className="num" style={{ color: "var(--forest)" }}>05 — CLOSE</div><h3 style={{ color: "var(--ink)" }}>No mystery, no surprises</h3><p style={{ color: "var(--slate)" }}>Our team manages the details and updates you before you have to ask.</p></div>
      <div className="j-step fade-up"><div className="num" style={{ color: "var(--forest)" }}>06 — MOVE IN</div><h3 style={{ color: "var(--ink)" }}>Closing isn&apos;t goodbye</h3><p style={{ color: "var(--slate)" }}>Questions after closing? Same team, same number. Welcome to the MMG family.</p></div>
      </div>
      </div>
      </section>
      {/* VIDEO — Script 3 — First-Time Buyers. Drop the YouTube ID (or a self-hosted src)
          on the VideoEmbed below once the studio edit is delivered:
          <VideoEmbed title="…" youtubeId="abc123" /> */}
      <section className="video-section">
      <div className="wrap">
      <div className="vs-head">
      <div className="eyebrow">Watch First</div>
      <h2>What I wish every first-time buyer knew</h2>
      <p>Three things Michael wishes someone had told him before his first home.</p>
      </div>
      <VideoEmbed title="What I wish every first-time buyer knew" />
      </div>
      </section>
      <section className="final">
      <div className="wrap">
      <h2>You don&apos;t need to have it figured out to start.</h2>
      <p>Most first-time buyers we help started with &quot;we&apos;re not sure we&apos;re ready.&quot; One conversation tells you where you actually stand — and what your path looks like.</p>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
      <Link className="btn btn-primary" href="/#contact">Build My Homebuying Plan</Link>
      </div>
      <p className="small">No pressure. No obligation. Just a conversation.</p>
      </div>
      </section>
    </>
  );
}
