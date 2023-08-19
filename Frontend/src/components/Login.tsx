import { useState, useEffect, useContext, KeyboardEvent } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
   const [login, setLogin] = useState('')
   const [password, setPassword] = useState('')
   const [loading, setLoading] = useState(false)

   const navigate = useNavigate()
 
   const auth = useContext(AuthContext)

   useEffect(() => {
      auth?.auth && navigate('/')
   }, [auth])

   const handleLogin = async() => {
      if(login !== '' && password !== '') {
         setLoading(true)

         const logged = await auth?.signIn(login, password)
         console.log(logged?.valueOf())

         if(logged === true) {
            navigate('/')
         } else {
            alert('Usuário / Senha inválida. AuthContext')
            setLoading(false)
         }

      } else {
         alert('Por obséquio, preencha o(s) campo(s) correntamente.')
      }

      setLoading(false)
   }

   const handleLoginWithEnterButton = (e: KeyboardEvent<HTMLInputElement>) => {
      if(e.code.toLocaleLowerCase() === 'enter') {
         if(login !== '' && password !== '') {
            handleLogin()
         } else {
            alert('Por obséquio, preencha os campos')
         }
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
            onChange={ e => setPassword(e.target.value) } 
            onKeyUp={ handleLoginWithEnterButton } />

         <button onClick={ handleLogin }>
            { !loading ? 'Logar' : 'Carregando ...' }
         </button>

         { auth?.auth ? 'Logado' : 'Não logado' }
      </div>
   )
}