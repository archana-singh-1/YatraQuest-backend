import express from 'express';
import State from '../controllers/state.js';  
import getTours from '../controllers/getState.js'; 
import { contactForm } from '../controllers/contactData.js';
import { bookForm } from '../controllers/bookForm.js';

const router = express.Router();
router.post("/addState", State);
router.get("/getState", getTours);  
router.post("/contact",contactForm)
router.post("/book", bookForm)
export default router;
