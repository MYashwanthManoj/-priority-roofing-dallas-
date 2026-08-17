import { useState } from 'react';
import Reveal from './Reveal';
import { business } from '../data/content';

// The official inspection form fields — posts to POST /api/leads (MongoDB).
// NOTE: wire to the client's real backend (e.g. their form service) in production.
const officeOptions = [
  'Dallas', 'Fort Worth', 'Austin', 'Houston', 'Greater Houston', 'San Antonio',
  'San Marcos', 'Sherman', 'Tyler', 'Waco', 'Amarillo', 'Cleburne', 'Prosper',
  'Denver', 'Colorado Springs', 'Albuquerque', 'Oklahoma City', 'Tulsa',
  'Kansas City', 'St. Louis', 'Springfield', 'Nashville', 'Charlotte',
  'Charleston', 'Huntsville', 'Jacksonville', 'Lakeland', 'Tampa',
  'West Palm Beach', 'Los Angeles', 'Minneapolis', 'Columbus', 'Grand Rapids',
  'Omaha', 'Little Rock', 'Shreveport', 'Wichita Falls',
];

const hearOptions = ['Google', 'WCSG', 'Facebook', 'Yard sign', 'Referral'];

export default function InspectionForm() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', phone: '', email: '',
    office: '', propertyAddress: '', city: '', source: '', message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [error, setError] = useState('');

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setError('');

    // Client-side validation on required fields
    if (!form.firstName || !form.lastName || !form.phone || !form.email) {
      setStatus('idle');
      setError('Please fill in your first name, last name, phone and email.');
      return;
    }

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Request failed');
      setStatus('success');
    } catch (err) {
      console.error('Form submit error:', err.message);
      setStatus('error');
      setError('Something went wrong. Please try again or call us directly.');
    }
  };

  return (
    <Reveal as="form" className="inspection-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="f-first">First Name</label>
          <input type="text" id="f-first" placeholder="First name" required value={form.firstName} onChange={set('firstName')} />
        </div>
        <div className="field">
          <label htmlFor="f-last">Last Name</label>
          <input type="text" id="f-last" placeholder="Last name" required value={form.lastName} onChange={set('lastName')} />
        </div>
        <div className="field">
          <label htmlFor="f-phone">Phone</label>
          <input type="tel" id="f-phone" placeholder="(000) 000-0000" required value={form.phone} onChange={set('phone')} />
        </div>
        <div className="field">
          <label htmlFor="f-email">Email</label>
          <input type="email" id="f-email" placeholder="you@email.com" required value={form.email} onChange={set('email')} />
        </div>
        <div className="field field-wide">
          <label htmlFor="f-office">Which Office Are You Closest To?</label>
          <select id="f-office" required value={form.office} onChange={set('office')}>
            <option value="" disabled>Select your closest office</option>
            {officeOptions.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="f-address">Property Address</label>
          <input type="text" id="f-address" placeholder="Street address" value={form.propertyAddress} onChange={set('propertyAddress')} />
        </div>
        <div className="field">
          <label htmlFor="f-city">City</label>
          <input type="text" id="f-city" placeholder="City" value={form.city} onChange={set('city')} />
        </div>
        <div className="field field-wide">
          <label>How Did You Hear About Us?</label>
          <div className="radio-row">
            {hearOptions.map((o) => (
              <label className="radio-pill" key={o}>
                <input
                  type="radio"
                  name="heard"
                  value={o}
                  checked={form.source === o}
                  onChange={set('source')}
                />
                <span>{o}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="field field-wide">
          <label htmlFor="f-message">Message</label>
          <textarea id="f-message" rows="4" placeholder="Tell us about your roof..." value={form.message} onChange={set('message')} />
        </div>
      </div>

      <div className="form-foot">
        <button type="submit" className="btn btn-gold btn-lg magnetic" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Submit'}
        </button>
        <p className="form-note">
          Free, no-obligation inspection · We'll get back to you as soon as possible · Or call <a href={business.phoneHref}>{business.phone}</a>
        </p>
      </div>

      {error && <p className="form-error" role="alert">{error}</p>}

      <div className={`form-success${status === 'success' ? ' show' : ''}`} role="status">
        <span className="success-check" aria-hidden="true">✓</span>
        <p><strong>Thank you!</strong> Your inspection request has been received. A member of the Priority Roofing Dallas team will reach out shortly.</p>
      </div>
    </Reveal>
  );
}
