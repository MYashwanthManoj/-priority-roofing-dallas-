import { Link } from 'react-router-dom';
import { business } from '../data/content';

// Sticky bottom bar on mobile: call + free inspection.
export default function MobileCTA() {
  return (
    <div className="mobile-cta" id="mobileCta">
      <a href={business.phoneHref} className="mc-call">Call {business.phone}</a>
      <Link to="/contact#inspection" className="mc-inspect">Free Inspection</Link>
    </div>
  );
}
