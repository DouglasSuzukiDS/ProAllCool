import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { Excursion } from "../types/Excursion";
import { ExcursionReducer, ExcursionsAction } from "../reducers/ExcursionReducer";
import axios from "axios";

const baseURL = axios.create({
   baseURL: 'http://localhost:3002'
})

export type ExcursionsContextProviderType = {
   children: ReactNode
}

type ExcursionContextType = {
   excursions: Excursion[]
   dispatch: Dispatch<ExcursionsAction>
   getExcursions: () => void
   addExcursion: (newExcursion: Excursion) => void
}

export const ExcursionsContext = createContext<ExcursionContextType | null>(null)

const initialValue: Excursion[] = []

export const ExcursionsProvider = ({ children }: ExcursionsContextProviderType) => {
   const [excursions, dispatch] = useReducer(ExcursionReducer, initialValue)

   const getExcursions = async() => {
      await baseURL.get('/')
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
            res.status === 201 && getExcursions()
         })
         .catch(err => console.log(err))
   }

   return(
      <ExcursionsContext.Provider value={{ excursions, dispatch, getExcursions, addExcursion }}>
         { children }
      </ExcursionsContext.Provider>
   )
}