import { offerTags } from "@/config/content";
import { LeadForm } from "@/components/forms/LeadForm";
import { product } from "@/lib/site";

export function OfferSection() {
  return (
    <section className="section offer" id="order" aria-labelledby="order-heading">
      <div className="price-card">
        <p className="eyebrow">Спеціальна пропозиція</p>
        <h2 id="order-heading">Замовити чохол для iPhone 15 Pro</h2>
        <p className="price-amount" aria-label="Ціна 499 гривень">
          {product.price} грн
        </p>
        <p>
          Доставка по Україні 1–2 дні Новою Поштою. Напиши модель iPhone —
          підберемо чохол і звʼяжемось у Telegram.
        </p>
        <div className="offer-tags">
          {offerTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <LeadForm />
    </section>
  );
}
