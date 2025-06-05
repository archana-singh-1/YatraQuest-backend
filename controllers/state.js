import Place from '../model/stateModel.js'; 

const State = async (req, res) => {
    try {
        const places = await Place.find();
        
        if (!places || places.length === 0) {
            return res.status(404).json({ message: "No places found" });
        }

        const data = places.map((item) => ({
            name: item.name
        }));

        res.status(200).json({ message: "Places found", places: data }); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default State;