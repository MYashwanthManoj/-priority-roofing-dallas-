import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import MagneticButton from '../components/MagneticButton';
import Ticker from '../components/Ticker';
import Stats from '../components/Stats';
import InspectionForm from '../components/InspectionForm';
import SectionHead from '../components/SectionHead';
import Reviews from '../components/Reviews';
import CTABand from '../components/CTABand';
import StormStages from '../components/StormStages';
import MaterialsTabs from '../components/MaterialsTabs';
import { usePageMeta } from '../hooks/usePageMeta';
import { business, services } from '../data/content';

const TRUST_CERTS = [
  'GAF Master Elite',
  'Owens Corning Preferred',
  'NRCA Member',
  'UASRC Certified',
  'OSHA Safety Trained',
];

export default function Home() {
  usePageMeta(
    'Priority Roofing Dallas — Roof Repair & Replacement Contractor | North Texas Roofing',
    'Priority Roofing Dallas is your trusted local roofing contractor — residential, commercial & designer roof repair, replacement and installation built for North Texas weather. Free inspections, insurance claim assistance & 24–48 hour storm response. Call 469-615-8193.'
  );

  // Hero image crossfade: continuous cinematic loop between the two frames
  const [heroSwap, setHeroSwap] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    // First crossfade after intro settles
    const t1 = setTimeout(() => setHeroSwap(true), 3400);
    // Continuous cycling every 7 seconds
    const t2 = setInterval(() => setHeroSwap((prev) => !prev), 7000);
    return () => { clearTimeout(t1); clearInterval(t2); };
  }, []);

  // Hero parallax: background moves slower than foreground for cinematic depth
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const hero = heroRef.current;
    if (!hero) return;
    const imgs = hero.querySelectorAll('.hero-img, .hero-img-2');
    const sun = hero.querySelector('.hero-sun');
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const heroH = hero.offsetHeight;
        if (scrollY > heroH) { ticking = false; return; }
        const progress = scrollY / heroH;
        // Images move at 40% of scroll speed (parallax)
        const imgOffset = scrollY * 0.4;
        // Sun moves at 20% (farther = slower)
        const sunOffset = scrollY * 0.2;
        imgs.forEach((img) => { img.style.transform = `translateY(${imgOffset}px) scale(${1 + progress * 0.02})`; });
        if (sun) sun.style.transform = `translateY(${sunOffset}px)`;
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero" id="hero" ref={heroRef}>
        <div className="hero-media" aria-hidden="true">
          <div className="hero-img" style={{ backgroundImage: "url('/assets/img/hero-house.webp')" }} />
          <div className={`hero-img hero-img-2${heroSwap ? ' show' : ''}`} style={{ backgroundImage: "url('/assets/img/proj-home-commercial.webp')" }} />
          <div className="hero-veil" />
          <div className="hero-grain" aria-hidden="true" />
          <div className="hero-sun" aria-hidden="true" />
        </div>

        <div className="hero-content container">
          <p className="hero-eyebrow reveal-hero" data-rh="1"><span className="line" />DALLAS, TEXAS · ROOF REPAIR &amp; REPLACEMENT</p>
          <h1 className="hero-title">
            <span className="line-mask"><span data-rh="2">YOUR ROOF.</span></span>
            <span className="line-mask"><span data-rh="3" className="outline">OUR PRIORITY.</span></span>
          </h1>
          <p className="hero-sub reveal-hero" data-rh="4">Professional roof repair &amp; replacement for residential, commercial &amp; designer roofing — engineered for North Texas weather, from scorching summers to hailstorms and tornadoes.</p>
          <div className="hero-ctas reveal-hero" data-rh="5">
            <MagneticButton to="/contact#inspection" className="btn btn-gold btn-lg magnetic" arrow>
              Schedule a Free Inspection
            </MagneticButton>
            <MagneticButton href={business.phoneHref} className="btn btn-ghost btn-lg magnetic">
              Call {business.phone}
            </MagneticButton>
          </div>
          <div className="hero-trust reveal-hero" data-rh="6">
            <div className="stars" aria-hidden="true">★★★★★</div>
            <p><strong>5.0 Rating</strong> from <strong>746 Reviews</strong> <span className="posted">— Posted on Google</span></p>
          </div>
        </div>

        <div className="hero-scroll" aria-hidden="true">
          <span>SCROLL</span>
          <i />
        </div>

        <div className="hero-meta">
          <span>1420 W. Mockingbird Ln. Suite 540, Dallas, TX 75247</span>
          <span className="hero-meta-dot">●</span>
          <span>Mon–Fri 9AM–5PM</span>
        </div>
      </section>

      <Ticker />

      {/* ============ TRUST BADGES ============ */}
      <section className="trust-strip" aria-label="Certifications and affiliations">
        <div className="container trust-badges">
          {TRUST_CERTS.map((cert) => (
            <div className="trust-badge reveal" key={cert}>
              <span className="badge-diamond" aria-hidden="true">◆</span>
              <span>{cert}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="intro section" id="intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-left">
              <SectionHead headClass="intro-head" tag="01 — THE COMPANY" title="A local Dallas roofer, built for " highlight="North Texas weather." />
              <div className="intro-image-wrap reveal">
                <img src="/assets/img/hero-dallas.webp" alt="Dallas, Texas — the community Priority Roofing serves" loading="lazy" />
                <span className="img-caption">Serving Greater Dallas from 1420 W. Mockingbird Ln.</span>
              </div>
            </div>
            <div className="intro-right">
              <Reveal as="p">For a leaky or damaged roof, Priority Roofing is your trusted local roof repair, replacement and installation company in Dallas, Texas. As an experienced roofing contractor in Dallas, we are mindful of the unique weather conditions in North Texas — from scorching summers to hailstorms and tornadoes. That's why you need us to protect your roof year-round with our durable roofing solutions, designed to withstand extreme weather conditions.</Reveal>
              <Reveal as="p">Traditional roofing is prone to damage due to rapid temperature changes, and our roofing systems are designed to prevent this by reducing the expansion and contraction that occurs. Whether it's a leak, storm damage, or an aging roof, our skilled professionals are ready to help you quickly and fairly make the entire process smooth and stress-free. We also work directly with all major insurance companies to make it easy for you.</Reveal>
              <ul className="intro-list">
                <li className="reveal">Roof repair, replacement &amp; installation</li>
                <li className="reveal">Residential · Commercial · Designer roofing</li>
                <li className="reveal">Storm &amp; hail damage restoration</li>
                <li className="reveal">Emergency roof leak repairs</li>
                <li className="reveal">Insurance claim assistance</li>
                <li className="reveal">Free, no-obligation inspections</li>
              </ul>
              <div className="intro-sign reveal">
                <p className="quote-mark" aria-hidden="true">"</p>
                <p><em>"We don't just build roofs — we build relationships. Taking care of our families hinges upon our taking care of yours."</em></p>
                <p className="sign-name">Elias Rodriguez — Managing Partner, Dallas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* ============ FREE INSPECTION ============ */}
      <section className="inspection section" id="inspection">
        <div className="container">
          <div className="inspection-head">
            <SectionHead headClass="inspection-head" tag="02 — FREE ROOF INSPECTION" title="Let us look " highlight="at your roof." sub="Schedule a free roofer inspection with Priority Roofing Dallas. Fast, free inspections and detailed estimates — no obligation, no money upfront." />
          </div>
          <InspectionForm />
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="services section-dark" id="services">
        <div className="container">
          <div className="services-head">
            <SectionHead headClass="services-head" tag="03 — SERVICES" title="Three disciplines. " highlight="One standard." sub="Priority Roofing is committed to delivering top-tier roof repair & replacement for residential, designer, and commercial roofing projects — backed by reputable certifications including GAF, NRCA, UASRC & OSHA." />
          </div>

          <div className="service-cards">
            {Object.values(services).map((s) => (
              <article className="service-card reveal" key={s.num}>
                <div className="service-card-media">
                  <img src={s.image} alt={s.alt} loading="lazy" />
                  <span className="service-num">{s.num}</span>
                </div>
                <div className="service-card-body">
                  <h3>{s.title}</h3>
                  <p>{s.intro}</p>
                  <ul className="service-list">
                    {s.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                  <Link to="/contact#inspection" className="btn btn-outline btn-small">Schedule Free Inspection</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STORM ============ */}
      <section className="storm section" id="storm">
        <div className="storm-bg" aria-hidden="true" />
        <div className="container">
          <div className="storm-head">
            <SectionHead headClass="storm-head" tag="04 — STORM DAMAGE" title="When the storm hits, " highlight="we help restore." sub="At Priority we don't chase storms — we help restore the communities that we live in." />
          </div>

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
            <MagneticButton to="/contact#inspection" className="btn btn-gold btn-lg magnetic storm-cta">
              Get a Free Storm Inspection
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ============ MATERIALS ============ */}
      <section className="materials section" id="materials">
        <div className="container">
          <div className="materials-head">
            <SectionHead headClass="materials-head" tag="06 — ROOFING MATERIALS" title="Materials that " highlight="outlast Texas." sub="From durable asphalt shingles to designer slate — the systems we install are selected for the unique demands of the North Texas climate." />
          </div>
          <MaterialsTabs />
        </div>
      </section>

      <Reviews />

      {/* ============ WHY ============ */}
      <section className="why section-dark" id="why">
        <div className="container">
          <div className="why-head">
            <SectionHead headClass="why-head" tag="08 — WHY PRIORITY" title="Trusted. Certified. " highlight="Family-owned." sub="Our reputation as the best roofing company in Dallas is built on transparency, honesty, and high-quality work — resulting in countless satisfied customers who trust us for all their roofing needs." />
          </div>

          <div className="why-grid">
            <div className="why-creds">
              <div className="cred reveal"><span className="cred-check" aria-hidden="true">✓</span><p><strong>Family-owned, insured &amp; bonded</strong> — local management and production teams across 30+ locations.</p></div>
              <div className="cred reveal"><span className="cred-check" aria-hidden="true">✓</span><p><strong>GAF Master Elite</strong> and <strong>Owens Corning Preferred Contractor</strong>.</p></div>
              <div className="cred reveal"><span className="cred-check" aria-hidden="true">✓</span><p>Backed by reputable certifications, including <strong>GAF, NRCA, UASRC &amp; OSHA</strong>.</p></div>
              <div className="cred reveal"><span className="cred-check" aria-hidden="true">✓</span><p>Member of <strong>The Good Contractors List</strong> — a $10,000 guarantee on every job we perform.</p></div>
              <div className="cred reveal"><span className="cred-check" aria-hidden="true">✓</span><p><strong>5–20 year labor warranty</strong> and no-leak guarantee.</p></div>
              <div className="cred reveal"><span className="cred-check" aria-hidden="true">✓</span><p>Ranked <strong>#21 by RoofingContractor.com</strong> · 975+ 5-star Google reviews (company-wide).</p></div>
            </div>

            <div className="why-process">
              <h3 className="reveal">How we build it right</h3>
              <p className="why-process-intro reveal">The Priority difference is in the details — an 8-step installation process that protects your roof for decades.</p>
              <ol className="process-list">
                {[
                  ['Tear Off', 'The first thing we do is tear off all existing layers of shingles.'],
                  ['Decking', 'We replace up to 3 sheets of decking for no additional cost. Bad or rotted decking is replaced and invoiced to your insurance company for the difference.'],
                  ['Underlayment', 'The synthetic underlayment we lay down provides a 100% waterproof barrier prior to the shingles being installed — significantly better than industry-standard #15 felt paper, which is NOT waterproof.'],
                  ['Starter Strip', 'Starter strip shingles around the perimeter of every roof, with a lifetime warranty and a 110 mph wind warranty.'],
                  ['Valley Protection', 'Ice & Water Shield by GAF — a rubber membrane that won\u2019t tear or rip. Peel-and-stick, self-sealing around nails.'],
                  ['DuraFlo Flashings', 'DuraFlo pipe flashings around all plumbing pipes — a 35-year warranty on the flashings. If it leaks, they replace it.'],
                  ['Ventilation', 'All necessary equations are performed to ensure the proper NFVA so your roof and home can breathe and avoid malfunctions.'],
                  ['Yard Cleanup', 'Once finished, we go over the entire yard with a magnetic toolbar.'],
                ].map(([title, text], i) => (
                  <li className="reveal" key={title}>
                    <span className="p-num">{String(i + 1).padStart(2, '0')}</span>
                    <div><h4>{title}</h4><p>{text}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
