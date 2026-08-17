import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    initial: { type: String, trim: true, default: '' },
    rating: { type: Number, min: 1, max: 5, default: 5 },
    text: { type: String, required: true, trim: true },
    source: { type: String, trim: true, default: 'Google' },
  },
  { timestamps: true }
);

export default mongoose.model('Review', reviewSchema);
