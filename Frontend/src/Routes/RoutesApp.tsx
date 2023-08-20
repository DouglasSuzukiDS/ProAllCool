
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"
import { AuthProvider } from "../contexts/AuthContext"
import { Login } from "../components/Login"
import { PossibleClientProvider } from "../contexts/PossibleClientContext"

export const RoutesApp = () => {
   return(
      <BrowserRouter>
         <AuthProvider>
            <PossibleClientProvider>
               <Routes>
                  <Route path='/' element={ <App /> } />
                  <Route path='/secret' element={ <Login /> } />
               </Routes>
            </PossibleClientProvider>
         </AuthProvider>
      </BrowserRouter>
   )
}