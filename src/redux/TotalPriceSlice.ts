import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ITotalPrice } from "./typeAndInterfaceСomponentSlice/reduxInterface";

const initialState: ITotalPrice = {
  TotalPrice: 0,
  currency: ""
};


export const TotalPriceSlice = createSlice({
  name: "TotalPrice",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.TotalPrice += action.payload 
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.TotalPrice -= action.payload 
    },
    setCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload 
    },
  },
});

export const { increment, decrement, setCurrency } = TotalPriceSlice.actions;
export default TotalPriceSlice.reducer;
