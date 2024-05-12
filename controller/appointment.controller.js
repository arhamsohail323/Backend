const User = require('../models/user.model');

exports.createAppointment = async (req, res) => {
    try {
        const {
            name,
            email,
            contactNumber,
            qualification,
            address,
            meetingTimeDate,
            comment,
            consultantName
        } = req.body;


        const newUser = new User({
            name,
            email,
            contactNumber,
            qualification,
            address,
            meetingTimeDate,
            comment,
            consultantName
        });

        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



exports.getAppointmentById = async (req, res) => {
    try {
        const userId = req.params.id;


        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getAllAppointment = async (req, res) => {
    try {

        const data = await User.find();

        if (!data) {
            return res.status(404).json({ message: 'No data found' });
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
