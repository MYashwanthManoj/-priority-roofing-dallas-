import { tickerItems } from '../data/content';

// Infinite certification marquee. The track is duplicated in CSS for a
// seamless loop.
export default function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((t, i) => (
          <span key={`${t}-${i}`}>
            {t}<i>◆</i>
          </span>
        ))}
      </div>
    </div>
  );
}
