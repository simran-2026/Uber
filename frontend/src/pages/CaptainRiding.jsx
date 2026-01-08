import React from 'react'
import {Link} from 'react-router-dom'
import FinishRide from '../components/FinishRide';
import {useRef, useState} from 'react'
import {useGSAP} from '@gsap/React'
import gsap from 'gsap'


const CaptainRiding = () => {

   const[FinishRidePanel, setFinishRidePanel] = useState(false);
   const finishRidePanelRef = useRef(null);

   useGSAP(function(){
      if(FinishRidePanel){
      gsap.to(finishRidePanelRef.current,{
        transform:'translateY(0)'
      })
      }else{
        gsap.to(finishRidePanelRef.current,{
          transform:'translateY(100%)'
        })
      }
    },[FinishRidePanel])
  return (
     <div>
       <div className='h-screen'>
        <div className='fixed p-3 top-0 flex items-center justify-between w-screen'>
          <img className='w-16'src="https://tse4.mm.bing.net/th/id/OIP.nVsbF4Ci20QIuQYTkO9XLAHaD2?pid=Api&h=220&P=0" alt="" />
          <Link to='/home' className='h-10 w-10 bg-white flex items-center rounded-full ml-2'>
            <i className=" ml-2.5  text-lg font-medium ri-logout-box-r-line"></i>

        </Link>
        </div>
        
         <div className='h-4/5 '>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
     
      <div className=' h-1/5 p-5  flex items-center  relative  justify-between bg-yellow-400 '>
      <h5 onClick={()=>{
        setFinishRidePanel(true)
         
        }} className=' p-1 w-[93%] absolute text-center top-0'>
          <i className=" text-xl text-black-200 ri-arrow-up-wide-line"></i>
          </h5> 
      <h4 className='text-xl '> 4 KM Away</h4>
      <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'> Complete Ride</button>
      </div>

      </div>

      <div ref = {finishRidePanelRef} className='fixed w-full  h-screen translate-y-full bottom-0  bg-white px-3 py-8 pt-12'>
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
        </div>
    
    </div>
  )
}


export default CaptainRiding