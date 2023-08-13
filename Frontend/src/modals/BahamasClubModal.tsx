import { XMark } from "../assets/icons/XMark"
import { Props } from "../types/Props"

export const BahamasClubModal = ({ close }: Props) => {
   return(
      <section className="w-full h-full bg-black opacity-60 z-50 absolute">
         <h1 className="text-indigo-600">Bahamas ClubModal</h1>
         <XMark w="32" h="32" onClick={ () => alert('click') } fill="#F00" className="cursor-pointer" />
      </section>
   )
}