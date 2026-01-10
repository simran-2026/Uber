const rideModel = require('../models/ride.model');
const mapsService = require('../services/maps.services');




async function getfare(pickup,destination){
    if(!pickup || !destination){
        throw new Error('Pickup and destination are required');
    }
   const distanceTime = await  mapsService.getDistanceTime(pickup,destination);

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
    auto: baseFare.auto +(distanceTime.distance * perKmRate.auto) + (distanceTime.time * perMinRate.auto),
    car:baseFare.car +(distanceTime.distance * perKmRate.car) + (distanceTime.time * perMinRate.car),
    motorcycle:baseFare.motorcycle +(distanceTime.distance * perKmRate.motorcycle) + (distanceTime.time * perMinRate.motorcycle),
   }
  return fare;

}


module.exports.createRide= async ({userModel,pickup,destination,vehicleType}) =>{
    if(!user || !pickup || !destination || !vehicleType){
        throw new Error('All fields are required');
    }

    const fare = await getfare(pickup,destination);

    const ride = new rideModel({
        user: userModel._id,
        pickup,
        destination,
        fare:fare[vehicleType],
    });
    return ride;
     
}