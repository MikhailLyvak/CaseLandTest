import { NextResponse } from "next/server";
import {
  formatLeadMessage,
  parseLeadPayload,
  type LeadPayload,
} from "@/lib/lead";

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json(
      { error: "Telegram env vars are not configured" },
      { status: 500 },
    );
  }

  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const lead = parseLeadPayload(payload);

  if (!lead) {
    return NextResponse.json(
      { error: "Name, contact, and model are required" },
      { status: 400 },
    );
  }

  const telegramResponse = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: formatLeadMessage(lead),
      }),
    },
  );

  if (!telegramResponse.ok) {
    return NextResponse.json(
      { error: "Telegram request failed" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
