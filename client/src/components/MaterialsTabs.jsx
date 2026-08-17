import { useState } from 'react';
import Reveal from './Reveal';
import { materials } from '../data/content';

export default function MaterialsTabs() {
  const [active, setActive] = useState('asphalt');
  const current = materials.find((m) => m.id === active) || materials[0];

  return (
    <>
      <div className="materials-tabs reveal" role="tablist" aria-label="Roofing materials">
        {materials.map((m) => (
          <button
            key={m.id}
            className={`mat-tab${active === m.id ? ' active' : ''}`}
            role="tab"
            aria-selected={active === m.id}
            data-mat={m.id}
            onClick={() => setActive(m.id)}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="materials-panels reveal">
        <div className="mat-panel active" data-matpanel={current.id}>
          <div className="mat-panel-img">
            <img src={current.image} alt={current.alt} loading="lazy" />
          </div>
          <div className="mat-panel-copy">
            <h3>{current.title}</h3>
            <p>{current.body}</p>
            <ul>
              {current.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
