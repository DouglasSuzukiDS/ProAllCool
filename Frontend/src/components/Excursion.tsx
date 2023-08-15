import { useState, useContext } from 'react'

// Import das Imagens das excursões
import Bahamas01 from '../assets/images/BahamasClub01.png'

import JapanTour01 from '../assets/images/JapanTour01.png'

import Tambaba01 from '../assets/images/Tambaba01.png'

import SaoThome01 from '../assets/images/SaoThome01.png'

import PattayaTour01 from '../assets/images/PattayaTour01.png'

import DefaultImage from '../assets/images/DefaultImage.png'

import { BahamasClubModal } from '../modals/BahamasClubModal'
import { DefaultModal } from '../modals/DefaultModal'
import { Props } from '../types/Props'
import { PenToSquare } from '../assets/icons/PenToSquare'
import { TrashCan } from '../assets/icons/TrashCan'
import { ExcursionsContext } from '../contexts/ExcursionsContext'

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

type ImageKeys = 'Bahamas01' | 'JapanTour01' | 'Tambaba01' | 'SaoThome01'| 'PattayaTour01' | 'DefaultImage'

export const Excursion = ({ excursion, toEdit, setToEdit }: Props) => {
   const excursionCTX = useContext(ExcursionsContext)

  const [showDefaultModal, setShowDefaultModal] = useState(false)
  const [showBahamasClubModal, setShowBahamasClubModal] = useState(false)

  const toShowDefaultModal = () => {
   setShowDefaultModal(!showDefaultModal)
  }

  const toShowBahamasClubModal = () => {
   setShowBahamasClubModal(!showBahamasClubModal)
  }

  const handleEditExcursion = (id: number) => {
   excursionCTX?.editExcursion(id)
  }

  const handleDeleteExcursion = (id: number) => {
   excursionCTX?.deleteExcursion(id)
  }

   return (
      <>
      { showDefaultModal && <DefaultModal /> }

      { showBahamasClubModal && <BahamasClubModal /> }

      {/* <article id='card' className={ card }>
         <img src={ Bahamas01 } alt="Bahamas Club Thumb" className='rounded-lg w-1/2 h-auto' />

         <div className='p-1 flex flex-col justify-center items-center border border-red-600 customScroll gap-2'>
            <h3 className='text-base font-bold text-center text-blue-600'>Bahamas Club</h3>

            <span className='flex gap-4 justify-center items-center text-center italic'>
               <p className='text-xs text-red-600 font-bold line-through'>De: R$ 5.000</p>
               <p className='text-sky-600 underline font-bold'>Por: R$ 3.800</p>
            </span>

            <span className='flex gap-4 justify-center items-center text-center italic font-bold'>
               <p className='text-indigo-600'>
                  Ida: <span className='text-purple-600'>08/12/23</span>
               </p>

               <p className='text-purple-600'>
                  Retorno: <span className='text-indigo-600'>08/12/23</span>
               </p>
            </span>

            <p className='text-center border flex-1 text-base text-light overflow-y-auto customScroll'>
               Final de semana no Hotel mais famoso de São Paulo, com restaurante próprio, culinária de elite, shows, bar com bartender’s & bargirls altamente qualidifcados. <span className='font-bold text-red-600'>OBS:</span> Shows particulares <span className='font-bold'>NÃO ESTÃO INCLUSOS.</span>
            </p>

            <button onClick={ showModal }>Abrir</button>
         </div>

      </article> */}

      <article id='card' className={card}>
         {/* { images.includes(excursion.thumbnail) ? 'Sim' : 'Não' }
         { excursion.thumbnail  } */}
         <img 
            src={ images.hasOwnProperty(excursion.thumbnail as ImageKeys) ? images[excursion.thumbnail as ImageKeys] : DefaultImage } 
            alt={ excursion.titleExc } 
            className='rounded-lg w-1/2 h-auto' /> 

         {/* { excursion.thumbnail === 'Bahamas01' &&
            <img 
               src={ Bahamas01 } 
               alt={ excursion.titleExc } 
               className='rounded-lg w-1/2 h-auto' /> 
         }

         { excursion.thumbnail === 'JapanTour01' &&
            <img 
               src={ JapanTour01 } 
               alt={ excursion.titleExc } 
               className='rounded-lg w-1/2 h-auto' /> 
         } */}

         <div className='p-1 flex flex-col justify-center items-center border border-red-600 customScroll gap-2'>
            
            <h3 className='text-base font-bold text-center text-blue-600'>{ excursion.titleExc }</h3>

            <span id='values' className='flex gap-4 justify-center items-center text-center italic'>
               <p className='text-xs text-red-600 font-bold line-through'>De: R$ { excursion.prevValueExc }</p>
               <p className='text-sky-600 underline font-bold'>Por: R$ { excursion.currentValueExc }</p>
            </span>

            <span id='dates' className='flex gap-4 justify-center items-center text-center italic font-bold'>
               <p className='text-indigo-600'>
                  Ida: <span className='text-purple-600'>{ excursion.dateExc }</span>
               </p>

               <p className='text-purple-600'>
                  Retorno: <span className='text-indigo-600'>{ excursion.returnExc }</span>
               </p>
            </span>

            <p className='text-center border flex-1 text-sm text-light overflow-y-auto customScroll'>
               { excursion.descriptionExc  }
            </p>

            <button 
               onClick={ excursion.openModal ===  'DefaultModal' ? `${eval(excursion.openModal)}` : toShowDefaultModal }>Abrir</button>
            {/* <button onClick={ toShowDefaultModal }>Modal</button> */}
            <span className='flex gap-2'>
               <PenToSquare w='24' h='24' fill='#0284C7'    className='hover:opacity-60 hover:duration-700' 
               onClick={ () => handleEditExcursion(excursion.id as number) }/>

               <TrashCan w='24' h='24' fill='#DC2626' 
               className='hover:opacity-60 hover:duration-700'
               onClick={ () => handleDeleteExcursion(excursion.id as number) } />
            </span>
         </div>

      </article>
      </>
   )
}