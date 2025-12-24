import React from 'react'

const Home = () => {
  return (
    <div className='h-screen relative'>
      <img  className = 'w-16 absolute left-5 top-5'src="https://tse4.mm.bing.net/th/id/OIP.nVsbF4Ci20QIuQYTkO9XLAHaD2?pid=Api&h=220&P=0" alt="" />


      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>

      <div className='bg-white flex flex-col justify-end h-screen absolute top-0 w-full '>
       <div className=' h-[30%] p-5 bg-white'>
          <h4  className = 'text-2xl font-semibold'> Find a trip</h4>
        <form >
          <input className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full '  type="text" placeholder = 'Add a pick-up location' />
          <input className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-2' type="text" placeholder = 'Enter your destination' />
        </form>
       </div>
       
       <div className='h-[70%] bg-red-500 p-5 '>

       </div>
      
      </div>
     




    </div>
  )
}

export default Home