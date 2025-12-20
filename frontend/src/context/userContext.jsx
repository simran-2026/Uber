import React, {createContext, useState} from 'react'

export const UserDataContext = createContext();


const userContext = ({children}) => {

    const[user , setuser]= useState({
        email:'',
        fullName:{
            firstName:'',
            lastName:''
        }
    })

  return (
    <div>
     <UserDataContext.Provider value >
            {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default userContext