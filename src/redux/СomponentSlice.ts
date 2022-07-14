import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { СomponentsState,IRenameActions } from "./typeAndInterfaceСomponentSlice/reduxInterface";

const initialState: СomponentsState = {
  NamesСomponents: ["GPU", "CPU", "ddasdas"],
};

const ComponentHandler = (
  NamesСomponents: Array<string>,
  actionPayload: string,
  type: string,
  renameValue: string = ""
) => {
  return NamesСomponents.map((el, i) => {
    if (el === actionPayload) {
      if (type === "delete") return NamesСomponents.splice(i, 1);
      if (type === "rename") {
        NamesСomponents[i] = renameValue
      }
    }
  });
};

export const СomponentsSlice = createSlice({
  name: "Сomponent",
  initialState,
  reducers: {
    addСomponent: (state, action: PayloadAction<string>) => {
      state.NamesСomponents.push(action.payload);
    },
    deleteСomponent: (state, action: PayloadAction<string>) => {
      ComponentHandler(state.NamesСomponents, action.payload, "delete");
    },
    renameСomponent: (state, action: PayloadAction<IRenameActions>) => {
      ComponentHandler(state.NamesСomponents, action.payload.component, "rename", action.payload.renameValue);
    },
  },
});

export const { addСomponent, deleteСomponent,renameСomponent } = СomponentsSlice.actions;
export default СomponentsSlice.reducer;
