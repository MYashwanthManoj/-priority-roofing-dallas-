import Reveal from './Reveal';

// Shared section heading: tag number + label, large title with gold em, sub.
// `headClass` maps to the original design-system container classes
// (e.g. "services-head", "why-head", "materials-head", "storm-head").
export default function SectionHead({ tag, title, highlight, sub, align = 'left', headClass = '' }) {
  const cls = [headClass === undefined ? 'section-head' : headClass, align === 'center' ? 'center' : ''].filter(Boolean).join(' ');
  return (
    <div className={cls}>
      <div>
        <Reveal as="p" className="section-tag">{tag}</Reveal>
        <Reveal as="h2" className="section-title">
          {title}
          {highlight && <em className="gold">{highlight}</em>}
        </Reveal>
      </div>
      {sub && <Reveal as="p" className="section-sub">{sub}</Reveal>}
    </div>
  );
}
