import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  contact?: string;
  model?: string;
  comment?: string;
};

function clean(value: unknown) {
  return String(value ?? "").trim().slice(0, 500);
}

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

  const name = clean(payload.name);
  const contact = clean(payload.contact);
  const model = clean(payload.model);
  const comment = clean(payload.comment);

  if (!name || !contact || !model) {
    return NextResponse.json(
      { error: "Name, contact, and model are required" },
      { status: 400 },
    );
  }

  const text = [
    "Нова заявка на чохол",
    "",
    `Імʼя: ${name}`,
    `Контакт: ${contact}`,
    `Модель: ${model}`,
    comment ? `Коментар: ${comment}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const telegramResponse = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
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
