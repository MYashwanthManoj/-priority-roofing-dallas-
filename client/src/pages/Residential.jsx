import Reveal from '../components/Reveal';
import PageHero from '../components/PageHero';
import SectionHead from '../components/SectionHead';
import CTABand from '../components/CTABand';
import FAQ from '../components/FAQ';
import { usePageMeta } from '../hooks/usePageMeta';
import { services } from '../data/content';

export default function Residential() {
  usePageMeta(
    'Residential Roofing Dallas — Roof Repair, Replacement & Shingle Roofs | Priority Roofing',
    'Priority Roofing Dallas provides residential roof inspections, repairs and replacement — durable shingle roofing systems built for North Texas weather. Free inspections. Call 469-615-8193.'
  );
  const s = services.residential;

  return (
    <>
      <PageHero
        eyebrow="RESIDENTIAL ROOFING · DALLAS, TX"
        title="Residential roofing, "
        highlight="built for Texas."
        sub="Roof inspections, repairs and replacements for Dallas homes — durable shingle systems engineered for scorching summers, hailstorms and everything in between."
        image="/assets/img/proj-roof56.jpg"
        alt="Residential shingle roof in Dallas, Texas"
        crumb="Residential"
      />

      <section className="service-page section">
        <div className="container service-page-grid">
          <div className="service-page-copy">
            <SectionHead headClass="intro-head" tag="RESIDENTIAL ROOFING" title="Protect your home with " highlight="shingle systems that last." />
            <Reveal as="p">{s.intro}</Reveal>
            <Reveal as="p">Every residential project starts with a free inspection to evaluate your current roof's condition. From there, our Dallas team handles everything — repairs, leak solutions, full replacement and installation — with insurance-related assistance along the way.</Reveal>
            <ul className="service-list static">
              {s.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </div>
          <div className="service-page-media reveal">
            <img src="/assets/img/mat-asphalt.webp" alt="Asphalt shingle roof installed by Priority Roofing Dallas" loading="lazy" />
            <div className="service-page-quote">
              <p>“We don't just build roofs — we build relationships.”</p>
              <span>Elias Rodriguez — Managing Partner, Dallas</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark section">
        <div className="container">
          <div className="feature-grid">
            <Reveal as="div" className="feature-box">
              <span className="feature-num">01</span>
              <h3>Free Inspection</h3>
              <p>Every project starts with a free inspection and detailed report of your roof's condition.</p>
            </Reveal>
            <Reveal as="div" className="feature-box">
              <span className="feature-num">02</span>
              <h3>10-Year Labor Warranty</h3>
              <p>Residential projects include a 10-year labor warranty and no-leak guarantee.</p>
            </Reveal>
            <Reveal as="div" className="feature-box">
              <span className="feature-num">03</span>
              <h3>Insurance Assistance</h3>
              <p>We work directly with your insurance provider and coordinate with the adjuster on site.</p>
            </Reveal>
            <Reveal as="div" className="feature-box">
              <span className="feature-num">04</span>
              <h3>Built for North Texas</h3>
              <p>Systems designed to handle heat, hail, wind and rapid temperature changes.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead headClass="warranties-head" tag="RESIDENTIAL FAQ" title="Questions about " highlight="your roof?" />
          <FAQ />
        </div>
      </section>

      <CTABand image="/assets/img/proj-1.webp" />
    </>
  );
}
