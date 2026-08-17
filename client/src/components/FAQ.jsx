import { useRef, useState } from 'react';
import Reveal from './Reveal';
import { faqs } from '../data/content';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const heights = useRef({});

  const measure = (el, i) => {
    if (el && !heights.current[i]) heights.current[i] = el.scrollHeight;
    return heights.current[i] || 600;
  };

  return (
    <div className="faq-list">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <Reveal as="div" className={`faq-item${isOpen ? ' open' : ''}`} key={item.q}>
            <button
              className="faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span>{item.q}</span>
              <i aria-hidden="true" />
            </button>
            <div
              className="faq-a"
              ref={(el) => { if (el) heights.current[i] = el.scrollHeight; }}
              style={{ maxHeight: isOpen ? `${heights.current[i] || 600}px` : '0px' }}
            >
              <p>{item.a}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
