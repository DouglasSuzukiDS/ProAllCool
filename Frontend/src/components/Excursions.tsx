import { useContext, useEffect, useState } from "react"
import { BahamasModal } from "../modals/BahamasModal"
import { Excursion } from "./Excursion"
import { FormExcursion } from "./FormExcursion"
import { ExcursionsContext } from "../contexts/ExcursionsContext"

export const Excursions = () => {
   const excursionsCTX = useContext(ExcursionsContext)

   // Excursion Manager
   const [thumbnail, setThumbnail] = useState('')
   const [titleExc, setTitleExc] = useState('')
   const [prevValueExc, setPrevValueExc] = useState('')
   const [currentValueExc, setCurrentValueExc] = useState('')
   const [descriptionExc, setDescriptionExc] = useState('')
   const [dateExc, setDateExc] = useState('')
   const [returnExc, setReturnExc] = useState('')
   const [openModalExc, setOpenModalExc] = useState('')
   const [toEdit, setToEdit] = useState(true)

   // Modals Manager
   const [showBahamasModal, setShowBahamasModal] = useState(false)
   const [showJapanModal, setShowJapanModal] = useState(false)
   const [showTambabaModal, setShowTambabaModal] = useState(false)
   const [showSaoThomeModal, setShowSaoThomeModal] = useState(false)
   const [showPattayaModal, setShowPattayaModal] = useState(false)
   const [showDefaultModal, setShowDefaultModal] = useState(false)

   useEffect(() => {
      excursionsCTX?.getExcursions()
   }, [])

   // min-[850px]:flex-col min-[850px]:items-center
   return(
      <>
         {/* <section id="excursions" className="flex flex-wrap justify-center p-4 my-4 gap-4 border border-green-600 rounded-lg w-full flex-1 overflow-y-auto customScroll z-10">
            { showBahamasClubModal && <BahamasClubModal /> }
               <FormExcursion />
               <Excursion onClick={ toogleBahamasClubModal } />
               <Excursion onClick={ toogleBahamasClubModal } />
               <Excursion onClick={ toogleBahamasClubModal } />
               <Excursion onClick={ toogleBahamasClubModal } />
         </section> */}

         <section id="excursions" className="flex flex-wrap justify-center p-4 my-4 gap-4 border border-green-600 rounded-lg w-full flex-1 overflow-y-auto customScroll z-10 relative">

            <div id="excursionsArea" className="absolute z-0 flex flex-wrap justify-center p-4 my-4 gap-4 border border-green-600 rounded-lg w-full flex-1 overflow-y-auto customScrol">
               <FormExcursion toEdit={toEdit} excursion={{
                  thumbnail: "",
                  titleExc: "",
                  prevValueExc: "",
                  currentValueExc: "",
                  descriptionExc: "",
                  dateExc: "",
                  returnExc: "",
                  openModal: ""
               }} />
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
                        toEdit={ toEdit } setToEdit={ setToEdit } 
                        
                        showBahamasModal={ showBahamasModal }
                        setShowBahamasModal={ setShowBahamasModal }
                               
                        showJapanModal={ showJapanModal }
                        setShowJapanModal={ setShowJapanModal }

                        showTambabaModal={ showTambabaModal }
                        setShowTambabaModal={ setShowTambabaModal }

                        showSaoThomeModal={ showSaoThomeModal }
                        setShowSaoThomeModal={ setShowSaoThomeModal }

                        showPattayaModal={ showPattayaModal }
                        setShowPattayaModal={ setShowPattayaModal }

                        showDefaultModal={ showDefaultModal }
                        setShowDefaultModal={ setShowDefaultModal } />
                  ))
               }
            </div>
         </section>
      </>
   )
}