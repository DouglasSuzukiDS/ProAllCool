import { XMark } from "../assets/icons/XMark"
import { Modal } from "../types/Modal"

export const BahamasModal = ({ close }: Modal) => {
   return(
      <section className="w-full h-full bg-black opacity-60 z-50 absolute">
         <h1 className="text-indigo-600">Bahamas ClubModal</h1>
         <XMark w="32" h="32" onClick={ close } fill="#F00" className="cursor-pointer" />
      </section>
   )
}