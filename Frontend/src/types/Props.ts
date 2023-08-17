import { Dispatch, SetStateAction } from 'react';
import { Excursion } from "./Excursion"

export type Props = {
   excursion?: Excursion

   idExc?: number
   setIdExc?: Dispatch<SetStateAction<number>>

   thumbnailExc?: string
   setThumbnailExc?: Dispatch<SetStateAction<string>>

   titleExc?: string
   setTitleExc?: Dispatch<SetStateAction<string>>

   prevValueExc?: string
   setPrevValueExc?: Dispatch<SetStateAction<string>>

   currentValueExc?: string
   setCurrentValueExc?: Dispatch<SetStateAction<string>>

   descriptionExc?: string
   setDescriptionExc?: Dispatch<SetStateAction<string>>

   dateExc?: string
   setDateExc?: Dispatch<SetStateAction<string>>

   returnExc?: string
   setReturnExc?: Dispatch<SetStateAction<string>>

   openModalExc?: string
   setOpenModalExc?: Dispatch<SetStateAction<string>>

   // Edit Excursion
   toEdit?: boolean
   setToEdit?: Dispatch<SetStateAction<boolean>>

   editExcursion?: Excursion 
   setEditExcursion?: Dispatch<SetStateAction<Excursion>>

   // Modals
   showModal?: (modal: string) => void
   closeModal?: () => void

   showBahamasModal?: boolean
   setShowBahamasModal?: Dispatch<SetStateAction<boolean>>

   showJapanModal?: boolean
   setShowJapanModal?: Dispatch<SetStateAction<boolean>>

   showTambabaModal?: boolean
   setShowTambabaModal?: Dispatch<SetStateAction<boolean>>

   showSaoThomeModal?: boolean
   setShowSaoThomeModal?: Dispatch<SetStateAction<boolean>>

   showPattayaModal?: boolean
   setShowPattayaModal?: Dispatch<SetStateAction<boolean>>

   showDefaultModal?: boolean
   setShowDefaultModal?: Dispatch<SetStateAction<boolean>>
}