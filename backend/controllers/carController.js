// controllers/carController.js
const Car = require('../models/Car');

// Controller for handling car submission
const submitCar = async (req, res) => {
  const { carModel, price, phoneNumber, maxPictures } = req.body;
  const pictures = req.files.map(file => file.path); // Get file paths

  try {
    const newCar = new Car({
      carModel,
      price,
      phoneNumber,
      maxPictures,
      pictures,
    });

    await newCar.save(); // Save car to the database
    res.status(200).json({ message: 'Car details submitted successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving car details', error: err.message });
  }
};

module.exports = {
  submitCar,
};
