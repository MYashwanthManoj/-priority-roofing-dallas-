import { useEffect, useRef, useState } from 'react';

// Scroll-reveal wrapper. The revealed state is React-owned (part of the
// className), so it survives parent re-renders that change other classes
// (e.g. the storm-stage spotlight). Also checks for an `in` class already
// applied by the global reveal observer.
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Already revealed by the global observer? Adopt it.
    if (el.classList.contains('in')) {
      setRevealed(true);
      return;
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setRevealed(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = ['reveal', className, revealed ? 'in' : ''].filter(Boolean).join(' ');
  return (
    <Tag ref={ref} className={cls} {...rest}>
      {children}
    </Tag>
  );
}
