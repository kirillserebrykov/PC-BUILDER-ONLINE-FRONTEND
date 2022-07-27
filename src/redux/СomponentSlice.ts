import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type {
  IСomponentsState,
  IRenameActions,
  INamesСomponents,
} from "./typeAndInterfaceСomponentSlice/reduxInterface";
import {
  ComponentStateActions,
  loadState,
  saveState,
} from "../localStorage/localStorage";



const initialState: IСomponentsState = {
  Сomponents: [
    {
      name: "1",
      value: "",
    },

  ],
};




const ComponentHandler = (
  Сomponents: Array<INamesСomponents> ,
  actionPayload: string,
  type: string,
  renameValue: string = ""
) => {
  return Сomponents.map((el , i) => {
    if (el.name === actionPayload) {
      if (type === "delete") return Сomponents.splice(i, 1);
      if (type === "rename") {
        Сomponents[i].name = renameValue;
      }
    }
  });
};

export const СomponentsSlice = createSlice({
  name: "Сomponent",
  initialState,
  reducers: {
    addСomponent: (state, action: PayloadAction<string>) => {
      state.Сomponents.push({name:action.payload, value:""});
      saveState(state.Сomponents);
    },
    deleteСomponent: (state, action: PayloadAction<string>) => {
      if (loadState()) {
        state.Сomponents = ComponentStateActions(action.payload, "delete")
      } else {
        ComponentHandler(state.Сomponents, action.payload, "delete");
        saveState(state.Сomponents);
      }
    },

    renameСomponent: (state, action: PayloadAction<IRenameActions>) => {
      if (loadState()) {
        state.Сomponents = ComponentStateActions(
          action.payload.component,
          "rename",
          action.payload.renameValue
        );
      } else {
        ComponentHandler(
          state.Сomponents,
          action.payload.component,
          "rename",
          action.payload.renameValue
        );
        saveState(state.Сomponents);
      }
    },
  },
});

export const { addСomponent, deleteСomponent, renameСomponent } =
  СomponentsSlice.actions;
export default СomponentsSlice.reducer;
