import { PossibleClient } from "../types/PossibleClient"

type GetAllPossibleClient = {
   type: 'get'
   payload: PossibleClient[]
}

type AddPossibleClient = {
   type: 'add'
   payload: {
      idPosClient: number
      nameExc: string
      namePosClient: string
      emailPosClient: string
      telPosClient: string 
      instaPosClient: string
      contactedPosClient?: boolean
   }
}

type EditPossibleClient = {
   type: 'edit'
   payload: {
      idPosClient: number
      idExc: number
      nameExc: string
      namePosClient: string
      emailPosClient: string
      telPosClient: string 
      instaPosClient: string
      contactedPosClient?: boolean
   }
}

type TogglePossibleClient = {
   type: 'togglePossibleClient'
   payload: {
      idPosClient: number
      contactedPosClient: boolean
   }
}

type DeletePossibleClient = {
   type: 'delete'
   payload: { 
      idPosClient: number
   }
}

export type PossibleClientAction = GetAllPossibleClient | AddPossibleClient | EditPossibleClient | TogglePossibleClient | DeletePossibleClient

export const PossibleClientReducer = (possibleClients: PossibleClient[], action: PossibleClientAction) => {
   switch(action.type) {
      case 'get':
         return action.payload
      case 'add': 
         return [...possibleClients, {
            idPosClient: possibleClients.length + 1,
            nameExc: action.payload.nameExc,
            namePosClient: action.payload.namePosClient,
            emailPosClient: action.payload.emailPosClient,
            telPosClient: action.payload.telPosClient,
            instaPosClient: action.payload.instaPosClient,
            contactedPosClient: action.payload.contactedPosClient
         }]
      case 'edit': 
         return [...possibleClients, {
            idPosClient: action.payload.idPosClient,
            idExc: action.payload.idExc,
            nameExc: action.payload.nameExc,
            namePosClient: action.payload.namePosClient,
            emailPosClient: action.payload.emailPosClient,
            telPosClient: action.payload.telPosClient,
            instaPosClient: action.payload.instaPosClient,
            contactedPosClient: action.payload.contactedPosClient
         }]
      case 'togglePossibleClient': 
         console.log(action.payload.contactedPosClient)
         return possibleClients.map(possibleClient => possibleClient.idPosClient === action.payload.idPosClient ? 
            { ...possibleClient, 
               contactedPosClient: action.payload.contactedPosClient
            }: possibleClient
         )
      case "delete":
         return possibleClients.filter(possibleClient => possibleClient.idPosClient !== action.payload.idPosClient)
      default:
         return possibleClients
   }
}