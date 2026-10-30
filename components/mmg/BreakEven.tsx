"use client";

import { useState } from "react";

/**
 * Refinance break-even check for the Homeowners page. Deliberately rate-free:
 * the visitor supplies the all-in cost and the monthly savings, and we only do
 * the division — no rate quotes, no APR, nothing that reads as an offer.
 */

const fmt = (n: number) => "$" + Math.round(n).toLocaleString();
const num = (value: string) => Number(value.replace(/[^0-9.]/g, "")) || 0;

export default function BreakEven() {
  const [cost, setCost] = useState("6000");
  const [savings, setSavings] = useState("180");
  const [years, setYears] = useState("7");

  const c = num(cost);
  const s = num(savings);
  const keepMonths = num(years) * 12;
  const months = s > 0 ? Math.ceil(c / s) : 0;
  const net = s * keepMonths - c;

  let verdict = "Enter the cost and the monthly savings.";
  let tone = "";
  if (c > 0 && s > 0 && keepMonths > 0) {
    if (months >= keepMonths) {
      verdict = "You'd sell or pay off before it pays for itself. Probably not worth it.";
      tone = "no";
    } else if (months > keepMonths * 0.6) {
      verdict = "Close call. Worth a real conversation before you commit.";
      tone = "maybe";
    } else {
      verdict = "Pays for itself with room to spare. Worth a closer look.";
      tone = "yes";
    }
  }

  return (
    <div className="be-card">
      <div className="be-label">Break-Even Check</div>
      <h3>Is the refinance worth it?</h3>
      <div className="be-row">
        <div>
          <label htmlFor="be_cost">All-in cost ($)</label>
          <input id="be_cost" inputMode="decimal" value={cost} onChange={(e) => setCost(e.target.value)} />
        </div>
        <div>
          <label htmlFor="be_save">Monthly savings ($)</label>
          <input id="be_save" inputMode="decimal" value={savings} onChange={(e) => setSavings(e.target.value)} />
        </div>
      </div>
      <label htmlFor="be_years">Years you expect to keep the loan</label>
      <input id="be_years" inputMode="decimal" value={years} onChange={(e) => setYears(e.target.value)} />
      <div className="be-result">
        <div className="be-big">{months > 0 ? `${months} months` : "—"}</div>
        <div className="be-sub">to break even</div>
        {months > 0 && keepMonths > 0 && (
          <div className="be-net">
            Net over {num(years)} {num(years) === 1 ? "year" : "years"}:{" "}
            <strong>{net >= 0 ? fmt(net) + " saved" : fmt(-net) + " lost"}</strong>
          </div>
        )}
        <div className={`be-verdict ${tone}`}>{verdict}</div>
      </div>
      <p className="be-note">
        Educational estimate only. Doesn&apos;t account for resetting your loan term or total interest over the life of
        the loan — which is exactly what we&apos;ll walk through with you. Not an offer of credit.
      </p>
    </div>
  );
}
