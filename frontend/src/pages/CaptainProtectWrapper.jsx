import React,{useContext,useEffect} from 'react'
import { CaptainDataContext } from '../context/captainContext'
import {useNavigate} from 'react-router-dom'


const UsereProtectedWrapper = ({children}) =>{

    // const {user} = useContext(UserDataContext)
    const token = localStorage.getItem('token')

    const navigate = useNavigate()
    const{captain ,setCaptain} = useContext(CaptainDataContext)


   useEffect(()=>{
     if(!token){
        navigate('/captain-login')
    }
   },[token])




    
  return (
   <>
   {children}
   </>
  )
}

export default UsereProtectedWrapper