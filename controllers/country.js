import CountryTour from "../model/countryModel.js";

const addCountry = async (req, res) => {
  try {
    const { country } = req.body;

    // Check if country already exists
    const existingCountry = await CountryTour.find({ country });

    if (existingCountry.length > 0) {
      return res.status(400).json({ message: "Country already exists" });
    }

    // ✅ Create and save new country
    const newCountry = new CountryTour({ country });
    const savedCountry = await newCountry.save();

    res.status(201).json({
      message: "Country added successfully",
      country: savedCountry
    });

  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message
    });
  }
};
export default addCountry;
