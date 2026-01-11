import React ,{useContext}from 'react'
import { CaptainDataContext } from '../context/captainContext'


const CaptainDetails = () => {

  const {captain}=useContext(CaptainDataContext)
  return (
    <div>
         <div className=' h-2/5 p-6'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-start gap-3'>
          <img  className='h-12 w-12 rounded-full object-cover ' src="https://pbs.twimg.com/media/BcINeMVCIAABeWd.jpg:large" alt="" />
          <h4 className='text-lg font-medium capitalize'>{captain.fullname.firstname + captain.fullname.lastname}</h4>
        </div>
        <div>
          <h4 className=' text-xl font-semibold'> ₹295.20</h4>
          <p className='text-sm text-gray-600'>Earned</p>
        </div>
      </div>
       
     <div className=' flex mt-6 items-start justify-center rounded-xl gap-5 p-3 bg-gray-50'>
      <div className='text-center'>
        <i className=" text-3xl mb-2 font-thin ri-timer-line"></i>
        <h5 className='text-lg font-medium'>10.2</h5>
        <p className='text-sm text-gray-600'> Hours Online</p>
      </div>
      <div  className='text-center'> 
        <i className=" text-3xl mb-2 font-thin ri-speed-up-line"></i>
        <h5 className='text-lg font-medium'>10.2</h5>
         < p className='text-sm text-gray-600' >Hours Online</p>
      </div>
      <div className='text-center'>
        <i className=" text-3xl mb-2 font-thin ri-booklet-line"></i>
        <h5 className='text-lg font-medium'>10.2</h5>
        <p className='text-sm text-gray-600'> Hours Online</p> 
      </div>
     </div>

    </div>

    
    </div>
  )
}

export default CaptainDetails