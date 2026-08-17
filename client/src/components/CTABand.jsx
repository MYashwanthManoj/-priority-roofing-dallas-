import Reveal from './Reveal';
import MagneticButton from './MagneticButton';
import { business } from '../data/content';

// Dramatic closing CTA: golden-hour image, headline, dual CTAs, contact line.
export default function CTABand({ image = '/assets/img/mat-clay2.webp', alt = '' }) {
  return (
    <section className="final-cta section">
      <div className="final-media" aria-hidden="true">
        <img src={image} alt={alt} loading="lazy" />
      </div>
      <div className="container final-inner">
        <Reveal as="p" className="section-tag">READY WHEN YOU ARE</Reveal>
        <Reveal as="h2" className="section-title">
          Ready to protect <em className="gold">your roof?</em>
        </Reveal>
        <Reveal as="p" className="final-sub">
          Schedule your free inspection with Priority Roofing Dallas — for homeowners and businesses. Free inspections, honest estimates, and insurance claim assistance.
        </Reveal>
        <div className="final-ctas">
          <Reveal>
            <MagneticButton to="/contact#inspection" className="btn btn-gold btn-lg magnetic" arrow>
              Schedule a Free Inspection
            </MagneticButton>
          </Reveal>
          <Reveal>
            <MagneticButton href={business.phoneHref} className="btn btn-ghost btn-lg magnetic">
              Call {business.phone}
            </MagneticButton>
          </Reveal>
        </div>
        <Reveal className="final-contact">
          <a href={business.emailHref}>{business.email}</a>
          <span className="sep">·</span>
          <span>{business.address}</span>
        </Reveal>
      </div>
    </section>
  );
}
