# Martin Mortgage Group Website (Vercel + Next.js)

Modern, upscale mortgage website for Martin Mortgage Group with multi-landing-page flows and chatbot-style lead collection.

## Included

- Homepage with luxury design tone and clear service entry points
- Dedicated landing pages:
  - Purchase
  - Refinance
  - Down Payment Assistance
  - Investors
  - New Construction
- Chatbot-style form asking one question at a time for prequalification
- SEO and AEO enhancements:
  - page metadata + keywords
  - schema.org structured data
  - FAQ accordions for search-friendly Q&A content
- Raleigh local businesses + restaurant recommendation page
- Twilio SMS notifications to Michael's team on lead submission

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Environment variables

Create a `.env.local` file:

```bash
TWILIO_ACCOUNT_SID=...
TWILIO_AUTH_TOKEN=...
TWILIO_PHONE_NUMBER=+1...  # Twilio number the text is sent from
NOTIFY_PHONE_NUMBER=+1...  # Standard team notification destination
ADDITIONAL_NOTIFY_PHONE_NUMBERS=+1...,+1...  # Optional, comma-separated extras
```

Every form submission texts `NOTIFY_PHONE_NUMBER`, any numbers in
`ADDITIONAL_NOTIFY_PHONE_NUMBERS`, and the always-on numbers listed in
`ALWAYS_NOTIFY_PHONE_NUMBERS` in `app/api/lead/route.ts`. Duplicates are
removed, and a failure to one number does not stop the others.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import project in Vercel.
3. Add environment variables above in the Vercel dashboard.
4. Deploy.
