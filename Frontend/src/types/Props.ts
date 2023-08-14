import { Dispatch, SetStateAction } from 'react';
import { Excursion } from "./Excursion"

export type Props = {
   excursion: Excursion

   thumbnail: string
   setThumbnail: Dispatch<SetStateAction<string>>

   titleExc: string
   setTitleExc: Dispatch<SetStateAction<string>>

   prevValueExc: string
   setPrevValueExc: Dispatch<SetStateAction<string>>

   currentValueExc: string
   setCurrentValueExc: Dispatch<SetStateAction<string>>

   descriptionExc: string
   setDescriptionExc: Dispatch<SetStateAction<string>>

   dateExc: string
   setDateExc: Dispatch<SetStateAction<string>>

   returnExc: string
   setReturnExc: Dispatch<SetStateAction<string>>

   openModalExc: string
   setOpenModalExc: Dispatch<SetStateAction<string>>

   toEdit: boolean
   setToEdit: Dispatch<SetStateAction<boolean>>
}