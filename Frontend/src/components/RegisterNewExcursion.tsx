import { useContext, useState } from "react"
import { ExcursionsContext } from "../contexts/ExcursionsContext"

const btnHover = [
   'hover:text-dark',
   'hover:border-blue-300',
   'hover:bg-blue-600'
].join(' ')

export const RegisterNewExcursion = () => {
   const [thumbnail, setThumbnail] = useState('')
   const [titleExc, setTitleExc] = useState('')
   const [prevValueExc, setPrevValueExc] = useState('')
   const [currentValueExc, setCurrentValueExc] = useState('')
   const [descriptionExc, setDescriptionExc] = useState('')
   const [dateExc, setDateExc] = useState('')
   const [returnExc, setReturnExc] = useState('')
   const [openModalExc, setOpenModalExc] = useState('')

   const excursionCTX = useContext(ExcursionsContext)

   const handleAddExcursion = () => {
      if(titleExc !== '' && prevValueExc !== '' && currentValueExc !== '' && descriptionExc !== '' && dateExc  !== '' && returnExc !== '') {
         excursionCTX?.addExcursion({
            thumbnail: thumbnail !== '' ? thumbnail : 'DefaultImage',
            titleExc,
            prevValueExc,
            currentValueExc,
            descriptionExc,
            dateExc,
            returnExc,
            // openModal: openModalExc !== '' ? `< ${openModalExc} />` : '< DefaultModal />', 
            openModal: openModalExc !== '' ? 'Tem valor' : 'Não Tem', 
         })

         setThumbnail('')
         setTitleExc('')
         setPrevValueExc('')
         setCurrentValueExc('')
         setDescriptionExc('')
         setDateExc('')
         setReturnExc('')
         setOpenModalExc('')
      } else {
         alert('Por obséquio preencha os campos necessários.')
      }
   }

   return (
      <div className="border border-red-600 flex flex-col font-semibold w-[350px]">
         <h1 className="flex justify-center text-2xl text-sky-600 font-bold">Registro de Excursão</h1>

         <input 
            type="text" 
            placeholder="Thumbnail"
            className="border-b border-sky-600 bg-transparent p-2 mb-2 text-center text-sky-600"
            value={ thumbnail }
            onChange={ e => setThumbnail(e.target.value) } />

         <input 
            type="text" 
            placeholder="Título da Excursão"
            className="border-b border-sky-600 bg-transparent p-2 mb-2 text-center text-blue-600"
            value={ titleExc }
            onChange={ e => setTitleExc(e.target.value) } />
         
         <div className='flex justify-between gap-2'>
            <input 
               type="text" 
               placeholder="Valor anterior"
               className="border-b border-sky-600 bg-transparent p-2 mb-2 text-center text-red-600 w-1/2"
               value={ prevValueExc } 
               onChange={ e => setPrevValueExc(e.target.value) } />

            <input 
               type="text" 
               placeholder="Valor atual"
               className="border-b border-sky-600 bg-transparent p-2 mb-2 text-center text-sky-600 w-1/2"
               value={ currentValueExc } 
               onChange={ e => setCurrentValueExc(e.target.value) } />
         </div>

         <div className='flex justify-between gap-2'>
            <input 
               type="text" 
               placeholder="Ida"
               className="border-b border-sky-600 bg-transparent p-2 mb-2 text-center text-purple-600 w-1/2"
               value={ dateExc } 
               onChange={ e => setDateExc(e.target.value) } />

            <input 
               type="text" 
               placeholder="Retorno"
               className="border-b border-sky-600 bg-transparent p-2 mb-2 text-center text-indigo-600 w-1/2"
               value={ returnExc } 
               onChange={ e => setReturnExc(e.target.value) } />
         </div>

         <textarea
            className="border-b border-sky-600 bg-transparent p-2 mb-2 text-center text-light"
            placeholder="Descrição da excursão"
            value={ descriptionExc } 
            onChange={ e => setDescriptionExc(e.target.value) }></textarea>

         <input 
            type="text" 
            placeholder="Abrir Modal"
            className="border-b border-sky-600 bg-transparent p-2 mb-2 text-center text-sky-600"
            value={ openModalExc }
            onChange={ e => setOpenModalExc(e.target.value) } />
        

         <button
            className={`font-bold border border-blue-600 text-light rounded-md py-2 px-4 outline-none transition-all duration-1000 ${btnHover}`} 
            onClick={ handleAddExcursion } >
            Enviar
         </button>
      </div>
   )
}