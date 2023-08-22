import { XMark } from "../assets/icons/XMark"
import { Modal } from "../types/Modal"
import MDSoftwareHouse from '../assets/icons/Logo.svg'

export const AboutUsModal = ({ close }: Modal) => {
    return (
        <section className="modal flex justify-center items-center text-indigo-600">
            <article className="border-4 border-blue-300 bg-indigo-300 rounded-md p-4">
                <div className="flex justify-between items-center gap-2">
                    <h1 className="title text-center text-sky-600 text-bold underline text-3xl w-full hover:scale-110 transition-all duration-700">
                        <img src={MDSoftwareHouse} alt="MD Software House Logo" width='350px' />
                    </h1>

                    <XMark w="32" h="32" onClick={close} fill="#202225" className="cursor-pointer transition-all duration-700 hover:opacity-70" />
                </div>
            </article>
            
        </section>
    )
}