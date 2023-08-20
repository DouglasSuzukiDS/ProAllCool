import { useState } from 'react' 
import { Envelope } from "../assets/icons/Envelope"
import { Instagram } from "../assets/icons/Instagram"
import { WhatsApp } from "../assets/icons/WhatsApp"
import { XMark } from "../assets/icons/XMark"
import { Modal } from "../types/Modal"
import { User } from '../assets/icons/User'
import { MapLocationDot } from '../assets/icons/MapLocationDot'

export const PossibleClientModal = ({ close }: Modal) => {
   const [nameExc, setNameExc] = useState('')
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [tel, setTel] = useState('')
   const [insta, setInsta] = useState('')

   return(
      <section className="modal flex justify-center items-center">

         <article className="border-4 border-blue-300 bg-indigo-300 rounded-md p-4 max-w-[450px]">
            <div className="flex justify-between items-center gap-2">
                  <h1 className="title text-center text-sky-600 text-bold underline text-3xl w-full hover:scale-110 transition-all duration-700">
                     Preencha seus dados
                  </h1>

                  <XMark w="32" h="32" onClick={ close } fill="#202225" className="cursor-pointer transition-all duration-700 hover:opacity-70" />
            </div>  

            <div className="flex flex-col items-center">
               <p className="content text-center text-blue-600 text-xl my-4 max-h-[220px] overflow-y-auto customScroll">
                  Nossa equipe irá entrar com vossa excelência o mais rápido possível
               </p>

               <div className="flex flex-col text-indigo-600 w-fit gap-2">
                  <form className='flex flex-col gap-2'>
                     <span className="flex gap-2">
                        <MapLocationDot w="24" h="24" fill="#9333EA" />
                        <input type="text" placeholder='Excursão'
                           value={ nameExc }
                           onChange={ e => setNameExc(e.target.value) } />
                     </span>

                     <span className="flex gap-2">
                        <User w="24" h="24" fill="#9333EA" />
                        <input type="text" placeholder='Nome'
                           value={ name }
                           onChange={ e => setName(e.target.value) } />
                     </span>

                     <span className="flex gap-2">
                        <Envelope w="24" h="24" fill="#9333EA" />
                        <input type="text" placeholder='Email'
                           value={ email }
                           onChange={ e => setEmail(e.target.value) } />
                     </span>

                     <span className="flex gap-2">
                        <WhatsApp w="24" h="24" fill="#9333EA" />
                        <input type="text" placeholder='WhatsApp'
                           value={ tel }
                           onChange={ e => setTel(e.target.value) } />
                     </span>

                     <span className="flex gap-2">
                        <Instagram w="24" h="24" fill="#9333EA" /> 
                        <input type="text" placeholder='@Instagram'
                           value={ insta }
                           onChange={ e => setInsta(e.target.value) } />
                     </span>
                  </form>
               </div>

            </div>

         </article>
      </section>
   )
}