import Reveal from '../components/Reveal';
import PageHero from '../components/PageHero';
import SectionHead from '../components/SectionHead';
import CTABand from '../components/CTABand';
import MaterialsTabs from '../components/MaterialsTabs';
import MagneticButton from '../components/MagneticButton';
import { usePageMeta } from '../hooks/usePageMeta';

export default function Materials() {
  usePageMeta(
    'Roofing Materials Dallas — Asphalt, Metal, Tile & Slate | Priority Roofing',
    'Explore the roofing materials Priority Roofing Dallas installs — asphalt shingles, metal, clay tile, slate and designer systems, each selected for the North Texas climate. Free inspections. Call 469-615-8193.'
  );

  return (
    <>
      <PageHero
        eyebrow="ROOFING MATERIALS · DALLAS, TX"
        title="Materials that "
        highlight="outlast Texas."
        sub="From durable asphalt shingles to designer slate — every system we install is selected for the unique demands of the North Texas climate."
        image="/assets/img/mat-metal.webp"
        alt="Standing seam metal roofing installed by Priority Roofing"
        crumb="Materials"
      />

      <section className="materials section" id="materials">
        <div className="container">
          <div className="materials-head">
            <SectionHead headClass="materials-head" tag="ROOFING MATERIALS" title="Explore the " highlight="systems we install." sub="Compare the materials, benefits and ideal property types — then schedule a free inspection to see what's right for your roof." />
          </div>
          <MaterialsTabs />
        </div>
      </section>

      <section className="metal section" id="metal">
        <div className="metal-media" aria-hidden="true">
          <img src="/assets/img/mat-metal.webp" alt="" loading="lazy" />
        </div>
        <div className="container metal-inner">
          <SectionHead headClass="warranties-head" tag="METAL ROOFING" title="Built for Texas. " highlight="Designed to last." />
          <Reveal as="p" className="metal-copy">Metal roofing in Dallas is the ideal choice for those seeking both durability and style. Metal roofs are low-maintenance and energy-efficient, making them a wise investment for your home or business. They also provide long-lasting materials, fire resistance, and excellent protection against Texas heat and hail.</Reveal>
          <div className="metal-features">
            {['Durable & long-lasting materials', 'Low-maintenance & energy-efficient', 'Fire resistance', 'Protection from Texas heat & hail'].map((f, i) => (
              <div className="metal-feature reveal" key={f}>
                <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <p>{f}</p>
              </div>
            ))}
          </div>
          <MagneticButton to="/contact#inspection" className="btn btn-gold btn-lg magnetic reveal">
            Explore Metal Roofing <span className="arrow">→</span>
          </MagneticButton>
        </div>
      </section>

      <CTABand image="/assets/img/mat-seam.webp" />
    </>
  );
}
