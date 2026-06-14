import Image from "next/image";
import { TrackedLink } from "@/components/ui/TrackedLink";

export function HeroSection() {
  return (
    <section className="hero section">
      <div className="hero-copy">
        <p className="eyebrow">Чохол для iPhone 15 Pro</p>
        <h1>Люди думають, що це iPhone 17</h1>
        <p className="hero-text">
          Насправді це твій iPhone 15 Pro у преміальному силіконовому чохлі.
          Купити з доставкою по Україні — 499 грн.
        </p>
        <div className="hero-actions">
          <TrackedLink className="button" href="#order" ctaLocation="hero_order">
            Замовити
          </TrackedLink>
          <TrackedLink
            className="ghost-link"
            href="#details"
            ctaLocation="hero_details"
          >
            Подивитись деталі
          </TrackedLink>
        </div>
      </div>

      <div className="hero-card">
        <Image
          src="/images/main-h-image.png"
          alt="Преміальний помаранчевий силіконовий чохол на iPhone 15 Pro"
          fill
          priority
          sizes="(max-width: 768px) 94vw, 48vw"
        />
      </div>
    </section>
  );
}
