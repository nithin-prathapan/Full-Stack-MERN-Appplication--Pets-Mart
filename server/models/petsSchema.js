import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  review: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const petsSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  size: String,
  weight: String,
  lifespan: String,
  temperment: String,
  coat: String,
  purpose: String,
  image: String,
  color: String,
  category: String,
  review: [reviewSchema],
});

const Pets = new mongoose.model("Pet", petsSchema);
export default Pets;
