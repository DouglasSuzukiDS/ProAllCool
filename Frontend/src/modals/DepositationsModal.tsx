import { XMark } from "../assets/icons/XMark"
import { Modal } from "../types/Modal"
import Clovis from '../assets/images/Clovis.png'
import OuroPuro from '../assets/images/OuroPuro.png'
import Confuso from '../assets/images/Confuso.png'

const cardClients = [
    'flex',
    'text-sm',
    'gap-2',
    'w-[450px]',
    'h-[126px]',
    'border-2',
    'border-blue-600',
    'rounded-lg',
    'transition-all',
    'duration-700',
    'hover:border-opacity-50',
    'overflow-y-auto',
    'customScroll',
 ].join(' ')

export const DepositionsModal = ({ close }: Modal) => {
    return(
        <section className="modal flex justify-center items-center text-indigo-600">
            <article className="flex flex-col gap-2 border-4 border-blue-300 bg-indigo-300 rounded-md p-4 max-w-[500px] max-h-[500px] overflow-y-auto customScroll">
                <div className="flex justify-between items-center gap-2">
                    <h1 className="flex justify-center text-sky-600 text-bold underline text-2xl w-full hover:scale-110 transition-all duration-700">
                        Depoimentos de nossos clientes ✨
                    </h1>

                    <XMark w="32" h="32" onClick={close} fill="#202225" className="cursor-pointer transition-all duration-700 hover:opacity-70" />
                </div>

                <div className="depositionsArea flex flex-col items-center gap-4">
                    <div className={ ` cardClients ${ cardClients } ` }>
                        <span className="flex flex-col justify-center items-center gap-2 p-2">
                            <img src={ Clovis } alt="Clovis" className="w-[80px] h-[80px] rounded-full" />
                            <p className="text-center font-bold">Clóvis Basílio</p>
                        </span>

                        <p className="text-center italic p-2 flex-1 w-[126px] overflow-y-auto customScroll">
                            "Empresa maravilhosa, sempre com excelêntes excursões ou passeio com preços bem acessíveis. Já fui para Tambaba, Bahamas Club, Tour The Blond, Japan Tour e minha próxima viagem com a empresa vai ser pra Pattaya."
                        </p>
                    </div>  

                    <div className={ ` cardClients ${ cardClients } ` }>
                        <span className="flex flex-col justify-center items-center gap-2 p-2">
                            <img src={ OuroPuro } alt="Arlindo"  className="w-[80px] h-[80px] rounded-full" />
                            <p className="text-center font-bold">Arlindo Moura</p>
                        </span>
                        
                        <p className="text-center italic p-2 flex-1 w-[126px] overflow-y-auto customScroll">
                            "Ganhei um combo de viagens de presente na onde eu trabalho e conheci Tambaba e São Thomé das Letras, lugares lindos, bons para poder relaxar ainda mais com a PoAllCool sempre os dando total atenção, e recomendações. Empresa excepcional selecionando os melhores lugares."
                        </p>
                    </div>

                    <div className={ ` cardClients ${ cardClients } ` }>
                        <span className="flex flex-col justify-center items-center gap-2 p-2">
                            <img src={ Confuso } alt="Pedro"  className="w-[80px] h-[80px] rounded-full" />
                            <p className="text-center font-bold">Pedro Antônio</p>
                        </span>

                        <p className="text-center italic p-2 flex-1 w-[126px] overflow-y-auto customScroll">
                            "Comemorei meu aniversário no Bahamas e quando eles souberam que eu fui pela ProAllCool ganhei um belo presente da casa pelo aniversário. Cantaram até parabéns. O dono da casa e os responsáveis pela excursão foram me parabenizar pessoalmente pela data. Com certeza jamais vou esquecer a excelente experiência."
                        </p>
                    </div>
                </div>
            </article>

        </section>
    )
}