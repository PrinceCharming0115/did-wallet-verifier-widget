import { AppActions } from "../../store";

import { call, put } from "redux-saga/effects";

import { makeAPIRequst } from "../../../utils";

import { takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import * as AppActionTypes from "../../types";
import { AxiosError } from "axios";

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* getVerificationsRequestSaga(
  action: PayloadAction<AppActionTypes.Verification.GetVerificationsRequestAction>
) {
  try {
    yield put(AppActions.loading.setLoading());

    const result: ResponseGenerator = yield call(async () => {
      return await makeAPIRequst(`verification/get-verification-list?page=${action.payload.pageNumber}`, "GET");
    });
    
    console.log("result:", result.data);
    yield put(AppActions.loading.finishLoading());
    yield put(AppActions.verification.getVerificationsSuccess(result.data.verificationList));
    yield put(AppActions.verification.setVerificationTotalNumber(result.data.verificationTotalNumber));
    if (action.payload.next) {
      action.payload.next();
    }
  } catch (error: unknown) {
    yield put(AppActions.loading.finishLoading());

    if (error instanceof AxiosError) {
      const reasonCode: string = error.response?.data.reason;
      if (action.payload.errorAction) {
        action.payload.errorAction(error.response?.data.message);
      }
      if (reasonCode && action.payload.errors) {
        const errorHandler: () => void = action.payload.errors[reasonCode];
        errorHandler();
      }
    }
  }
}

export default (function* () {
  yield takeLatest("verification/getVerificationsRequest", getVerificationsRequestSaga);
})();
