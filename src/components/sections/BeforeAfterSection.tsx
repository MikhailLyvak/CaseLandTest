import Image from "next/image";

export function BeforeAfterSection() {
  return (
    <section className="section before-after" aria-labelledby="before-after">
      <div>
        <p className="eyebrow">До і після</p>
        <h2 id="before-after">Один чохол — новий вигляд твого iPhone</h2>
      </div>
      <div className="comparison-card">
        <Image
          src="/images/case-front.png"
          alt="Порівняння iPhone 15 Pro без чохла та з помаранчевим чохлом"
          fill
          sizes="(max-width: 768px) 94vw, 44vw"
        />
        <div className="comparison-labels" aria-hidden="true">
          <span>До</span>
          <span>Після</span>
        </div>
      </div>
    </section>
  );
}
