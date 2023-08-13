import { useState } from "react"
import { BahamasClubModal } from "../modals/BahamasClubModal"
import { Excursion } from "./Excursion"
import { RegisterNewExcursion } from "./RegisterNewExcursion"

export const Excursions = () => {
   const [showBahamasClubModal, setShowBahamasClubModal] = useState(false)

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
               <RegisterNewExcursion />
               <Excursion showModal={ toogleBahamasClubModal } close={ toogleBahamasClubModal } />
               <Excursion showModal={ toogleBahamasClubModal } close={ toogleBahamasClubModal } />
               <Excursion showModal={ toogleBahamasClubModal } close={ toogleBahamasClubModal } />
               <Excursion showModal={ toogleBahamasClubModal } close={ toogleBahamasClubModal } />
            </div>
         </section>
      </>
   )
}