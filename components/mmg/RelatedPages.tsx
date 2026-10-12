import Link from "next/link";
import { buyPages } from "@/lib/mmg-nav";

const extra = [
  { name: "Homeowners", href: "/homeowners", blurb: "Annual reviews, equity strategy and honest refinance math." },
  { name: "Calculators", href: "/calculators", blurb: "Ballpark your payment and price range in two minutes." },
  { name: "The MMG Way", href: "/mmg-way", blurb: "How the Confidence Chain works, link by link." },
  { name: "Meet Michael", href: "/meet-michael", blurb: "The $108,000 house and the two rules it taught him." },
  { name: "Learning Center", href: "/financial-literacy", blurb: "Free courses, quizzes and tools from FirstHome IQ." },
];

const all = [...buyPages, ...extra];

/** "Keep exploring" cards linking to sibling pages, by href. */
export default function RelatedPages({
  hrefs,
  title = "Keep exploring.",
}: {
  hrefs: string[];
  title?: string;
}) {
  const links = hrefs
    .map((href) => all.find((page) => page.href === href))
    .filter((page): page is (typeof all)[number] => Boolean(page));

  return (
    <section className="related">
      <div className="wrap">
        <div className="eyebrow">Related</div>
        <h2>{title}</h2>
        <div className="path-grid">
          {links.map((page) => (
            <Link className="path-card fade-up" href={page.href as never} key={page.href}>
              <div>
                <h3>{page.name}</h3>
                <p>{page.blurb}</p>
              </div>
              <div className="go">Explore →</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
