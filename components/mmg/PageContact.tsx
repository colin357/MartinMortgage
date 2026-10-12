import ContactForm from "@/components/mmg/ContactForm";
import { CONTACT } from "@/lib/mmg-nav";

/**
 * The lead form, placed at the bottom of an inner page so visitors can reach
 * out without being bounced back to the homepage. `goal` preselects the
 * "What are you trying to accomplish?" dropdown for the page's audience.
 */
export default function PageContact({
  title = "Let's talk about what you're trying to accomplish.",
  sub = "Send a note and a real person from MMG will follow up — usually the same business day. Prefer to talk now? Call or text anytime.",
  goal,
}: {
  title?: string;
  sub?: string;
  goal?: string;
}) {
  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <div className="eyebrow">Get Started</div>
          <h2>{title}</h2>
          <p className="sub">{sub}</p>
          <div className="c-info">
            <div>
              <div className="lbl">Call or Text</div>
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            </div>
            <div>
              <div className="lbl">Email</div>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </div>
            <div>
              <div className="lbl">Home Base</div>
              Raleigh, North Carolina
              <br />
              Licensed in NC, SC, VA &amp; GA
            </div>
          </div>
        </div>
        <ContactForm defaultGoal={goal} />
      </div>
    </section>
  );
}
