import React,{useContext} from 'react'
import { UserDataContext } from '../context/userContext'
import {useNavigate} from 'react-router-dom'


const UsereProtectedWrapper = ({children}) =>{

    // const {user} = useContext(UserDataContext)
    const token = localStorage.getItem('token')

    const navigate = useNavigate()



    if(!token){
        navigate('./login')
    }




    
  return (
   <>
   {children}
   </>
  )
}

export default UsereProtectedWrapper