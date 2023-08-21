import { XMark } from "../assets/icons/XMark"
import { Modal } from "../types/Modal"
import UFO01 from '../assets/images/UFO01.png'
import UFO02 from '../assets/images/UFO02.png'
import UFO03 from '../assets/images/UFO03.png'
import UFO04 from '../assets/images/UFO04.png'
import UFO05 from '../assets/images/UFO05.png'

export const UfoModal = ({ close, showFormPossibleClient }: Modal) => {
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
                  Expedição UFO 👽
               </h1>

               <XMark w="32" h="32" onClick={close} fill="#202225" className="cursor-pointer transition-all duration-700 hover:opacity-70" />
            </div>

            <figure className="my-4">
               <img src={UFO01} alt="Thumbnail da Expedição UFO" className={`rounded-md`} />

               <figcaption className="text-center text-xs text-gray-600 mt-2">
                  Thumbnail da Expedição UFO.
               </figcaption>
            </figure>

            <div className="flex flex-col items-center">
               <p className="first-letter:ml-4">
                  Excursão extremamente especial em comemoração à revelação mundial do que já sabiamos bem, UFO's existem e não se pode mais esconder esse fato.
               </p>

               <button
                  className={`btnCTA flex justify-center text-center my-2 gap-2 font-bold border border-blue-600 text-blue-600 rounded-md py-2 px-4 outline-none transition-all duration-1000 ${btnHover}`}
                  onClick={showFormPossibleClient!}>
                  Quero Ir
               </button>

               <section>
                  <p className="first-letter:ml-4">
                     Uma expedição pela ilha de Colares no Pará, onde em meados de Dezembro de 1970, ocorreu um dos maiores fenomenos ufológicos do mundo com inúmeras vítamas e inumeros avistamentos chamada de operação Prato. Onde foi necessário acionar a FAB para insvestigar os fenômenos avistados e colher depoimentos.
                  </p>

                  <figure className="my-4">
                     <img src={UFO02} alt="Vítima do Fenômeno Chupa-Chupa" className={`rounded-md`} />

                     <figcaption className="text-center text-xs text-gray-600 mt-2">
                        Aurora Fernandes, na época tinha apenas 18 anos, vítima do Fenômeno 'Chupa-Chupa'.
                     </figcaption>
                  </figure>
               </section>

               <section>
                  <p className="first-letter:ml-4">
                     Caso investigado pelo Aeronáutica Uyrangê de Hollanda Lima por ordem da própria Aeronáutica, onde seus inúmeros relatórios enviados para a mesma, foram classificados ultramente secreto. O Capitão Hollanda se emprenhou por anos investigando por conta o fenômeno. Em meados dos anos 1997, 20 anos após a Operação Prato, o então ex Capitão e até a o ano citado Coronel Hollanda estando na reserva, consede a entrevista que abalaria o mundo. O Capitão Hollanda, concedeu a entrevista para UFO, sendo entrevistado por Ademar José Gevaerd (morte em 09/12/22) revelou detalhes da Operação Prato. Misteriosamente, dias após a entrevista, o Coronel Hollanda foi encontrado morto, motivo, 'suícidio'.
                  </p>

                  <figure className="my-4">
                     <img src={UFO03} alt="Coronel Hollanda e Ademar Gevaer" className={`rounded-md`} />

                     <figcaption className="text-center text-xs text-gray-600 mt-2">
                        Coronel Hollanda (responsável pela Operação Prato) e o Ufologo Ademar Gevaer.
                     </figcaption>
                  </figure>
               </section>

               <section>
                  <p className="first-letter:ml-4">
                     Para encerrar a viagem, iremos fazer um Tour pela Cidade de Varginha (MG), onde em 20 de Janeiro de 1996, as garotas Liliana, Valquíria e Kátia avistaram uma criatura 'anormal' em um terreno. A história se espalhou rapidamente e logo chamou a atenção da mídia pelos inúmeros mistérios em um mesmo caso.
                  </p>

                  <figure className="my-4 flex flex-col items-center">
                     <img src={UFO04} alt="Liliane, Valquíria e Kátia" className={`rounded-md`} />

                     <figcaption className="text-center text-xs text-gray-600 mt-2">
                        Liliane, Valquíria e Kátia testemunhas oculares do 'ET de Varginha'.
                     </figcaption>
                  </figure>
               </section>

               <section>
                  <p className="first-letter:ml-4">
                     Casos amplamente pesquisados por inúmeros ufologos, onde atualmente uns investigadores que ainda pesquisam os casos citados e muitos outros, é o ufologo Edson Boaventura Jr. O Edson possui um canal no YouTube chamado <a href="https://www.youtube.com/@EnigmaseMisterios" className="italic font-bold text-cyan-600">Enigmas e Mistério</a>, onde ele relata, explica casos ufologicos e misteriosos.
                  </p>

                  <figure className="my-4 flex flex-col items-center">
                     <img src={UFO05} alt="Foto do ufologo Edson Boaventura Jt." className={`rounded-md`} />

                     <figcaption className="text-center text-xs text-gray-600 mt-2">
                        Ufologo Edison Boaventura Jr.
                     </figcaption>
                  </figure>

                  <p  className="first-letter:ml-4">
                     Em 2023, Edson e a equipe da Revista <a href="https://www.ovnipesquisa.com.br/" className="italic font-bold text-cyan-600">Ovni Pesquisa</a>, fizeram uma matéria para a revista (edição 17) sobre a Operação Prato. O Edson também conseguiu encontrar a entrevistar a senhora Aurora Fernandes (vitíma das luzes em Colares) e entrevistar a Liliane e Valquíria, testemunhas da criatura que apareceu em Varginha.
                  </p>
               </section>

               <section className="flex flex-col justify-center items-center">
                  <p className="mt-2 first-letter:ml-4">
                     Ficou interessado em conhecer Colares e Varginha? Vamos embarcar nessa aventura! Estamos te aguardando.
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