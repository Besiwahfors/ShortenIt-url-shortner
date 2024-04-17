import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  shortCode: { type: String, required: true },
  longUrl: { type: String, required: true },
  clicks: { type: Number, default: 0 }
});

export default mongoose.model('Link', linkSchema);
