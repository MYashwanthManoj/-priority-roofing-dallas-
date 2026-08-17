import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    office: { type: String, trim: true, default: '' },
    propertyAddress: { type: String, trim: true, default: '' },
    city: { type: String, trim: true, default: '' },
    source: { type: String, trim: true, default: '' },
    message: { type: String, trim: true, default: '' },
    status: { type: String, enum: ['new', 'contacted', 'scheduled', 'closed'], default: 'new' },
  },
  { timestamps: true }
);

export default mongoose.model('Lead', leadSchema);
