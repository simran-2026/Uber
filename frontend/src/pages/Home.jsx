import React,{useRef, useState} from 'react'
import {useGSAP} from '@gsap/React'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'


const Home = () => {
     const [pickup,setPickup] = useState('')
     const[destination,setDestination]  = useState('')
     const[panelOpen,setpanelOpen ] = useState(false)
     const panelRef   = useRef(null)
     const panelCloseRef = useRef(null)

     const submitHandler =(e) =>{
      e.preventDefault()
    }

    useGSAP(function(){
      if(panelOpen){
        gsap.to(panelRef.current,{
        height:'70%', 
       
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
      }else{
        gsap.to(panelRef.current,{
          height:'0%',
        
        })
        gsap.to(panelCloseRef.current,{
        opacity: 0
      })
      }
    },[panelOpen])




  return (
    <div className='h-screen relative overflow-hidden'>
      <img  className = 'w-16 absolute left-5 top-5'src="https://tse4.mm.bing.net/th/id/OIP.nVsbF4Ci20QIuQYTkO9XLAHaD2?pid=Api&h=220&P=0" alt="" />


      <div className='h-screen w-screen'>
        <img className='h-[70%] w-full object-cover' src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>

      <div className=' flex flex-col justify-end h-screen absolute top-0 w-full '>
       <div className=' h-[30%] p-5 bg-white relative'>
         
        <h5 ref={panelCloseRef} onClick={()=>{
          setpanelOpen(false)
        }} className='absolute opacity-0 right-6 top-6 text-xl'>
          <i className="ri-arrow-down-wide-line"></i>
          </h5> 
         
         <h4  className = 'text-2xl font-semibold'> Find a trip</h4>
        <form  onSubmit={(e) =>{
          submitHandler(e)
        }} >
          <div className=' line absolute h-11 w-1 top-[38%]  left-10 bg-gray-900 rounded-full'></div>
          <input 
          onClick={()=>{
            setpanelOpen(true)
          }}
          value = {pickup}
          onChange={(e) =>{
            setPickup(e.target.value)
          }}
          className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'  
          type="text" 
          placeholder = 'Add a pick-up location' />
          <input 
          onClick={()=>{
            setpanelOpen(true)
          }}
          value={destination}
          onChange={(e)=>{
            setDestination(e.target.value)
          }}
          className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-2' 
          type="text" 
          placeholder = 'Enter your destination' />
        </form>
       </div>
       
       <div  ref={panelRef} className='bg-white h-0'>
        <LocationSearchPanel/>
       </div>
      
      </div>
     
    
     <div className='fixed z-10 bottom-0 bg-white '>
      <div className=' flex bg-red-600 item-center justify-between'>
         <img  className ='h-10'src="https://tse3.mm.bing.net/th/id/OIP.Y_gX5xiVCzVgpmDuQ1h6ogHaEK?pid=Api&h=220&P=0" alt="" />
      <div className=' bg-green-500 w-1/2'>
        <h4 className='font-medium'>RideGo <span> <i className="ri-user-fill"></i>4</span></h4>
        <h5>2 mins away </h5>
        <p>Affordable, compact rides</p>
      </div>
      <h2 className=' text-2xl font-semibold'>₹192</h2>
      </div>
     
     </div>


    </div>
  )
}

export default Home