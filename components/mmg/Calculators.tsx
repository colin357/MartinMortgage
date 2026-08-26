"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Payment + affordability calculators, ported from Michael's staging page.
 *
 * The math is unchanged from the original:
 *   - taxes auto-estimate at 0.9% of price until the user edits the field,
 *     after which their number wins
 *   - PMI is estimated at 0.6%/yr of the loan on conventional under 20% down
 *   - affordability uses 36% / 43% DTI and reserves ~22% of the housing
 *     budget for taxes, insurance and PMI
 *
 * Per the handoff notes the disclaimers below are required by Fairway's
 * compliance guide. Do not remove them.
 */

const fmt = (n: number) => "$" + Math.round(n).toLocaleString();

function pmt(principal: number, annualRate: number, months: number) {
  if (annualRate === 0) return principal / months;
  const m = annualRate / 12;
  return (principal * m * Math.pow(1 + m, months)) / (Math.pow(1 + m, months) - 1);
}

const num = (value: string) => Number(value) || 0;

/** Fires calculator_use once per burst of typing, not per keystroke. */
function useCalculatorTracking(calculator: string, deps: unknown[]) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(
      () => trackEvent("calculator_use", { calculator }),
      1200,
    );
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

function PaymentCalculator() {
  const [price, setPrice] = useState("450000");
  const [down, setDown] = useState("45000");
  const [rate, setRate] = useState("");
  const [term, setTerm] = useState("30");
  const [tax, setTax] = useState("4050");
  const [insurance, setInsurance] = useState("1800");
  const [hoa, setHoa] = useState("0");
  const [loanType, setLoanType] = useState("conv");
  const [taxManual, setTaxManual] = useState(false);

  useCalculatorTracking("monthly_payment", [
    price,
    down,
    rate,
    term,
    tax,
    insurance,
    hoa,
    loanType,
  ]);

  function onPriceChange(value: string) {
    setPrice(value);
    // Taxes track the price until the user takes the field over
    if (!taxManual) setTax(String(Math.round(num(value) * 0.009)));
  }

  const loan = Math.max(num(price) - num(down), 0);
  const annualRate = num(rate) / 100;
  const monthlyTax = num(tax) / 12;
  const monthlyInsurance = num(insurance) / 12;
  const monthlyHoa = num(hoa);

  let total = "—";
  let breakdown: React.ReactNode = "Enter an interest rate to calculate.";

  if (annualRate && loan) {
    const pi = pmt(loan, annualRate, num(term) * 12);
    const ltv = num(price) > 0 ? loan / num(price) : 0;
    const pmi = loanType === "conv" && ltv > 0.8 ? (loan * 0.006) / 12 : 0;
    total = fmt(pi + monthlyTax + monthlyInsurance + monthlyHoa + pmi) + "/mo";
    breakdown = (
      <>
        Principal &amp; Interest: {fmt(pi)}
        <br />
        Taxes: {fmt(monthlyTax)} · Insurance: {fmt(monthlyInsurance)}
        {monthlyHoa > 0 && <> · HOA: {fmt(monthlyHoa)}</>}
        {pmi > 0 ? (
          <>
            <br />
            Est. PMI ({(ltv * 100).toFixed(0)}% LTV, conventional):{" "}
            {fmt(pmi)}/mo — varies by credit profile
          </>
        ) : loanType === "conv" ? (
          <>
            <br />
            No PMI estimated (20%+ down)
          </>
        ) : null}
      </>
    );
  }

  return (
    <div className="calc-card">
      <h2>Monthly Payment Estimator</h2>
      <div className="cc-sub">
        Principal, interest, taxes, insurance — and PMI if it applies. Update
        the tax and insurance numbers with your own estimates or the actual tax
        bill for a sharper answer.
      </div>

      <div className="calc-row">
        <div>
          <label htmlFor="p_price">Home Price ($)</label>
          <input
            type="number"
            id="p_price"
            min="0"
            value={price}
            onChange={(event) => onPriceChange(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="p_down">Down Payment ($)</label>
          <input
            type="number"
            id="p_down"
            min="0"
            value={down}
            onChange={(event) => setDown(event.target.value)}
          />
        </div>
      </div>

      <div className="calc-row">
        <div>
          <label htmlFor="p_rate">Interest Rate (%)</label>
          <input
            type="number"
            id="p_rate"
            step="0.125"
            min="0"
            placeholder="Enter rate"
            value={rate}
            onChange={(event) => setRate(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="p_term">Loan Term</label>
          <select
            id="p_term"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          >
            <option value="30">30 years</option>
            <option value="20">20 years</option>
            <option value="15">15 years</option>
          </select>
        </div>
      </div>

      <div className="calc-row">
        <div>
          <label htmlFor="p_tax">
            Property Taxes ($/yr) — auto-estimated at 0.9% of price, edit
            anytime
          </label>
          <input
            type="number"
            id="p_tax"
            min="0"
            value={tax}
            onChange={(event) => {
              setTaxManual(true);
              setTax(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="p_ins">Home Insurance ($/yr)</label>
          <input
            type="number"
            id="p_ins"
            min="0"
            value={insurance}
            onChange={(event) => setInsurance(event.target.value)}
          />
        </div>
      </div>

      <div className="calc-row">
        <div>
          <label htmlFor="p_hoa">HOA ($/mo, optional)</label>
          <input
            type="number"
            id="p_hoa"
            min="0"
            value={hoa}
            onChange={(event) => setHoa(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="p_type">Loan Type</label>
          <select
            id="p_type"
            value={loanType}
            onChange={(event) => setLoanType(event.target.value)}
          >
            <option value="conv">Conventional</option>
            <option value="other">Other / Not sure</option>
          </select>
        </div>
      </div>

      <div className="calc-result">
        <div className="cr-lbl">Estimated Monthly Payment</div>
        <div className="cr-big" id="p_total">
          {total}
        </div>
        <div className="cr-break" id="p_break" aria-live="polite">
          {breakdown}
        </div>
      </div>

      <div className="pro-nudge">
        <strong>Want to see what this looks like for your situation?</strong>{" "}
        Taxes vary by county, insurance varies by property, and PMI varies by
        credit profile. We&apos;ll build your real number.{" "}
        <Link className="textlink" href="/#contact">
          Talk to MMG →
        </Link>
      </div>

      <div className="calc-note">
        Estimates only, for educational purposes. PMI estimate applies to
        conventional loans with less than 20% down and varies significantly by
        credit score and loan details. Property taxes are auto-estimated at
        0.9% of the home price; actual taxes vary by county and property — look
        up the property&apos;s actual tax bill and enter it above for a sharper
        estimate. This is not a loan approval, pre-qualification, quote, or
        offer of credit.
      </div>
    </div>
  );
}

function AffordabilityCalculator() {
  const [income, setIncome] = useState("110000");
  const [debts, setDebts] = useState("600");
  const [down, setDown] = useState("40000");
  const [rate, setRate] = useState("");

  useCalculatorTracking("affordability", [income, debts, down, rate]);

  const monthlyIncome = num(income) / 12;
  const annualRate = num(rate) / 100;

  let range = "—";
  let breakdown: React.ReactNode = "Enter an interest rate to calculate.";

  if (annualRate && monthlyIncome) {
    const comfortable = Math.max(monthlyIncome * 0.36 - num(debts), 0);
    const stretch = Math.max(monthlyIncome * 0.43 - num(debts), 0);

    const priceFor = (housing: number) => {
      // Reserve ~22% of the housing budget for taxes/insurance/PMI
      const estimate = housing * 0.78;
      if (estimate <= 0) return 0;
      const m = annualRate / 12;
      const n = 360;
      const loan = (estimate * (Math.pow(1 + m, n) - 1)) / (m * Math.pow(1 + m, n));
      return loan + num(down);
    };

    const lo = priceFor(comfortable);
    const hi = priceFor(stretch);

    if (lo <= 0 && hi <= 0) {
      breakdown =
        "Monthly debts exceed typical guidelines at this income — worth a conversation, not a conclusion.";
    } else {
      range = `${fmt(lo)} – ${fmt(hi)}`;
      breakdown = (
        <>
          Comfortable zone: around {fmt(lo)} (~36% DTI)*
          <br />
          Upper guideline: around {fmt(hi)} (~43% DTI)*
          <br />
          Assumes 30-year term with estimated taxes &amp; insurance included.
        </>
      );
    }
  }

  return (
    <div className="calc-card">
      <h2>Affordability Ballpark</h2>
      <div className="cc-sub">
        A rough range based on common debt-to-income guidelines.* The
        &quot;comfortable&quot; number matters more than the
        &quot;maximum&quot; — and both need confirming with a professional
        before you shop.
      </div>

      <div className="calc-row">
        <div>
          <label htmlFor="a_income">Gross Annual Income ($)</label>
          <input
            type="number"
            id="a_income"
            min="0"
            value={income}
            onChange={(event) => setIncome(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="a_debts">Monthly Debt Payments ($)</label>
          <input
            type="number"
            id="a_debts"
            min="0"
            value={debts}
            onChange={(event) => setDebts(event.target.value)}
          />
        </div>
      </div>

      <div className="calc-row">
        <div>
          <label htmlFor="a_down">Down Payment Available ($)</label>
          <input
            type="number"
            id="a_down"
            min="0"
            value={down}
            onChange={(event) => setDown(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="a_rate">Interest Rate (%)</label>
          <input
            type="number"
            id="a_rate"
            step="0.125"
            min="0"
            placeholder="Enter rate"
            value={rate}
            onChange={(event) => setRate(event.target.value)}
          />
        </div>
      </div>

      <div className="calc-result">
        <div className="cr-lbl">Estimated Price Range</div>
        <div className="cr-big" id="a_range">
          {range}
        </div>
        <div className="cr-break" id="a_break" aria-live="polite">
          {breakdown}
        </div>
      </div>

      <div className="pro-nudge">
        <strong>This is a ballpark, not an answer.</strong> Loan programs treat
        income, debts, and credit differently — your real range could be
        meaningfully higher or lower. Confirming it takes one conversation.{" "}
        <Link className="textlink" href="/#contact">
          Confirm My Numbers →
        </Link>
      </div>

      <div className="calc-note">
        *Debt-to-income (DTI) ratio is monthly debt/expenses divided by gross
        monthly income. Estimates only, for educational purposes, using
        generalized guidelines with estimated taxes and insurance. Actual
        qualification depends on credit, loan program, documented income, and a
        full review. This is not a loan approval, pre-qualification, quote, or
        offer of credit.
      </div>
    </div>
  );
}

export default function Calculators() {
  return (
    <div className="wrap calc-wrap">
      <PaymentCalculator />
      <AffordabilityCalculator />
    </div>
  );
}
