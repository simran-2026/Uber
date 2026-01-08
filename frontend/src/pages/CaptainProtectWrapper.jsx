import React,{useContext,useEffect,useState} from 'react'
import { CaptainDataContext } from '../context/captainContext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const CaptainProtectWrapper = ({children}) =>{

    // const {user} = useContext(UserDataContext)
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const{captain ,setCaptain} = useContext(CaptainDataContext)
    const [IsLoading , setIsLoading] = useState(true)

   useEffect(()=>{
     if(!token){
        navigate('/captain-login')
    }

   
   },[token])
    useEffect(() => {
        if (!token) {
            navigate('/captain-login')
            return
        }

        let mounted = true
        setIsLoading(true)

        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                if (!mounted) return
                if (response.status === 200) {
                    setCaptain(response.data.captain)
                }
            })
            .catch(err => {
                console.log(err)
                localStorage.removeItem('token')
                navigate('/captain-login')
            })
            .finally(() => {
                if (mounted) setIsLoading(false)
            })

        return () => {
            mounted = false
        }
    }, [token, navigate, setCaptain])


 if(IsLoading){
    return (
        <div> Loading...</div>
    )
 }


    
  return (
   <>
   {children}
   </>
  )
}

export default CaptainProtectWrapper