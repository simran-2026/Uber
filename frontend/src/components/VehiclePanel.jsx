import React from 'react';

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => props.setVehiclePanel(false)}
        className="p-3 w-[93%] absolute text-center top-0"
      >
        <i className="text-xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5">Choose Your Ride</h3>

      {/* CAR */}
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.selectVehicle('car');
        }}
        className="flex w-full border-2 active:border-black rounded-xl p-3 mb-2 justify-between"
      >
        <img
          className="h-12"
          src="https://tse3.mm.bing.net/th/id/OIP.Y_gX5xiVCzVgpmDuQ1h6ogHaEK?pid=Api&h=220&P=0"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            RideGo <i className="ri-user-fill"></i>4
          </h4>
          <p className="text-sm">Affordable, compact rides</p>
        </div>
        <h2 className="text-2xl font-semibold">₹{props.fare?.car || 0}</h2>
      </div>

      {/* AUTO */}
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.selectVehicle('auto');
        }}
        className="flex w-full border-2 active:border-black rounded-xl p-3 mb-2 justify-between"
      >
        <img
          className="h-16"
          src="https://tse4.mm.bing.net/th/id/OIP.gERohywpalGF3NjolmHt5wHaE7?pid=Api&h=220&P=0"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            Auto <i className="ri-user-fill"></i>3
          </h4>
          <p className="text-sm">Affordable rides</p>
        </div>
        <h2 className="text-2xl font-semibold">₹{props.fare?.auto || 0}</h2>
      </div>

      {/* MOTORCYCLE */}
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.selectVehicle('motorcycle');
        }}
        className="flex w-full border-2 active:border-black rounded-xl p-3 mb-2 justify-between"
      >
        <img
          className="h-16"
          src="https://png.pngtree.com/png-clipart/20211102/original/pngtree-bike-vector-png-image_6914691.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            Moto <i className="ri-user-fill"></i>1
          </h4>
          <p className="text-sm">Fast & affordable</p>
        </div>
        <h2 className="text-2xl font-semibold">
          ₹{props.fare?.motorcycle || 0}
        </h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
