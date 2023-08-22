import { XMark } from "../assets/icons/XMark"
import { Modal } from "../types/Modal"
import JapanTour01 from '../assets/images/JapanTour01.png'
import Nagoya01 from '../assets/images/Nagoya01.png'
import IdBar01 from '../assets/images/IdBar01.png'
import Tokyo01 from '../assets/images/Tokyo01.png'

export const JapanModal = ({ close, showFormPossibleClient }: Modal) => {
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
                  Japan Tour 🌸
               </h1>

               <XMark w="32" h="32" onClick={close} fill="#202225" className="cursor-pointer transition-all duration-700 hover:opacity-70" />
            </div>

            <figure className="my-4">
               <img src={JapanTour01} alt="Thumbnail Japan Tour" className={`rounded-md`} />

               <figcaption className="text-center text-xs text-gray-600 mt-2">
                  Thumbnail da Japan Tour.
               </figcaption>
            </figure>

            <div className="flex flex-col items-center">
               <p className="first-letter:ml-4">
                  Excursão pelas cidades mais turisticas do Japão, <span className="italic font-medium">Osaka</span>, famosa pelo seu Night Club, <span className="italic font-medium">Nagoya</span>, cidade muito frequentada por brasileiros e <span className="italic font-medium">Tokyo</span>, capital do Japão.
               </p>

               <button
                  className={`btnCTA flex justify-center text-center my-2 gap-2 font-bold border border-blue-600 text-blue-600 rounded-md py-2 px-4 outline-none transition-all duration-1000 ${btnHover}`}
                  onClick={showFormPossibleClient!}>
                  Quero Ir
               </button>

               <section>
                  <p className="first-letter:ml-4">
                     <span className="font-bold">Nagoya</span>, a terceira maior cidade do Japão, é uma ótima escolha para quem quer morar no país. A cidade oferece muitas oportunidades de emprego e é conhecida por seus pratos típicos, como o miso katsu. Além disso, Nagoya é um lugar seguro e tranquilo, ideal para quem busca um estilo de vida mais tranquilo.
                  </p>

                  <figure className="my-4">
                     <img src={Nagoya01} alt="Vista de Nagoya" className={`rounded-md`} />

                     <figcaption className="text-center text-xs text-gray-600 mt-2">
                        Vista de Nagoya
                     </figcaption>
                  </figure>
               </section>

               <section>
                  <p className="first-letter:ml-4">
                     <span className="font-bold">Nagoya</span> possuí inúmeras formas de entretenimento, uma delas são suas famosas baladas. Nós iremos levalos para o <span className="font-bold">idBar</span>. Casa de show com 3 andares de muita música, muito frequentada pelos brasileiros. A casa iDBar dedica um andar inteiro para tocar musicas brasileiras para razer um pouco de alegria aos brasileiros residentes no país.
                  </p>

                  <figure className="my-4 flex flex-col items-center">
                     <img src={IdBar01} alt="Vista da Casa de Show iDBar Nagoya" className={`rounded-md`} />

                     <figcaption className="text-center text-xs text-gray-600 mt-2">
                        Vista da Casa de Show iDBar Nagoya
                     </figcaption>
                  </figure>
               </section>

               <section>
                  <p className="first-letter:ml-4">
                     Por fim encerraremos nosso Tour visitando a a capitão do Japão, <span className="font-bold">Tokyo</span>. Uma cidade extremamente movimentada, repreta de muitas empresas, lojas, comércios. Concentra o maior fluxo de pessoas do país. 
                  </p>

                  <figure className="my-4 flex flex-col items-center">
                     <img src={Tokyo01} alt="Imagem de Tokyo." className={`rounded-md`} />

                     <figcaption className="text-center text-xs text-gray-600 mt-2">
                        Imagem de Tokyo.
                     </figcaption>
                  </figure>

               </section>

               <section className="flex flex-col justify-center items-center">
                  <p className="mt-2 first-letter:ml-4">
                     Ficou interessado em conhecer <span className="font-bold">Osaka</span>, <span className="font-bold">Nagoya</span> e <span className="font-bold">Tokyo</span>? Vamos embarcar nessa aventura! Estamos te aguardando.
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