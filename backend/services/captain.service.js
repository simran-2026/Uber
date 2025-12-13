const captainModel = require('../models/captain.model');



module.exports.createCaptain = async ({
    firstname, lastname, email, password, color, plate, capacity, vehicleType, location
}) => {
    if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType || !location) {
        throw new Error('Missing required fields');
    }

    const captain = await captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        },
        location: {
            lat: location.lat,
            lng: location.lng
        }
    });

    return captain;
}