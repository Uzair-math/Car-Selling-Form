const express = require('express');
const router = express.Router();
const { submitCar } = require('../controllers/carController');
const authMiddleware = require('../middlewares/authMiddleware');
const imageUpload = require('../middlewares/imageUpload');

router.post('/submit-car', authMiddleware, imageUpload.array('pictures', 5), submitCar);

module.exports = router;
