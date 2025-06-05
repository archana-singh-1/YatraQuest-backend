import express from 'express';
import State from '../controllers/state.js';  // ✅ Correct

const router=express.Router();

router.post("/addState", State)

export default router;