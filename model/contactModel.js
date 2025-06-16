import mongoose from 'mongoose';
const contactSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})
const contactModel = mongoose.model("Contct", contactSchema);
export default contactModel;