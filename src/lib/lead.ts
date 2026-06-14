export type LeadPayload = {
  name?: string;
  contact?: string;
  model?: string;
  comment?: string;
};

export type ParsedLead = {
  name: string;
  contact: string;
  model: string;
  comment: string;
};

function clean(value: unknown) {
  return String(value ?? "").trim().slice(0, 500);
}

export function parseLeadPayload(payload: LeadPayload): ParsedLead | null {
  const name = clean(payload.name);
  const contact = clean(payload.contact);
  const model = clean(payload.model);
  const comment = clean(payload.comment);

  if (!name || !contact || !model) {
    return null;
  }

  return { name, contact, model, comment };
}

export function formatLeadMessage(lead: ParsedLead) {
  return [
    "Нова заявка на чохол",
    "",
    `Імʼя: ${lead.name}`,
    `Контакт: ${lead.contact}`,
    `Модель: ${lead.model}`,
    lead.comment ? `Коментар: ${lead.comment}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}
