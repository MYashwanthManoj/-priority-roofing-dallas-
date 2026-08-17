import { Router } from 'express';
import Office from '../models/Office.js';
import { offices as seedOffices } from '../data/offices.js';

const router = Router();

// GET /api/offices — all office locations (falls back to seed data if DB is empty)
router.get('/', async (_req, res) => {
  try {
    const offices = await Office.find().sort({ flagship: -1, city: 1 });
    return res.json({ offices: offices.length ? offices : seedOffices });
  } catch (err) {
    console.error('Office fetch error:', err.message);
    return res.json({ offices: seedOffices });
  }
});

export default router;
