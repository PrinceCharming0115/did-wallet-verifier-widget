import { IAction } from "./action"
import { InteractionModel } from "../../models"


export type GetInteractionsRequestAction = IAction & {
  verificationID: number,
  pageNumber: number
}

export type GetInteractionsSuccessAction = {
  interactions: InteractionModel[]
}

export type GetInteractionRequestAction = IAction & {
  interactionID: number
}