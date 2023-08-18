import { useState, useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export const Login = () => {
   const [login, setLogin] = useState('')
   const [password, setPassword] = useState('')

   const auth = useContext(AuthContext)

   const handleLogin = async(login: string, password: string) => {
      const logged = await auth?.signIn(login, password)

      if(logged) {
         console.log('Ok')
      } else {
         console.log('Fail')
      }
   }

   return(
      <div>
         <input 
            type="text" 
            placeholder="Login" 
            value={ login }
            onChange={ e => setLogin(e.target.value) } />

         <input 
            type="password" 
            placeholder="Senha" 
            value={ password } 
            onChange={ e => setPassword(e.target.value) } />

         <button onClick={ () => handleLogin(login, password) }>Logar</button>
      </div>
   )
}