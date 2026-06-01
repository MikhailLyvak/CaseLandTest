import Image from "next/image";
import { LeadForm } from "../components/LeadForm";

const productBullets = [
  {
    title: "Сумісність",
    text: "iPhone 15 Pro — точна посадка без люфту",
  },
  {
    title: "Захист камер",
    text: "Підняті бортики навколо модуля",
  },
  {
    title: "Матеріал",
    text: "Soft-touch silicone, приємний у руці",
  },
  {
    title: "Профіль",
    text: "Тонкий корпус без зайвого обʼєму",
  },
];

const gallery = [
  {
    src: "/images/hand-front.png",
    alt: "Помаранчевий чохол на iPhone в руці",
  },
  {
    src: "/images/hand-angle.png",
    alt: "Чохол iPhone 15 Pro під кутом",
  },
  {
    src: "/images/hero-hand-case.png",
    alt: "Фронтальне фото чохла iPhone 15 Pro",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">iPhone 15 Pro case</p>
          <h1>Люди думають, що це iPhone 17</h1>
          <p className="hero-text">Насправді це твій iPhone 15 Pro.</p>
          <div className="hero-actions">
            <a className="button" href="#order">
              Замовити
            </a>
            <a className="ghost-link" href="#details">
              Подивитись деталі
            </a>
          </div>
        </div>

        <div className="hero-card">
          <Image
            src="/images/main-h-image.png"
            alt="Преміальний помаранчевий чохол на iPhone"
            fill
            priority
            sizes="(max-width: 768px) 94vw, 48vw"
          />
        </div>
      </section>

      <section className="section before-after" aria-labelledby="before-after">
        <div>
          <p className="eyebrow">Before / After</p>
          <h2 id="before-after">Один чохол — новий вигляд твого iPhone</h2>
        </div>
        <div className="comparison-card">
          <Image
            src="/images/case-front.png"
            alt="Порівняння iPhone без чохла та з помаранчевим чохлом"
            fill
            sizes="(max-width: 768px) 94vw, 44vw"
          />
          <div className="comparison-labels" aria-hidden="true">
            <span>Before</span>
            <span>After</span>
          </div>
        </div>
      </section>

      <section className="section details" id="details">
        <div className="section-heading">
          <p className="eyebrow">Product details</p>
          <h2>Виглядає як апгрейд. Відчувається як premium.</h2>
        </div>
        <div className="detail-grid">
          {productBullets.map((item, index) => (
            <div className="detail-card" key={item.title}>
              <span className="detail-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="detail-copy">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section vibe">
        <div className="section-heading compact">
          <p className="eyebrow">Vibe / Aesthetic</p>
          <h2>Minimal. Clean. Premium look.</h2>
        </div>
        <div className="gallery">
          {gallery.map((image) => (
            <figure className="gallery-card" key={image.src}>
              <Image src={image.src} alt={image.alt} fill sizes="50vw" />
            </figure>
          ))}
        </div>
      </section>

      <section className="section offer" id="order">
        <div className="price-card">
          <p className="eyebrow">Limited offer</p>
          <h2>499 грн</h2>
          <p>Доставка по Україні 1–2 дні. Напиши модель iPhone — підберемо чохол.</p>
          <div className="offer-tags">
            <span>Оплата при отриманні</span>
            <span>Швидка відправка</span>
          </div>
        </div>
        <LeadForm />
      </section>

      <a className="sticky-cta" href="#order">
        Замовити в Telegram
      </a>
    </main>
  );
}
