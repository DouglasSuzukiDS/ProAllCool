import { createContext, ReactNode } from 'react'

export const ModalsContext = createContext(null)

export const ModalsProvider = ({ children }: { children: ReactNode }) => {
   return(
      <ModalsContext.Provider value={  }>
         { children }
      </ModalsContext.Provider>
   )   
}