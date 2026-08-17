import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { business } from '../data/content';

const links = [
  { to: '/residential', label: 'Residential' },
  { to: '/commercial', label: 'Commercial' },
  { to: '/designer-roofing', label: 'Designer Roofing' },
  { to: '/storm-damage', label: 'Storm Damage' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none">
        <path d="M3 21 L16 6 L29 21" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 17.5 V25 H25 V17.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5 25 V20.5 H18.5 V25" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on route change + lock body scroll while open
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className={`site-nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="brand" aria-label="Priority Roofing — home">
            <BrandMark />
            <span className="brand-text">PRIORITY<em>ROOFING</em></span>
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} data-nav>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <a href={business.phoneHref} className="nav-phone">{business.phone}</a>
            <Link to="/contact#inspection" className="btn btn-gold btn-small nav-cta">Free Inspection</Link>
            <button
              className={`nav-burger${open ? ' open' : ''}`}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="mobile-menu-bg" aria-hidden="true" />
        <nav className="mobile-menu-links" aria-label="Mobile">
          {links.map((l, i) => (
            <Link key={l.to} to={l.to} data-mlink>
              <span>{String(i + 1).padStart(2, '0')}</span>{l.label}
            </Link>
          ))}
          <Link to="/locations" data-mlink><span>08</span>Locations</Link>
          <Link to="/contact#inspection" data-mlink><span>09</span>Free Inspection</Link>
        </nav>
        <div className="mobile-menu-foot">
          <a href={business.phoneHref} className="btn btn-outline btn-block">Call {business.phone}</a>
          <Link to="/contact#inspection" className="btn btn-gold btn-block">Schedule a Free Inspection</Link>
        </div>
      </div>
    </>
  );
}
