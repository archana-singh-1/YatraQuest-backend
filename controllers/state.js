import tourModel from '../model/stateModel.js'; 

const addTours = async (req, res) => {
  try {
    const tours = req.body; 

    if (!Array.isArray(tours) || tours.length === 0) {
      return res.status(400).json({ message: "Please provide an array of state-wise tours" });
    }

    const states = tours.map(t => t.state);
    const existingStates = await tourModel.find({ state: { $in: states } });

    if (existingStates.length > 0) {
      return res.status(400).json({
        message: "Some states already exist",
        duplicates: existingStates.map(s => s.state)
      });
    }

    // Insert the full state-wise tour documents
    const savedTours = await tourModel.insertMany(tours);
    res.status(201).json({
      message: "State tours added successfully",
      tours: savedTours
    });

  } catch (error) {
    console.error("Error adding tours:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export default addTours;
