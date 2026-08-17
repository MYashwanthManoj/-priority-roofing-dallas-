import { useEffect } from 'react';

// Global scroll-reveal observer. Catches every `.reveal` element on the page —
// including plain elements that use className="reveal" without the Reveal
// component. Must run after route changes (pages mount new elements), so it is
// re-armed on every pathname change.
export function useGlobalReveal(pathname) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = document.querySelectorAll('.reveal');
    if (!targets.length) return;

    if (reduced) {
      targets.forEach((el) => el.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    targets.forEach((el) => {
      // Skip elements the Reveal component already revealed
      if (!el.classList.contains('in')) io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);
}
