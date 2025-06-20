import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'
import stateRoute from './routes/stateRoute.js'
import authRoutes from "./routes/auth.js";
import reviewRoutes from './routes/reviewRoutes.js';
const app=express();

app.use(cors({
     origin: [
    // "https://yatra-quest-website-development.vercel.app",
    "https://yatra-quest-website.vercel.app/",
    "http://localhost:5173",
    "http://localhost:5175"
  ],
  credentials: true
}));
// app.use(cors({
//   origin: "https://yatra-quest-website-development.vercel.app", // your frontend URL
//   credentials: true
// }));

app.use(express.json());
// app.use(cors())
dotenv.config()

const PORT=process.env.PORT
const MongoDbUrl=process.env.MongoDB

mongoose.connect(MongoDbUrl)
.then(()=>console.log("Mongodb connect"))
.catch((err)=>console.log(err,"err"))



app.use("/api", stateRoute);
app.use("/api/auth", authRoutes);
app.use('/api/reviews', reviewRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`)
})





