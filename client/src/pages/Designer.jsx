import Reveal from '../components/Reveal';
import PageHero from '../components/PageHero';
import SectionHead from '../components/SectionHead';
import CTABand from '../components/CTABand';
import { usePageMeta } from '../hooks/usePageMeta';
import { services } from '../data/content';

export default function Designer() {
  usePageMeta(
    'Designer Roofing Dallas — Slate, Tile, Standing Seam & More | Priority Designer',
    'Priority Designer Roofing Dallas restores and installs premium systems — slate, clay tile, synthetic, shake, standing seam and stone-coated steel — for architecturally significant homes. Free annual drone inspections. Call 469-615-8193.'
  );
  const s = services.designer;

  return (
    <>
      <PageHero
        eyebrow="DESIGNER ROOFING · PRIORITY DESIGNER"
        title="Roofs that "
        highlight="make a statement."
        sub="From restoring a 100+ year-old slate roof to lightweight Brava systems and custom copper work — Priority Designer has the knowledge to guide your project."
        image="/assets/img/proj-design.webp"
        alt="Designer slate and tile roofing project"
        crumb="Designer Roofing"
      />

      <section className="service-page section">
        <div className="container service-page-grid">
          <div className="service-page-copy">
            <SectionHead headClass="intro-head" tag="DESIGNER ROOFING" title="The knowledge behind " highlight="significant homes." />
            <Reveal as="p">{s.intro}</Reveal>
            <Reveal as="p">Priority Designer pairs restoration expertise with premium products — and backs every project with labor warranties. Free annual inspections via drone keep your investment protected season after season.</Reveal>
            <ul className="service-list static">
              {s.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </div>
          <div className="service-page-media reveal">
            <img src="/assets/img/mat-scs.webp" alt="Stone-coated steel designer roofing system" loading="lazy" />
            <div className="service-page-quote">
              <p>Nationally recognized slate &amp; tile work — restoration and installation.</p>
              <span>Priority Designer Division</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark section">
        <div className="container">
          <SectionHead headClass="warranties-head" tag="DESIGNER SYSTEMS" title="Materials for " highlight="the exceptional." />
          <div className="designer-grid">
            {[
              { title: 'Synthetic', text: 'Engineered polymers replicating the look of slate, wood and clay with modern durability.', img: '/assets/img/mat-synth.webp', alt: 'Synthetic designer roofing' },
              { title: 'Shake', text: "Cedar's natural resistance to decay, insects and fungi — with premium curb appeal.", img: '/assets/img/mat-shake.webp', alt: 'Shake designer roofing' },
              { title: 'Standing Seam', text: 'Watertight, energy-efficient metal systems designed for 40–70 years of service.', img: '/assets/img/mat-seam.webp', alt: 'Standing seam metal roofing' },
              { title: 'Stone-Coated Steel', text: 'The strength of steel with the look of tile, slate or shingle.', img: '/assets/img/mat-scs.webp', alt: 'Stone-coated steel roofing' },
              { title: 'Clay Tile', text: 'Fired clay tiles that stand strong against UV rays, moisture and extreme temperatures.', img: '/assets/img/mat-clay2.webp', alt: 'Clay tile roofing' },
              { title: 'Slate', text: 'Natural stone with a lifespan often exceeding 100 years with proper maintenance.', img: '/assets/img/mat-slate2.webp', alt: 'Natural slate roofing' },
            ].map((m) => (
              <Reveal as="article" className="designer-card" key={m.title}>
                <div className="designer-card-img"><img src={m.img} alt={m.alt} loading="lazy" /></div>
                <div className="designer-card-body"><h3>{m.title}</h3><p>{m.text}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand image="/assets/img/mat-slate2.webp" />
    </>
  );
}
