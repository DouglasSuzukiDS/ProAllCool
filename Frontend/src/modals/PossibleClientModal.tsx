import { useState, useEffect, useContext, KeyboardEvent } from 'react' 
import { Envelope } from "../assets/icons/Envelope"
import { Instagram } from "../assets/icons/Instagram"
import { WhatsApp } from "../assets/icons/WhatsApp"
import { XMark } from "../assets/icons/XMark"
import { Modal } from "../types/Modal"
import { User } from '../assets/icons/User'
import { MapLocationDot } from '../assets/icons/MapLocationDot'
import { usePossibleClient } from '../hooks/Hooks'
import { ExcursionsContext } from '../contexts/ExcursionsContext'

export const PossibleClientModal = ({ close }: Modal) => {
   const btnHover = [
      'hover:text-blue-300',
      'hover:border-blue-300',
      'hover:bg-blue-600'
   ].join(' ')

   const [idExc, setIdExc] = useState(1)
   const [nameExc, setNameExc] = useState('Outra excursão')
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [tel, setTel] = useState('')
   const [insta, setInsta] = useState('')
   
   useEffect(() => {
      handleChooseExc()
   }, [nameExc])

   const possibleClientCTX = usePossibleClient()

   const excursionsCTX = useContext(ExcursionsContext)

   const handleNewPossibleClient = () => {
      /*alert(`
         ID Excursion: ${ idExc }
         Name Excursion: ${ nameExc }
         Client: ${ name }
         Email: ${ email }
         Tel: ${ tel }
         Insta ${ insta }
      `)*/

      if(nameExc !== '' && name !== '' && email !== '' && tel !== '') {
         possibleClientCTX?.addPossibleClient({
            idExc,
            nameExc,
            namePosClient: name,
            emailPosClient: email,
            telPosClient: tel,
            instaPosClient: insta
         })

         setNameExc('Outra excursão')
         setName('')
         setEmail('')
         setTel('')
         setInsta('')
      } else {
         alert('O campo de nome e/ou email e/ou telefone(whatsApp) precisam estarem preenchidos. Por obséquio, preencha os  campos necessários com seus dados para que possamos contata-lo o mais rápido possível.')
      }
   }

   const handleChooseExc = () => {
      const checkIfExcExist = (excursionsCTX?.excursions.find(name => name.titleExc === nameExc)?.idExc)

      if(checkIfExcExist !== undefined) {
         setIdExc(checkIfExcExist) 
      } else {
         setIdExc(1) 
      }
   }

   const keyUpEnter = (e: KeyboardEvent<HTMLInputElement>) => {
      if(name !== '' && email !== '' && tel !== '' && e.code.toLocaleLowerCase() === 'enter') {
         handleNewPossibleClient()
      }
   }

   

   return(
      <section className="modal flex justify-center items-center">

         <article className="border-4 border-blue-300 bg-indigo-300 rounded-md p-4 max-w-[450px]">
            <div className="flex justify-between items-center gap-2">
                  <h1 className="title text-center text-sky-600 text-bold underline text-3xl w-full hover:scale-110 transition-all duration-700">
                     Preencha seus dados
                     {/* { idExc } */}
                  </h1>

                  <XMark w="32" h="32" onClick={ close } fill="#202225" className="cursor-pointer transition-all duration-700 hover:opacity-70" />
            </div>  

            <div className="flex flex-col items-center">
               <p className="content text-center text-blue-600 text-xl my-4 max-h-[220px] overflow-y-auto customScroll">
                  Nossa equipe irá entrar com vossa excelência o mais rápido possível! 😎
               </p>

               <div className="flex flex-col text-indigo-600 w-fit">
                  <form className='flex flex-col gap-1 font-bold'>

                     <span className="flex justify-between items-center gap-1 py-1 border-b border-sky-600">
                        <MapLocationDot w="24" h="24" fill="#9333EA" />

                        <select
                           className='text-center text-sky-600 placeholder:text-indigo-400'
                           value={ nameExc }
                           onChange={ e => setNameExc(e.target.value) }>
                              <option value="Outra excursão">Outra Excursão</option>
                              { excursionsCTX?.excursions.filter(excursion => excursion.idExc !== 1 && excursion.activeExc).map(exc => (
                                 <option value={ exc.titleExc }> { exc.titleExc } </option>
                              )) }
                        </select>
                     </span>

                     <span className="flex justify-center items-center gap-2 py-1 border-b border-sky-600">
                        <User w="24" h="24" fill="#9333EA" />

                        <input type="text" placeholder='Nome'
                           className='bg-transparent text-center text-sky-600 placeholder:text-indigo-400'
                           value={ name }
                           onChange={ e => setName(e.target.value) } />
                     </span>

                     <span className="flex justify-center items-center gap-2 py-1 border-b border-sky-600">
                        <Envelope w="24" h="24" fill="#9333EA" />

                        <input type="text" placeholder='Email'
                           className='bg-transparent text-center text-sky-600 placeholder:text-indigo-400'
                           value={ email }
                           onChange={ e => setEmail(e.target.value) } />
                     </span>

                     <span className="flex justify-center items-center gap-2 py-1 border-b border-sky-600">
                        <WhatsApp w="24" h="24" fill="#9333EA" />

                        <input type="text" placeholder='WhatsApp'
                           className='bg-transparent text-center text-sky-600 placeholder:text-indigo-400'
                           value={ tel }
                           onChange={ e => setTel(e.target.value) } 
                           onKeyUp={ keyUpEnter } />
                     </span>

                     <span className="flex justify-center items-center gap-2 py-1 border-b border-sky-600">
                        <Instagram w="24" h="24" fill="#9333EA" /> 

                        <input type="text" placeholder='@Instagram'
                           className='bg-transparent text-center text-sky-600 placeholder:text-indigo-400'
                           value={ insta }
                           onChange={ e => setInsta(e.target.value) } 
                           onKeyUp={ keyUpEnter } />
                     </span>
                  </form>

                  <button 
                     className={`flex justify-center text-center mt-2 gap-2 font-bold border border-blue-600 text-blue-600 rounded-md py-2 px-4 outline-none transition-all duration-1000 ${btnHover}`}
                     onClick={ handleNewPossibleClient }>
                     Tenho Interesse
                  </button>
               </div>

            </div>

         </article>
      </section>
   )
}