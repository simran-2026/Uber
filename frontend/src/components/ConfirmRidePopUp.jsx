import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import{useNavigate}   from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
    const [otp, setotp] = useState("")
    const navigate = useNavigate();
    const submitHandler = async (e) =>{
        e.preventDefault();
        
            const response = await axios.get('/rides/start-ride', {
                params: {
                    rideId: props.ride._id,
                    otp: otp
                },
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            
        if(response.status===200){
            props.setConfirmRidePopPanel(false)
            props.setridePopPanel(false)
            navigate('/captain-riding');
        }
    } 
  return (
    <div>
        <div>
         <h5 onClick={()=>{
            props.setridePopPanel(false)
          
        }} className=' p-3 w-[93%] absolute text-center top-0'>
          <i className=" text-xl text-gray-200 ri-arrow-down-wide-line"></i>
          </h5> 

           <h3 className=' text-2xl font-semibold '>Confirm This Ride</h3>
        
        <div className='flex items-center mt-4 bg-gray-50  p-3  rounded-lg  bg-gray-200 border-4 border-yellow-400 justify-between '>
            <div className=' flex items-center gap-3'>
                <img  className='h-12 w-12 rounded-full object-cover ' src="https://up.yimg.com/ib/th/id/OIP.XMa6K9nT4_GC-DOq_ReaigHaLH?pid=Api&rs=1&c=1&qlt=95&w=76&h=114" alt="" />
                <h4 className='text-lg font-medium'>{props.ride.user.fullname.firstname + " " + props.ride.user.fullname.lastname}</h4>
            </div>
            <h5 className='text-lg font-semibold'>3.5 Km</h5>
        </div>


        <div className='flex justify-between gap-2 flex-col  items-center'>
             <div className='w-full mt-5'>
                <div className='flex items-center gap-5 p-3  border-b-2'>
                    <i className=" text-lg ri-map-pin-fill"></i>
                   
                    <div>
                    <h3 className='text-lg font-medium '>PickUp</h3>
                    <p className='text-sm -mt-1 text-gray-600'>{props.ride.pickup}</p>
                </div>
                 
                </div>
                <div className='flex items-center gap-5 p-3  border-b-2' >
                    <i className="ri-user-location-fill"></i>
                   
                    <div>
                    <h3 className='text-lg font-medium '>Destination</h3>
                    <p className='text-sm -mt-1 text-gray-600'>{props.ride.destination}</p>
                </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2'> 
                   <i className="ri-money-rupee-circle-fill"></i>
                   
                    <div>
                    <h3 className='text-lg font-medium '> ₹{props.ride.fare}</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                </div>
                </div>
            </div>
          

          <div className=' mt-6 w-full'>
             <form onSubmit={submitHandler}> 
             <input value={otp} onChange={(e)=>setotp(e.target.value)} type="text" className='bg-[#eee] px-6 py-4 text-lg font-mono rounded-lg w-full mt-3' placeholder='Enter OTP' />
                 <button type='submit' className='w-full mt-5 flex justify-center  bg-green-600 text-white font-semibold p-2 rounded-lg '>Confirm</button>
             
              <button onClick={()=>{
               props.setridePopPanel(false)
               props.setConfirmRidePopPanel(false)
            }} className='w-full mt-5  bg-red-600 text-white-700 font-semibold p-2 rounded-lg '>Cancel</button>
      
             </form>
          </div>
      
        </div>


    </div>
    </div>
  )
}

export default ConfirmRidePopUp