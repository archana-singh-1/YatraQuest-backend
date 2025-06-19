import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/userSchema.js";

const router = express.Router();


router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "User already exists" });

    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// router.post("/forgot-password", async (req, res) => {
//   try {
//     const { email } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ msg: "User not found" });
//     res.json({ msg: "Reset link (dummy) sent to email" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

import nodemailer from 'nodemailer';

router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "User not found" });

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'archana21@gmail.com',
        pass: 'dhiraj@12', // Use App Password if 2FA enabled
      },
    });

    // Send email
    await transporter.sendMail({
      from: 'archana21@gmail.com',
      to: email,
      subject: 'Password Reset Request',
      text: `Hi ${user.name || 'user'},\n\nClick the link below to reset your password:\n\nhttp://your-frontend-url/reset-password?email=${email}\n\nThanks!`,
    });

    res.json({ msg: "Reset link sent to your email!" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Email sending failed. Please try again." });
  }

  router.post("/reset-password", async (req, res) => {
    try {
      const { email, newPassword } = req.body;
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ msg: "User not found" });
  
      user.password = newPassword; // Make sure you hash it in production!
      await user.save();
  
      res.json({ msg: "Password reset successfully!" });
    } catch (err) {
      res.status(500).json({ error: "Failed to reset password." });
    }
  });
  
});



// routes/verifyUser.js
router.post('/verify-user', async (req, res) => {
  try {
    const { email } = req.body;

    // 🔐 Check if email is provided
    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }

    // 🔍 Check if user exists in database
    const user = await User.findOne({ email });

    if (user) {
      return res.json({ success: true, message: "User found" });
    } else {
      return res.json({ success: false, message: "User not found" });
    }

  } catch (error) {
    console.error("Error verifying user:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});
export default router;
