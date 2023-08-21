import { all } from "redux-saga/effects";

import verificationSaga from './verification';
import interactionSaga from './interaction';

function* rootSaga() {
  yield all([
    ...verificationSaga,
    ...interactionSaga
  ]);
}

export default rootSaga;
