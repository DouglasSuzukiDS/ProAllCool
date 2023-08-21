import { useContext, useEffect, useState } from "react"
import { ExcursionItem } from "./ExcursionItem"
import { FormExcursion } from "./FormExcursion"
import { ExcursionsContext } from "../contexts/ExcursionsContext"
import { Props } from "../types/Props"
import { useAuth } from "../hooks/Hooks"

export const Excursions = ({ showModal, setShowPossibleClientModal }: Props) => {

   const excursionsCTX = useContext(ExcursionsContext)
   const auth = useAuth()

   // Excursion Manager
   const [idExc, setIdExc] = useState(0)
   const [thumbnailExc, setThumbnailExc] = useState('')
   const [titleExc, setTitleExc] = useState('')
   const [prevValueExc, setPrevValueExc] = useState('')
   const [currentValueExc, setCurrentValueExc] = useState('')
   const [descriptionExc, setDescriptionExc] = useState('')
   const [dateExc, setDateExc] = useState('')
   const [returnExc, setReturnExc] = useState('')
   const [openModalExc, setOpenModalExc] = useState('')
   const [toEdit, setToEdit] = useState(false)

   const [loading, setLoading] = useState(true)

   const checkIfAuth = () => {
      //alert('check')
      localStorage.getItem('Auth') ? auth?.setAuth(true) : auth?.setAuth(false)
   }

   useEffect(() => {
      setLoading(true)

      excursionsCTX?.getExcursions()

      setLoading(false)
   }, [])

   useEffect(() => {
      checkIfAuth()
   }, [auth?.auth])
   
   return(
      <>
         <section id="excursions" 
            className="flex flex-wrap justify-center my-4 gap-4 border-4 border-cyan-600 rounded-lg w-full flex-1 overflow-y-auto customScroll z-10 relative" >

            <div id="excursionsArea" className={`absolute z-0 flex flex-wrap justify-center p-4 gap-4 rounded-lg w-full h-full flex-1 `}>

               { auth?.auth &&
                  <FormExcursion toEdit={toEdit} setToEdit={ setToEdit }
                     idExc={ idExc } setIdExc={ setIdExc }
                     thumbnailExc={ thumbnailExc } setThumbnailExc={ setThumbnailExc }
                     titleExc={ titleExc } setTitleExc={ setTitleExc }
                     prevValueExc={ prevValueExc } setPrevValueExc={ setPrevValueExc }
                     currentValueExc={ currentValueExc } setCurrentValueExc={ setCurrentValueExc }
                     descriptionExc={ descriptionExc } setDescriptionExc={ setDescriptionExc }
                     dateExc={ dateExc } setDateExc = { setDateExc }
                     returnExc={ returnExc } setReturnExc={ setReturnExc }
                     openModalExc={ openModalExc } setOpenModalExc={ setOpenModalExc } />
               }

               {
                  loading && <p className="flex justify-center items-center font-bold text-3xl text-sky-600 h-full ">
                     Carregando ...
                  </p>
               }

               {
                  excursionsCTX?.excursions && 
                  excursionsCTX?.excursions.length <= 0 && 
                  <p className="flex justify-center items-center font-bold text-3xl text-sky-600 h-full">
                     Não há excursões ativas.
                  </p>
               }
               
               {
                  excursionsCTX?.excursions.map(excursion => (
                     <ExcursionItem key={ excursion.id } 
                        excursion={ excursion }
                        
                        showModal={ showModal }

                        setShowPossibleClientModal={ setShowPossibleClientModal }

                        idExc={ idExc } setIdExc={ setIdExc }
                        thumbnailExc={ thumbnailExc } setThumbnailExc={ setThumbnailExc }
                        titleExc={ titleExc } setTitleExc={ setTitleExc }
                        prevValueExc={ prevValueExc } setPrevValueExc={ setPrevValueExc }
                        currentValueExc={ currentValueExc } setCurrentValueExc={ setCurrentValueExc }
                        descriptionExc={ descriptionExc } setDescriptionExc={ setDescriptionExc }
                        dateExc={ dateExc } setDateExc = { setDateExc }
                        returnExc={ returnExc } setReturnExc={ setReturnExc }
                        openModalExc={ openModalExc } setOpenModalExc={ setOpenModalExc }
                        
                        toEdit={ toEdit } setToEdit={ setToEdit } 
                     />
                  ))
               }
            </div>
         </section>
      </>
   )
}