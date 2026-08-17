import { useEffect, useState } from 'react';
import Reveal from './Reveal';
import { stormStages } from '../data/content';

function StageIcon({ name }) {
  if (name === 'storm') {
    return (
      <svg viewBox="0 0 48 48" fill="none"><path d="M8 26 C8 16 18 12 24 18 C30 24 42 20 40 30 C38 38 22 40 14 36 C10 34 8 30 8 26Z" stroke="currentColor" strokeWidth="2" /><path d="M24 12 L22 19 L26 19 L23 27" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    );
  }
  if (name === 'inspection') {
    return (
      <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="15" stroke="currentColor" strokeWidth="2" /><circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" /><path d="M24 2 V9 M24 39 V46 M2 24 H9 M39 24 H46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
    );
  }
  if (name === 'documentation') {
    return (
      <svg viewBox="0 0 48 48" fill="none"><rect x="9" y="14" width="30" height="22" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M9 18 L24 28 L39 18" stroke="currentColor" strokeWidth="2" /><circle cx="19" cy="27" r="2.5" fill="currentColor" /><circle cx="29" cy="27" r="2.5" fill="currentColor" /></svg>
    );
  }
  if (name === 'insurance') {
    return (
      <svg viewBox="0 0 48 48" fill="none"><path d="M14 38 V30 C14 24 20 22 24 22 C28 22 34 24 34 30 V38" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M10 38 H38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M24 8 V14 M24 14 L28 11 M24 14 L20 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" fill="none"><path d="M8 25 L18 25 L22 15 L30 33 L34 25 L40 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
  );
}

// Auto-advancing spotlight across the STORM → INSPECTION → DOCUMENTATION →
// INSURANCE → RESTORATION stages. Pauses interaction on manual click.
export default function StormStages() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const t = setInterval(() => {
      setActive((a) => (a + 1) % stormStages.length);
    }, 3200);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <div className="storm-stages" id="stormStages">
      {stormStages.map((s, i) => (
        <div key={s.title} style={{ display: 'contents' }}>
          {i > 0 && <div className="stage-arrow" aria-hidden="true">→</div>}
          <Reveal
            as="div"
            className={`stage${active === i ? ' spot' : ''}`}
            data-stage={i}
            onClick={() => { setActive(i); setPaused(true); }}
            style={{ cursor: 'pointer' }}
          >
            <span className="stage-icon" aria-hidden="true"><StageIcon name={s.icon} /></span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </Reveal>
        </div>
      ))}
    </div>
  );
}
