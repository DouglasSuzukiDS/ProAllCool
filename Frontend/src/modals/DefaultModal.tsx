import { Envelope } from "../assets/icons/Envelope"
import { Instagram } from "../assets/icons/Instagram"
import { InstagramGradient } from "../assets/icons/InstagramGradient"
import { WhatsApp } from "../assets/icons/WhatsApp"
import { XMark } from "../assets/icons/XMark"
import { Modal } from "../types/Modal"

export const DefaultModal = ({ close }: Modal) => {
   return(
      <section className="modal flex justify-center items-center">

         <article className="border-4 border-blue-300 bg-indigo-300 rounded-md p-4 max-w-[450px]">
            <div className="flex justify-between items-center gap-2">
                  <h1 className="title text-center text-sky-600 text-bold underline text-3xl w-full hover:scale-110 transition-all duration-700">
                     Estamos preparando o melhor para você!
                  </h1>

                  <XMark w="32" h="32" onClick={ close } fill="#202225" className="cursor-pointer transition-all duration-700 hover:opacity-70" />
            </div>  


            <div className="flex flex-col items-center">
               <p className="content text-center text-blue-600 text-xl my-4 max-h-[220px] overflow-y-auto customScroll">
                  Para receber maiores informações antecipadamente, entre em contato conosco em um dos nossos canais de atendimento, e nos informe seu nome, telefone, email, a excursão do seu interesse para que possamos lhe oferecer um presente exclusivo.
               </p>

               <div className="flex flex-col text-indigo-600 w-fit gap-2">

                  <span className="flex gap-2 font-bold hover:scale-125 transition-all duration-700">
                     <WhatsApp w="24" h="24" fill="#9333EA" /> (11) 96666-6666
                  </span>

                  <span className="flex gap-2 font-bold hover:scale-125 transition-all duration-700">
                     <Envelope w="24" h="24" fill="#9333EA" /> infos@proallcool.com 
                  </span>

                  <span className="flex gap-2 font-bold hover:scale-125 transition-all duration-700">
                     <Instagram w="24" h="24" fill="#9333EA" /> @ProAllCool
                  </span>
               </div>

            </div>

         </article>
   </section>
   )
}

