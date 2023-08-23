import { Envelope } from "../assets/icons/Envelope"
import { Instagram } from "../assets/icons/Instagram"
import { WhatsApp } from "../assets/icons/WhatsApp"
import { XMark } from "../assets/icons/XMark"
import { Modal } from "../types/Modal"

export const ContactModal = ({ close }: Modal) => {
    return (
        <section className="modal flex justify-center items-center text-indigo-600">

            <article className="border-4 border-blue-300 bg-indigo-300 rounded-md p-4 max-w-[500px] max-h-[500px] overflow-y-auto customScroll">
                <div className="flex justify-between items-center gap-2">
                    <h1 className="title text-center text-sky-600 text-bold underline text-3xl w-full hover:scale-110 transition-all duration-700">
                        Central de Relacionamento
                    </h1>

                    <XMark w="32" h="32" onClick={close} fill="#202225" className="cursor-pointer transition-all duration-700 hover:opacity-70" />
                </div>

                <div className="flex flex-col items-center">
                    <p className="content text-center text-blue-600 text-xl my-4 max-h-[220px] overflow-y-auto customScroll">
                        Quaisquer dúvidas que tenha sobre como funciona nossas viagens, nos contate! Um de nossos atendentes irá sanar todas vossas dúvidas o mais rápido possível atrasvez de um atendimento especial com um extremo carinho.
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