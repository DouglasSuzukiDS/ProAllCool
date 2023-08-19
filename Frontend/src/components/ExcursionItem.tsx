import { Props } from '../types/Props'
import { useContext } from 'react'
import { ExcursionsContext } from '../contexts/ExcursionsContext'

import { PenToSquare } from '../assets/icons/PenToSquare'
import { TrashCan } from '../assets/icons/TrashCan'

// Import das Imagens das excursões
import Bahamas01 from '../assets/images/BahamasClub01.png'

import JapanTour01 from '../assets/images/JapanTour01.png'

import Tambaba01 from '../assets/images/Tambaba01.png'

import SaoThome01 from '../assets/images/SaoThome01.png'

import PattayaTour01 from '../assets/images/PattayaTour01.png'

import DefaultImage from '../assets/images/DefaultImage.png'
import { Excursion } from '../types/Excursion'
import { useAuth } from '../hooks/Hooks'


export const ExcursionItem = ({ showModal, excursion, setToEdit,setIdExc, setThumbnailExc, setTitleExc, setPrevValueExc, setCurrentValueExc, setDescriptionExc, setDateExc, setReturnExc, setOpenModalExc }: Props) => {
   const excursionCTX = useContext(ExcursionsContext)
   const auth = useAuth()

   // Style Classes
   const card = [
      'flex',
      'text-sm',
      'gap-2',
      'p-4',
      'border-2',
      'border-blue-600',
      'rounded-lg',
      'w-[450px]',
      'h-[300px]',
      'transition-all',
      'duration-700',
      'hover:border-opacity-50',
      'overflow-y-auto',
      'customScroll',
   ].join(' ')

   const btnKnowHover = [
      'hover:text-sky-300',
      'hover:border-sky-300',
      'hover:bg-sky-600'
   ].join(' ')

   const btnInfoHover = [
      'hover:text-green-300',
      'hover:border-green-300',
      'hover:bg-green-600'
   ].join(' ')

   // Show the Thumbnail
   const showThumbnail = (thumbail: string) => {
      switch(thumbail) {
         case 'Bahamas01':
            return Bahamas01
         case'JapanTour01':
            return JapanTour01
         case 'Tambaba01':
            return Tambaba01
         case 'SaoThome01':
            return SaoThome01
         case 'PattayaTour01' :
            return PattayaTour01
         default: 
            return DefaultImage
      }
   }

   // Get Excurion for edit
   const handleGetExcursionToEdit = (excursion: Excursion) => {
      console.log(excursion)
      if(setToEdit && setIdExc && setThumbnailExc && setTitleExc && setPrevValueExc && setCurrentValueExc && setDescriptionExc && setDateExc && setReturnExc && setOpenModalExc) {
         setToEdit(true)

         setIdExc(excursion.id!)
         setThumbnailExc(excursion.thumbnail)
         setTitleExc(excursion.titleExc)
         setPrevValueExc(excursion.prevValueExc)
         setCurrentValueExc(excursion.currentValueExc)
         setDescriptionExc(excursion.descriptionExc)
         setDateExc(excursion.dateExc)
         setReturnExc(excursion.returnExc,)
         setOpenModalExc(excursion.openModal)
      }
   }

   // Delete Excursion
   const handleDeleteExcursion = (id: number) => {
      excursionCTX?.deleteExcursion(id)
   }

   return (
      <>
         { excursion &&
            <article id='card' className={card}>

               <img
                  src={ showThumbnail(excursion.thumbnail) }
                  alt={excursion.titleExc}
                  className='rounded-lg w-1/2 h-auto' />

               <div className='p-1 flex flex-col justify-center items-center border border-red-600 customScroll gap-2'>

                  <h3 className='text-base font-bold text-center text-blue-600'>{excursion.titleExc}</h3>

                  <span id='values' className='flex gap-4 justify-center items-center text-center italic'>
                     <p className='text-xs text-red-600 font-bold line-through'>De: R$ {excursion.prevValueExc}</p>
                     <p className='text-sky-600 underline font-bold'>Por: R$ {excursion.currentValueExc}</p>
                  </span>

                  <span id='dates' className='flex gap-4 justify-center items-center text-center italic font-bold'>
                     <p className='text-indigo-600'>
                        Ida: <span className='text-purple-600'>{excursion.dateExc}</span>
                     </p>

                     <p className='text-purple-600'>
                        Retorno: <span className='text-indigo-600'>{excursion.returnExc}</span>
                     </p>
                  </span>

                  <p className='text-center border flex-1 text-sm text-light overflow-y-auto customScroll'>
                     {excursion.descriptionExc}
                  </p>

                  <span id='btn-group' className='flex justify-between border w-full gap-2'>
                     <button
                        className={`font-bold border border-sky-600 text-sky-600 rounded-md py-2 px-4 outline-none transition-all duration-1000 w-1/2 ${btnKnowHover}`}
                        onClick={ () => showModal!(excursion.openModal) }>
                        Saber +</button>
                     
                     <button
                        className={`font-bold border border-green-600 text-green-600 rounded-md py-2 px-4 outline-none transition-all duration-1000 w-1/2 ${btnInfoHover}`}
                        onClick={ () => showModal!(excursion.openModal) }>
                        + Infos</button>
                  </span>

                  { auth?.auth &&
                     <span className='flex gap-2'>
                        <PenToSquare w='24' h='24' fill='#0284C7' className='hover:opacity-60 hover:duration-700'
                           onClick={() => handleGetExcursionToEdit(excursion)} />

                        <TrashCan w='24' h='24' fill='#DC2626'
                           className='hover:opacity-60 hover:duration-700'
                           onClick={() => handleDeleteExcursion(excursion.id as number)} />
                     </span>
                  }
               </div>

            </article>
         }
      </>
   )
}