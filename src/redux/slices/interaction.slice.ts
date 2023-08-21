import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InteractionModel } from "../../models";
import { AppActionTypes } from "../store";

type InteractionState = {
  interactions: InteractionModel[];
  interaction: InteractionModel;
};

const initialState: InteractionState = {
  interactions: [],
  interaction: {} as InteractionModel
};

const interactionSlice = createSlice({
  name: "interaction",
  initialState: initialState,
  reducers: {
    // Get Interactions
    getInteractionsRequest(
      _state: InteractionState,
      _action: PayloadAction<AppActionTypes.Interaction.GetInteractionsRequestAction>
    ) { },
    getInteractionsSuccess(
      state: InteractionState,
      action: PayloadAction<InteractionModel[]>
    ) {
      state.interactions = [...action.payload];
    },
    getInteractionsFailure(_state: InteractionState) { },

    // Get Interaction
    getInteractionRequest(
      _state: InteractionState,
      _action: PayloadAction<AppActionTypes.Interaction.GetInteractionRequestAction>
    ) { },
    getInteractionSuccess(
      state: InteractionState,
      action: PayloadAction<InteractionModel>
    ) {     
      state.interaction = action.payload;
    },
    getInteractionFailure(_state: InteractionState) { },

  },
});

export const actions = interactionSlice.actions;
export const reducer = interactionSlice.reducer;
