import { useContext } from "react"
import { ExcursionsContext } from "../contexts/ExcursionsContext"
import { Props } from "../types/Props"

export const FormExcursion = ({
      toEdit, setToEdit, 
      idExc,
      thumbnailExc, setThumbnailExc,
      titleExc, setTitleExc,
      prevValueExc, setPrevValueExc,
      currentValueExc, setCurrentValueExc,
      descriptionExc, setDescriptionExc,
      dateExc, setDateExc,
      returnExc, setReturnExc,
      openModalExc, setOpenModalExc

    }: Props) => {
   const formHover = [
      toEdit ? 'hover:border-cyan-300' : 'hover:border-blue-300'
   ].join(' ')

   const btnHover = [
      toEdit ? 'hover:text-dark' : 'hover:text-blue-300',
      toEdit ? 'hover:border-cyan-300' : 'hover:border-blue-300',
      toEdit ? 'hover:bg-cyan-600' : 'hover:bg-blue-600'
   ].join(' ')

   const btnCancelHover = [
      'hover:text-red-300',
      'hover:border-red-300',
      'hover:bg-red-600'
   ].join(' ')

   const btnClearHover = [
      'hover:text-yellow-300',
      'hover:border-yellow-300',
      'hover:bg-yellow-600'
   ].join(' ')

   const excursionCTX = useContext(ExcursionsContext)

   const handleAddExcursion = () => {
      if(titleExc !== '' && prevValueExc !== '' && currentValueExc !== '' && descriptionExc !== '' && dateExc  !== '' && returnExc !== '') {

         excursionCTX?.addExcursion({
            thumbnail: thumbnailExc !== '' ? thumbnailExc! : 'DefaultImage',
            titleExc: titleExc!,
            prevValueExc: prevValueExc!,
            currentValueExc: currentValueExc!,
            descriptionExc: descriptionExc!,
            dateExc: descriptionExc!,
            returnExc: returnExc!,
            //openModal: openModalExc !== '' ? `< ${openModalExc} />` : '< DefaultModal />', 
            openModal: openModalExc !== '' ? openModalExc! : 'DefaultModal', 
         })

         setThumbnailExc!('')
         setTitleExc!('')
         setPrevValueExc!('')
         setCurrentValueExc!('')
         setDescriptionExc!('')
         setDateExc!('')
         setReturnExc!('')
         setOpenModalExc!('')
      } else {
         alert('Por obséquio preencha os campos necessários.')
      }
   }

   const handleEditExcursion = () => {
      // alert('Edit')
      console.log(idExc)
      console.log(thumbnailExc)
      console.log(titleExc)
      console.log(prevValueExc)
      console.log(currentValueExc)
      console.log(descriptionExc)
      console.log(dateExc)
      console.log(returnExc)
      console.log(openModalExc)

      if(titleExc !== '' && prevValueExc !== '' && currentValueExc !== '' && descriptionExc !== '' && dateExc  !== '' && returnExc !== '') {
         excursionCTX?.editExcursion(idExc!, {
            thumbnail: thumbnailExc !== '' ? thumbnailExc! : 'DefaultImage',
            titleExc: titleExc!,
            prevValueExc: prevValueExc!,
            currentValueExc: currentValueExc!,
            descriptionExc: descriptionExc!,
            dateExc: dateExc!,
            returnExc: returnExc!,
            // openModal: openModalExc !== '' ? `< ${openModalExc} />` : '< DefaultModal />', 
            openModal: openModalExc !== '' ? openModalExc! : 'DefaultModal', 
         })

         handleCancelEdit()
      } else {
         alert('Por obséquio preencha os campos necessários.')
      }
   }

   const handleCancelEdit = () => {
      setThumbnailExc!('')
      setTitleExc!('')
      setPrevValueExc!('')
      setCurrentValueExc!('')
      setDescriptionExc!('')
      setDateExc!('')
      setReturnExc!('')
      setOpenModalExc!('')
      setToEdit!(false)
   }

   return (
      <div className={`border-2 border-blue-600 rounded-lg p-4 flex flex-col font-semibold w-[350px] transition-all duration-1000 ${ formHover }`}>
         <h1 id="h1-newExcursion" 
            className={`flex justify-center text-2xl font-bold ${ toEdit ? 'text-cyan-600 ' : 'text-sky-600 font-bold' } `}>
            { toEdit ? 'Edição de Excursão' : 'Registro de Excursão' } 
         </h1>

         <input 
            type="text" 
            placeholder="Thumbnail"
            className="border-b border-sky-600 bg-transparent p-2 mb-2 text-center text-sky-600"
            value={ thumbnailExc }
            onChange={ e => setThumbnailExc!(e.target.value) } />

         <input 
            type="text" 
            placeholder="Título da Excursão"
            className="border-b border-sky-600 bg-transparent p-2 mb-2 text-center text-blue-600"
            value={ titleExc }
            onChange={ e => setTitleExc!(e.target.value) } />
         
         <div className='flex justify-between gap-2'>
            <input 
               type="text" 
               placeholder="Valor anterior"
               className="border-b border-sky-600 bg-transparent p-2 mb-2 text-center text-red-600 w-1/2"
               value={ prevValueExc } 
               onChange={ e => setPrevValueExc!(e.target.value) } />

            <input 
               type="text" 
               placeholder="Valor atual"
               className="border-b border-sky-600 bg-transparent p-2 mb-2 text-center text-sky-600 w-1/2"
               value={ currentValueExc } 
               onChange={ e => setCurrentValueExc!(e.target.value) } />
         </div>

         <div className='flex justify-between gap-2'>
            <input 
               type="text" 
               placeholder="Ida"
               className="border-b border-sky-600 bg-transparent p-2 mb-2 text-center text-purple-600 w-1/2"
               value={ dateExc } 
               onChange={ e => setDateExc!(e.target.value) } />

            <input 
               type="text" 
               placeholder="Retorno"
               className="border-b border-sky-600 bg-transparent p-2 mb-2 text-center text-indigo-600 w-1/2"
               value={ returnExc } 
               onChange={ e => setReturnExc!(e.target.value) } />
         </div>

         <textarea
            className="border-b border-sky-600 bg-transparent p-2 mb-2 text-center text-light overflow-y-auto customScroll"
            placeholder="Descrição da excursão"
            value={ descriptionExc } 
            onChange={ e => setDescriptionExc!(e.target.value) }></textarea>

         <input 
            type="text" 
            placeholder="Abrir Modal"
            className="border-b border-sky-600 bg-transparent p-2 mb-2 text-center text-sky-600"
            value={ openModalExc }
            onChange={ e => setOpenModalExc!(e.target.value) } />
        
         { toEdit ? 
            <div className="flex justify-between gap-2">
               <button
                  className={`flex justify-center text-center gap-2 font-bold border border-red-600 text-red-600 rounded-md py-2 px-4 outline-none transition-all duration-1000 w-1/2 ${btnCancelHover}`} 
                  onClick={ handleCancelEdit } >
                  Cancelar
               </button>

               <button
                  className={`flex justify-center text-center gap-2 font-bold border border-cyan-600 text-cyan-600 rounded-md py-2 px-4 outline-none transition-all duration-1000 w-1/2 ${btnHover}`} 
                  onClick={ handleEditExcursion } >
                  Editar
               </button>
            </div> :
            <div className="flex justify-between gap-2">
               <button
                  className={`flex justify-center text-center gap-2 font-bold border border-yellow-600 text-yellow-600 rounded-md py-2 px-4 outline-none transition-all duration-1000 w-1/2 ${btnClearHover}`} 
                  onClick={ handleCancelEdit } >
                  Limpar
               </button>

               <button
                  className={`flex justify-center text-center gap-2 font-bold border border-blue-600 text-blue-600 rounded-md py-2 px-4 outline-none transition-all duration-1000 w-1/2 ${btnHover}`} 
                  onClick={ handleAddExcursion } >
                  Enviar
               </button>
            </div>
         }
      </div>
   )
}