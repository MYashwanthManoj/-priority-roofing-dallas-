import { useEffect, useState } from 'react';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

const fallbackReviews = [
  {
    name: 'Samuel Dunmore', initial: 'S', rating: 5,
    text: 'Brandon is the best of the best. Very professional and courteous. He takes great pride in the work that he does. I would highly recommend him for the job!',
  },
  {
    name: 'Miguel Moran', initial: 'M', rating: 5,
    text: 'Great service! Tremendous support from Mr. Clark — with us from the beginning to end. Helped with insurance. Top notch hardworking staff put up roof in no time. Very pleased.',
  },
  {
    name: 'Jaiden Johnson', initial: 'J', rating: 5,
    text: 'Paul Blake provided exceptional service from beginning to end. He was knowledgeable, honest, and communicated well, making the entire process seamless. I highly recommend Paul!',
  },
  {
    name: 'James Boozer', initial: 'J', rating: 5,
    text: 'First, let me say that Boston Corral was my representative and go-to guy. This young man went above and beyond to get our roof approved by working with our insurance company... This company and the materials they use are top notch.',
  },
  {
    name: 'Angela Vaughn', initial: 'A', rating: 5,
    text: "These two contractors I was extremely happy to work with. They are there for the customer's needs, not just to make a dollar. Helped with the filing claim, spoke with the adjuster, came out when the adjuster came out.",
  },
  {
    name: 'Katrina Vercher', initial: 'K', rating: 5,
    text: 'Chad Vercher did my roof 6 years ago — he is friendly, courteous and knowledgeable. Contact him for your new roof!',
  },
];

export default function Reviews() {
  const [reviews, setReviews] = useState(fallbackReviews);
  const [summary, setSummary] = useState({ rating: 5.0, count: 746 });

  useEffect(() => {
    fetch('/api/reviews')
      .then((r) => r.json())
      .then((data) => {
        if (data.reviews && data.reviews.length) setReviews(data.reviews);
        if (data.summary) setSummary(data.summary);
      })
      .catch((err) => console.warn('Could not fetch reviews:', err.message));
  }, []);

  return (
    <section className="reviews section-dark" id="reviews">
      <div className="container">
        <div className="reviews-head">
          <div>
            <SectionHead headClass="" tag="10 — CUSTOMER REVIEWS" title="See what our " highlight="customers are saying." />
          </div>
          <div className="reviews-score reveal">
            <p className="score-num">{Number(summary.rating).toFixed(1)}</p>
            <div className="stars big" aria-hidden="true">★★★★★</div>
            <p className="score-count">{summary.count} Reviews · Posted on Google</p>
          </div>
        </div>

        <div className="reviews-track-wrap reveal">
          <div className="reviews-track">
            {reviews.map((r) => (
              <article className="review-card" key={r.name}>
                <div className="stars" aria-hidden="true">★★★★★</div>
                <p>"{r.text}"</p>
                <footer>
                  <span className="avatar" aria-hidden="true">{r.initial || r.name[0]}</span>
                  <div><strong>{r.name}</strong><span>Posted on Google</span></div>
                </footer>
              </article>
            ))}
          </div>
        </div>

        <div className="reviews-cta reveal">
          <a href="https://www.google.com/search?q=Priority+Roofing+Dallas+reviews" target="_blank" rel="noopener" className="btn btn-outline">
            Read More on Google <span className="arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
