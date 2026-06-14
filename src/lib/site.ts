function normalizeSiteUrl(url: string | undefined) {
  const trimmed = url?.trim();
  if (!trimmed) {
    return "https://case-land-test.vercel.app";
  }

  return trimmed.replace(/\/$/, "");
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
export const siteName = "CaseLand";

export const product = {
  name: "Чохол для iPhone 15 Pro",
  shortName: "Чохол iPhone 15 Pro",
  description:
    "Силіконовий чохол для iPhone 15 Pro з преміальним дизайном. Виглядає як новий iPhone. Точна посадка, захист камер, soft-touch матеріал.",
  price: 499,
  currency: "UAH",
  image: "/images/main-h-image.png",
  brand: siteName,
  availability: "https://schema.org/InStock",
} as const;

export const seo = {
  title: "Чохол для iPhone 15 Pro — вигляд як iPhone 17 | 499 грн",
  description:
    "Купити силіконовий чохол для iPhone 15 Pro з преміальним виглядом. Доставка 1–2 дні по Україні. Оплата при отриманні. Замовити в Telegram.",
  keywords: [
    "чохол iPhone 15 Pro",
    "купити чохол iPhone 15 Pro",
    "чохол iPhone 15 Pro Україна",
    "силіконовий чохол iPhone 15 Pro",
    "чохол iPhone 15 Pro помаранчевий",
  ],
} as const;
