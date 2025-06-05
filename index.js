import exprss from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'
import stateRoute from './routes/stateRoute.js';

const app=exprss();
app.use(cors())
dotenv.config()

const PORT=process.env.PORT
const MongoDbUrl=process.env.MONGODB

mongoose.connect(MongoDbUrl,{
    serverSelectionTimeoutMS: 5000
})
.then(()=>console.log("Mongodb connect"))
.catch(err=>console.log(err,"err"))

app.get("/",function(req,resp){
    resp.send("Home")
})
app.use('/api',stateRoute)
app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`)
})