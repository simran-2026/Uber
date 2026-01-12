const rideService = require('../services/ride.service');
const {validationResult} = require('express-validator');
const mapsService = require('../services/maps.services');
const {sendMessageToSocketId}= require('../socket');
const rideModel = require('../models/ride.model');

module.exports.createRide = async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {userId,pickup,destination,vehicleType} = req.body;
    try{
        const ride = await rideService.createRide({user:req.user._id  ,pickup,destination,vehicleType});
         res.status(201).json({ride});
     const pickupCoords = await mapsService.getCoordinatesFromAddress(pickup.address);
     console.log('Pickup Coordinates:', pickupCoords);

    const captainsInRadius = await mapsService.getCaptainInTheRadius(
        pickupCoords.ltd,
        pickupCoords.lng,
        2
 );
     ride.otp = ""
     const rideWithUser = await rideModel.findOne({_id:ride._id}).populate('user');
    captainsInRadius.map(captain=>{
        sendMessageToSocketId(captain.socketId,{
            event:'new-ride',
            data:rideWithUser
        })

    })

    }catch(err){
        return  res.status(500).json({error: err.message});
    }   

}


module.exports.getFare = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }   
    const { pickup, destination } = req.query;
    try {
        const fare = await rideService.getfare(pickup, destination);
        return res.status(200).json({ fare });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }   
};


module.exports.confirmRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }   
    const { rideId } = req.body;

    try {   
        const ride = await rideService.confirmRide({rideId, captain: req.captain});
       
        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-confirmed',
            data: ride
        });
       
        return res.status(200).json({ ride });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

module.exports.startRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }   
    const { rideId, otp } = req.query;

    try {   
        const ride =await rideService.startRide({rideId, otp, captain: req.captain});
        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-started',
            data: ride
        }); 

        return res.status(200).json({ ride });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};


module.exports.endride = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { rideId } = req.query;

    try {
        const ride = await rideService.endRide({ rideId, captain: req.captain });
       
        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-ended',
            data: ride
        });

          

        return res.status(200).json({ ride });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }   
}