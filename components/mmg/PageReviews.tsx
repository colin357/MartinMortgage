import { testimonials } from "@/lib/testimonials";

/**
 * A few hand-picked reviews for an inner page, chosen by reviewer name from
 * lib/testimonials.ts so each page can lead with the most relevant story.
 *
 * COMPLIANCE NOTE: same rule as the homepage — confirm a signed Testimonial
 * Consent & Release is on file for every reviewer shown.
 */
export default function PageReviews({
  eyebrow = "Client Reviews",
  title,
  names,
}: {
  eyebrow?: string;
  title: string;
  names: string[];
}) {
  const picked = names
    .map((name) => testimonials.find((t) => t.name === name))
    .filter((t): t is (typeof testimonials)[number] => Boolean(t));
  const layout = picked.length === 1 ? " one" : picked.length === 2 ? " two" : "";

  return (
    <section className="page-reviews">
      <div className="wrap">
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
        <div className="rev-score fade-up">
          <span className="big-score">5.0</span>
          <span className="stars" style={{ fontSize: "22px", letterSpacing: "4px", color: "var(--bright)" }}>
            ★★★★★
          </span>
          <span className="score-lbl">400+ Google Reviews</span>
        </div>
        <div className={`rev-grid${layout}`}>
          {picked.map((t) => (
            <figure className="rev-card fade-up" key={t.name}>
              <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
              <p>&ldquo;{t.text}&rdquo;</p>
              <figcaption className="who">{t.name} · Google Review</figcaption>
            </figure>
          ))}
        </div>
        <a
          className="btn btn-outline"
          href="https://www.google.com/search?q=martin+mortgage+group+raleigh+reviews"
          target="_blank"
          rel="noopener"
        >
          Read All Our Google Reviews
        </a>
      </div>
    </section>
  );
}
