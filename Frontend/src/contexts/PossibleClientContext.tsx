import { createContext, useReducer, Dispatch, ReactNode } from "react";
import { PossibleClientAction, PossibleClientReducer } from "../reducers/PossibleClientReducer";
import { PossibleClient } from "../types/PossibleClient";
import { baseURL } from "../api/Api";

export type PossibleClientType = {
   possibleClient: PossibleClientType[]
   dispatch: Dispatch<PossibleClientAction>
   getAllPossibleClients: () => void
   addPossibleClient: (newPossibleClient: PossibleClient) => void
   editPossibleClient: (id: number, possibleClientData: PossibleClient) => void
   deletePossibleClient: (id: number) => void
}

export const PossibleClientContext = createContext<PossibleClientType | null>(null)

const initialValue: PossibleClient[] = []

export const PossibleClientProvider = ({ children }: { children: ReactNode }) => {
   const [possibleClient, dispatch] = useReducer(PossibleClientReducer, initialValue)

   const getAllPossibleClients = async() => {
      await baseURL.get('/clients')
         .then(res => {
            console.log(res)

            dispatch({
               type: 'get',
               payload: res.data.result
            })
         })
   }

   const addPossibleClient = async(newPossibleClient: PossibleClient) => {
      await baseURL.post('/client', newPossibleClient)
         .then(res => {
            if(res.status === 201) {
               alert('Interesse registrado. Em preve nossa equipe entra em contato com você')
               getAllPossibleClients()
            }
         })
         .catch(err => console.log(err))
   }

   const editPossibleClient = async(id: number, possibleClientData: PossibleClient) => {
      await baseURL.put(`/client/${id}`, possibleClientData)
         .then(res => {
            if(res.status === 200) {
               alert('Dados do possível cliente editados com sucesso.')
               getAllPossibleClients()
            }
         })
         .catch(err => console.log(err))
   }

   const deletePossibleClient = async(id: number) => {
      await baseURL.delete(`/client/${id}`)
         .then(res => {
            if(res.status === 200) {
               alert('Dados do possível cliente excluído com sucesso')
               getAllPossibleClients()
            }
         })
         .catch(err => console.log(err))
   }

   return(
      <PossibleClientContext.Provider value={{ possibleClient, dispatch, getAllPossibleClients, addPossibleClient, editPossibleClient, deletePossibleClient }}>
         { children }
      </PossibleClientContext.Provider>
   )
}
