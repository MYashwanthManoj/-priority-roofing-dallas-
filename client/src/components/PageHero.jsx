import { Link } from 'react-router-dom';
import MagneticButton from './MagneticButton';

// Interior-page hero: full-bleed image, dark veil, eyebrow + title + sub.
export default function PageHero({ eyebrow, title, highlight, sub, image, alt, crumb }) {
  return (
    <section className="page-hero" style={{ backgroundImage: `url('${image}')` }}>
      <div className="page-hero-veil" aria-hidden="true" />
      <div className="container page-hero-content">
        <p className="crumb reveal-hero">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{crumb}</span>
        </p>
        <p className="hero-eyebrow reveal-hero"><span className="line" />{eyebrow}</p>
        <h1 className="page-hero-title">
          {title}{highlight && <em className="gold">{highlight}</em>}
        </h1>
        {sub && <p className="page-hero-sub">{sub}</p>}
        <div className="hero-ctas reveal-hero">
          <MagneticButton to="/contact#inspection" className="btn btn-gold btn-lg magnetic" arrow>
            Schedule a Free Inspection
          </MagneticButton>
          <MagneticButton href="tel:+14696158193" className="btn btn-ghost btn-lg magnetic">
            Call 469-615-8193
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
