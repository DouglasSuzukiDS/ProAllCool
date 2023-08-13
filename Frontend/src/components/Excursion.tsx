import Bahamas01  from  '../assets/images/BahamasClub01.png'
import { Props } from '../types/Props'

const card = [
   'flex',
   'text-sm',
   'gap-2',
   'p-4',
   'border-2', 
   'border-blue-600',
   'rounded-lg',
   'w-[450px]',
   'h-[300px]',
   'transition-all',
   'duration-700',
   'hover:border-opacity-50',
   'overflow-y-auto',
   'customScroll',
].join(' ')

export const Excursion = ({ showModal }: Props) => {
   return(
      <article id='card' className={ card }>
         <img src={ Bahamas01 } alt="Bahamas Club Thumb" className='rounded-lg w-1/2 h-auto' />

         <div className='p-1 flex flex-col justify-center items-center border border-red-600 customScroll gap-2'>
            <h3 className='text-base font-bold text-center text-blue-600'>Bahamas Club</h3>

            <span className='flex gap-4 justify-center items-center text-center italic'>
               <p className='text-xs text-red-600 font-bold line-through'>De: R$ 5.000</p>
               <p className='text-sky-600 underline font-bold'>Por: R$ 3.800</p>
            </span>

            <span className='flex gap-4 justify-center items-center text-center italic font-bold'>
               <p className='text-indigo-600'>
                  Ida: <span className='text-purple-600'>08/12/23</span>
               </p>

               <p className='text-purple-600'>
                  Retorno: <span className='text-indigo-600'>08/12/23</span>
               </p>
            </span>

            <p className='text-center border flex-1 text-base text-light overflow-y-auto customScroll'>
               Final de semana no Hotel mais famoso de São Paulo, com restaurante próprio, culinária de elite, shows, bar com bartender’s & bargirls altamente qualidifcados. <span className='font-bold text-red-600'>OBS:</span> Shows particulares <span className='font-bold'>NÃO ESTÃO INCLUSOS.</span>
            </p>

            <button onClick={ showModal }>Abrir</button>
         </div>

      </article>
   )
}