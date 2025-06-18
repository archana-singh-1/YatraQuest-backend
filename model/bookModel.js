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
    children:{
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
    departureDate:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    tourTitle: { 
        type: String, 
        required: true 
    },
    tourImage: { 
        type: String, 
        required: true 
    },
    tourRoute: { 
        type: String, 
        required: true 
    
    },
    tourState: { 
        type: String, 
        required: true 
    },
    tourPlaces: {
    type: [
    {
    tourTitle: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
      destination: { 
        type: String, 
        required: true 
    }
    }
  ],
  required: true
}

})
const bookModel = mongoose.model("bookForm", bookSchema);
export default bookModel;






