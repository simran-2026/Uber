import React from 'react'
import {Link} from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
import {useRef, useState} from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { SocketContext } from '../context/SocketContext'
import { useContext } from 'react'
import { CaptainDataContext } from '../context/captainContext'
import { useEffect } from 'react'


const CaptainHome = () => {


  const [ridePopPanel, setridePopPanel] = useState(false);
  const [ConfirmRidePopPanel, setConfirmRidePopPanel] = useState(false);

  const ridePopPanelRef = useRef(null);
  const ConfirmRidePopPanelRef = useRef(null);


  const {socket}=useContext(SocketContext);
  const {captain}=useContext(CaptainDataContext);

  useEffect(() => {
    socket.emit('join', { userId: captain._id ,
      userType: 'captain' });
    




    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          socket.emit('update-location-captain', {
            userId: captain._id,
            location: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          });
        });
      }
    }

    const locationInterval = setInterval(updateLocation, 10000);
    updateLocation(); // Initial call to set location immediately
    // return () => clearInterval(locationInterval); 

  }, []);

  socket.on('new-ride',(data)=>{
    console.log(data);
    setRide(data);
    setridePopPanel(true);
  })


  async function confirmRide(){
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/rides/confirm`,{ 
      rideId: ride._id,
      captainId: captain._id,

     },{
       headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
        
      }
     }

    );
  }


  useGSAP(function(){
      if(ridePopPanel){
      gsap.to(ridePopPanelRef.current,{
        transform:'translateY(0)'
      })
      }else{
        gsap.to(ridePopPanelRef.current,{
          transform:'translateY(100%)'
        })
      }
    },[ridePopPanel])

  useGSAP(function(){
      if(ConfirmRidePopPanel){
      gsap.to(ConfirmRidePopPanelRef.current,{
        transform:'translateY(0)'
      })
      }else{
        gsap.to(ConfirmRidePopPanelRef.current,{
          transform:'translateY(100%)'
        })
      }
    },[ConfirmRidePopPanel])





  return (
    <div>
       <div className='h-screen'>
        <div className='fixed p-3 top-0 flex items-center justify-between w-screen'>
          <img className='w-16'src="https://tse4.mm.bing.net/th/id/OIP.nVsbF4Ci20QIuQYTkO9XLAHaD2?pid=Api&h=220&P=0" alt="" />
          <Link to='/home' className='h-10 w-10 bg-white flex items-center rounded-full ml-2'>
            <i className=" ml-2.5  text-lg font-medium ri-logout-box-r-line"></i>

        </Link>
        </div>
        
         <div className='h-3/5 '>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
     
      <div className=' h-2/5 p-5 bg-white '>
      <CaptainDetails/>
      </div>

      </div>

     <div ref = {ridePopPanelRef} className='fixed w-full z-10 translate-y-full bottom-0  bg-white px-3 py-8 pt-12'>
        <RidePopUp
        ride={ride}
         setridePopPanel={setridePopPanel}  
         setConfirmRidePopPanel={setConfirmRidePopPanel} 
         confirmRide={confirmRide }
         />
        </div>


        <div ref = {ConfirmRidePopPanelRef} className='fixed w-full  h-screen translate-y-full bottom-0  bg-white px-3 py-8 pt-12'>
        <ConfirmRidePopUp 
       ride={ride}
        setConfirmRidePopPanel={setConfirmRidePopPanel}  
        setridePopPanel={setridePopPanel} />
        </div>
    </div>
  )
}

export default CaptainHome