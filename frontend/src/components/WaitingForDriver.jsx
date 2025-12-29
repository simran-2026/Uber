import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
         <h5 onClick={()=>{
          props.setwaiting(false)
        }} className=' p-3 w-[93%] absolute text-center top-0'>
          <i className=" text-xl tetx-gray-200 ri-arrow-down-wide-line"></i>
          </h5> 

         <div className=' flex item-center justify-between'>
           <img  className ='h-12'src="https://tse3.mm.bing.net/th/id/OIP.Y_gX5xiVCzVgpmDuQ1h6ogHaEK?pid=Api&h=220&P=0" alt="" />
            <div className='text-right'>
              <h2 className='text-lg font-medium'>
                Ram Kumar
              </h2>
              <p className='text-xl font-semibold -mt-1 -mb-1'>  MP04 AB 1234</p>
              <h4 className='text-sm text-gray-600'>Maruti Suzuki Alto</h4>
            </div>
           </div>
           
        <div className='flex justify-between gap-2 flex-col  items-center'>
           
            <div className='w-full mt-5'>
                <div className='flex items-center gap-5 p-3  border-b-2'>
                    <i className=" text-lg ri-map-pin-fill"></i>
                   
                    <div>
                    <h3 className='text-lg font-medium '> 562/11-A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab,Mendu Gate, Hathras</p>
                </div>
                 
                </div>
                <div className='flex items-center gap-5 p-3  border-b-2' >
                    <i className="ri-user-location-fill"></i>
                   
                    <div>
                    <h3 className='text-lg font-medium '> 562/11-A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab,Mendu Gate, Hathras</p>
                </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2'> 
                   <i className="ri-money-rupee-circle-fill"></i>
                   
                    <div>
                    <h3 className='text-lg font-medium '> ₹192  </h3>
                    <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                </div>
                </div>
            </div>

         </div>


    </div>
  )
}

export default WaitingForDriver