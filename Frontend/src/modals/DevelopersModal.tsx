import { CircleBlue } from "../assets/icons/CircleBlue"
import { CircleRed } from "../assets/icons/CircleRed"
import { Texugo } from "../assets/icons/Texugo"
import { XMark } from "../assets/icons/XMark"
import { Modal } from "../types/Modal"
import WillSmith from '../assets/images/WillSmith.png'
import { Linkedin } from "../assets/icons/Linkedin"
import { GitHub } from "../assets/icons/GitHub"

export const DevelopersModal = ({ close }: Modal) => {
   const borderDev = [
      "flex",
      "flex-col", 
      "gap-2",
      "border-2",
      "border-blue-600",
      "transition-all",
      "duration-700",
      "rounded-lg",
      "p-4",
      "max-w-[385px]",
      "max-h-[390px]"
   ].join(' ')

   return (
      <section className="modal flex justify-center items-center text-indigo-600">
         <article className="border-4 border-blue-300 bg-indigo-300 rounded-md p-4 max-h-[500px] overflow-y-auto customScroll">
            <div className="flex justify-between items-center gap-2">
               <h1 className="flex justify-center text-sky-600 text-bold underline text-3xl w-full hover:scale-110 transition-all duration-700">
               💻 Desevolvedores 👨‍💻
               </h1>

               <XMark w="32" h="32" onClick={close} fill="#202225" className="cursor-pointer transition-all duration-700 hover:opacity-70" />
            </div>

            <div id="developersContainer" className="flex items-center mt-2 text-center gap-4">
               <section className={ `borderDev ${ borderDev }` } >

                  <div className="flex justify-center items-center">
                     <span className="avatar border-2 border-blue-300 transition-all duration-700 rounded-lg p-2">
                        <img src={ WillSmith } alt="Foto do Will Smith" width='100' height='100' className="rounded-lg" />
                       </span> 
                  </div>

                  <span className="nameDev font-bold text-3xl">
                     ?
                  </span>

                  <p className="profession text-2xl font-bold">
                     Desenvolvedor Fullstack
                  </p>

                  <p className="first-letter:ml-4 max-h-[216px] overflow-y-auto customScroll">
                  Formado em <span className="font-bold">Técnico em Informática</span> pelo Senac, com certificações em <span className="font-bold">Assistente de Suporte e Manutenção de Computadores</span>, <span className="font-bold">Assistente de Operação de Redes de Computadores</span> e <span className="font-bold">Desenvolvimento de Aplicativos </span>, sendo eles para WEB <span className="font-bold">(HTML, Javascript, CSS, React)</span> e  Desktop <span className="font-bold">(C#)</span>.
                  </p>

                  <span className="flex justify-center items-center gap-4">
                     <a href="https://www.linkedin.com/in/mathias-ssilva/" target="_blank"
                        className=" transition-all duration-700 hover:opacity-70">
                        <GitHub w="32" h="32" />
                     </a>

                     <a href="https://www.linkedin.com/in/douglas-suzuki-775822219/" target="_blank"
                        className=" transition-all duration-700 hover:opacity-70">
                        <Linkedin fill="#F00" w="32" h="32" />
                     </a>
                  </span>
               </section>

               <section className={ `borderDev ${ borderDev }` }>
                  <div className="flex justify-center items-center">
                     <span className="avatar border-2 border-blue-300 transition-all duration-700 rounded-lg p-2">
                        <Texugo w="100" h="100" className="" />
                     </span>
                  </div>

                  <span className="nameDev flex justify-center items-center gap-2 font-bold text-3xl">
                     <CircleBlue w="24" h="24" />
                     Douglas Suzuki
                     <CircleRed w="24" h="24" />
                  </span>

                  <p className="profession text-2xl font-bold">
                     Desenvolvedor Fullstack
                  </p>

                  <p className="first-letter:ml-4 max-h-[150px] overflow-y-auto customScroll">
                     <span className="font-bold">Técnico em Informática</span> pelo Senac, com certificações focadas no <span className="font-bold">desenvolvimento Frontend (React, Typescript, Node, TailwindCSS)</span> pela B7WEB, e <span className="font-bold">AWS Cloud Practitioner Foundational</span> pelo Senai.
                  </p>

                  <span className="flex justify-center items-center gap-4">
                     <a href="https://github.com/DouglasSuzukiDS/" target="_blank" 
                        className=" transition-all duration-700 hover:opacity-70">
                        <GitHub w="32" h="32" />
                     </a>

                     <a href="https://www.linkedin.com/in/douglas-suzuki-775822219/" target="_blank"
                        className=" transition-all duration-700 hover:opacity-70">
                        <Linkedin w="32" h="32" />
                     </a>
                  </span>
               </section>
            </div>
         </article>
      </section>

   )
}