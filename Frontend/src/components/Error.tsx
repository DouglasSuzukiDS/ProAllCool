import { Link } from "react-router-dom"
import { Pikachu } from "../assets/icons/Pikachu"

export const Error = () => {
   const btnGoToHomeHover = [
      'hover:text-sky-300',
      'hover:border-sky-300',
      'hover:bg-sky-600'
   ].join(' ')

   return(
      <section className="error modal flex justify-center items-center text-indigo-600">
         <article className=" flex justify-center items-center flex-col border-4 border-blue-300 bg-indigo-300 rounded-md p-4 gap-4 max-w-[500px] max-h-[500px] overflow-y-auto customScroll">
            <h1 className="text-4xl text-purple-600">Página não encontrada!</h1>

            <Pikachu w="450" h='350' />

            <Link to='/' className={`font-bold border border-sky-600 text-sky-600 rounded-md py-2 px-4 outline-none transition-all duration-1000 ${btnGoToHomeHover}`}>
               Voltar para Home
            </Link>
         </article>
      </section>
      
   )
}