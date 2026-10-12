import Link from "next/link";

export type FaqItem = { q: string; a: string };

/**
 * FAQ accordion with matching FAQPage JSON-LD. Answers are plain strings so
 * the visible copy and the structured data can never drift apart.
 */
export default function PageFaq({
  id = "faq",
  eyebrow = "Common Questions",
  title,
  intro,
  items,
  white = false,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  items: FaqItem[];
  white?: boolean;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className={`page-faq${white ? " white" : ""}`} id={id}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="wrap page-faq-grid">
        <div className="page-faq-head">
          <div className="eyebrow">{eyebrow}</div>
          <h2>{title}</h2>
          <p>
            {intro ??
              "Tap any question. If yours isn't here, that's exactly what the first conversation is for."}
          </p>
          <Link className="textlink" href="#contact">
            Ask Us Directly →
          </Link>
        </div>
        <div className="faq-list">
          {items.map((item) => (
            <details className="faq" key={item.q}>
              <summary>{item.q}</summary>
              <div className="a">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
