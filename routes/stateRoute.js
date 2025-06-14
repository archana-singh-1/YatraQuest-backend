import express from 'express';
import State from '../controllers/state.js';  
import Country from '../controllers/country.js'
import getTours from '../controllers/getState.js'; 

const router = express.Router();

router.post("/addState", State);
router.post("/addCountry", Country)
router.get("/getState", getTours);  

export default router;
