import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: String,
  email: { type: String },
  phone: { type: String },
  tourPlace: { type: String, required: true },
  guideRating: { type: Number, min: 1, max: 5 },
  overallRating: { type: Number, min: 1, max: 5 },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Review = mongoose.model('Review', reviewSchema);
export default Review;

