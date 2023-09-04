import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InteractionModel } from "../../models";
import { AppActionTypes } from "../store";

type InteractionState = {
  interactions: InteractionModel[];
  interaction: InteractionModel;
  interactionTotalNumber: number;
};

const initialState: InteractionState = {
  interactions: [],
  interaction: {} as InteractionModel,
  interactionTotalNumber: 0
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

    // Set interaction total number
    setInteractionTotalNumber(
      state: InteractionState,
      action: PayloadAction<number>
    ) {
      state.interactionTotalNumber = action.payload;
    }

  },
});

export const actions = interactionSlice.actions;
export const reducer = interactionSlice.reducer;
