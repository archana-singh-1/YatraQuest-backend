import mongoose from 'mongoose';
const tourSchema = new mongoose.Schema({
  state: String,
  title: String,
  description: String,
  destination: String,
  city: String,
  price: Number,
  image: String
});
const tourModel=mongoose.model('Tour', tourSchema);
export default  tourModel;




