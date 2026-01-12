const axios = require('axios');
const captainModel = require('../models/captain.model');
module.exports.getAddressCoordinates = async (address) => {
    try {
        const apiKey = process.env.GOOGLE_MAPS_API_KEY; // Ensure you have set this in your environment variables
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

        const response = await axios.get(url);

        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                latitude: location.lat,
                longitude: location.lng
            };
        } else {
            throw new Error(`Geocoding API error: ${response.data.status}`);
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error.message);
        throw error;
    }
};

module.exports.getDistanceAndTime = async (origin, destination) => {
    if(!origin || !destination){
        throw new Error('Origin and destination are required');
    }   

    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

   
    try{
        const response = await axios.get(url);
        if(response.data.status === 'OK'){
             if(response.data.rows[0].elements[0].status === 'ZERO_RESULTS'){
                throw new Error('No route could be found between the origin and destination');
             }
            return response.data.rows[0].elements[0];  
    }else {
            throw new Error(`Distance Matrix API error: ${response.data.status}`);
        } 
    }catch(err){
        console.error('Error fetching distance and time:', err.message);
        throw err;    
    }
}



module.exports.getSuggestions = async (input) => {
    if(!input){
        throw new Error('Query is required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;    


    try{
         const response = await axios.get(url);
         if(response.data.status === 'OK'){
            return response.data.predictions;
         }else{
            throw new Error(`Places API error: ${response.data.status}`);
         }
    }catch(err){
        console.error('Error fetching suggestions:', err.message);
        throw err;
    }
}

module.exports.getCaptainInTheRadius= async (ltd, lng,radius) => {


     const captains = await captainModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [ [ lng, ltd ], radius / 6371 ]
            }
        },
      
    });
    return captains;
}