import { Link } from "react-router-dom"
import { useAuth } from "../hooks/Hooks"
import { Props } from "../types/Props"
import Logo from '../assets/icons/Logo.svg'

export const Header = ({ showDevelopersModal, setShowDevelopersModal, showAboutUsModal, setShowAboutUsModal, showContactModal, setShowContactModal, showDepositionsModal, setShowDepositionsModal, showPossibleClientsTableModal, setShowPossibleClientsTableModal }: Props) => {
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

   return (
      <header className="flex justify-between border-b h-auto border-blue-600">
         <span id="logo" className="text-2xl font-bold">
            <Link to='/secret'>
               <img src={ Logo } alt="Logo Pro AllCool" className="logo-header" />
            </Link>
         </span>

         <nav className="flex items-center text-lg font-bold gap-x-4">
            {auth?.auth &&
               <>
                  <button onClick={handleLogout} className={navLinks}>Logout</button>
                  
                  <button
                     className={navLinks}
                     onClick={() => setShowPossibleClientsTableModal!(!showPossibleClientsTableModal)}>Possíveis Clientes</button>
               </>
            }

            {/* Developers */}
            <button
               className={navLinks}
               onClick={() => setShowDevelopersModal!(!showDevelopersModal)}>Desenvolvedores</button>
            
            <button
               className={navLinks}
               onClick={() => setShowContactModal!(!showContactModal)}>Contato</button>

            {/* About Us */}
            <button
               className={navLinks}
               onClick={() => setShowAboutUsModal!(!showAboutUsModal)}>Sobre</button>

            <button
               className={navLinks}
               onClick={() => setShowDepositionsModal!(!showDepositionsModal)}>Depoimentos</button>
         </nav>
      </header>
   )
}