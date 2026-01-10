const express  = require('express');
const router = express.Router();
const {body} = require('express-validator');
const rideController = require('../controllers/ride.controller');
const authMiddleware = require('../middleware/auth.middleware');


router.post('/create',
    authMiddleware.authUser,
    // body('userId').isString().isLength({min:24,max:24}).withMessage('Invalid user ID'),
    body('pickup').isString().isLength({min:3}).withMessage('Invalid  pickup location'),
    body('destination').isString().isLength({min:3}).withMessage('Invalid destination'),
    body('vehicleType').isIn(['auto','car','motorcycle']).withMessage('Invalid vehicle type'),
    rideController.createRide
);





module.exports = router;