import mongoose from 'mongoose';

const officeSchema = new mongoose.Schema(
  {
    city: { type: String, required: true, trim: true },
    region: { type: String, trim: true, default: '' },
    address: { type: String, trim: true, default: '' },
    email: { type: String, trim: true, default: '' },
    phone: { type: String, trim: true, default: '' },
    x: { type: Number, default: 0 },
    y: { type: Number, default: 0 },
    flagship: { type: Boolean, default: false },
    nationwide: { type: Boolean, default: false },
  },
  { timestamps: true }
);

officeSchema.index({ city: 1, region: 1 }, { unique: true });

export default mongoose.model('Office', officeSchema);
