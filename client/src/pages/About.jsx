import Reveal from '../components/Reveal';
import PageHero from '../components/PageHero';
import SectionHead from '../components/SectionHead';
import CTABand from '../components/CTABand';
import FAQ from '../components/FAQ';
import { usePageMeta } from '../hooks/usePageMeta';
import { team, teamQuotes, promises, warranties } from '../data/content';

export default function About() {
  usePageMeta(
    'About Priority Roofing Dallas — Team, Certifications & Warranties',
    'Meet the Priority Roofing Dallas team, learn about our family-owned roots, certifications (GAF Master Elite, NRCA, UASRC, OSHA), and the labor and product warranties behind every job. Call 469-615-8193.'
  );

  return (
    <>
      <PageHero
        eyebrow="ABOUT PRIORITY ROOFING · DALLAS"
        title="Trusted. Certified. "
        highlight="Family-owned."
        sub="Our reputation as the best roofing company in Dallas is built on transparency, honesty, and high-quality work — resulting in countless satisfied customers who trust us for all their roofing needs."
        image="/assets/img/hero-dallas.webp"
        alt="Dallas, Texas — the community Priority Roofing serves"
        crumb="About"
      />

      <section className="why section-dark" id="why">
        <div className="container">
          <div className="why-grid">
            <div className="why-creds">
              <SectionHead headClass="intro-head" tag="WHY PRIORITY" title="Certified and " highlight="credentialed." />
              <div className="cred reveal"><span className="cred-check" aria-hidden="true">✓</span><p><strong>Family-owned, insured &amp; bonded</strong> — local management and production teams across 30+ locations.</p></div>
              <div className="cred reveal"><span className="cred-check" aria-hidden="true">✓</span><p><strong>GAF Master Elite</strong> and <strong>Owens Corning Preferred Contractor</strong>.</p></div>
              <div className="cred reveal"><span className="cred-check" aria-hidden="true">✓</span><p>Backed by reputable certifications, including <strong>GAF, NRCA, UASRC &amp; OSHA</strong>.</p></div>
              <div className="cred reveal"><span className="cred-check" aria-hidden="true">✓</span><p>Member of <strong>The Good Contractors List</strong> — a $10,000 guarantee on every job we perform.</p></div>
              <div className="cred reveal"><span className="cred-check" aria-hidden="true">✓</span><p><strong>5–20 year labor warranty</strong> and no-leak guarantee.</p></div>
              <div className="cred reveal"><span className="cred-check" aria-hidden="true">✓</span><p>Ranked <strong>#21 by RoofingContractor.com</strong> · 975+ 5-star Google reviews (company-wide).</p></div>
            </div>

            <div className="promises">
              <h3 className="reveal">Our promises to you</h3>
              <div className="promise-grid">
                {promises.map((p) => (
                  <div className="promise reveal" key={p.title}>
                    <span className="promise-icon" aria-hidden="true">{p.icon}</span>
                    <h4>{p.title}</h4>
                    <p>{p.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team section" id="team">
        <div className="container">
          <div className="team-head">
            <SectionHead headClass="team-head" tag="THE DALLAS TEAM" title="The people who " highlight="drive our vision." sub="Our skilled team is ready to guide you with reliable solutions for all your roofing needs." />
          </div>

          <div className="team-grid">
            {team.map((m) => (
              <article className="team-card reveal" key={m.name}>
                <div className="team-photo"><img src={m.image} alt={m.alt} loading="lazy" /></div>
                <h3>{m.name}</h3>
                <p className="team-role">{m.role}</p>
              </article>
            ))}
          </div>

          <div className="team-quotes">
            {teamQuotes.map((q) => (
              <blockquote className="reveal" key={q.author}>
                <p>"{q.text}"</p>
                <footer>{q.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="warranties section" id="warranties">
        <div className="container">
          <div className="warranties-head">
            <SectionHead headClass="warranties-head" tag="WARRANTIES" title="Warranties that " highlight="mean something." sub="Every Priority Roofing job is backed by labor warranties and a no-leak guarantee. Warranty coverage varies by service and system — here's exactly what's offered." />
          </div>
          <div className="warranty-grid">
            {warranties.map((w) => (
              <div className={`warranty-card reveal${w.gold ? ' warranty-gold' : ''}`} key={w.title}>
                <span className="warranty-icon" aria-hidden="true">{w.icon}</span>
                <h3>{w.title}</h3>
                <p className="warranty-big">{w.big}</p>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead headClass="warranties-head" tag="FAQ" title="Questions? " highlight="Answers." />
          <FAQ />
        </div>
      </section>

      <CTABand image="/assets/img/proj-2.webp" />
    </>
  );
}
