// import mongoose from 'mongoose';
// const tourSchema = new mongoose.Schema({
//   state: String,
//   title: String,
//   description: String,
//   destination: String,
//   city: String,
//   price: Number,
//   image: String
// });
// const tourModel=mongoose.model('Tour', tourSchema);
// export default  tourModel;






import mongoose from 'mongoose';

const stateTourSchema = new mongoose.Schema({
  state: {
    type: String,
    required: true
  },
  places: [
    {
      title: { type: String, required: true },
      description: { type: String },
      destination: { type: String },
      city: { type: String },
      price: { type: Number },
      image: { type: String }
    }
  ]
});
const StateTour = mongoose.model('StateTour', stateTourSchema);
export default StateTour;
