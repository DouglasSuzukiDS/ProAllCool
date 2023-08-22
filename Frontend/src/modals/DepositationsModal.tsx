import { XMark } from "../assets/icons/XMark"
import { Modal } from "../types/Modal"

export const DepositionsModal = ({ close }: Modal) => {
    return(
        <section className="modal flex justify-center items-center text-indigo-600">
            <div className="flex justify-between items-center gap-2">
               <h1 className="title text-center text-sky-600 text-bold underline text-3xl w-full hover:scale-110 transition-all duration-700">
                Depositions Modal ✨
               </h1>

               <XMark w="32" h="32" onClick={close} fill="#202225" className="cursor-pointer transition-all duration-700 hover:opacity-70" />
            </div>
        </section>
    )
}