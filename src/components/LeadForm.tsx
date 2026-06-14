"use client";

import { FormEvent, useState } from "react";
import { trackLeadSubmit } from "../lib/analytics";

type Status = "idle" | "loading" | "success" | "error";

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      contact: String(formData.get("contact") || ""),
      model: String(formData.get("model") || ""),
      comment: String(formData.get("comment") || ""),
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Lead request failed");
      }

      setStatus("success");
      setMessage("Заявку відправлено. Скоро напишемо тобі в Telegram.");
      trackLeadSubmit();
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Не вдалося відправити заявку. Напиши нам напряму в Telegram.");
    }
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <label>
        Імʼя
        <input name="name" placeholder="Наприклад, Іван" required />
      </label>

      <label>
        Телефон або Telegram
        <input name="contact" placeholder="@username або +380..." required />
      </label>

      <label>
        Модель iPhone
        <select name="model" defaultValue="iPhone 15 Pro" required>
          <option>iPhone 15 Pro</option>
          <option>iPhone 15</option>
          <option>iPhone 15 Pro Max</option>
        </select>
      </label>
      <label>
        Коментар
        <textarea
          name="comment"
          placeholder="Колір, місто, питання по доставці"
          rows={3}
        />
      </label>

      <button className="button button-full" disabled={status === "loading"}>
        {status === "loading" ? "Відправляємо..." : "Замовити в Telegram"}
      </button>

      {message ? <p className={`form-status ${status}`}>{message}</p> : null}
    </form>
  );
}
