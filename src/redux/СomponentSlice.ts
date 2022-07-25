import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { СomponentsState,IRenameActions } from "./typeAndInterfaceСomponentSlice/reduxInterface";
import { saveState } from "../localStorage/localStorage";

const initialState: СomponentsState = {
  NamesСomponents: ["1", "2", "3"],
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
      saveState(state.NamesСomponents)
    },
    deleteСomponent: (state, action: PayloadAction<string>) => {
      console.log(action.payload)
      ComponentHandler(state.NamesСomponents, action.payload, "delete");
    },
    renameСomponent: (state, action: PayloadAction<IRenameActions>) => {
      ComponentHandler(state.NamesСomponents, action.payload.component, "rename", action.payload.renameValue);
    },
  },
});

export const { addСomponent, deleteСomponent,renameСomponent, } = СomponentsSlice.actions;
export default СomponentsSlice.reducer;
