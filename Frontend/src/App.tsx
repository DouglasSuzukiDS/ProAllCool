import { useState } from 'react'
import { Excursions } from "./components/Excursions"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { BahamasModal } from './modals/BahamasModal'
import { JapanModal } from './modals/JapanModal'
import { TambabaModal } from './modals/TambabaModal'
import { SaoThomeModal } from './modals/SaoThomeModal'
import { PattayaModal } from './modals/PattayaModal'
import { DefaultModal } from './modals/DefaultModal'
import { PossibleClientModal } from './modals/PossibleClientModal'
import { UfoModal } from './modals/UfoModal'
import { AboutUsModal } from './modals/AboutUsModal'
import { ContactModal } from './modals/ContactModal'
import { DepositionsModal } from './modals/DepositationsModal'
import { DevelopersModal } from './modals/DevelopersModal'
import { PossibleClientsTableModal } from './modals/PossibleClientsTableModal'

function App() {
   // Manager Modals
   const [showBahamasModal, setShowBahamasModal] = useState(false)
   const [showUfoModal, setShowUfoModal] = useState(false)
   const [showJapanModal, setShowJapanModal] = useState(false)
   const [showTambabaModal, setShowTambabaModal] = useState(false)
   const [showSaoThomeModal, setShowSaoThomeModal] = useState(false)
   const [showPattayaModal, setShowPattayaModal] = useState(false)
   const [showDefaultModal, setShowDefaultModal] = useState(false)
   const [showPossibleClientModal, setShowPossibleClientModal] = useState(false)

   const [showDevelopersModal, setShowDevelopersModal] = useState(false)
   const [showAboutUsModal, setShowAboutUsModal] = useState(false)
   const [showContactModal, setShowContactModal] = useState(false)
   const [showDepositionsModal, setShowDepositionsModal] = useState(false)
   const [showPossibleClientsTableModal, setShowPossibleClientsTableModal] = useState(false)

   const showModal = (modal: string) => {
      console.log(modal)
      closeModal()

      switch (modal) {
         case 'BahamasModal':
            setShowBahamasModal!(!showBahamasModal)
            break
         case 'UfoModal':
            setShowUfoModal!(!showUfoModal)
            break
         case 'JapanModal':
            setShowJapanModal!(!showJapanModal)
            break
         case 'TambabaModal':
            setShowTambabaModal!(!showTambabaModal)
            break
         case 'SaoThomeModal':
            setShowSaoThomeModal!(!showSaoThomeModal)
            break
         case 'PattayaModal':
            setShowPattayaModal!(!showPattayaModal)
            break
         default:
            setShowDefaultModal!(!showDefaultModal)
            break
      }
   }

   const closeModal = () => {
      setShowBahamasModal!(false)
      setShowUfoModal!(false)
      setShowJapanModal!(false)
      setShowTambabaModal!(false)
      setShowSaoThomeModal!(false)
      setShowPattayaModal!(false)
      setShowDefaultModal!(false)
      setShowPossibleClientModal!(false)

      setShowDevelopersModal!(false)
      setShowAboutUsModal!(false)
      setShowContactModal!(false)
      setShowDepositionsModal!(false)
      setShowPossibleClientsTableModal!(false)
   }

   const showFormPossibleClient = () => {
      setShowPossibleClientModal!(true)
   }

   return (
      <>
         {/* Modals */}
         {showBahamasModal && <BahamasModal close={closeModal} showFormPossibleClient={showFormPossibleClient} />}

         {showUfoModal && <UfoModal close={closeModal} showFormPossibleClient={showFormPossibleClient} />}

         {showJapanModal && <JapanModal close={closeModal} showFormPossibleClient={showFormPossibleClient} />}

         {showTambabaModal && <TambabaModal close={closeModal} showFormPossibleClient={showFormPossibleClient} />}

         {showSaoThomeModal && <SaoThomeModal close={closeModal} showFormPossibleClient={showFormPossibleClient} />}

         {showPattayaModal && <PattayaModal close={closeModal} showFormPossibleClient={showFormPossibleClient} />}

         {showDefaultModal && <DefaultModal close={closeModal} showFormPossibleClient={showFormPossibleClient} />}

         {showPossibleClientModal && <PossibleClientModal close={closeModal} />}

         {showDevelopersModal && <DevelopersModal close={closeModal} />}
         {showAboutUsModal && <AboutUsModal close={closeModal} />}
         {showContactModal && <ContactModal close={closeModal} />}
         {showDepositionsModal && <DepositionsModal close={closeModal} />}
         {showPossibleClientsTableModal && <PossibleClientsTableModal close={closeModal} />}
         
         <main className="w-full h-screen flex justify-center p-2">
            <section className="container container-lg flex justify-between flex-col p-4 h-full border border-yellow-600 rounded-lg relative">

               {/* Modals */}
               {/* {showBahamasModal && <BahamasModal close={closeModal} showFormPossibleClient={ showFormPossibleClient } />}

            {showUfoModal && <UfoModal close={closeModal} showFormPossibleClient={ showFormPossibleClient } />}

            {showJapanModal && <JapanModal close={closeModal} showFormPossibleClient={ showFormPossibleClient } />}

            {showTambabaModal && <TambabaModal close={closeModal} showFormPossibleClient={ showFormPossibleClient } />}

            {showSaoThomeModal && <SaoThomeModal close={closeModal} showFormPossibleClient={ showFormPossibleClient } />}

            {showPattayaModal && <PattayaModal close={closeModal} showFormPossibleClient={ showFormPossibleClient } />}

            {showDefaultModal && <DefaultModal close={closeModal} showFormPossibleClient={ showFormPossibleClient } />}

            {showPossibleClientModal && <PossibleClientModal close={closeModal} />}

            {showDevelopersModal && <DevelopersModal close={closeModal} />}
            {showAboutUsModal && <AboutUsModal close={closeModal} />}
            {showContactModal && <ContactModal close={closeModal} />}
            {showDepositionsModal && <DepositionsModal close={closeModal} />}
            { showPossibleClientsTableModal && <PossibleClientsTableModal close={ closeModal } /> } */}

               <Header
                  showDevelopersModal={showDevelopersModal} setShowDevelopersModal={setShowDevelopersModal}
                  showAboutUsModal={showAboutUsModal} setShowAboutUsModal={setShowAboutUsModal}
                  showContactModal={showContactModal} setShowContactModal={setShowContactModal}
                  showDepositionsModal={showDepositionsModal} setShowDepositionsModal={setShowDepositionsModal}
                  showPossibleClientsTableModal={showPossibleClientsTableModal}
                  setShowPossibleClientsTableModal={setShowPossibleClientsTableModal} />

               <Excursions
                  showModal={showModal}
                  closeModal={closeModal}

                  showBahamasModal={showBahamasModal}
                  setShowBahamasModal={setShowBahamasModal}

                  showUfoModal={showUfoModal}
                  setShowUfoModal={setShowUfoModal}

                  showJapanModal={showJapanModal}
                  setShowJapanModal={setShowJapanModal}

                  showTambabaModal={showTambabaModal}
                  setShowTambabaModal={setShowTambabaModal}

                  showSaoThomeModal={showSaoThomeModal}
                  setShowSaoThomeModal={setShowSaoThomeModal}

                  showPattayaModal={showPattayaModal}
                  setShowPattayaModal={setShowPattayaModal}

                  showDefaultModal={showDefaultModal}
                  setShowDefaultModal={setShowDefaultModal}

                  showPossibleClientModal={showPossibleClientModal}
                  setShowPossibleClientModal={setShowPossibleClientModal} />

               <Footer />
            </section>

         </main>
      </>

   )
}

export default App
