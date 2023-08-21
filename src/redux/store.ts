import { combineReducers, configureStore, createReducer } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

import {
  loadingReducer,
  loadingActions,
  verificationActions,
  verificationReducer,
  interactionActions,
  interactionReducer,
} from "./slices";

const reducer = combineReducers({
  loading: loadingReducer,
  verification: verificationReducer,
  interaction: interactionReducer
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  preloadedState: {},
  reducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({ serializableCheck: false, thunk: false }).concat(
      sagaMiddleware
    )
});

export const AppActions = {
  loading: loadingActions,
  verification: verificationActions,
  interaction: interactionActions
};

sagaMiddleware.run(rootSaga);

export * as AppActionTypes from './types';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;