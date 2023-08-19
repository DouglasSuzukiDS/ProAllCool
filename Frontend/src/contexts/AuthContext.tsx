import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import { baseURL } from '../api/Api'

export type Auth = {
   auth: boolean
   setAuth: Dispatch<SetStateAction<boolean>>

   signIn: (loginUser: string, passworUser: string) => Promise<boolean>
   logout: () => void
}

export const AuthContext = createContext<Auth | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
   const [auth, setAuth] = useState<boolean>(false)

   useEffect(() => {
      localStorage.getItem('Auth') && setAuth(true)
   }, [])


   const signIn = async (loginUser: string, passwordUser: string) => {
      return await baseURL.post('/login', { loginUser, passwordUser })
         .then(res => {
            if (res.status === 200) {
               console.log(res.data)
               setAuth(true)
               createToken(res.data.token)
      
               return true
            } else {
               return false
            }
         })
         .catch(err => {
            console.log(err.response.data)
            setAuth(false)
            return false
         })

   }

   const logout = () => {
      setAuth(false)
      deleteToken()
   }

   const createToken = (token: string) => {
      setAuth(false)
      localStorage.setItem('Auth', token)
   }

   const deleteToken = () => {
      localStorage.clear()
   }

   return (
      <AuthContext.Provider value={{ auth, setAuth, signIn, logout }}>
         {children}
      </AuthContext.Provider>
   )
}

