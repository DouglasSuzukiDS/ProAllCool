import { Excursion } from "./Excursion"

export const Excursions = () => {
   // min-[850px]:flex-col min-[850px]:items-center
   return(
      <section id="excursions" className="flex flex-wrap justify-center p-4 my-4 gap-4 border rounded-lg w-full flex-1 overflow-y-auto customScroll">
         <Excursion />
         <Excursion />
         <Excursion />
         <Excursion />
      </section>
   )
}