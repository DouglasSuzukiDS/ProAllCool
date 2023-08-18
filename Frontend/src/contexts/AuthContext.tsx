import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'
import { baseURL } from '../api/Api'

export type Auth = {
   auth: boolean
   setAuth: Dispatch<SetStateAction<boolean>>

   signIn: (login: string, password: string) => Promise<boolean>
   logout: () => void
}

export const AuthContext = createContext<Auth | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
   const [auth, setAuth] = useState<boolean>(false)

   const signIn = async(login: string, password: string) => {
      //alert(login+password)
     const response = await baseURL.post('/login', { login, password } )
      .then(res => {
         if(res.status === 200){
            console.log(res.status)
            return res
         }
      })
      .catch(err => {
         console.log(err)
         return err
      })
      console.log(response)

       /*if(response.status === 200) {
         console.log(response.status)
         return true
       } else {
         alert('Erro ao logar')
         return false
       }*/

   }

   const logout = () => {
      deleteToken()
   }

   const createToken = (token: string) => {
      setAuth(false)
      localStorage.setItem('Auth', token)
   }

   const deleteToken = () => {
      localStorage.clear()
   }

   return(
      <AuthContext.Provider value={{ auth, setAuth, signIn, logout }}>
         { children }
      </AuthContext.Provider>
   )   
}