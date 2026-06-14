import { productBullets } from "@/config/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function DetailsSection() {
  return (
    <section className="section details" id="details">
      <SectionHeading
        eyebrow="Характеристики"
        title="Виглядає як апгрейд. Відчувається як преміум."
      />
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
  );
}
