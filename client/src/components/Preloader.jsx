import { useEffect, useState } from 'react';

// Full-screen preloader shown on first mount, fades out after load,
// then removes itself from the DOM so it can never block interactions.
// Skipped entirely when prefers-reduced-motion is set.
export default function Preloader() {
  const [phase, setPhase] = useState('show'); // show | done | gone

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setPhase('gone');
      return;
    }
    const t1 = setTimeout(() => setPhase('done'), 1400);
    const t2 = setTimeout(() => setPhase('gone'), 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === 'gone') return null;
  return (
    <div className={`preloader${phase === 'done' ? ' done' : ''}`} aria-hidden="true">
      <div className="preloader-inner">
        <div className="preloader-mark"><span></span><span></span></div>
        <p className="preloader-word">PRIORITY ROOFING</p>
        <div className="preloader-bar"><i></i></div>
      </div>
    </div>
  );
}
