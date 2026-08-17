import Reveal from '../components/Reveal';
import PageHero from '../components/PageHero';
import SectionHead from '../components/SectionHead';
import CTABand from '../components/CTABand';
import StormStages from '../components/StormStages';
import MagneticButton from '../components/MagneticButton';
import { usePageMeta } from '../hooks/usePageMeta';
import { insuranceItems, business } from '../data/content';

export default function StormDamage() {
  usePageMeta(
    'Storm Damage & Hail Damage Restoration Dallas | Priority Roofing',
    'Priority Roofing Dallas responds within 24–48 hours after storms, hail or leaks — emergency tarping, damage protection, and full insurance claim assistance with adjuster coordination. 24/7 emergency line: 469-615-8193.'
  );

  return (
    <>
      <PageHero
        eyebrow="STORM DAMAGE · EMERGENCY RESPONSE"
        title="When the storm hits, "
        highlight="we help restore."
        sub="At Priority we don't chase storms — we help restore the communities that we live in. Fast response within 24–48 hours after storms, hail or leaks."
        image="/assets/img/proj-1.webp"
        alt="Storm-damaged roof restoration by Priority Roofing"
        crumb="Storm Damage"
      />

      <section className="storm section">
        <div className="storm-bg" aria-hidden="true" />
        <div className="container">
          <StormStages />
          <div className="storm-callout reveal">
            <div className="storm-callout-item">
              <p className="big">24–48 hrs</p>
              <p>Fast response after storms, hail or leaks</p>
            </div>
            <div className="storm-callout-item">
              <p className="big">24/7</p>
              <p>Emergency support line — <a href={business.phoneHref}>{business.phone}</a></p>
            </div>
            <div className="storm-callout-item">
              <p className="big">100%</p>
              <p>Claim assistance — adjuster coordination &amp; paperwork</p>
            </div>
            <MagneticButton href={business.phoneHref} className="btn btn-gold btn-lg magnetic storm-cta">
              Call for Emergency Help
            </MagneticButton>
          </div>
        </div>
      </section>

      <section className="insurance section-dark" id="insurance">
        <div className="container">
          <div className="insurance-grid">
            <div className="insurance-copy">
              <SectionHead headClass="intro-head" tag="INSURANCE ASSISTANCE" title="We handle the paperwork. " highlight="You handle your life." />
              <Reveal as="p">Yes, we work directly with your insurance provider to help expedite and maximize your claim — ensuring that you get full value for storm-related roof damage. We work with all major insurance companies to make the entire process smooth and stress-free.</Reveal>
              <ul className="insurance-list">
                {insuranceItems.map((it) => (
                  <li className="reveal" key={it}><span aria-hidden="true">✓</span> {it}</li>
                ))}
              </ul>
              <Reveal as="p" className="insurance-note">We help you document and advocate for your claim. Approval and payout amounts are determined by your insurance provider.</Reveal>
              <MagneticButton to="/contact#inspection" className="btn btn-gold btn-lg magnetic reveal">
                Start Your Free Inspection
              </MagneticButton>
            </div>
            <div className="insurance-visual reveal">
              <div className="insurance-img-stack">
                <img src="/assets/img/proj-1.webp" alt="Priority Roofing project — before photo documentation for insurance claim" loading="lazy" />
                <div className="insurance-doc" aria-hidden="true">
                  <div className="doc-line w60" />
                  <div className="doc-line w80" />
                  <div className="doc-line w70" />
                  <div className="doc-line w45" />
                  <span className="doc-stamp">CLAIM FILE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead headClass="warranties-head" tag="EMERGENCY RESPONSE" title="What happens " highlight="after the storm?" />
          <div className="step-row">
            {[
              ['01', 'Call us 24/7', 'Reach our emergency line at 469-615-8193 — day or night.'],
              ['02', 'We inspect fast', 'Free inspection within 24–48 hours after storms, hail or leaks.'],
              ['03', 'We protect your roof', 'Emergency tarping and damage protection stop further loss.'],
              ['04', 'We document everything', 'Before/after photos and full claim documentation prepared for your insurer.'],
              ['05', 'We coordinate with insurance', 'We meet the adjuster on site and advocate for your claim.'],
              ['06', 'We restore your roof', 'Expert restoration — repaired or replaced with the same Priority standard.'],
            ].map(([num, title, text]) => (
              <Reveal as="div" className="step-item" key={num}>
                <span className="step-num">{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand image="/assets/img/proj-3.webp" />
    </>
  );
}
