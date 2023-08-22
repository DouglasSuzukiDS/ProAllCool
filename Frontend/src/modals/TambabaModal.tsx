import { XMark } from "../assets/icons/XMark"
import { Modal } from "../types/Modal"
import Tambaba01 from '../assets/images/Tambaba01.png'

export const TambabaModal = ({ close, showFormPossibleClient }: Modal) => {
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
                  Praia de Tambaba ⛱
               </h1>

               <XMark w="32" h="32" onClick={close} fill="#202225" className="cursor-pointer transition-all duration-700 hover:opacity-70" />
            </div>

            <figure className="my-4">
               <img src={Tambaba01} alt="Thumbnail Japan Tour" className={`rounded-md`} />

               <figcaption className="text-center text-xs text-gray-600 mt-2">
                  Thumbnail Praia de Tambaba.
               </figcaption>
            </figure>

            <div className="flex flex-col items-center">
               <p className="first-letter:ml-4">
                  Excursão para a <span className="italic font-medium">Praia de Tambaba</span>, na Paraíba. Lugar turísco naturalista, com várias opções de pousadas.
               </p>

               <button
                  className={`btnCTA flex justify-center text-center my-2 gap-2 font-bold border border-blue-600 text-blue-600 rounded-md py-2 px-4 outline-none transition-all duration-1000 ${btnHover}`}
                  onClick={showFormPossibleClient!}>
                  Quero Ir
               </button>

               <section className="flex flex-col justify-center items-center">
                  <p className="mt-2 first-letter:ml-4">
                     Ficou interessado em conhecer a <span className="font-bold">Praia de Tambaba</span>? Vamos praiar! Estamos te aguardando.
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