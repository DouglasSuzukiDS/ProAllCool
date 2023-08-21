import { useState, useEffect, useContext, KeyboardEvent, FormEvent } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { User } from '../assets/icons/User'
import { Eye } from '../assets/icons/Eye'
import { EyeSlash } from '../assets/icons/EyeSlash'

export const Login = () => {
   const [login, setLogin] = useState('')
   const [password, setPassword] = useState('')
   const [showPassword, setShowPassword] = useState(false)
   const [loading, setLoading] = useState(false)

   const navigate = useNavigate()

   const auth = useContext(AuthContext)

   useEffect(() => {
      auth?.auth && navigate('/')
   }, [auth])

   const handleLogin = async (e: FormEvent) => {
      e.preventDefault()

      if (login !== '' && password !== '') {
         setLoading(true)

         const logged = await auth?.signIn(login, password)
         console.log(logged?.valueOf())

         if (logged === true) {
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
      if (e.code.toLocaleLowerCase() === 'enter') {
         if (login !== '' && password !== '') {
            handleLogin(e)
         } else {
            alert('Por obséquio, preencha os campos')
         }
      }
   }

   const btnHover = [
      'hover:text-blue-300',
      'hover:border-blue-300',
      'hover:bg-blue-600'
   ].join(' ')

   return (
      <div className='flex justify-center items-center w-full h-screen bg-dark'>
         <form className='flex flex-col items-center text-lg font-bold border-4 border-blue-300 bg-indigo-300 rounded-md p-4 pb-3'>

            <span className="flex justify-center items-center gap-2 py-1 border-b border-sky-600">
               <User w="24" h="24" fill="#9333EA" />

               <input type="text" placeholder='Nome'
                  className='bg-transparent text-center text-sky-600 placeholder:text-indigo-400'
                  value={login}
                  onChange={e => setLogin(e.target.value)} />
            </span>

            <span className="flex justify-center items-center gap-2 py-1 border-b border-sky-600">
               { showPassword ?
                  <EyeSlash w="24" h="24" fill="#9333EA" 
                     onClick={ () => setShowPassword(!showPassword) } /> :

                  <Eye w="24" h="24" fill="#9333EA" 
                     onClick={ () => setShowPassword(!showPassword) } />
               }

               <input type={`${ showPassword ? 'text' : 'password' }`} placeholder='Senha'
                  className='bg-transparent text-center text-sky-600 placeholder:text-indigo-400'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  onKeyUp={handleLoginWithEnterButton} />
            </span>

            <button
               className={`btnCTA flex justify-center text-center mt-3 mb-2 gap-2 font-bold border border-blue-600 text-blue-600 rounded-md py-2 px-4 outline-none transition-all duration-1000 ${btnHover} w-auto`}
               onClick={handleLogin}>
               {!loading ? 'Logar' : 'Aguarde ...'}
            </button>
         </form>
      </div>
   )
}