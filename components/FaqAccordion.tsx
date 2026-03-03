"use client";

import { useState } from "react";

type Item = { q: string; a: string };

export default function FaqAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      {items.map((item, idx) => (
        <article key={item.q} className="faq-item" itemScope itemType="https://schema.org/Question">
          <button className="faq-q" onClick={() => setOpen(open === idx ? null : idx)}>
            <span itemProp="name">{item.q}</span>
          </button>
          {open === idx && (
            <div className="faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text">{item.a}</p>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
