type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  id?: string;
  compact?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  id,
  compact = false,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading${compact ? " compact" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}
