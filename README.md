# Martin Mortgage Group Website (Vercel + Next.js)

Next.js 14 (App Router) site for Martin Mortgage Group / Michael Martin.

> **Launch status: not cleared.** The redesign is live on `/` in this branch,
> but Michael's handoff doc lists a launch gate that is still open — new
> photography, the eight studio videos, Fairway compliance sign-off on the
> footer disclosure block, and verification of the stat claims. See
> [Launch gate](#launch-gate) before pointing a production domain at this.

## Structure

The app is split into two route groups. Route groups don't affect URLs — they
exist so each half keeps its own stylesheet, header and footer.

```
app/
  layout.tsx          root shell: <html>, metadata, icons. No CSS, no chrome.
  (mmg)/              the main site — Michael's redesign
    layout.tsx        MMG nav + footer, fonts, JSON-LD, analytics
    mmg.css           the whole design system (one stylesheet, ~510 lines)
    page.tsx          homepage
    <route>/page.tsx  11 more pages
  (legacy)/           campaign landing pages on the original Tailwind design
    layout.tsx        imports globals.css + the old Header/Footer
    purchase/, refinance/, ai-agent-lab/, rrar-panel/, ...
    home-classic/     the pre-redesign homepage, archived and noindexed
  api/lead/           lead intake (SMS + CRM webhook + email copy)
```

### MMG pages

| Route | Page |
| --- | --- |
| `/` | Homepage |
| `/mmg-way` | The MMG Way / Confidence Chain |
| `/first-time-buyers` | First-Time Buyers (FAQ accordion + FAQ schema) |
| `/move-up-buyers` | Move-Up Buyers (buy before you sell) |
| `/meet-michael` | About Michael |
| `/homeowners` | Annual review / equity / refi / investment |
| `/calculators` | Payment + affordability calculators |
| `/flexible-financing` | Self-employed & investors (non-QM) |
| `/va-buyers` | VA Buyers |
| `/new-construction-renovation` | New construction, construction-to-perm, renovation |
| `/relocation` | Moving to Raleigh / the Triangle |
| `/financial-literacy` | FirstHome IQ resources |

Navigation is defined once in `lib/mmg-nav.ts` and consumed by the header, the
mobile menu, the footer and `app/sitemap.ts`. Add a page there and it appears
everywhere.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — also runs ESLint and type checking
```

## Environment variables

Create `.env.local` (and set the same in the Vercel project):

```bash
# SMS notification on every lead (existing behavior, unchanged)
TWILIO_ACCOUNT_SID=...
TWILIO_AUTH_TOKEN=...
TWILIO_PHONE_NUMBER=+1...            # the Twilio number texts come from
NOTIFY_PHONE_NUMBER=+1...            # standard team destination
ADDITIONAL_NOTIFY_PHONE_NUMBERS=+1...,+1...   # optional extras

# CRM: Jungo, or a Zapier/Make webhook that writes into Jungo
LEAD_WEBHOOK_URL=https://...
LEAD_WEBHOOK_TOKEN=...               # optional; sent as a Bearer token

# Email copy of every lead
RESEND_API_KEY=...
LEAD_EMAIL_FROM="MMG Website <leads@yournclender.com>"   # verified sender
LEAD_EMAIL_TO=mmg@fairwaymc.com      # comma-separated; add Jungo's
                                     # lead-capture address here to deliver
                                     # into the CRM by email instead

# Analytics — omit on preview deploys to keep staging out of the property
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXX

# Canonical origin for metadata, sitemap, robots and JSON-LD.
# Defaults to https://www.yournclender.com (the destination in the handoff
# doc). Set this if the site lands on a different domain.
NEXT_PUBLIC_SITE_URL=https://www.yournclender.com
```

Every hop is optional and fails soft. With nothing configured, a submitted lead
is logged to the server console and the visitor still gets the thank-you state.
Twilio SMS, the CRM webhook and the email copy run independently — one failing
never blocks the others.

## Lead flow

`components/mmg/ContactForm.tsx` → `POST /api/lead` → Twilio SMS +
`lib/lead-delivery.ts` (webhook + email).

The form validates name/email/phone client-side, disables the button while
in flight, and swaps to a "What happens next" thank-you panel on success. UTM
parameters (`utm_*`, `gclid`) are captured on first page load and held in
`sessionStorage`, so a lead submitted three pages later still carries its
source. Each submission also sends `leadSource`, `pageUrl` and `referrer`.

## Analytics

`lib/analytics.ts` is a no-op until `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set.
`components/mmg/ClickTracking.tsx` attaches one delegated click listener for
the whole site, so links stay plain markup. Events emitted:

`start_conversation_click`, `pre_approval_click`, `phone_tap`, `email_click`,
`outbound_click`, `lead_form_start`, `lead_form_submit`, `calculator_use`,
`video_play` — each with a `location` telling you which section it fired from.

## Images

All 18 images were extracted from the base64 blobs in Michael's staging HTML
into `public/images/mmg/`, which took each page's HTML from 550KB–1.6MB down to
32–83KB. They're rendered through `next/image`, so Vercel serves WebP/AVIF at
responsive sizes automatically (a 640px render of the hero is ~41KB versus a
144KB source JPEG).

**Swapping in the new photography:** drop the replacement file over the
existing filename in `public/images/mmg/` and update the `width`/`height` props
where it's used if the aspect ratio changed. Names are purpose-based
(`michael-home-hero.jpg`, `team-jodie-stueve.jpg`, `team-banner-about.jpg`), so
nothing else has to change.

`final-cta-bg.jpg` is the one exception — it's a CSS background in `mmg.css`,
not a `next/image`, so it isn't optimized at request time.

## Videos

The eight studio videos each have a slot ready on their matching page, showing
a branded placeholder until a video exists. To wire one up, find the
`<VideoEmbed>` on the page and add the ID:

```tsx
<VideoEmbed title="The $108,000 house" youtubeId="abc123" />   {/* YouTube  */}
<VideoEmbed title="The $108,000 house" src="/video/michael.mp4" /> {/* hosted */}
```

YouTube embeds use `youtube-nocookie.com` and only load the iframe after a
click, so an unplayed video costs nothing and sets no cookies.

| Script | Page |
| --- | --- |
| 1 — Homepage Welcome | `/` |
| 2 — The MMG Way | `/mmg-way` |
| 3 — First-Time Buyers | `/first-time-buyers` |
| 4 — Move-Up Buyers | `/move-up-buyers` |
| 5 — New Construction | `/new-construction-renovation` |
| 6 — Rates | `/financial-literacy` |
| 7 — Meet Michael | `/meet-michael` |
| 8 — After Closing | `/homeowners` |

## Compliance

Two things in the markup are deliberately marked and must not ship as-is:

- **Footer disclosure block** (`components/mmg/MmgFooter.tsx`) — carries a
  bracketed `[Placeholder: ...]` for Fairway's corporate NMLS ID, branch
  address, state licensing disclosures and complaint contact, with a comment
  above it. Replace with the exact language compliance returns.
- **Reviews section** (`app/(mmg)/page.tsx`) — a compliant summary block, not
  republished review text. Per Fairway's guide, Google reviews may only be
  displayed through the official embeddable widget or with signed Testimonial
  Consent & Release forms. The comment in the section has the details.

Calculator disclaimers in `components/mmg/Calculators.tsx` are required by
Fairway's guide — don't remove them. The math is unchanged from Michael's
staging build: taxes auto-estimate at 0.9% of price until the user edits the
field, PMI estimates at 0.6%/yr on conventional under 20% down, affordability
uses 36%/43% DTI.

The stat claims ($750M+, Top 1%, review counts) still carry Michael's
"pending final compliance verification" notes on the homepage.

## Launch gate

From Michael's handoff doc — all of these before go-live:

- [ ] New photography swapped in
- [ ] Videos embedded (or launch without — Michael's call)
- [ ] Compliance response received; footer disclosure block replaced; claims verified
- [ ] Reviews resolution (Google widget live, or consent forms signed)
- [ ] Form tested end-to-end into Jungo + mmg@fairwaymc.com
- [ ] Mobile QA pass
- [ ] Michael's final walkthrough and explicit go

Also outstanding: verify `https://fairway.tidalwave.ai/login` is the correct
borrower-facing pre-approval URL, and set up 301s from any existing
YourNCLender.com URLs.

Three more pages are planned and have room in the nav config: Down Payment
Assistance + Bridge Loans, Events/Community, and the Beyond the Closing Table
podcast page.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project in Vercel.
3. Add the environment variables above.
4. Deploy.
