import React,{useContext,useEffect} from 'react'
import { UserDataContext } from '../context/userContext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const UsereProtectedWrapper = ({children}) =>{

    // const {user} = useContext(UserDataContext)
    const token = localStorage.getItem('token')
    
    const navigate = useNavigate()
    const {user,setUser} = useContext(UserDataContext)
    const[IsLoading, setIsLoading] = useState(true)


   useEffect(()=>{
     if(!token){
        navigate('/login')
    }

     axios.get(`${import.meta.env.VIYE_BASE_URL}/user/profile`,{
        header:{
            Authorization:`Bearer ${token}`
        }
    }).then(response=>{
        if(response.status===200){
            setUser(response.data.user)
        }
    }).catch(err=>{
      console.log(err)
      localStorage.removeItem('token')
      navigate('/login')
    })

   },[token])


    if(IsLoading){
      return(
        <div>Loading..</div>
      )
    } 

    
  return (
   <>
   {children}
   </>
  )
}

export default UsereProtectedWrapper