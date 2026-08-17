import { useEffect, useState } from 'react';
import { statePaths } from '../data/usstates';
import { business } from '../data/content';

// Interactive US map of Priority Roofing offices. Office data comes from the
// API (MongoDB), falling back to bundled seed data when the API is unreachable.
export default function USMap() {
  const [offices, setOffices] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/offices')
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setOffices(data.offices || []);
      })
      .catch((err) => {
        console.warn('Could not fetch offices:', err.message);
        if (!cancelled) setOffices([]);
      });
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="us-map reveal" id="usMap">
      <svg className="us-map-svg" viewBox="0 0 1000 720" role="img" aria-label="Priority Roofing office locations across the United States">
        {statePaths.map((s) => (
          <path key={s.name} d={s.d} data-name={s.name} className="us-state" />
        ))}
        {offices.map((o) => (
          <g
            key={o.city}
            className={`map-marker${selected && selected.city === o.city ? ' active' : ''}`}
            data-city={o.city}
            transform={`translate(${o.x},${o.y})`}
            onClick={() => setSelected(selected && selected.city === o.city ? null : o)}
            style={{ cursor: 'pointer' }}
          >
            <circle className="hit" r="9" />
            <circle className="pulse" r="3.5" />
            <circle className="dot" r="3.5" />
          </g>
        ))}
      </svg>

      {selected && (
        <div className="us-map-card">
          <p className="us-map-card-city">{selected.city}{selected.region ? `, ${selected.region}` : ''}{selected.flagship ? ' · Dallas HQ' : ''}</p>
          {selected.address && <p>{selected.address}</p>}
          {selected.phone && <p><a href={`tel:+1${selected.phone.replace(/[^0-9]/g, '')}`}>{selected.phone}</a></p>}
          {selected.email && <p><a href={`mailto:${selected.email}`}>{selected.email}</a></p>}
          {!selected.address && !selected.phone && <p>Contact the office nearest you at {business.phone}.</p>}
        </div>
      )}
    </div>
  );
}
