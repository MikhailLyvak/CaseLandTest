import { TrackedLink } from "@/components/ui/TrackedLink";

export function StickyCta() {
  return (
    <TrackedLink className="sticky-cta" href="#order" ctaLocation="sticky_order">
      Замовити в Telegram
    </TrackedLink>
  );
}
