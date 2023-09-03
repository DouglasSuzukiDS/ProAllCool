import { Excursion } from "../types/Excursion";

type GetExcursionsAction = {
   type: 'get'
   payload: Excursion[] 
}

type AddExcursionAction = {
   type: 'add'
   payload: {
      idExc?: number
      thumbnail: string
      titleExc: string
      prevValueExc: string
      currentValueExc: string
      descriptionExc: string
      dateExc: string
      returnExc: string 
      openModal: string
   }
}

type EditExcursionAction = {
   type: 'edit'
   payload: {
      idExc: number
      thumbnail: string
      titleExc: string
      prevValueExc: string
      currentValueExc: string
      descriptionExc: string
      dateExc: string
      returnExc: string 
   }
}

type ToogleExcursionAction = {
   type: 'toggleActiveExcursion'
   payload: {
      idExc: number
      activeExc: boolean
   }
}

type DeleteExcursionAction = {
   type: 'delete'
   payload: {
      idExc: number
   }
}

export type ExcursionsAction = GetExcursionsAction | AddExcursionAction | EditExcursionAction | ToogleExcursionAction | DeleteExcursionAction

export const ExcursionReducer = (excursions: Excursion[], action: ExcursionsAction) => {
   switch(action.type) {
      case 'get':
         return action.payload
      case 'add':
         return [ ...excursions, {
            idExc: excursions.length + 1,
            thumbnailExc: action.payload.thumbnail,
            titleExc: action.payload.titleExc,
            prevValueExc: action.payload.prevValueExc,
            currentValueExc: action.payload.currentValueExc,
            descriptionExc: action.payload.descriptionExc,
            dateExc: action.payload.dateExc,
            returnExc: action.payload.returnExc,
            openModal: action.payload.openModal
         }]
      case 'edit':
         return [
            ...excursions, {
               idExc: action.payload.idExc,
               thumbnail: action.payload.thumbnail,
               titleExc: action.payload.titleExc,
               prevValueExc: action.payload.prevValueExc,
               currentValueExc: action.payload.currentValueExc,
               descriptionExc: action.payload.descriptionExc,
               dateExc: action.payload.dateExc,
               returnExc: action.payload.returnExc,
            }
         ]
      case 'delete': 
         return excursions.filter(excursion => excursion.idExc !== action.payload.idExc)
      default:
         return excursions
   }
}