import Reveal from '../components/Reveal';
import PageHero from '../components/PageHero';
import SectionHead from '../components/SectionHead';
import CTABand from '../components/CTABand';
import { usePageMeta } from '../hooks/usePageMeta';
import { gallery } from '../data/content';

export default function Projects() {
  usePageMeta(
    'Project Gallery — Priority Roofing Dallas | Residential, Commercial & Designer',
    'Completed projects from Priority Roofing\u2019s official portfolio — residential, commercial and designer roofing across North Texas. See the quality and craftsmanship behind the work. Call 469-615-8193.'
  );

  return (
    <>
      <PageHero
        eyebrow="PROJECT GALLERY · PORTFOLIO"
        title="Recent work from "
        highlight="our crews."
        sub="Completed projects from Priority Roofing's official portfolio — residential, commercial and designer roofing across North Texas."
        image="/assets/img/proj-2.webp"
        alt="Priority Roofing residential roofing project"
        crumb="Projects"
      />

      <section className="gallery section" id="gallery">
        <div className="container">
          <SectionHead headClass="gallery-head" tag="PROJECT GALLERY" title="Selected " highlight="projects." sub="Each project shown is from Priority Roofing's official portfolio — with verified project, location and service details." />
        </div>

        <div className="gallery-scroll reveal" id="galleryScroll">
          {gallery.map((g) => (
            <figure className={`g-item${g.wide ? ' g-wide' : ''}`} key={g.image}>
              <img src={g.image} alt={g.alt} loading="lazy" />
              <figcaption>
                <span className="g-label">{g.label}</span>
                <strong>{g.title}</strong>
                <span className="g-loc">{g.loc}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="gallery-cta container reveal">
          <a href="https://www.instagram.com/priority_roofs/" target="_blank" rel="noopener" className="btn btn-outline">
            Explore the Full Gallery on Instagram <span className="arrow">↗</span>
          </a>
        </div>
      </section>

      <CTABand image="/assets/img/proj-crestline.jpeg" />
    </>
  );
}
