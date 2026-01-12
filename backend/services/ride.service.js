const rideModel = require('../models/ride.model');
const mapsService = require('../services/maps.services');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { sendMessageToSocketId } = require('../socket');



async function getfare(pickup,destination){
    if(!pickup || !destination){
        throw new Error('Pickup and destination are required');
    }
   const distanceTime = await  mapsService.getDistanceAndTime(pickup,destination);

   if (!distanceTime.distance || !distanceTime.duration) {
    throw new Error('Invalid response from Distance Matrix API');
}

   const baseFare={
    auto:30,
    car:50,
    motorcycle:20
   };
   const perKmRate={
   auto:10,
    car:15,
    motorcycle:8
   };
   const perMinRate={
    auto:2,
    car:3,
    motorcycle:1.5
   };



   const fare ={
    auto:Math.round(baseFare.auto + ((distanceTime.distance.value / 1000 )* perKmRate.auto) + ((distanceTime.duration.value / 60) * perMinRate.auto)),
    car: Math.round(baseFare.car + ((distanceTime.distance.value / 1000 )* perKmRate.car) + ((distanceTime.duration.value / 60 ) * perMinRate.car)),
    motorcycle:Math.round(baseFare.motorcycle + ((distanceTime.distance.value / 1000 )* perKmRate.motorcycle) + ((distanceTime.duration.value / 60 )* perMinRate.motorcycle)),
   }
  return fare;

}
 
module.exports.getfare = getfare;

function getOtp(num) {
    function generateOtp(num) {
        const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
        return otp;
    }
    return generateOtp(num);
}

module.exports.createRide= async ({user,pickup,destination,vehicleType}) =>{
    if(!user || !pickup || !destination || !vehicleType){
        throw new Error('All fields are required');
    }

    const fare = await getfare(pickup,destination);

    const ride = new rideModel({
        user,
        pickup,
        destination,
        otp: getOtp(6),
        fare:fare[vehicleType],
    });
    return ride;
     
}


module.exports.confirmRide = async ({rideId,captain}) => {
    if(!rideId){
        throw new Error('Ride ID is required');
    }

    await rideModel.findOneAndUpdate({
        _id: rideId
    },{
        status:'accepted',
        captain: captain._id
    })

    const ride = await rideModel.findOne({
        _id:rideId,


    }).populate('user').populate('captain').select('+otp');

    if(!ride){
        throw new Error('Ride not found');
    }

    return ride;
}



module.exports.startRide = async ({rideId, otp,captain}) => {
    if(!rideId || !otp){
        throw new Error('Ride ID and OTP are required');
    }

    const ride = await rideModel.findOne({
        _id: rideId,
    }).populate('user').populate('captain').select('+otp');

    if(!ride){
        throw new Error('Ride not found');
    }

   
    if(ride.status !== 'accepted'){
        throw new Error('Ride is not in accepted status');
    }

     if(ride.otp !== otp){
        throw new Error('Invalid OTP');
    }


    await rideModel.findOneAndUpdate({
        _id: rideId
    },{
        status:'ongoing',
    })


    sendMessageToSocketId(ride.user.socketId,{
        event:'ride-started',
        data:ride
    }); 

    return ride;
}

module.exports.endride = async ({rideId,captain}) => {
    if(!rideId){
        throw new Error('Ride ID is required');
    }
    const ride = await rideModel.findOne({
        _id: rideId,
        captain: captain._id
    }).populate('user').populate('captain').select('+otp');

    if(!ride){
        throw new Error('Ride not found');
    }

        if(ride.status !== 'ongoing'){
        throw new Error('Ride is not in ongoing status');
    }

    await rideModel.findOneAndUpdate({
        _id: rideId
    },{
        status:'completed',
    })

    return ride;
}