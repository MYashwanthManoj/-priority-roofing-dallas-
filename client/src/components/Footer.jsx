import { Link } from 'react-router-dom';
import { business } from '../data/content';

function FooterBrandMark() {
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

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand footer-brand-link">
              <FooterBrandMark />
              <span className="brand-text">PRIORITY<em>ROOFING</em></span>
            </Link>
            <p>Dallas' trusted local roofing contractor for residential, commercial &amp; designer roofing — built for North Texas weather.</p>
            <div className="footer-social">
              <a href="https://www.facebook.com/PriorityContractingandRoofing/" target="_blank" rel="noopener" aria-label="Priority Roofing on Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H8.5v3h2.5v7h2.5z"/></svg>
              </a>
              <a href="https://www.instagram.com/priority_roofs/" target="_blank" rel="noopener" aria-label="Priority Roofing on Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://www.instagram.com/prioritydesignerroofs/" target="_blank" rel="noopener" aria-label="Priority Designer Roofing on Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link to="/about">About Us</Link>
            <Link to="/#services">Our Services</Link>
            <Link to="/locations">Areas Served</Link>
            <Link to="/locations">Locations</Link>
            <a href="https://priorityroofs.com/privacy-policy/" target="_blank" rel="noopener">Privacy Policy</a>
            <Link to="/contact">Contact Us</Link>
            <a href="https://priorityroofs.com/make-payment/" target="_blank" rel="noopener">Make a Payment</a>
          </div>

          <div className="footer-col">
            <h4>Our Services</h4>
            <Link to="/residential">Residential Roof Repair</Link>
            <Link to="/designer-roofing">Designer Roof Systems</Link>
            <Link to="/commercial">Commercial Roof Replacement</Link>
            <Link to="/storm-damage">Storm Damage Restoration</Link>
            <Link to="/materials">Roofing Materials</Link>
            <Link to="/contact#inspection">Free Roof Inspection</Link>
          </div>

          <div className="footer-col footer-contact">
            <h4>Dallas Office</h4>
            <p>1420 W. Mockingbird Ln. Suite 540<br />Dallas, TX 75247</p>
            <p><a href={business.phoneHref}>(469) 615-8193</a></p>
            <p><a href={business.emailHref}>{business.email}</a></p>
            <h4 className="hours-title">Hours of Operation</h4>
            <p>Monday – Friday: 9:00 AM – 5:00 PM<br />Saturday &amp; Sunday: Closed</p>
            <p className="footer-24"><span aria-hidden="true">●</span> 24/7 emergency support — call <a href={business.phoneHref}>{business.phone}</a></p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Priority Roofing. All Rights Reserved.</p>
          <p className="footer-disclaimer">Business information sourced from priorityroofs.com. This is a 2026 digital experience redesign concept.</p>
        </div>
      </div>
    </footer>
  );
}
