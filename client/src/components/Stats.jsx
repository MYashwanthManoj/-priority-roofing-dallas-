import Reveal from './Reveal';
import { useCount } from '../hooks/useCount';
import { stats } from '../data/content';

function StatItem({ stat }) {
  const { ref, value } = useCount(stat.value);
  return (
    <Reveal as="div" className="stat">
      <p className="stat-num"><span ref={ref}>{value.toLocaleString()}</span>{stat.suffix}</p>
      <p className="stat-label">
        {stat.label}
        {stat.note && <em> ({stat.note})</em>}
      </p>
    </Reveal>
  );
}

export default function Stats() {
  return (
    <section className="stats section-dark" id="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s) => <StatItem key={s.label} stat={s} />)}
        </div>
        <Reveal as="p" className="stats-note">
          Fully licensed &amp; insured in Texas · Ranked <strong>#21 by RoofingContractor.com</strong> · <strong>975+ 5-star Google reviews</strong> company-wide · No storm-chasing tactics — just honest, reliable service.
        </Reveal>
      </div>
    </section>
  );
}
