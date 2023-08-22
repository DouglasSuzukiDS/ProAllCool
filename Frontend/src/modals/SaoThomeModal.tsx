import { XMark } from "../assets/icons/XMark"
import { Modal } from "../types/Modal"
import SaoThome01 from '../assets/images/SaoThome01.png'
import SaoThome02 from '../assets/images/SaoThome02.png'

export const SaoThomeModal = ({ close, showFormPossibleClient }: Modal) => {
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
                  São Thomé das Letras 🧙‍♂️
               </h1>

               <XMark w="32" h="32" onClick={close} fill="#202225" className="cursor-pointer transition-all duration-700 hover:opacity-70" />
            </div>

            <figure className="my-4">
               <img src={SaoThome01} alt="Thumbnail São Thomé das Letras" className={`rounded-md`} />

               <figcaption className="text-center text-xs text-gray-600 mt-2">
                  Thumbnail de São Thomé das Letras.
               </figcaption>
            </figure>

            <div className="flex flex-col items-center">
               <p className="first-letter:ml-4">
                  Excursão pela cidade mais mistíca de Minas Gerais, <span className="italic font-medium">São Thomé das Letras</span>! Um lugar que proporciona uma experiência incrível. A cidade possui muitas lendas, avistamentos ufológicos e mágicos. Moradores e comerciantes atenciosos e muitas lembrancinhas artezanais para se adquirir. 
               </p>

               <button
                  className={`btnCTA flex justify-center text-center my-2 gap-2 font-bold border border-blue-600 text-blue-600 rounded-md py-2 px-4 outline-none transition-all duration-1000 ${btnHover}`}
                  onClick={showFormPossibleClient!}>
                  Quero Ir
               </button>

               <section>
                  <p className="first-letter:ml-4">
                     A cidade além de se fazer por si só, ela é amplamente representada pelo cantor <span className="font-bold">Ventania</span>. 
                  </p>

                  <figure className="my-4">
                     <img src={SaoThome02} alt="Imagem do cantor Ventania" className={`rounded-md`} />

                     <figcaption className="text-center text-xs text-gray-600 mt-2">
                        Cantor Ventania
                     </figcaption>
                  </figure>

                  <p className="first-letter:ml-4">
                     Contaremos com um Show do Ventania no Bar do Jhoony. Onde ele cantá alguns dos seus maiores sucessos, como <span className="italic">Cogumelos Azuis</span> e <span className="italic">O Diabo é Careta</span>.
                  </p>
               </section>

               <section className="flex flex-col justify-center items-center">
                  <p className="mt-2 first-letter:ml-4">
                     Ficou interessado em conhecer <span className="font-bold">São Thomé das Letras</span>? Vai que consiga ver um UFo ou um Gnomo que segundo inumeros relatos eles aparecem. Vamos encontra-los! Estamos te aguardando.
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