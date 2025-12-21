import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div  className=' bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1527603815363-e79385e0747e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYWZmaWMlMjBsaWdodHN8ZW58MHx8MHx8fDA%3D)] h-screen pt-5 flex justify-between flex-col  w-full bg-red-400'>
      <img  className= 'w-20 ml-8 mr-5' src="https://tse4.mm.bing.net/th/id/OIP.nVsbF4Ci20QIuQYTkO9XLAHaD2?pid=Api&h=220&P=0" alt="" />
        <div className='bg-white  py-5 px-4'>
            <h2 className='text-2xl font-bold pb-5 text-center'> Get Started with Ridewaves</h2>
        <Link to='/login' className = 'flex items-center justify-center  w-full bg-black text-white py-3 rounded'>Continue</Link>
        </div>
    </div>

  
  )
}
 
export default Start