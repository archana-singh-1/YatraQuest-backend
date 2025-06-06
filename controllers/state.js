// import tourModel from '../model/stateModel';
// const addTour = async (req, res) => {
//   try {
//     const { state, title, description, destination, city, price, image } = req.body;
//     const existingTour=await tourModel.findOne(destination)
//     if(existingTour){
//         return res.status(400).json({message:'Tour already exists for this destination'})
//     }
//     const newTour = new Tour({
//       state,
//       title,
//       description,
//       destination,
//       city,
//       price,
//       image
//     });
//     const savedTour = await new tourModel.save();

//     res.status(201).json({ message: 'Tour added successfully', tour: savedTour });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };
// export default addTour;




// import tourModel from '../model/stateModel.js'; // Add `.js` if using ES Modules

// const addTour = async (req, res) => {
//   try {
//     const { state, title, description, destination, city, price, image } = req.body;

//     // Correct: Find existing tour by destination
//     const existingTour = await tourModel.findOne({title:title});

//     if (existingTour) {
//       return res.status(400).json({ message: 'Tour already exists for this destination' });
//     }
//     const newTour = new tourModel({
//       state,
//       title,
//       description,
//       destination,
//       city,
//       price,
//       image
//     });

//     const savedTour = await newTour.save();

//     res.status(201).json({ message: 'Tour added successfully', tour: savedTour });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };
// export default addTour;





import tourModel from '../model/stateModel.js';

const addTours = async (req, res) => {
  try {
    const tours = req.body; // Expecting an array of tour objects

    if (!Array.isArray(tours) || tours.length === 0) {
      return res.status(400).json({ message: "Please provide an array of tours" });
    }

    // Optional: prevent duplicate titles
    const titles = tours.map(t => t.title);
    const existingTours = await tourModel.find({ title: { $in: titles } });

    if (existingTours.length > 0) {
      return res.status(400).json({
        message: "Some tours already exist",
        duplicates: existingTours.map(t => t.title)
      });
    }

    const savedTours = await tourModel.insertMany(tours);
    res.status(201).json({ message: "Tours added successfully", tours: savedTours });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export default addTours;
