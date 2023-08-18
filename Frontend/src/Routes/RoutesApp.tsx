
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"
import { AuthProvider } from "../contexts/AuthContext"
import { Login } from "../components/Login"

export const RoutesApp = () => {
   return(
      <BrowserRouter>
      <AuthProvider>
         <Routes>
            <Route path='/' element={ <App /> } />
            <Route path='/secret' element={ <Login /> } />
         </Routes>
      </AuthProvider>
      </BrowserRouter>
   )
}