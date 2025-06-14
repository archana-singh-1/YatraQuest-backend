// {
//   "home": {
//     "name": "Priya Shukla",
//     "title": "Full Stack Developer | JavaScript Developer | Web Developer",
//     "description": "I'm passionate about learning new technologies...",
//     "profileImage": "Priya_Photo.jpeg",
//     "resumeLink": "/public/Priya Resume.pdf",
//     "socialLinks": {
//       "github": "https://github.com/priyashukla622",
//       "linkedin": "https://www.linkedin.com/in/priya-shukla-b0a943280/",
//       "twitter": "https://x.com/?logout=1749146613934"
//     }
//   },
//   "about": {
//     "description1": "I'm a passionate Full Stack Developer...",
//     "description2": "I enjoy turning ideas into real projects...",
//     "image": "Priya_Photo.jpeg"
//   },
//   "education": [
//     {
//       "degree": "Bachelor of Computer Applications (BCA)",
//       "duration": "2024 - 2027",
//       "institution": "Maharishi University, Lucknow",
//       "description": "Currently pursuing graduation..."
//     }
//     // aur bhi education array ke item yahan daal sakti ho
//   ],
//   "skills": {
//     "technical": ["React", "JavaScript", "Node.js"],
//     "categories": [
//       {
//         "icon": "💻",
//         "title": "Frontend",
//         "skills": "React, HTML5, CSS3, JavaScript, Tailwind CSS"
//       }
//     ]
//   },
//   "projects": [
//     {
//       "title": "Trivia Game",
//       "description": "Created a two-player trivia game...",
//       "technologies": ["HTML", "CSS", "JavaScript"],
//       "github": "https://github.com/priyashukla622/Trivia_Project",
//       "live": "https://trivia-project-zeta.vercel.app/"
//     }
//     // aur bhi projects array ke item yahan daal sakti ho
//   ]
// }



// models/Portfolio.js



// import mongoose from "mongoose";

// const portfolioSchema = new mongoose.Schema({
//   home: {
//     name: String,
//     title: String,
//     description: String,
//     profileImage: String,
//     resumeLink: String,
//     socialLinks: {
//       github: String,
//       linkedin: String,
//       twitter: String,
//     },
//   },

//   about: {
//     description1: String,
//     description2: String,
//     image: String,
//   },

//   education: [
//     {
//       degree: String,
//       duration: String,
//       institution: String,
//       description: String,
//     },
//   ],

//   skills: {
//     technical: [String],
//     categories: [
//       {
//         icon: String,
//         title: String,
//         skills: String,
//       },
//     ],
//   },
//   projects: [
//     {
//       title: String,
//       description: String,
//       technologies: [String],
//       github: String,
//       live: String,
//     },
//   ],
// });
// export default mongoose.model("Portfolio", portfolioSchema);








// // server.js
// import express from "express";
// import mongoose from "mongoose";
// import portfolioRoutes from "./routes/portfolioRoutes.js";

// const app = express();
// app.use(express.json());

// mongoose.connect("mongodb://localhost:27017/portfolioDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("MongoDB connected"))
// .catch((err) => console.log("Error:", err));

// app.use("/api/portfolio", portfolioRoutes);

// app.listen(5000, () => {
//   console.log("Server is running on port 5000");
// });







// // routes/portfolioRoutes.js
// import express from 'express';
// import Portfolio from '../models/Portfolio.js';

// const router = express.Router();

// // POST route to add portfolio data
// router.post('/add-portfolio', async (req, res) => {
//   try {
//     const newData = new Portfolio(req.body);  // Get data from body
//     await newData.save();                     // Save to MongoDB
//     res.status(201).json({ message: 'Portfolio data saved successfully' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// export default router;
