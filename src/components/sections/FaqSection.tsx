import { faqItems } from "@/config/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FaqSection() {
  return (
    <section className="section faq" id="faq" aria-labelledby="faq-heading">
      <SectionHeading
        compact
        eyebrow="Часті питання"
        id="faq-heading"
        title="Відповіді перед замовленням"
      />
      <div className="faq-list">
        {faqItems.map((item) => (
          <details className="faq-item" key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
