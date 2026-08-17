import 'dotenv/config';
import './dns.js'; // public DNS resolvers for Atlas SRV lookups
import mongoose from 'mongoose';
import Office from './models/Office.js';
import Review from './models/Review.js';
import { offices } from './data/offices.js';
import { reviews } from './data/reviews.js';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/priority-roofing';

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 5000 });
    console.log(`[seed] connected to ${MONGODB_URI}`);

    // Upsert offices
    const officeOps = offices.map((o) => ({
      updateOne: {
        filter: { city: o.city, region: o.region },
        update: { $set: o },
        upsert: true,
      },
    }));
    const officeRes = await Office.bulkWrite(officeOps);
    console.log(`[seed] offices: ${officeRes.upsertedCount} inserted, ${officeRes.modifiedCount} updated`);

    // Upsert reviews by name
    const reviewOps = reviews.map((r) => ({
      updateOne: {
        filter: { name: r.name },
        update: { $set: r },
        upsert: true,
      },
    }));
    const reviewRes = await Review.bulkWrite(reviewOps);
    console.log(`[seed] reviews: ${reviewRes.upsertedCount} inserted, ${reviewRes.modifiedCount} updated`);

    console.log('[seed] done.');
  } catch (err) {
    console.error('[seed] failed:', err.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seed();
