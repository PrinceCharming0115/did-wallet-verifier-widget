import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppActionTypes } from "../store";
import { IAction } from "../types/action";

type AuthState = {
  did: string;
  token: string | null;
};

const initialState: AuthState = {
  did: '',
  token: localStorage.getItem("token"),
};

const interactionSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // Set DID
    setSocketID(
      state: AuthState,
      action: PayloadAction<string>
    ) {
      state.did = action.payload;
    },

    // Set Token
    setToken(
      state: AuthState,
      action: PayloadAction<string>
    ) {
      state.token = action.payload;
    },

     // Get me
    getMeRequest(
      state: AuthState,
      action: PayloadAction<IAction>
    ) { },
    getMeRequestSuccess(
      state: AuthState,
      action: PayloadAction<string>
    ) {
      state.did = action.payload;
    },
    getMeRequestFilure(action: AuthState) { },

    logout(state: AuthState) { 
      state.did = "";
			localStorage.removeItem("token");
      state.token = '';
    }

  },
});

export const actions = interactionSlice.actions;
export const reducer = interactionSlice.reducer;
