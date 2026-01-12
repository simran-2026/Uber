import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
        <div>
         <h5 onClick={()=>{
            props.setridePopPanel(false)
          
        }} className=' p-3 w-[93%] absolute text-center top-0'>
          <i className=" text-xl text-gray-200 ri-arrow-down-wide-line"></i>
          </h5> 

           <h3 className=' text-2xl font-semibold '>New Ride Available</h3>
        
        <div className='flex items-center mt-4 bg-gray-50  p-3 bg-yellow-400 rounded-lg  justify-between '>
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
                    <h3 className='text-lg font-medium '> 562/11-A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>{props.ride.pickup}</p>
                </div>
                 
                </div>
                <div className='flex items-center gap-5 p-3  border-b-2' >
                    <i className="ri-user-location-fill"></i>
                   
                    <div>
                    <h3 className='text-lg font-medium '> 562/11-A</h3>
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

           <div className='flex items-center w-full  justify-between'>
             <button onClick={()=>{
                props.setConfirmRidePopPanel(true)
                props.setridePopPanel(false)
                props.confirmRide()
            
            }} className=' mt-5  bg-green-600 text-white font-semibold p-2 px-8  rounded-lg '>Accept</button>
             
              <button onClick={()=>{
               
               props.setridePopPanel(false)
            }} className=' mt-5  bg-gray-400 text-gray-700 font-semibold p-2 px-8   rounded-lg '>Ignore</button>
      
           </div>
      
        </div>


    </div>
    </div>
  )
}

export default RidePopUp