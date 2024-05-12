const mongoose = require('mongoose');

// Define the schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  qualification: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  meetingTimeDate: {
    type: Date,
    required: true
  },
  comment: {
    type: String
  },
  consultantName:{
    type:String,
    required:true
  }
});

// Create the model
const User = mongoose.model('User', userSchema);

module.exports = User;
