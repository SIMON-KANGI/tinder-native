import { View, Text } from 'react-native'
import React, { createContext, useContext } from 'react'
import * as Google from 'expo-auth-session'
const AuthContext= createContext({

})
export const AuthProvider = ({children}) => {
    const signinWithGoogle=async()=>{
        await Google.logInAsync()
    }

  return (
   <AuthContext.Provider value={{user:null}}>
{children}
   </AuthContext.Provider>
  )
}

export default function useAuth(){
    return useContext(AuthContext)
}
