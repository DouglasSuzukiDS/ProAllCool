import { Link } from "react-router-dom"
import { useAuth } from "../hooks/Hooks"
import { Props } from "../types/Props"

export const Header = ({ showDevelopersModal, setShowDevelopersModal, showAboutUsModal, setShowAboutUsModal, showContactModal, setShowContactModal, showDepositionsModal, setShowDepositionsModal }: Props) => {
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
      <header className="flex justify-between p-2 border-b border-blue-600">
         <span id="logo" className="text-2xl font-bold">
            <Link to='/secret'>
               ProAllCool
            </Link>
         </span>

         <nav className="flex items-center text-lg font-bold gap-4 border">
            {auth?.auth &&
               <>
                  <button onClick={handleLogout} className={navLinks}>Logout</button>

                  <button
                     className={navLinks}
                     onClick={() => setShowDevelopersModal!(!showDevelopersModal)}>Desenvolvedores</button>

                  <button
                     className={navLinks}
                     onClick={() => setShowAboutUsModal!(!showAboutUsModal)}>Sobre</button>
               </>
            }

            {/* Developers */}
            
            <button
               className={navLinks}
               onClick={() => setShowContactModal!(!showContactModal)}>Contato</button>

            {/* About Us */}

            <button
               className={navLinks}
               onClick={() => setShowDepositionsModal!(!showDepositionsModal)}>Depoimentos</button>
         </nav>
      </header>
   )
}