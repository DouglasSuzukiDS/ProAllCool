import { useEffect, useContext } from 'react'
import { PossibleClientContext } from '../contexts/PossibleClientContext'
import { Square } from '../assets/icons/Square'
import { SquareXMark } from '../assets/icons/SquareXMark'
import { TrashCan } from '../assets/icons/TrashCan'
import { XMark } from '../assets/icons/XMark'
import { Modal } from '../types/Modal'

export const PossibleClientsTableModal = ({ close }: Modal) => {
   const PossibleClientCTX = useContext(PossibleClientContext)

   useEffect(() => {
      PossibleClientCTX?.getAllPossibleClients()
   }, [])

   const toggleContactedClient = (idPosClient: number, contactedPosClient: boolean) => {
      // alert(`ID: ${ idPosClient } - Contacted: ${ contacted }`)
      PossibleClientCTX?.togglePossibleClient(idPosClient, !contactedPosClient)
   }

   const handleDeletePosClient = (idPosClient: number) => {
      PossibleClientCTX?.deletePossibleClient(idPosClient)
   }
   return (
      // <section className="container container-lg flex justify-between flex-col p-4 border border-yellow-600 rounded-lg relative h-full">
      <section className="modal flex justify-center">

{/* overflow-y-auto customScroll */}
         <article className="border-4 border-blue-300 bg-indigo-300 rounded-md p-4"> 
            <div className="flex justify-between items-center gap-2 mb-2">
               <div className="flex justify-center text-sky-600 text-bold underline text-3xl w-full hover:scale-110 transition-all duration-700">
                  {/* <img src={MDSoftwareHouse} alt="MD Software House Logo" className="MDSH-Logo" /> */}
                  Possíves Clientes
               </div>

               <XMark w="32" h="32" onClick={close} fill="#202225" className="cursor-pointer transition-all duration-700 hover:opacity-70" />
            </div>

            {/* <div className="tableArea my-4 p-2 flex justify-center flex-1 overflow-y-auto customScroll border rounded-lg border-blue-600"> */}
            <div className="tableArea my-4 p-2 flex justify-center flex-1 w-full border rounded-lg border-blue-600">
               <table className='border-2 border-blue-600 rounded-lg'>
                  <thead className='border-b border-blue-600 bg-blue-300 text-blue-600'>
                     <tr>
                        <th> Contatado </th>
                        <th> Id PS </th>
                        <th> Id Exc </th>
                        <th> Excursão </th>
                        <th> Nome </th>
                        <th> Email </th>
                        <th> Telefone </th>
                        <th> Instagram </th>
                        <th> Ação </th>
                     </tr>
                  </thead>

                  <tbody className=''>
                     {PossibleClientCTX?.possibleClient.map(posClient => (
                        <tr key={posClient.idPosClient}>
                           <td className='flex justify-center'>
                              {!posClient.contactedPosClient ?
                                 <Square w='24' h='24' fill='#0284C7'
                                    className='cursor-pointer hover:opacity-60 hover:duration-700'
                                    onClick={() => toggleContactedClient(posClient.idPosClient!, posClient.contactedPosClient!)} /> :
                                 <SquareXMark w='24' h='24' fill='#0284C7'
                                    className='cursor-pointer hover:opacity-60 hover:duration-700'
                                    onClick={() => toggleContactedClient(posClient.idPosClient!, posClient.contactedPosClient!)} />
                              }
                           </td>
                           <td>{posClient.idPosClient}</td>
                           <td>{posClient.idExc}</td>
                           <td>{posClient.nameExc}</td>
                           <td>{posClient.namePosClient}</td>
                           <td>{posClient.emailPosClient}</td>
                           <td>{posClient.telPosClient}</td>
                           <td>{posClient.instaPosClient}</td>
                           <td className='flex justify-center'>
                              <TrashCan w='24' h='24' fill='#DC2626'
                                 className='cursor-pointer hover:opacity-60 hover:duration-700'
                                 onClick={() => handleDeletePosClient(posClient.idPosClient!)} />
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </article>

      </section>

   )
}