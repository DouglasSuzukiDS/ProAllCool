import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { Excursion } from "../types/Excursion";
import { ExcursionReducer, ExcursionsAction } from "../reducers/ExcursionReducer";
import { baseURL } from "../api/Api";


export type ExcursionsContextProviderType = {
   children: ReactNode
}

type ExcursionContextType = {
   excursions: Excursion[]
   dispatch: Dispatch<ExcursionsAction>
   getExcursions: () => void
   addExcursion: (newExcursion: Excursion) => void
   editExcursion: (id: number, excursion: Excursion) => void
   toggleActiveExcursion: (idExc: number, activeExc: boolean) => void
   deleteExcursion: (idExcursion: number) => void
}

export const ExcursionsContext = createContext<ExcursionContextType | null>(null)

const initialValue: Excursion[] = []

export const ExcursionsProvider = ({ children }: ExcursionsContextProviderType) => {
   const [excursions, dispatch] = useReducer(ExcursionReducer, initialValue)

   const getExcursions = async() => {
      await baseURL.get('/excursions')
         .then(res => {
            console.log(res)
            dispatch({
               type: 'get',
               payload: res.data.result
            })
         })
         .catch(err => console.log(err))
   }

   const addExcursion = async(newExcursion: Excursion) => {
      await baseURL.post('/excursion', newExcursion)
         .then(res => {
            // res.status === 201 && getExcursions()
            if(res.status === 201) {
               alert('Excursão adicionada com sucesso!')
               getExcursions()
            }
         })
         .catch(err => console.log(err))
   }

   const editExcursion = async(id: number, excursion: Excursion) => {
      await baseURL.put(`/excursion/${id}`, excursion)
         .then(res => {
            // res.status === 200 && getExcursions()
            if(res.status === 200) {
               alert('Excursão editada com sucesso!')
               getExcursions()
            }
         })
         .catch(err => console.log(err))
   }

   const toggleActiveExcursion = async(idExc:number, activeExc: boolean) => {
      await baseURL.put(`excursion/active/${idExc}`, { 
         idExc, activeExc
      })
         .then(res => {
            if(res.status === 200) {
               console.log(res.data.msg)
               getExcursions()
            }
         })
         .then(err => console.log(err))
   }

   const deleteExcursion = async(idExcursion: number) => {
      await baseURL.delete(`/excursion/${idExcursion}`)
         .then(res => {
            // res.status === 200 && getExcursions()
            if(res.status === 200) {
               alert('Excursão deletada com sucesso!')
               getExcursions()
            }
         })
         .catch(err => console.log(err))
   }

   return(
      <ExcursionsContext.Provider value={{ excursions, dispatch, getExcursions, addExcursion, editExcursion, toggleActiveExcursion, deleteExcursion }}>
         { children }
      </ExcursionsContext.Provider>
   )
}