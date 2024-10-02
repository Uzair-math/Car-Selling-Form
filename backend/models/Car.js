// models/Car.js
const mongoose = require('mongoose');

// Define a schema and model for Car
const carSchema = new mongoose.Schema({
  carModel: { type: String, required: true },
  price: { type: Number, required: true },
  phoneNumber: { type: String, required: true },
  maxPictures: { type: Number, required: true },
  pictures: { type: [String], required: true }, // Store picture URLs
});

module.exports = mongoose.model('Car', carSchema);
 
