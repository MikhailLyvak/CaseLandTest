import { sendGAEvent } from "@next/third-parties/google";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export type CtaLocation = "hero_order" | "hero_details" | "sticky_order";

export function trackCtaClick(location: CtaLocation) {
  if (!GA_ID) return;

  sendGAEvent("event", "cta_click", { cta_location: location });
}

export function trackLeadSubmit() {
  if (!GA_ID) return;

  sendGAEvent("event", "generate_lead");
}
