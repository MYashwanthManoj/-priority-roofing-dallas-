import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useGlobalReveal } from './hooks/useGlobalReveal';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Preloader from './components/Preloader';
import MobileCTA from './components/MobileCTA';
import Home from './pages/Home';
import Residential from './pages/Residential';
import Commercial from './pages/Commercial';
import Designer from './pages/Designer';
import StormDamage from './pages/StormDamage';
import Materials from './pages/Materials';
import Projects from './pages/Projects';
import About from './pages/About';
import Locations from './pages/Locations';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Deep link to a section (e.g. /contact#inspection) — jump straight to it
      const el = document.querySelector(hash);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 70; // clear sticky nav
        window.scrollTo({ top: Math.max(y, 0), behavior: 'instant' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);
  useGlobalReveal(pathname);
  return null;
}

function LocalBusinessSchema() {
  useEffect(() => {
    // Guard against duplicate injection on re-renders
    if (document.getElementById('ld-localbusiness')) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'ld-localbusiness';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'RoofingContractor',
      name: 'Priority Roofing — Dallas',
      description: 'Residential, commercial and designer roof repair, replacement and installation in Dallas, Texas. Free inspections, storm damage restoration and insurance claim assistance.',
      url: 'https://priorityroofs.com/location/dallas/',
      telephone: '+1-469-615-8193',
      email: 'office@priorityroofs.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1420 W. Mockingbird Ln. Suite 540',
        addressLocality: 'Dallas',
        addressRegion: 'TX',
        postalCode: '75247',
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 32.8137, longitude: -96.833 },
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      }],
      areaServed: ['Dallas', 'Frisco', 'Plano', 'Irving', 'Garland', 'Mesquite', 'Highland Park', 'Farmers Branch', 'Richardson', 'McKinney', 'Duncanville'],
      sameAs: [
        'https://www.facebook.com/PriorityContractingandRoofing/',
        'https://www.instagram.com/priority_roofs/',
        'https://www.instagram.com/prioritydesignerroofs/',
      ],
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '746' },
    });
    document.head.appendChild(script);
  }, []);
  return null;
}

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <LocalBusinessSchema />
      <ScrollToTop />
      <Cursor />
      <Preloader />
      <div className="scroll-progress" aria-hidden="true"><i /></div>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/designer-roofing" element={<Designer />} />
          <Route path="/storm-damage" element={<StormDamage />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <MobileCTA />
    </BrowserRouter>
  );
}
