/**
 * Right-hand column for inner-page heroes that don't have a photo: a short
 * "here's what you get" checklist so the hero reads as a complete layout
 * instead of a single column of text.
 */
export default function HeroPanel({
  label,
  title,
  items,
  footStat,
  footText,
}: {
  label: string;
  title: string;
  items: string[];
  footStat?: string;
  footText?: string;
}) {
  return (
    <div className="hero-panel-wrap">
      <div className="hero-panel">
        <div className="hp-label">{label}</div>
        <h2>{title}</h2>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {(footStat || footText) && (
          <div className="hp-foot">
            {footStat && <strong>{footStat}</strong>}
            {footText && <span>{footText}</span>}
          </div>
        )}
      </div>
    </div>
  );
}
