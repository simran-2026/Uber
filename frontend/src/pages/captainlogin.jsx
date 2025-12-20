import React , {useState} from 'react'
import { Link } from 'react-router-dom';

const captainlogin = () => {

   const [ email, setEmail ] = React.useState('');
    const [ password, setPassword ] = React.useState(''); 
    const [captainData , setCaptainData] = React.useState({});
  
    const submitHandler = (e) => {
      e.preventDefault();
     setCaptainData({
      email:email,
      password:password
     })
     console.log(captainData);
  
      setEmail('');
      setPassword('');
    }
   
   
    return (
    <div className='p-7 h-screen flex flex-col justify-between'> 
    <div >

       <img  className= 'w-20 mr-5 mb-7' src="https://tse1.mm.bing.net/th/id/OIP.Pmb91LFXkoCFePQx5GMr5AHaH0?pid=Api&h=220&P=0" alt="" />
    

      <form onSubmit ={(e) => { submitHandler(e) }}>

        <h3 className='text-xl mb-2'>What's your email</h3>
        <input required
        value = {email}
        onChange = {
          (e) =>{ setEmail(e.target.value)}
        }

        className='bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base'
         type="email" 
          placeholder='email@example.com'
          />


        <h3 className='text-xl mb-2'>Enter Password</h3>
        
        
        <input 
         type="password"
         value = {password}
         onChange = {
          (e) =>{ setPassword(e.target.value)}
        }
          className='bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base'
         required placeholder='password'
         />

        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
           Login</button>
          
           </form>
            <p className='text-center '>Join a fleet? <Link to = '/captain-signup' className = 'text-blue-600'>Register as a Captain</Link> </p> 
      
           
   </div>

   <div className='p-7 border-t flex flex-col '>
    <Link  to = '/login' className='bg-[#d5622d]  flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder: text-base'>
       Sign in as User </Link>
   </div>
   </div>
  )
}

export default captainlogin