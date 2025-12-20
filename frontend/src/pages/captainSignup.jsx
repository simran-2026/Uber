import React,{useState} from 'react'
import {Link} from 'react-router-dom'

const captainSignup = () => {
   const [email, setEmail] = useState('')
     const [password,setPassword] = useState('')
     const [firstName,setFirstName] = useState('')
     const [ lastName , setLastName] = useState('')
     const [captainData,setcaptainData] = useState('')
   
   
     const submithandler=(e) =>{
      e.preventDefault()
      setcaptainData({
       username:{
         firstName:firstName,
         lastName:lastName,
       },
       email:email,
       password:password
      })
   
       console.log(userData);
       
   
   
   
       setEmail('')
       setFirstName('')
       setLastName('')
       setPassword('')
       }
   


  return (
    <div>
        <div className='p-7 h-screen flex flex-col justify-between'> 
    <div >

       <img  className= 'w-20 mr-5 mb-7' src="https://tse1.mm.bing.net/th/id/OIP.Pmb91LFXkoCFePQx5GMr5AHaH0?pid=Api&h=220&P=0" alt="" />
    

      <form onSubmit ={(e) => { submitHandler(e) }}>
        
        <h3 className='text-base font-medium mb-2 '> What's Your name</h3>

        <div className='flex gap-4 '>
           <input required
          className='bg-[#eeeeee] w-1/2 mb-5 rounded px-2 py-2 border text-lg placeholder:text-base'
          type="text" 
          placeholder='First Name'
          value = {firstName}
          onChange= {(e)=>{
            setFirstName(e.target.value)

          }}
          />

          <input required
        

        className='bg-[#eeeeee] mb-5 w-1/2  rounded px-2 py-2 border text-base placeholder:text-base'
         type="text" 
          placeholder='LastName'
          value ={lastName}
          onChange={(e)=>{
            setLastName(e.target.value);

          }}
          />


        </div>
     

        <h3 className='text-base  mb-2  font-medium'>What's your email</h3>
        <input required
        className='bg-[#eeeeee] mb-5 rounded px-2 py-2 border w-full text-lg placeholder:text-base'
         type="email" 
          placeholder='email@example.com'
          value={email}
          onChange={
            (e)=>{
              setEmail(e.target.value)
            }
          }
          />


        <h3 className='text-base  font-medium mb-2'>Enter Password</h3>
        
        
        <input 
         type="password"
          className='bg-[#eeeeee] mb-5 rounded px-2 py-2 border w-full text-lg placeholder:text-base'
         required placeholder='password'
         value={password}
          onChange={
            (e)=>{
              setPassword(e.target.value)
            }
          }
         />

        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
           Login</button>
          
           </form>
            <p className='text-center '>Already have a account? <Link to = '/login' className = 'text-blue-600'> Login Here </Link> </p> 
      
           
   </div>
   
     <div>
        <p className='text-[10px] mt-6 leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
          Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>

    </div>
    </div>
  )
}

export default captainSignup