import { Dispatch, SetStateAction } from 'react';
import { Excursion } from "./Excursion"

export type Props = {
   excursion: Excursion

   thumbnail?: string
   setThumbnail?: Dispatch<SetStateAction<string>>

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

   toEdit?: boolean
   setToEdit?: Dispatch<SetStateAction<boolean>>

   // Modals

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