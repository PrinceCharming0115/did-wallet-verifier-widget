import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VerificationModel } from "../../models";
import { AppActionTypes } from "../store";
import { stat } from "fs";

type VerificationState = {
  verifications: VerificationModel[];
  verification: VerificationModel;
  openAlert: boolean;
  verificationTotalNumber: number;
};

const initialState: VerificationState = {
  verifications: [],
  verification: {} as VerificationModel,
  openAlert: false,
  verificationTotalNumber: 0
};

const verificationSlice = createSlice({
  name: "verification",
  initialState: initialState,
  reducers: {
    // Get Verifications
    getVerificationsRequest(
      _state: VerificationState,
      _action: PayloadAction<AppActionTypes.Verification.GetVerificationsRequestAction>
    ) { },
    getVerificationsSuccess(
      state: VerificationState,
      action: PayloadAction<VerificationModel[]>
    ) {
      state.verifications = [...action.payload];
    },
    getVerificationsFailure(_state: VerificationState) { },

    // Get Verification
    getVerificationRequest(
      _state: VerificationState,
      _action: PayloadAction<AppActionTypes.Verification.GetVerificationRequestAction>
    ) { },
    getVerificationSuccess(
      state: VerificationState,
      action: PayloadAction<VerificationModel>
    ) {     
      state.verification = action.payload;
    },
    getVerificationFailure(_state: VerificationState) { },

    // Save Verification
    saveVerificationRequest(
      _state: VerificationState,
      _action: PayloadAction<AppActionTypes.Verification.SaveVerificationRequestAction>
    ) { },
    saveVerificationSuccess(
      state: VerificationState,
      action: PayloadAction<AppActionTypes.Verification.SaveVerificationSuccessAction>
    ) {  },
    saveVerificationFailure(_state: VerificationState) { },

    // Set total number
    setVerificationTotalNumber(
      state: VerificationState,
      action: PayloadAction<number>
    ) {
      state.verificationTotalNumber = action.payload
     },
    // Alert
    setAlertStatus(
      state: VerificationState,
      action: PayloadAction<boolean>
    ) {
      state.openAlert = action.payload
    }
  },
});

export const actions = verificationSlice.actions;
export const reducer = verificationSlice.reducer;
