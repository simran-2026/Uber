import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 onClick={()=>{
          props.setvehiclePanel(false)
        }} className=' p-3 w-[93%] absolute text-center top-0'>
          <i className=" text-xl tetx-gray-200 ri-arrow-down-wide-line"></i>
          </h5> 

       <h3 className=' text-2xl font-semibold mb-5 '> Choose Your ride</h3>
    
      <div onClick={
        ()=>{
            props.setConfirmRidePanel(true)
            props.setVehicleType('car')
        }
      }className=' flex w-full   border-2 border-white  active:border-black rounded-xl w-full p-3 mb-2   item-center justify-between'>
         <img  className ='h-12'src="https://tse3.mm.bing.net/th/id/OIP.Y_gX5xiVCzVgpmDuQ1h6ogHaEK?pid=Api&h=220&P=0" alt="" />
      <div className=' w-1/2'>
        <h4 className='font-medium text-base'>RideGo <span> <i className="ri-user-fill"></i>4</span></h4>
        <h5 className ='font-medium text-sm'>2 mins away </h5>
        <p className ='font-normal text-sm'>Affordable, compact rides</p>
      </div>
      <h2 className=' text-2xl font-semibold'> ₹{props.fare.car}</h2>
      </div>

      {/* <div  onClick={
        ()=>{
            props.setConfirmRidePanel(true)
        }
      } className=' flex w-full p-3 mb-2  border-2  border-white  active:border-black rounded-xl  item-center justify-between'>
         <img  className ='h-16'src="https://tse4.mm.bing.net/th/id/OIP.ymjpxr4RPlwbLenCbbpYywHaE7?pid=Api&h=220&P=0" alt="" />
      <div className=' w-1/2'>
        <h4 className='font-medium text-base'>RideGoPremium <span> <i className="ri-user-fill"></i>6</span></h4>
        <h5 className ='font-medium text-sm'>5 mins away </h5>
        <p className ='font-normal text-sm'>Affordable, compact rides</p>
      </div>
      <h2 className=' text-2xl font-semibold'>{props.fare.car}</h2>
      </div> */}
     

      <div  onClick={
        ()=>{
            props.setConfirmRidePanel(true)
            props.setVehicleType('auto')
        }
      } className=' flex w-full p-3 mb-2  border-2 border-white  active:border-black rounded-xl  item-center justify-between'>
         <img  className ='h-16'src="https://tse4.mm.bing.net/th/id/OIP.gERohywpalGF3NjolmHt5wHaE7?pid=Api&h=220&P=0" alt="" />
      <div className=' w-1/2'>
        <h4 className='font-medium text-base'>Auto <span> <i className="ri-user-fill"></i>3</span></h4>
        <h5 className ='font-medium text-sm'>5 mins away </h5>
        <p className ='font-normal text-sm'>Affordable, compact rides</p>
      </div>
      <h2 className=' text-2xl font-semibold'>₹{props.fare.auto}</h2>
      </div>



    <div  onClick={
        ()=>{
            props.setConfirmRidePanel(true)
            props.setVehicleType('motorcycle')
        }
      } className=' flex w-full p-3 mb-2  border-2   border-white  active:border-black rounded-xl  item-center justify-between'>
         <img  className ='h-18'src="https://png.pngtree.com/png-clipart/20211102/original/pngtree-bike-vector-png-image_6914691.png" alt="" />
      <div className=' w-1/2'>
        <h4 className='font-medium text-base'>Moto<span> <i className="ri-user-fill"></i>1</span></h4>
        <h5 className ='font-medium text-sm'>2 mins away </h5>
        <p className ='font-normal text-sm'>Affordable, compact rides</p>
      </div>
      <h2 className=' text-2xl font-semibold'> ₹{props.fare.motorcycle}</h2>
      </div>


    </div>
  )
}

export default VehiclePanel