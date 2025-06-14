import express from 'express';
import Review from '../model/reviewModel.js';

const router = express.Router();


router.post("/postreview", async (req, res) => {
    try {
      const review = new Review(req.body);
      await review.save();
      res.status(201).json({ message: "Review submitted!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error saving review" });
    }
  });
  

router.get('/getreview', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ date: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/allreview', async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1; 
      const limit = parseInt(req.query.limit) || 6; 
      const skip = (page - 1) * limit;
  
      const total = await Review.countDocuments(); 
      const reviews = await Review.find()
        .sort({ date: -1 })
        .skip(skip)
        .limit(limit);
  
      res.json({
        total,
        page,
        totalPages: Math.ceil(total / limit),
        reviews,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  


export default router;
