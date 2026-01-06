import React from 'react'
import {Link} from 'react-router-dom'
 
const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed h-10 w-10 bg-white flex items-center rounded-full ml-2'>
            <i className=" ml-2.5  text-lg font-medium ri-home-2-fill"></i>

        </Link>
         <div className='h-1/2 '>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='h-1/2 p-4'>

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
            
                 <div className='flex items-center gap-5 p-3  border-b-2' >
                    <i className="ri-user-location-fill"></i>
                   
                    <div>
                    <h3 className='text-lg font-medium '> 562/11-A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab,Mendu Gate, Hathras</p>
                </div>
                </div>
                <div className='flex items-center gap-5 p-3'> 
                   <i className="ri-money-rupee-circle-fill"></i>
                   
                    <div>
                    <h3 className='text-lg font-medium '> ₹192  </h3>
                    <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                </div>
                </div>
            </div>

         </div>

       <button className='w-full bg-green-600 p-4 mt-5'> Make a Payment</button>
      </div>
    </div>
  )
}

export default Riding