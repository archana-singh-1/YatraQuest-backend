import mongoose from 'mongoose';
const countryTourSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true
  },
})
const CountryTour = mongoose.model('CountryTour', countryTourSchema);
export default CountryTour;