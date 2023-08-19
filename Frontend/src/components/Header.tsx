import { Link } from "react-router-dom"
import { useAuth } from "../hooks/Hooks"

export const Header = () => {
   const auth = useAuth()

   const handleLogout = () => {
      auth?.logout()
   }

   const navLinks = [
      'text-blue-600',
      'transition-all',
      'duration-700',
      'hover:opacity-75'
   ].join(' ')

   return(
      <header className="flex justify-between p-2 border-b border-blue-600">
         <span id="logo" className="text-2xl font-bold">
            <Link to='/secret'>
               ProAllCool
            </Link>
         </span>

         <nav className="flex items-center text-lg font-bold gap-4 border">
            { auth?.auth && 
               <button onClick={ handleLogout } className={ navLinks }>Logout</button> }
            
            <Link to='/' className={ navLinks }>Contato</Link>
            <Link to='/' className={ navLinks }>Sobre</Link>
            <Link to='/' className={ navLinks }>Depoimentos</Link>
         </nav>
      </header>
   )
}