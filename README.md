# iPhone Case Landing

Mobile-first landing page for selling an iPhone 15 Pro case with a premium iPhone 17-style look.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Telegram Leads

Create `.env.local` from `.env.local.example`:

```bash
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_or_channel_id
```

The form sends leads to `/api/lead`, and the API route forwards them to Telegram. Keep these variables only in local env or Vercel env settings.

## Google Analytics

Create a GA4 property at [Google Analytics](https://analytics.google.com/):

1. Admin → Create Account → Create Property
2. Add a Web data stream with your site URL
3. Copy the Measurement ID (`G-XXXXXXXXXX`)

Add it to `.env.local`:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

On Vercel, add the same variable in Project Settings → Environment Variables (Production and Preview).

### Tracked events

| Event | When |
| --- | --- |
| `page_view` | Automatic on every page load |
| `cta_click` | Click on hero or sticky CTA buttons (`cta_location`: `hero_order`, `hero_details`, `sticky_order`) |
| `generate_lead` | Successful lead form submission |

Verify in GA4 → Reports → Realtime after opening the site locally or in production.

## Deploy

Use Vercel Free for this project because the Telegram bot token must stay on the server.

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Add `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, and `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel Project Settings → Environment Variables.
4. Deploy.

GitHub Pages is not recommended for the final version because it cannot securely store the Telegram bot token for the contact form.
# CaseLandTest
