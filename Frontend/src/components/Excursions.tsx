import { useContext, useEffect, useState } from "react"
import { BahamasClubModal } from "../modals/BahamasClubModal"
import { Excursion } from "./Excursion"
import { RegisterNewExcursion } from "./RegisterNewExcursion"
import { ExcursionsContext } from "../contexts/ExcursionsContext"

export const Excursions = () => {
   const [showBahamasClubModal, setShowBahamasClubModal] = useState(false)

   const [thumbnail, setThumbnail] = useState('')
   const [titleExc, setTitleExc] = useState('')
   const [prevValueExc, setPrevValueExc] = useState('')
   const [currentValueExc, setCurrentValueExc] = useState('')
   const [descriptionExc, setDescriptionExc] = useState('')
   const [dateExc, setDateExc] = useState('')
   const [returnExc, setReturnExc] = useState('')
   const [openModalExc, setOpenModalExc] = useState('')
   const [toEdit, setToEdit] = useState(true)

   const excursionsCTX = useContext(ExcursionsContext)

   useEffect(() => {
      excursionsCTX?.getExcursions()
   }, [])

   const toogleBahamasClubModal = () => {
      setShowBahamasClubModal(!showBahamasClubModal)
   }
   // min-[850px]:flex-col min-[850px]:items-center
   return(
      <>
         {/* <section id="excursions" className="flex flex-wrap justify-center p-4 my-4 gap-4 border border-green-600 rounded-lg w-full flex-1 overflow-y-auto customScroll z-10">
            { showBahamasClubModal && <BahamasClubModal /> }
               <RegisterNewExcursion />
               <Excursion onClick={ toogleBahamasClubModal } />
               <Excursion onClick={ toogleBahamasClubModal } />
               <Excursion onClick={ toogleBahamasClubModal } />
               <Excursion onClick={ toogleBahamasClubModal } />
         </section> */}

         <section id="excursions" className="flex flex-wrap justify-center p-4 my-4 gap-4 border border-green-600 rounded-lg w-full flex-1 overflow-y-auto customScroll z-10 relative">
            { showBahamasClubModal && <BahamasClubModal /> }

            <div id="excursionsArea" className="absolute z-0 flex flex-wrap justify-center p-4 my-4 gap-4 border border-green-600 rounded-lg w-full flex-1 overflow-y-auto customScrol">
               <RegisterNewExcursion toEdit={ toEdit } />
               {/* <Excursion showModal={ toogleBahamasClubModal } close={ toogleBahamasClubModal } />
               <Excursion showModal={ toogleBahamasClubModal } close={ toogleBahamasClubModal } />
               <Excursion showModal={ toogleBahamasClubModal } close={ toogleBahamasClubModal } />
               <Excursion showModal={ toogleBahamasClubModal } close={ toogleBahamasClubModal } /> */}
               
               {
                  excursionsCTX?.excursions.map(excursion => (
                     <Excursion key={ excursion.id } 
                        excursion={ excursion } 
                        thumbnail={ thumbnail } setThumbnail={ setThumbnail }
                        titleExc={ titleExc } setTitleExc={ setTitleExc }
                        prevValueExc={ prevValueExc } setPrevValueExc={ setPrevValueExc }
                        currentValueExc={ currentValueExc } setCurrentValueExc={ setCurrentValueExc }
                        descriptionExc={ descriptionExc } setDescriptionExc={ setDescriptionExc }
                        dateExc={ dateExc } setDateExc = { setDateExc }
                        returnExc={ returnExc } setReturnExc={ setReturnExc }
                        openModalExc={ openModalExc } setOpenModalExc={ setOpenModalExc }
                        toEdit={ toEdit } setToEdit={ setToEdit } />
                  ))
               }
            </div>
         </section>
      </>
   )
}