import { useEffect, useState } from 'react';
import PageHero from '../components/PageHero';
import SectionHead from '../components/SectionHead';
import CTABand from '../components/CTABand';
import Reveal from '../components/Reveal';
import USMap from '../components/USMap';
import AreaMap from '../components/AreaMap';
import { usePageMeta } from '../hooks/usePageMeta';

export default function Locations() {
  usePageMeta(
    'Priority Roofing Locations — 30+ Offices Across the US | Find Us Near You',
    'Find a Priority Roofing office near you — Dallas, Fort Worth, Austin, Houston, Denver, Nashville and 30+ local offices nationwide. Connect with the office nearest you. Call 469-615-8193.'
  );
  const [offices, setOffices] = useState([]);

  useEffect(() => {
    fetch('/api/offices')
      .then((r) => r.json())
      .then((d) => setOffices(d.offices || []))
      .catch((err) => console.warn('Could not fetch offices:', err.message));
  }, []);

  return (
    <>
      <PageHero
        eyebrow="COMPANY LOCATIONS"
        title="Find us "
        highlight="near you."
        sub="Explore Priority Roofing's locations across the US and connect with the office nearest to you — 30+ local offices nationwide."
        image="/assets/img/hero-house2.webp"
        alt="Priority Roofing residential project"
        crumb="Locations"
      />

      <section className="locations section-dark" id="locations">
        <div className="container">
          <SectionHead headClass="locations-head" tag="COMPANY LOCATIONS" title="30+ offices " highlight="nationwide." sub="Tap a marker on the map to see the office address, phone and email — sourced directly from priorityroofs.com." />
          <USMap />

          <div className="office-list">
            {offices.map((o) => (
              <Reveal as="article" className="office-card" key={o.city}>
                <h3>{o.city}{o.flagship ? ' · Dallas HQ' : ''}</h3>
                {o.region && <p className="office-region">{o.region}</p>}
                {o.address && <p>{o.address}</p>}
                {o.phone && <p><a href={`tel:+1${o.phone.replace(/[^0-9]/g, '')}`}>{o.phone}</a></p>}
                {o.email && <p><a href={`mailto:${o.email}`}>{o.email}</a></p>}
                {!o.address && !o.phone && <p className="office-note">Contact the office nearest you for details.</p>}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="areas section" id="areas">
        <div className="container">
          <div className="areas-head">
            <SectionHead headClass="areas-head" tag="SERVICE AREA" title="Proudly serving " highlight="Greater Dallas." sub="Priority Roofing has a strong local presence with an office at 1420 W. Mockingbird Ln. Suite 540, Dallas, TX 75247. Our team works throughout these communities — if you're unsure whether we serve your area, just give us a call." />
          </div>
          <AreaMap />
        </div>
      </section>

      <CTABand image="/assets/img/hero-house.webp" />
    </>
  );
}
