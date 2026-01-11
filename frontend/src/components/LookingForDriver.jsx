import React from 'react'

const LookingForDriver = (props) => {
  return (
    
         <div>
         <h5 onClick={()=>{
          props.setvehicleFound(false)
        }} className=' p-3 w-[93%] absolute text-center top-0'>
          <i className=" text-xl tetx-gray-200 ri-arrow-down-wide-line"></i>
          </h5> 

           <h3 className=' text-2xl font-semibold mb-5 '> Looking For Driver</h3>

        <div className='flex justify-between gap-2 flex-col  items-center'>
            <img  className ='h-25'src="https://tse3.mm.bing.net/th/id/OIP.Y_gX5xiVCzVgpmDuQ1h6ogHaEK?pid=Api&h=220&P=0" alt="" />
            
            <div className='w-full mt-5'>
                <div className='flex items-center gap-5 p-3  border-b-2'>
                    <i className=" text-lg ri-map-pin-fill"></i>
                   
                    <div>
                    <h3 className='text-lg font-medium '> 562/11-A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>{props.pickup}</p>
                </div>
                 
                </div>
                <div className='flex items-center gap-5 p-3  border-b-2' >
                    <i className="ri-user-location-fill"></i>
                   
                    <div>
                    <h3 className='text-lg font-medium '> 562/11-A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>{props.destination}</p>
                </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2'> 
                   <i className="ri-money-rupee-circle-fill"></i>
                   
                    <div>
                    <h3 className='text-lg font-medium '> ₹{props.fare[props.vehicleType]}</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                </div>
                </div>
            </div>

         </div>


    </div>


    
  )
}

export default LookingForDriver