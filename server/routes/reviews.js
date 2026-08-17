import { Router } from 'express';
import Review from '../models/Review.js';
import { reviews as seedReviews, reviewSummary } from '../data/reviews.js';

const router = Router();

// GET /api/reviews — customer reviews (falls back to seed data if DB is empty)
router.get('/', async (_req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: 1 });
    return res.json({ reviews: reviews.length ? reviews : seedReviews, summary: reviewSummary });
  } catch (err) {
    console.error('Review fetch error:', err.message);
    return res.json({ reviews: seedReviews, summary: reviewSummary });
  }
});

export default router;
