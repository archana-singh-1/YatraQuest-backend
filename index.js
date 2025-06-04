import exprss from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'

const app=exprss();
app.use(cors())
dotenv.config()

const PORT=process.env.PORT
const MongoDbUrl=process.env.MongoDB

mongoose.connect(MongoDbUrl,{
    serverSelectionTimeoutMS: 5000
})
.then(()=>console.log("Mongodb connect"))
.catch(err=>console.log(err,"err"))

app.get("/",function(req,resp){
    resp.send("Home")
})

app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`)


})