import { useState } from 'react'
import { Excursions } from "./components/Excursions"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { ExcursionsProvider } from "./contexts/ExcursionsContext"
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

   const [showAboutUsModal, setShowAboutUsModal] = useState(false)
   const [showContactModal, setShowContactModal] = useState(false)
   const [showDepositionsModal, setShowDepositionsModal] = useState(false)

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

      setShowAboutUsModal!(false)
      setShowContactModal!(false)
      setShowDepositionsModal!(false)
   }

   const showFormPossibleClient = () => {
      setShowPossibleClientModal!(true)
   }

   return ( 
      <main className="w-full h-screen flex justify-center border p-2">
         <section className="container container-lg flex justify-between flex-col p-4 h-full border border-yellow-600 rounded-lg relative">

            {/* Modals */}
            {showBahamasModal && <BahamasModal close={closeModal} />}

            {showUfoModal && <UfoModal close={closeModal} showFormPossibleClient={ showFormPossibleClient } />}

            {showJapanModal && <JapanModal close={closeModal} />}

            {showTambabaModal && <TambabaModal close={closeModal} />}

            {showSaoThomeModal && <SaoThomeModal close={closeModal} />}

            {showPattayaModal && <PattayaModal close={closeModal} />}

            {showDefaultModal && <DefaultModal close={closeModal} />}

            {showPossibleClientModal && <PossibleClientModal close={closeModal} />}

            {showAboutUsModal && <AboutUsModal close={closeModal} />}
            {showContactModal && <ContactModal close={closeModal} />}
            {showDepositionsModal && <DepositionsModal close={closeModal} />}

            <Header 
               showAboutUsModal={showAboutUsModal} setShowAboutUsModal={setShowAboutUsModal}
               showContactModal={showContactModal} setShowContactModal={setShowContactModal}
               showDepositionsModal={showDepositionsModal} setShowDepositionsModal={setShowDepositionsModal} />

            <ExcursionsProvider>
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
            </ExcursionsProvider>
            
            <Footer />
         </section>

      </main>

   )
}

export default App
