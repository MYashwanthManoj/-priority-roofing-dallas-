import Reveal from '../components/Reveal';
import PageHero from '../components/PageHero';
import SectionHead from '../components/SectionHead';
import CTABand from '../components/CTABand';
import InspectionForm from '../components/InspectionForm';
import FAQ from '../components/FAQ';
import { usePageMeta } from '../hooks/usePageMeta';
import { business } from '../data/content';

export default function Contact() {
  usePageMeta(
    'Contact Priority Roofing Dallas — Free Roof Inspection | 469-615-8193',
    'Contact Priority Roofing Dallas at 1420 W. Mockingbird Ln. Suite 540, Dallas, TX 75247. Call 469-615-8193 or schedule your free roof inspection online — Mon–Fri 9AM–5PM, 24/7 emergency support.'
  );

  return (
    <>
      <PageHero
        eyebrow="CONTACT · FREE ROOF INSPECTION"
        title="Let us look "
        highlight="at your roof."
        sub="Schedule a free roofer inspection with Priority Roofing Dallas. Fast, free inspections and detailed estimates — no obligation, no money upfront."
        image="/assets/img/hero-house.webp"
        alt="Dallas home with a new Priority Roofing shingle roof"
        crumb="Contact"
      />

      <section className="inspection section" id="inspection">
        <div className="container">
          <div className="inspection-head">
            <SectionHead headClass="inspection-head" tag="FREE ROOF INSPECTION" title="Schedule your " highlight="free inspection." sub="Fill out the form and a member of the Priority Roofing Dallas team will reach out shortly." />
          </div>
          <InspectionForm />
        </div>
      </section>

      <section className="section-dark section">
        <div className="container">
          <div className="contact-grid">
            <Reveal as="div" className="contact-card">
              <h3>Dallas Office</h3>
              <p>{business.address}</p>
              <p><a href={business.phoneHref}>{business.phone}</a></p>
              <p><a href={business.emailHref}>{business.email}</a></p>
            </Reveal>
            <Reveal as="div" className="contact-card">
              <h3>Hours of Operation</h3>
              <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
              <p>Saturday &amp; Sunday: Closed</p>
              <p className="footer-24"><span aria-hidden="true">●</span> 24/7 emergency support — call <a href={business.phoneHref}>{business.phone}</a></p>
            </Reveal>
            <Reveal as="div" className="contact-card">
              <h3>Service Areas</h3>
              <p>Frisco · Plano · Irving · Garland · Mesquite · Highland Park · Farmers Branch · Richardson · McKinney · Duncanville</p>
              <p>Not sure if we serve your area? <a href={business.phoneHref}>Give us a call.</a></p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead headClass="warranties-head" tag="FAQ" title="Questions? " highlight="Answers." />
          <FAQ />
        </div>
      </section>

      <CTABand image="/assets/img/proj-1.webp" />
    </>
  );
}
