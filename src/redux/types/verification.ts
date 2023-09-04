import { IAction } from "./action"
import { VerificationModel } from "../../models"

export type SaveVerificationFlow = {
  verificationFlowName: string;
  verificationFlow: string;
}

export type VerificationFormType = {
  verificationName: string
}

export type SaveVerificationRequestAction = IAction & {
  verificationFlowName: string;
  verificationFlow: SaveVerificationFlow;
}

export type SaveVerificationSuccessAction = {
  verificationID: number
}

export type GetVerificationsRequestAction = IAction & {
  pageNumber: number
}

export type GetVerificationsSuccessAction = {
  verifications: VerificationModel[]
}

export type GetVerificationRequestAction = IAction & {
  verificationID: number
}