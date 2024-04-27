import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  shortCode: { type: String, required: true },
  longUrl: { type: String, required: true },
  clicks: { type: Number, default: 0 }
});

const Link = mongoose.model('Link', linkSchema);

const supportTicketSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['open', 'closed'],
    default: 'open'
  }
});

const SupportTicket = mongoose.model('SupportTicket', supportTicketSchema);

export { Link, SupportTicket, linkSchema };
