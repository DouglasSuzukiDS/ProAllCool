import { XMark } from "../assets/icons/XMark"
import { Modal } from "../types/Modal"
import PattayaTour01 from '../assets/images/PattayaTour01.png'
import PattayaTour02 from '../assets/images/PattayaTour02.png'

export const PattayaModal = ({ close, showFormPossibleClient }: Modal) => {
   const btnHover = [
      'hover:text-blue-300',
      'hover:border-blue-300',
      'hover:bg-blue-600'
   ].join(' ')

   return (
      <section className="modal flex justify-center items-center text-indigo-600">
         <article className="border-4 border-blue-300 bg-indigo-300 rounded-md p-4 max-w-[500px] max-h-[500px] overflow-y-auto customScroll">
            <div className="flex justify-between items-center gap-2">
               <h1 className="title text-center text-sky-600 text-bold underline text-3xl w-full hover:scale-110 transition-all duration-700">
                  Pattaya Tour 🎆
               </h1>

               <XMark w="32" h="32" onClick={close} fill="#202225" className="cursor-pointer transition-all duration-700 hover:opacity-70" />
            </div>

            <figure className="my-4">
               <img src={PattayaTour01} alt="Thumbnail da cidade de Pattaya" className={`rounded-md`} />

               <figcaption className="text-center text-xs text-gray-600 mt-2">
                  Thumbnail da cidade de Pattaya, Tailândia.
               </figcaption>
            </figure>

            <div className="flex flex-col items-center">
               <p className="first-letter:ml-4">
                  Tour para a cidade de <span className="italic font-medium">Pattaya</span>, na Tailândia.
               </p>

               <button
                  className={`btnCTA flex justify-center text-center my-2 gap-2 font-bold border border-blue-600 text-blue-600 rounded-md py-2 px-4 outline-none transition-all duration-1000 ${btnHover}`}
                  onClick={showFormPossibleClient!}>
                  Quero Ir
               </button>

               <section>
                  <p className="first-letter:ml-4">
                     <span className="font-bold">Pattaya</span> além de ser uma linda cidade para de visitar, possuindo uma culinária a base de pescados, bares, e entretenimento adulto, é uma das cidades mais famosas do continente asiático, por ser conciderada a cappial mundial da postituíção. Onde é m mercado altamente lucrativo que faz a cidade sempre estar com muitos turistas.
                  </p>

                  <figure className="my-4">
                     <img src={PattayaTour02} alt="Vista noturna de Pattaya" className={`rounded-md`} />

                     <figcaption className="text-center text-xs text-gray-600 mt-2">
                        Vista noturna de Pattaya.
                     </figcaption>
                  </figure>
               </section>

               <section className="flex flex-col justify-center items-center">
                  <p className="mt-2 first-letter:ml-4">
                     Ficou interessado em conhecer <span className="font-bold">Pattaya</span>? Venha embarcar nessa aventura! Estamos te aguardando.
                  </p>

                  <button
                     className={`btnCTA flex justify-center text-center my-2 gap-2 font-bold border border-blue-600 text-blue-600 rounded-md py-2 px-4 outline-none transition-all duration-1000 ${btnHover}`}
                     onClick={showFormPossibleClient!}>
                     Quero minha vaga !
                  </button>
               </section>

            </div>
         </article>
      </section>
   )
}