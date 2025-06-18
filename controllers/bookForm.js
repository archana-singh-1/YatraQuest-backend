import bookModel from "../model/bookModel.js";

export const bookForm = async (req, res) => {
  try {
    const { name, email, phone, adults, childrens, country, arrival, departure, message, tourState, tourImage, tourTitle, tourPlaces, tourRoute } = req.body;

    // Validate fields
    if (!name || !email || !phone || !adults || !country || !arrival || !departure || !tourState || !tourImage || !tourTitle || !tourPlaces || tourRoute) {
      return res.status(400).json({ success: false, message: "Please fill all required fields" });
    }

    // Create booking object
    const newBooking = new bookModel({
      name,
      email,
      phone,
      adults,
      childrens,
      country,
      arrival,
      departure,
      message,
      tourTitle,
      tourRoute,
      tourState,
      tourImage,
      tourPlaces
    });
    // Save to database
    await newBooking.save();

    res.status(201).json({
      success: true,
      message: "Booking submitted successfully",
      data: newBooking
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};
