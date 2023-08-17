import { XMark } from "../assets/icons/XMark"
import { Modal } from "../types/Modal"

export const TambabaModal = ({ close }: Modal) => {
   return(
      <section className="modal">
         <h1 className="text-indigo-600">Tambaba Modal</h1>
         <XMark w="32" h="32" onClick={ close } fill="#F00" className="cursor-pointer" />
      </section>
   )
}