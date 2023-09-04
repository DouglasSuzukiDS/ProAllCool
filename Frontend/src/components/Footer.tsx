import { Link } from 'react-router-dom'
import ProAllCool from '../assets/icons/ProAllCoolLogo.svg'

export const Footer = () => {
   return(
      <footer className="flex justify-between items-center text-xs gap-4 h-auto">
         <Link to='/secret'>
            <img src={ ProAllCool } alt="Pro AllCool Logo" className='logo-footer' />
         </Link>

         <div className="flex gap-4 text-gray-600">
            <p>Todos direitos reservados</p>
            <p>CNPJ: 000.666.171.6924-51</p>
         </div>
      </footer>
   )
}