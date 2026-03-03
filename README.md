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
TWILIO_FROM_NUMBER=+1...
TWILIO_TO_NUMBER=+1...  # Team notification destination
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import project in Vercel.
3. Add environment variables above in the Vercel dashboard.
4. Deploy.
