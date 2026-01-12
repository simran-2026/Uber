import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FinishRide = (props) => {
    const Navigate = useNavigate();

    console.log('props.ride:', props.ride); // Debugging props.ride structure

    const endRide = async () => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/rides/end-ride`,
                {
                    rideId: props.ride?._id || '', // Ensure rideId is valid
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );

            if (response.status === 200) {
                props.setFinishRidePanel(false);
                Navigate('/captain-home');
            }
        } catch (error) {
            console.error('Error ending ride:', error);
        }
    };

    return (
        <div>
            <div>
                <h5
                    className="p-3 w-[93%] absolute text-center top-0"
                    onClick={() => {
                        props.setFinishRidePanel(false);
                    }}
                >
                    <i className="text-xl text-gray-200 ri-arrow-down-wide-line"></i>
                </h5>

                <h3 className="text-2xl font-semibold">Finish This Ride</h3>

                <div className="flex items-center mt-4 bg-gray-50 p-3 rounded-lg bg-gray-200 border-4 border-yellow-400 justify-between">
                    <div className="flex items-center gap-3">
                        <img
                            className="h-12 w-12 rounded-full object-cover"
                            src="https://up.yimg.com/ib/th/id/OIP.XMa6K9nT4_GC-DOq_ReaigHaLH?pid=Api&rs=1&c=1&qlt=95&w=76&h=114"
                            alt="User"
                        />
                        <h4 className="text-lg font-medium">
                            {props.ride?.user?.fullname?.firstname || 'Unknown User'}
                        </h4>
                    </div>
                    <h5 className="text-lg font-semibold">3.5 Km</h5>
                </div>

                <div className="flex justify-between gap-2 flex-col items-center">
                    <div className="w-full mt-5">
                        <div className="flex items-center gap-5 p-3 border-b-2">
                            <i className="text-lg ri-map-pin-fill"></i>

                            <div>
                                <h3 className="text-lg font-medium">PickUp</h3>
                                <p className="text-sm -mt-1 text-gray-600">
                                    {props.ride?.pickup || 'Unknown Pickup Location'}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 p-3 border-b-2">
                            <i className="ri-user-location-fill"></i>

                            <div>
                                <h3 className="text-lg font-medium">Destination</h3>
                                <p className="text-sm -mt-1 text-gray-600">
                                    {props.ride?.destination || 'Unknown Destination'}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 p-3 border-b-2">
                            <i className="ri-money-rupee-circle-fill"></i>

                            <div>
                                <h3 className="text-lg font-medium">
                                    ₹{props.ride?.fare || '0'}
                                </h3>
                                <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 w-full">
                        <button
                            onClick={endRide}
                            className="w-full mt-5 bg-green-600 text-white-700 font-semibold p-2 rounded-lg"
                        >
                            Finish ride
                        </button>

                        <p className="mt-6 text-xs">
                            Click on finish ride button if you have completed the payment
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinishRide;