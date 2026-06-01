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

## Deploy

Use Vercel Free for this project because the Telegram bot token must stay on the server.

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Add `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` in Vercel Project Settings → Environment Variables.
4. Deploy.

GitHub Pages is not recommended for the final version because it cannot securely store the Telegram bot token for the contact form.
# CaseLandTest
