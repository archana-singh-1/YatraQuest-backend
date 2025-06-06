import tourModel from '../model/stateModel.js';

const getTours=async(req,res)=>{
    try{
        const tours=await tourModel.find({});
        if(tours.length===0){
            return res.status(404).json({message:"No tours found"});
        }
        res.status(200).json(tours);
    }
    catch(error){
        console.error("Error fetching tours",error)
    }
    res.status(500).json({message:"Internal server error"});
}
export default getTours;
