import { XMark } from "../assets/icons/XMark"
import { Modal } from "../types/Modal"
import Bahamas01 from '../assets/images/BahamasClub01.png'
import Bahamas02 from '../assets/images/BahamasClub02.png'

export const BahamasModal = ({ close, showFormPossibleClient }: Modal) => {
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
                  Bahamas Club ✨
               </h1>

               <XMark w="32" h="32" onClick={close} fill="#202225" className="cursor-pointer transition-all duration-700 hover:opacity-70" />
            </div>

            <figure className="my-4">
               <img src={Bahamas01} alt="Thumbnail Bahamas Club" className={`rounded-md`} />

               <figcaption className="text-center text-xs text-gray-600 mt-2">
                  Thumbnail do Bahamas Club Night.
               </figcaption>
            </figure>

            <div className="flex flex-col items-center">
               <p className="first-letter:ml-4">
                  Um final de semana na casa Noturna mais famosa de São Paulo, Bahamas Hotel Club.
               </p>

               <button
                  className={`btnCTA flex justify-center text-center my-2 gap-2 font-bold border border-blue-600 text-blue-600 rounded-md py-2 px-4 outline-none transition-all duration-1000 ${btnHover}`}
                  onClick={showFormPossibleClient!}>
                  Quero Ir
               </button>

               <section>
                  <p className="first-letter:ml-4">
                     Bahamas Club é um Hotel & Casa de Shows, e entretenimento adulto de alto padrão. Com funcionários simpáticos e elegantes, onde se proproe não só o melhor atendimento mais também a melhor experiência possível. Um lugar extremamente agradável, músicas ambientes, maravilhos drinks, e gastronomia de respeito.
                  </p>

                  <figure className="my-4">
                     <img src={Bahamas02} alt="Bahamas Club por dentro" className={`rounded-md`} />

                     <figcaption className="text-center text-xs text-gray-600 mt-2">
                        Imagem do Bar do Bahamas Club
                     </figcaption>
                  </figure>
               </section>

               <section className="flex flex-col justify-center items-center">
                  <p className="mt-2 first-letter:ml-4">
                     Ficou interessado em conhecer em ficar hospedado e curtir um dos melhores finais de semana na sua vida no <span className="font-bold">Bahamas Club</span>? Então vamos para a experiência que marcara sua vida! Estamos te aguardando.
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