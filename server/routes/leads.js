import { Router } from 'express';
import Lead from '../models/Lead.js';

const router = Router();

// POST /api/leads — create an inspection lead from the free inspection form
router.post('/', async (req, res) => {
  try {
    const {
      firstName, lastName, phone, email,
      office, propertyAddress, city, source, message,
    } = req.body || {};

    // Basic server-side validation mirroring the client
    if (!firstName || !lastName || !phone || !email) {
      return res.status(400).json({ error: 'First name, last name, phone and email are required.' });
    }

    const lead = await Lead.create({
      firstName, lastName, phone, email,
      office, propertyAddress, city, source, message,
    });

    return res.status(201).json({ success: true, id: lead._id });
  } catch (err) {
    console.error('Lead create error:', err.message);
    return res.status(500).json({ error: 'Could not save your request. Please try again.' });
  }
});

// GET /api/leads — list leads (simple, for admin/debug)
router.get('/', async (_req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 }).limit(50);
    return res.json({ leads });
  } catch (err) {
    return res.status(500).json({ error: 'Could not fetch leads.' });
  }
});

export default router;
