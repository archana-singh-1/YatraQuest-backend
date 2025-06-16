import mongoose from 'mongoose';
const contactScheema= new mongoose.Scheema({
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
const contactModel = mongoose.model("Contct", contactScheema);
export default contactModel;