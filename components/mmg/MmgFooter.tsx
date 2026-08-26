import Image from "next/image";
import Link from "next/link";
import { CONTACT, buyPages } from "@/lib/mmg-nav";

export default function MmgFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="foot-logo">
              <Image
                src="/images/mmg/mmg-logo.png"
                alt="Martin Mortgage Group"
                width={480}
                height={173}
              />
            </div>
            <div className="fairway-badge">
              <span className="pb">Powered by</span>
              <Image
                src="/images/mmg/fairway-logo.png"
                alt="Fairway Home Mortgage"
                width={420}
                height={156}
              />
            </div>
            <p>
              Michael Martin · {CONTACT.nmls}. Helping homebuyers and homeowners
              across NC, SC, VA &amp; GA make confident, well-planned mortgage
              decisions. Rooted in Raleigh.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              <li>
                <Link href="/mmg-way">The MMG Way</Link>
              </li>
              <li>
                <Link href="/homeowners">Homeowners</Link>
              </li>
              <li>
                <Link href="/calculators">Calculators</Link>
              </li>
              <li>
                <Link href="/financial-literacy">Learning Center</Link>
              </li>
              <li>
                <Link href="/meet-michael">Meet Michael</Link>
              </li>
              <li>
                <Link href="/#reviews">Reviews</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Buy a Home</h4>
            <ul>
              {buyPages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href as never}>{page.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Get in Touch</h4>
            <ul>
              <li>
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
              <li>
                <a href={CONTACT.webHref}>{CONTACT.web}</a>
              </li>
              <li>
                <Link href="/#contact">Start a Conversation</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-legal">
          <span className="eho">EQUAL HOUSING OPPORTUNITY</span>
          <br />
          Michael Martin, {CONTACT.nmls} · Martin Mortgage Group · Fairway Home
          Mortgage.{" "}
          {/* ============================================================
              COMPLIANCE PLACEHOLDER — DO NOT LAUNCH WITHOUT REPLACING
              Fairway marketing/compliance has been emailed. The bracketed
              text below stands in for the corporate disclosure block:
              Fairway corporate NMLS ID, branch address, state licensing
              disclosures and complaint contact. Replace with the exact
              language compliance returns, then delete this comment.
              ============================================================ */}
          [Placeholder: Fairway corporate NMLS ID, branch address, licensing
          disclosures, complaint contact, and required state-specific language
          to be inserted and verified by Fairway compliance before
          publication.] *Pre-approval is based on a preliminary review of
          credit information provided to Fairway Independent Mortgage
          Corporation, which has not been reviewed by underwriting. If you have
          submitted verifying documentation, you have done so voluntarily.
          Final loan approval is subject to a full underwriting review of
          support documentation including, but not limited to, applicants&apos;
          creditworthiness, assets, income information, and a satisfactory
          appraisal. This information is not intended to be an indication of
          loan qualification, loan approval or commitment to lend. Not all
          customers will qualify. Information, rates and programs are subject
          to change without notice. All products are subject to credit and
          property approval. Equal Housing Opportunity.
          <br />
          <br />© {new Date().getFullYear()} Martin Mortgage Group. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
