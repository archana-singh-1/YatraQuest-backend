import express from 'express';
import State from '../controllers/state.js';  
import getTours from '../controllers/getState.js';  // ✅ Correct name here

const router = express.Router();

router.post("/addState", State);
router.get("/getState", getTours);  

export default router;
