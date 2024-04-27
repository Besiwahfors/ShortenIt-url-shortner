import mongoose from 'mongoose';

// const ticketSchema = new mongoose.Schema({
//   subject: { type: String, required: true },
//   description: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now },
//   status: { type: String, enum: ['open', 'closed'], default: 'open' }
// });

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: false },
  tickets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' }]
});

export const User = mongoose.model('User', userSchema);
// export const Ticket = mongoose.model('Ticket', ticketSchema);
