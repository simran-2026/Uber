import React,{useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserDataContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'



const UserLogin = () => {
  const [ email, setEmail ] = React.useState('');
  const [ password, setPassword ] = React.useState(''); 
  const  [userData , setUserData] = React.useState({});
 
  const {user,setUser} = useContext(UserDataContext)
  const navigate = useNavigate()




  const submitHandler = async (e) => {
    e.preventDefault();
   
   const credentials = {
    email: email,
    password: password
   }

   const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:3000'

   try {
     const response = await axios.post(`${baseUrl}/users/login`, credentials)

     if (response.status === 200) {
       const data = response.data;
       setUser(data.user)
       localStorage.setItem('token', data.token)
       navigate('/home')
     }
   } catch (err) {
     console.error('Login error', err)
     // optionally show a user-friendly message
     alert(err.response?.data?.message || 'Login failed')
   }


    setEmail('');
    setPassword('');
  }





  return ( 
    <div className='p-7 h-screen flex flex-col justify-between'> 
    <div >

       <img  className= 'w-20 mr-5 mb-7' src="https://tse4.mm.bing.net/th/id/OIP.nVsbF4Ci20QIuQYTkO9XLAHaD2?pid=Api&h=220&P=0" alt="" />
    

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
            <p className='text-center '>New here? <Link to = '/signup' className = 'text-blue-600'> Create new Account </Link> </p> 
      
           
   </div>

   <div className='p-7 border-t flex flex-col '>
    <Link  to = '/captain-login' className='bg-[#10b461]  flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder: text-base'>
       Sign in as Captain </Link>
   </div>
   </div>

  )
}

export default UserLogin