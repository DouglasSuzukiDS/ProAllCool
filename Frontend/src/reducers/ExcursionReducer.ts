import { Excursion } from "../types/Excursion";

type GetExcursionsAction = {
   type: 'get'
   payload: Excursion[] 
}

type AddExcursionAction = {
   type: 'add'
   payload: {
      id?: number
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
      id: number
      thumbnail: string
      titleExc: string
      prevValueExc: string
      currentValueExc: string
      descriptionExc: string
      dateExc: string
      returnExc: string 
   }
}

type DeleteExcursionAction = {
   type: 'delete'
   payload: {
      idExc: number
   }
}

export type ExcursionsAction = GetExcursionsAction | AddExcursionAction | EditExcursionAction | DeleteExcursionAction

export const ExcursionReducer = (excursions: Excursion[], action: ExcursionsAction) => {
   switch(action.type) {
      case 'get':
         return action.payload
      case 'add':
         return [ ...excursions, {
            id: excursions.length + 1,
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
               id: action.payload.id,
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
         return excursions.filter(excursion => excursion.id !== action.payload.idExc)
      default:
         return excursions
   }
}