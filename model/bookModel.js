import mongoose from 'mongoose'
const bookSchema=new mongoose.Schema({
    name:{
        type:"String",
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    adults:{
        type:Number,
        required:true
    },
    childrens:{
        type:Number,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    arrival:{
        type:String,
        required:true
    },
    departure:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})
const bookModel = mongoose.model("bookForm", bookSchema);
export default bookModel;






