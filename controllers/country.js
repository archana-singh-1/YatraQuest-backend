import CountryTour from "../model/countryModel.js";
const addCountry = async (req, res) => {
  try {
    // const tours = req.body;
     const { country } = req.body;
    const existingCountry = await CountryTour.find({country:country});
    if (existingCountry.length > 0) {
      return res.status(400).json({ message: "Country already exists"});
    }
    const newTour = new CountryTour(tours);
    const savedTours = await newTour.save();

    res.status(201).json({ message: "State tours added successfully", tours: savedTours });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};
export default addCountry;
