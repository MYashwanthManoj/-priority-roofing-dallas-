import { useState } from 'react';
import { dallasAreas } from '../data/content';

const markers = [
  { area: 'McKinney', x: 400, y: 115 },
  { area: 'Frisco', x: 380, y: 179 },
  { area: 'Plano', x: 450, y: 192 },
  { area: 'Richardson', x: 480, y: 243 },
  { area: 'Garland', x: 600, y: 269 },
  { area: 'Farmers Branch', x: 400, y: 256 },
  { area: 'Irving', x: 350, y: 320 },
  { area: 'Highland Park', x: 480, y: 307 },
  { area: 'Dallas', x: 500, y: 320, home: true },
  { area: 'Mesquite', x: 650, y: 352 },
  { area: 'Duncanville', x: 500, y: 435 },
];

// Glowing stylized map of the Greater Dallas communities served.
export default function AreaMap() {
  const [active, setActive] = useState('Dallas');

  return (
    <div className="area-map reveal">
      <div className="area-map-svg" id="areaMap">
        <svg viewBox="0 0 1000 640" role="img" aria-label="Map of communities served by Priority Roofing Dallas">
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#1c1f22" />
              <stop offset="1" stopColor="#121416" />
            </linearGradient>
          </defs>
          <rect width="1000" height="640" fill="url(#areaGrad)" />
          <g className="map-contours">
            <path d="M0 520 C180 460 260 560 420 505 C560 460 660 570 840 500 C910 470 960 480 1000 460" />
            <path d="M0 470 C160 420 280 500 430 455 C580 415 680 510 860 450 C920 430 970 440 1000 420" />
            <path d="M0 560 C200 510 300 600 470 555 C620 515 720 610 900 555" />
            <path d="M180 0 C220 90 160 160 240 230" />
            <path d="M700 0 C740 80 700 140 760 210" />
            <path d="M300 640 C330 560 300 500 340 430" />
            <path d="M120 120 C200 150 260 130 330 170" />
          </g>
          <g className="roads">
            <path d="M500 0 V640" /><path d="M0 300 H1000" /><path d="M0 150 H1000" />
            <path d="M250 0 C230 150 260 300 230 640" /><path d="M760 0 C780 160 740 320 770 640" />
          </g>
          <g className="area-markers">
            {markers.map((m) => (
              <g
                key={m.area}
                className={`a-marker${active === m.area ? ' active' : ''}${m.home ? ' is-home' : ''}`}
                data-area={m.area}
                transform={`translate(${m.x},${m.y})`}
                onClick={() => setActive(m.area)}
                style={{ cursor: 'pointer' }}
              >
                <circle className="hit" r="13" />
                <circle className="pulse" r="5" />
                <circle className="dot" r="5" />
                <text className="alabel" x="14" y="5">{m.area}</text>
              </g>
            ))}
          </g>
          <g className="area-badge">
            <circle cx="500" cy="330" r="62" fill="none" stroke="#c9a13b" strokeOpacity="0.35" strokeWidth="1.5" />
            <circle cx="500" cy="330" r="46" fill="none" stroke="#c9a13b" strokeOpacity="0.5" strokeWidth="1" />
            <text x="500" y="326" textAnchor="middle" fill="#c9a13b" fontSize="15" letterSpacing="3">DALLAS</text>
            <text x="500" y="344" textAnchor="middle" fill="#8a8f98" fontSize="9" letterSpacing="2">OFFICE · 75247</text>
          </g>
        </svg>
      </div>
      <div className="area-list">
        {dallasAreas.map((a) => (
          <button
            key={a}
            className={`area-chip${active === a ? ' active' : ''}`}
            data-area={a}
            onClick={() => setActive(a)}
          >
            {a}
          </button>
        ))}
      </div>
    </div>
  );
}
