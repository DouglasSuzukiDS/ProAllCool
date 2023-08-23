import { XMark } from "../assets/icons/XMark"
import { Modal } from "../types/Modal"
import MDSoftwareHouse from '../assets/icons/Logo.svg'
import { Envelope } from "../assets/icons/Envelope"
import { Instagram } from "../assets/icons/Instagram"

export const AboutUsModal = ({ close }: Modal) => {
    return (
        <section className="modal flex justify-center items-center text-indigo-600">
            <article className="border-4 border-blue-300 bg-indigo-300 rounded-md p-4 max-w-[500px] max-h-[500px] overflow-y-auto customScroll">

                <div className="flex justify-between items-center gap-2 mb-2">
                    <div className="flex justify-center text-sky-600 text-bold underline text-3xl w-full hover:scale-110 transition-all duration-700">
                        <img src={MDSoftwareHouse} alt="MD Software House Logo" className="MDSH-Logo" />
                    </div>

                    <XMark w="32" h="32" onClick={close} fill="#202225" className="cursor-pointer transition-all duration-700 hover:opacity-70" />
                </div>

                <div className="flex flex-col items-center">
                    <section className="flex flex-col gap-2">
                        <p className="first-letter:ml-4">
                            A MD Software House, surgiu pela fala de um docente, quando os seus fundadores, <span className="font-bold">Mathias</span> e <span className="font-bold">Douglas</span> cursavam curso Técnico em Informática. Onde o docente em questão sempre falava na brincadeira, que o Mathias já poderia abrir uma empresa de desenvolvimento junto dos seus irmãos, onde os seus irmãos cursarem o mesmo ocurso e tiveram o mesmo docente.
                        </p>

                        <p className="first-letter:ml-4">
                           Atraves dessa fala, ambos resolveram fundar a MD Software House, desenvolvendo sistemas simples e eficasses focados em pequenos e médios comerciantes com software de gestão com preços acessíveis. Hoje a MD Software House já atende grande comércios eletrônicos, sites de e-commerce e presta suporte para várias plataformas.
                        </p>

                        <p className="first-letter:ml-4">
                            Atualmente a empresa MDSF, não se prente apenas em desenvolvimento, possuímos ramificações em diversos setores além de desenvolvimento. Atuando na área de Marketing, E-commerce, Turismo & Comércio.
                        </p>

                        <p className="flex flex-col items-center gap-2">
                            <span className="first-letter:ml-4">
                                Para saber mais sobre a <span className="font-bold">MD Software House</span>, serviços, valores de nossos softwares, nos contate: 
                            </span>

                            <span className="flex gap-2 font-bold hover:scale-125 transition-all duration-700">
                                <Envelope w="24" h="24" fill="#9333EA" /> infos@mdsh.com 
                            </span>

                            <span className="flex gap-2 font-bold hover:scale-125 transition-all duration-700">
                                <Instagram w="24" h="24" fill="#9333EA" /> @MDSoftwareHouse
                            </span>
                        </p>
                    </section>
                </div>
            </article>

        </section>
    )
}