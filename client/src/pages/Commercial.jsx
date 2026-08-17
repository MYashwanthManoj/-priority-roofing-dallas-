import Reveal from '../components/Reveal';
import PageHero from '../components/PageHero';
import SectionHead from '../components/SectionHead';
import CTABand from '../components/CTABand';
import { usePageMeta } from '../hooks/usePageMeta';
import { services } from '../data/content';

export default function Commercial() {
  usePageMeta(
    'Commercial Roofing Dallas — Inspections, Repairs & Replacement | Priority Roofing',
    'Priority Roofing Dallas delivers commercial roof inspections, storm and hail damage evaluations, repairs, replacement and preventative maintenance — with labor and product warranties. Free inspections. Call 469-615-8193.'
  );
  const s = services.commercial;

  return (
    <>
      <PageHero
        eyebrow="COMMERCIAL ROOFING · DALLAS, TX"
        title="Commercial roofing, "
        highlight="engineered for business."
        sub="Comprehensive inspections, storm evaluations, repairs, replacements and preventative maintenance — backed by premier products with labor and product warranties."
        image="/assets/img/proj-commercial.webp"
        alt="Commercial low-slope roofing system"
        crumb="Commercial"
      />

      <section className="service-page section">
        <div className="container service-page-grid">
          <div className="service-page-copy">
            <SectionHead headClass="intro-head" tag="COMMERCIAL ROOFING" title="The right system for " highlight="your building." />
            <Reveal as="p">{s.intro}</Reveal>
            <Reveal as="p">From storm, hail and wind damage evaluations to full replacement and ongoing maintenance, we collaborate with you to find the most durable, cost-effective solution for your building and business goals.</Reveal>
            <ul className="service-list static">
              {s.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </div>
          <div className="service-page-media reveal">
            <img src="/assets/img/proj-commercial2.webp" alt="Commercial roofing system installation by Priority Roofing" loading="lazy" />
            <div className="service-page-quote">
              <p>Commercial systems backed by labor and product warranties on every job.</p>
              <span>Commercial Division · Dallas</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark section">
        <div className="container">
          <SectionHead headClass="warranties-head" tag="COMMERCIAL SYSTEMS" title="Systems we " highlight="install and maintain." />
          <div className="system-grid">
            {[
              ['Asphalt', 'Proven built-up and modified systems for low-slope commercial roofs.'],
              ['Single-Ply', '20-year warranty and no-leak guarantee on installed single-ply membranes.'],
              ['Metal', 'Durable metal roofing with 20-year protection — built for Texas weather.'],
              ['Tile & Slate', 'Premium systems with warranties up to 30 years.'],
              ['SPF Foam', 'Spray polyurethane foam roofing with long-term protection.'],
              ['Modified Bitumen', 'Reinforced membrane systems for commercial buildings.'],
            ].map(([title, text]) => (
              <Reveal as="div" className="system-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand image="/assets/img/proj-home-commercial.webp" />
    </>
  );
}
