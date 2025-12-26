import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
         <h5 onClick={()=>{
          props. setvehiclePanel(false)
        }} className=' p-3 w-[93%] absolute text-center top-0'>
          <i className=" text-xl tetx-gray-200 ri-arrow-down-wide-line"></i>
          </h5> 

           <h3 className=' text-2xl font-semibold mb-5 '> Confirm Your ride</h3>

        <div className='flex justify-between gap-2 flex-col  items-center'>
            <img  className ='h-25'src="https://tse3.mm.bing.net/th/id/OIP.Y_gX5xiVCzVgpmDuQ1h6ogHaEK?pid=Api&h=220&P=0" alt="" />
            
            <div className='w-full'>
                <div className='flex items-center gap-5 '>
                    <i className=" text-lg ri-map-pin-fill"></i>
                   
                    <div>
                    <h3 className='text-lg font-medium '> 562/11-A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab,Mendu Gate, Hathras</p>
                </div>
                 
                </div>
                <div>
                    <i className="ri-user-location-fill"></i>
                   
                    <div>
                    <h3 className='text-lg font-medium '> 562/11-A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab,Mendu Gate, Hathras</p>
                </div>
                </div>
                <div>
                   <i className="ri-money-rupee-circle-fill"></i>
                   
                    <div>
                    <h3 className='text-lg font-medium '> ₹192  </h3>
                    <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                </div>
                </div>
            </div>

            <button className='w-full bg-green-600 font-semibold p-2 rounded-lg '>Confirm</button>
        </div>


    </div>
  )
}

export default ConfirmRide