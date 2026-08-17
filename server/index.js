import 'dotenv/config';
import './dns.js'; // public DNS resolvers for Atlas SRV lookups
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

import leadsRouter from './routes/leads.js';
import officesRouter from './routes/offices.js';
import reviewsRouter from './routes/reviews.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/priority-roofing';

app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());

// Health check
app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
  });
});

// API routes
app.use('/api/leads', leadsRouter);
app.use('/api/offices', officesRouter);
app.use('/api/reviews', reviewsRouter);

// Serve the built client in production (npm run build + npm start)
const clientDist = path.join(__dirname, '..', 'client', 'dist');
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist));
  app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(path.join(clientDist, 'index.html'));
  });
}

// Connect to MongoDB (resilient — server still starts if DB is down;
// API routes fall back to seed data)
async function start() {
  try {
    await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 3000 });
    console.log(`[db] connected to ${MONGODB_URI}`);
  } catch (err) {
    console.warn(`[db] MongoDB not reachable (${err.message}). API will serve seed data.`);
  }

  app.listen(PORT, () => {
    console.log(`[api] Priority Roofing API running on http://localhost:${PORT}`);
  });
}

start();
