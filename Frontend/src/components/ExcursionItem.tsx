import { Props } from '../types/Props'
import { useContext, useEffect } from 'react'
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

// Modals
import { BahamasModal } from '../modals/BahamasModal'
import { JapanModal } from '../modals/JapanModal'
import { PattayaModal } from '../modals/PattayaModal'
import { SaoThomeModal } from '../modals/SaoThomeModal'
import { TambabaModal } from '../modals/TambabaModal'
import { DefaultModal } from '../modals/DefaultModal'
import { Excursion } from '../types/Excursion'

export const ExcursionItem = ({ showModal, excursion, toEdit, setToEdit, editExcursion, setEditExcursion, titleExc,setIdExc, setThumbnailExc, setTitleExc, setPrevValueExc, setCurrentValueExc, setDescriptionExc, setDateExc, setReturnExc, setOpenModalExc }: Props) => {
   useEffect(() => {
      titleExc
   }, [titleExc])
   const excursionCTX = useContext(ExcursionsContext)

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

   // Associa o inserido no campo 'Thumbnail' à imagem
   const images = {
      'Bahamas01': Bahamas01,
      'JapanTour01': JapanTour01,
      'Tambaba01': Tambaba01,
      'SaoThome01': SaoThome01,
      'PattayaTour01': PattayaTour01,
      'DefaultImage': DefaultImage
   }

   type ImageKeys = 'Bahamas01' | 'JapanTour01' | 'Tambaba01' | 'SaoThome01' | 'PattayaTour01' | 'DefaultImage'

   const modals = {
      'BahamasModal': BahamasModal,
      'JapanModal': JapanModal,
      'TambabaModal': TambabaModal,
      'SaoThomeModal': SaoThomeModal,
      'PattayaModal': PattayaModal,
      'DefaultModal': DefaultModal
   }

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

   const handleDeleteExcursion = (id: number) => {
      excursionCTX?.deleteExcursion(id)
   }


   const btnHover = [
      toEdit ? 'hover:text-dark' : 'hover:text-blue-300',
      toEdit ? 'hover:border-cyan-300' : 'hover:border-blue-300',
      toEdit ? 'hover:bg-cyan-600' : 'hover:bg-blue-600'
   ].join(' ')



   return (
      <>

         {/* { showBahamasModal && <BahamasModal close={ closeModal } /> }

         { showJapanModal && <JapanModal close={ closeModal } /> }

         { showTambabaModal && <TambabaModal close={ closeModal } /> }

         { showSaoThomeModal && <SaoThomeModal close={ closeModal } /> }

         { showPattayaModal && <PattayaModal close={ closeModal } /> }

         { showDefaultModal && <DefaultModal close={ closeModal } /> } */}

         { excursion &&
            <article id='card' className={card}>
               {/* { images.includes(excursion.thumbnail) ? 'Sim' : 'Não' }
            { excursion.thumbnail  } */}
               
               <img
                  src={images.hasOwnProperty(excursion.thumbnail as ImageKeys) ? images[excursion.thumbnail as ImageKeys] : DefaultImage}
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

                  <span id='btn-group' className='flex justify-between border w-full'>
                     <button
                        className={`font-bold border border-cyan-600 text-cyan-600 rounded-md py-2 px-4 outline-none transition-all duration-1000 ${btnHover}`}
                        onClick={ () => showModal!(excursion.openModal) }>
                        Saber +</button>
                     
                     <button
                        className={`font-bold border border-cyan-600 text-cyan-600 rounded-md py-2 px-4 outline-none transition-all duration-1000 ${btnHover}`}
                        onClick={ () => showModal!(excursion.openModal) }>
                        + Infos</button>
                  </span>

                  <span className='flex gap-2'>
                     <PenToSquare w='24' h='24' fill='#0284C7' className='hover:opacity-60 hover:duration-700'
                        onClick={() => handleGetExcursionToEdit(excursion)} />

                     <TrashCan w='24' h='24' fill='#DC2626'
                        className='hover:opacity-60 hover:duration-700'
                        onClick={() => handleDeleteExcursion(excursion.id as number)} />
                  </span>
               </div>

            </article>
         }
      </>
   )
}