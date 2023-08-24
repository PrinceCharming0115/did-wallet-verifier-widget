import { all } from "redux-saga/effects";

import verificationSaga from './verification';
import interactionSaga from './interaction';
import getMeRequestSaga from "./auth";

function* rootSaga() {
  yield all([
    ...verificationSaga,
    ...interactionSaga,
    ...getMeRequestSaga
  ]);
}

export default rootSaga;
