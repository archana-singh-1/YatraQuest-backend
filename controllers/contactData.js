import contactModel from "../model/contactModel.js";

export const contactForm = async (req, res) => {
    try {
        const { name, email, contact, message } = req.body;

        if (!name || !email || !contact || !message) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        const newContact = new contactModel({
            name,
            email,
            contact,
            message
        });
        await newContact.save();
        res.status(201).json({message: "Contact form submitted successfully",data: newContact});

    } catch (error) {
        res.status(500).json({message: "Server Error",error: error.message });
    }
};
