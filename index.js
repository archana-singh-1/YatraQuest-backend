import exprss from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'
import stateRoute from './routes/stateRoute.js'
import authRoutes from "./routes/auth.js";
const app=exprss();

app.use(cors())
app.use(exprss.json())
dotenv.config()

const PORT=process.env.PORT
const MongoDbUrl=process.env.MongoDB

mongoose.connect(MongoDbUrl,{
    serverSelectionTimeoutMS: 5000
})
.then(()=>console.log("Mongodb connect"))
.catch((err)=>console.log(err,"err"))

app.get("/",function(req,resp){
    resp.send("Home")
})
app.use('/api',stateRoute)
app.use("/api/auth", authRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`)
})