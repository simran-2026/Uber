import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { CaptainDataContext } from '../context/captainContext'
import axios from 'axios' 
import {useNavigate} from 'react-router-dom'




const captainSignup = () => {

  const navigate = useNavigate()

   const [email, setEmail] = useState('')
     const [password,setPassword] = useState('')
     const [firstName,setFirstName] = useState('')
     const [ lastName , setLastName] = useState('')
    //  const [captainData,setcaptainData] = useState('')
    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')
     

    const{captain,setCaptain} = React.useContext(CaptainDataContext)
   
     const submithandler= async(e) =>{
      e.preventDefault()
      setcaptainData({
       fullName:{
         firstName:firstName,
         lastName:lastName,
       },
       email:email,
       password:password,
       vehicle:{
        color:vehicleColor,
        plate:vehiclePlate,
        capacity:vehicleCapacity,
        type:vehicleType
       }
      })
   
      //  console.log(userData);
       
       const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData)
       if(response ===201){
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token',data.token)
        navigate('/captain-home')
       }
   
       setEmail('')
       setFirstName('')
       setLastName('')
       setPassword('')
       setVehicleColor('')
       setVehiclePlate('')
       setVehicleCapacity('')
       setVehicleType('')
       }
   


  return (
    <div>
        <div className='p-7 h-screen flex flex-col justify-between'> 
    <div >

       <img  className= 'w-20 mr-5 mb-7' src="https://tse1.mm.bing.net/th/id/OIP.Pmb91LFXkoCFePQx5GMr5AHaH0?pid=Api&h=220&P=0" alt="" />
    

      <form onSubmit ={(e) => { submitHandler(e) }}>
        
        <h3 className='text-base font-medium mb-2 '> What's our Captain's name</h3>

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
     

        <h3 className='text-base  mb-2  font-medium'>What's Captain's email</h3>
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


        <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
          Create Captain Account</button>
          
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