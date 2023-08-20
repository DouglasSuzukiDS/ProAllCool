import { PossibleClientContext } from './../contexts/PossibleClientContext';
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
   const auth = useContext(AuthContext)
   
   return auth
}

export const usePossibleClient = () => {
   const possibleClient = useContext(PossibleClientContext)

   return possibleClient
}