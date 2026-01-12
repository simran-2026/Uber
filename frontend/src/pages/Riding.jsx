import React from 'react'
import {Link} from 'react-router-dom'
 import {useLocation} from 'react-router-dom'
 import { useEffect, useContext } from 'react'
import {SocketContext} from '../context/SocketContext'
import { useNavigate } from 'react-router-dom'
import LiveTracking from '../components/LiveTracking'

const Riding = () => {
  const loaction = useLocation();
  const {ride} = loaction.state||{};
   const {socket}=useContext(SocketContext);
    const navigate = useNavigate();


    socket.on('ride-completed',(data)=>{
        navigate('/home');
    }
    )
    






  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed h-10 w-10 bg-white flex items-center rounded-full ml-2'>
            <i className=" ml-2.5  text-lg font-medium ri-home-2-fill"></i>

        </Link>
         <div className='h-1/2 '>
         <LiveTracking />
             </div>
      <div className='h-1/2 p-4'>

       <div className=' flex item-center justify-between'>
           <img  className ='h-12'src="https://tse3.mm.bing.net/th/id/OIP.Y_gX5xiVCzVgpmDuQ1h6ogHaEK?pid=Api&h=220&P=0" alt="" />
            <div className='text-right'>
              <h2 className='text-lg font-medium'>
                {ride.user.fullname.firstname + " " + ride.user.fullname.lastname}
              </h2>
              <p className='text-xl font-semibold -mt-1 -mb-1'>{ride.user.vehicle.number}</p>
              <h4 className='text-sm text-gray-600'>Maruti Suzuki Alto</h4>
            </div>
           </div>
           
        <div className='flex justify-between gap-2 flex-col  items-center'>
           
            <div className='w-full mt-5'>
            
                 <div className='flex items-center gap-5 p-3  border-b-2' >
                    <i className="ri-user-location-fill"></i>
                   
                    <div>
                    <h3 className='text-lg font-medium '>Destination</h3>
                    <p className='text-sm -mt-1 text-gray-600'>{ride.destination}</p>
                </div>
                </div>
                <div className='flex items-center gap-5 p-3'> 
                   <i className="ri-money-rupee-circle-fill"></i>
                   
                    <div>
                    <h3 className='text-lg font-medium '> ₹{ride.fare} </h3>
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