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
            className="flex flex-wrap items-center justify-center gap-4 border-4 border-cyan-600 w-full h-full rounded-lg z-10 relative overflow-y-auto customScroll" >

            <div id="excursionsArea" className={`z-0 flex flex-wrap p-2 justify-center gap-4 rounded-lg h-[50px]overflow-y-auto customScroll`}>

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
               
               {  auth?.auth ? 
                  // Lista as todas as excursões
                  excursionsCTX?.excursions.filter(excursion => excursion.idExc !== 1).map(excursion =>
                     <ExcursionItem key={ excursion.idExc } 
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
                  ) :
                  // Lista apenas as excursões ativas
                  excursionsCTX?.excursions.filter(excursion => excursion.idExc !== 1 && excursion.activeExc).map(excursion =>
                     <ExcursionItem key={ excursion.idExc } 
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
                  )
               }
            </div>
         </section>
      </>
   )
}