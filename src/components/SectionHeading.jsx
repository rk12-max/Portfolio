export default function SectionHeading({ index, eyebrow, title }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{index} / {eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}
