import React from 'react';

const WaitingForDriver = ({ ride, waitingForDriver }) => {
  if (!ride || !ride.captain) return null;

  return (
    <div>
      <div className="flex items-center justify-between">
        <img
          className="h-12"
          src="https://tse3.mm.bing.net/th/id/OIP.Y_gX5xiVCzVgpmDuQ1h6ogHaEK?pid=Api&h=220&P=0"
          alt=""
        />

        <div className="text-right">
          <h2 className="text-lg font-medium">
            {ride.captain.fullname.firstname}{' '}
            {ride.captain.fullname.lastname}
          </h2>
          <p className="text-xl font-semibold">
            {ride.captain.vehicle.plate}
          </p>
          <h4 className="text-sm text-gray-600">
            {ride.captain.vehicle.model}
          </h4>
          <h1 className="text-lg font-semibold mt-2">OTP: {ride.otp}</h1>
        </div>
      </div>

      <div className="mt-5">
        <p><strong>Pickup:</strong> {ride.pickup}</p>
        <p><strong>Destination:</strong> {ride.destination}</p>
        <p><strong>Fare:</strong> ₹{ride.fare?.[ride.vehicleType]}</p>
      </div>
    </div>
  );
};

export default WaitingForDriver;
