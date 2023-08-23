import { CircleBlue } from "../assets/icons/CircleBlue - Copia"
import { CircleRed } from "../assets/icons/CircleRed - Copia"
import { GitHubBorderGradient } from "../assets/icons/GitHubBorderGradient - Copia"
import { LinkedinBorderGradient } from "../assets/icons/LinkedinBorderGradient - Copia"
import { Texugo } from "../assets/icons/Texugo"
import { XMark } from "../assets/icons/XMark"
import { Modal } from "../types/Modal"
import WillSmith from '../assets/images/WillSmith.png'

export const DevelopersModal = ({ close }: Modal) => {
   const borderDev = [
      "flex",
      "flex-col", 
      "gap-2",
      "border-2",
      "border-blue-300",
      "transition-all",
      "duration-700",
      "hover:border-blue-600",
      "rounded-lg p-2",
      "max-w-[385px]"
   ].join(' ')

   return (
      <section className="modal flex justify-center items-center text-indigo-600">
         <article className="border-4 border-blue-300 bg-indigo-300 rounded-md p-4 max-h-[500px] overflow-y-auto customScroll">
            <div className="flex justify-between items-center gap-2">
               <h1 className="title text-center text-sky-600 text-bold underline text-4xl w-full hover:scale-110 transition-all duration-700">
                  Desevolvedores:
               </h1>

               <XMark w="32" h="32" onClick={close} fill="#202225" className="cursor-pointer transition-all duration-700 hover:opacity-70" />
            </div>

            <div id="developersContainer" className="flex items-center mt-2 text-center gap-4">
               <section className={ borderDev }>

                  <div className="flex justify-center items-center">
                     <img src={ WillSmith } alt="Foto do Will Smith" width='100' height='100' className="border-2 border-blue-600 transition-all duration-700 hover:border-blue-300 rounded-lg p-2" />
                  </div>

                  <span className="font-bold text-3xl">
                     Mathias Santos
                  </span>

                  <p className="text-2xl">
                     Desenvolvedor Fullstack
                  </p>

                  <p className="first-letter:ml-4">
                     Formado em <span className="font-bold">Técnico em Informática</span> pelo Senac.
                  </p>
               </section>

               <section className={ borderDev }>
                  <div className="flex justify-center items-center">
                     <Texugo w="100" h="100" className="border-2 border-blue-600 transition-all duration-700 hover:border-blue-300 rounded-lg p-2" />
                  </div>

                  <span className="flex justify-center items-center gap-2 font-bold text-3xl">
                     <CircleBlue w="24" h="24" />
                     Douglas Suzuki
                     <CircleRed w="24" h="24" />
                  </span>

                  <p className="text-2xl">
                     Desenvolvedor Fullstack
                  </p>

                  <p className="first-letter:ml-4">
                     <span className="font-bold">Técnico em Informática</span> pelo Senac, com certificações focadas no <span className="font-bold">desenvolvimento Frontend (React, Typescript, Node, TailwindCSS)</span> pela B7WEB, e <span className="font-bold">AWS Cloud Practitioner Foundational</span> pelo Senai.
                  </p>

                  <span className="flex justify-center items-center gap-2">
                     <a href="https://github.com/DouglasSuzukiDS/" target="_blank">
                        <GitHubBorderGradient w="24" h="24" />
                     </a>

                     <a href="https://www.linkedin.com/in/douglas-suzuki-775822219/" target="_blank">
                        <LinkedinBorderGradient w="24" h="24" />
                     </a>
                  </span>
               </section>
            </div>
         </article>
      </section>

   )
}