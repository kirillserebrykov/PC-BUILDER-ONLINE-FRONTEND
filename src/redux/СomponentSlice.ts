import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type {
  IComponentsState,
  IRenameActions,
  INamesComponents,
} from "./typeAndInterfaceСomponentSlice/reduxInterface";
import {
  ComponentStateActions,
  loadState,
  saveState,
} from "../localStorage/localStorage";

const initialState: IComponentsState = {
  Components: [
    {
      name: "CPU",
      value: "",
    },
    {
      name: "GPU",
      value: "",
    },
    {
      name: "Motherboard",
      value: "",
    },
    {
      name: "RAM",
      value: "",
    },
    {
      name: "Cooling system",
      value: "",
    },
    {
      name: "SSD",
      value: "",
    },
    {
      name: "PB",
      value: "",
    },
    {
      name: "Box",
      value: "",
    },
  ],
};

const ComponentHandler = (
  Components: Array<INamesComponents>,
  actionPayload: string,
  type: string,
  value: string = ""
) => {
  // eslint-disable-next-line array-callback-return
  return Components.map((el, i) => {
    if (el.name === actionPayload) {
      if (type === "delete") return Components.splice(i, 1);
      if (type === "rename") {
        Components[i].name = value;
      }
      if (type === "changeValue") {
        Components[i].value = value;
      }
    }
  });
};

export const ComponentsSlice = createSlice({
  name: "Сomponent",
  initialState,
  reducers: {
    addСomponent: (state, action: PayloadAction<string>) => {
      if (loadState()) {
        state.Components = loadState();
        state.Components.push({ name: action.payload, value: "" });
        saveState(state.Components);
      } else {
        state.Components.push({ name: action.payload, value: "" });
        saveState(state.Components);
      }
    },
    setСomponent: (state) => {
      state.Components = loadState();
    },
    deleteСomponent: (state, action: PayloadAction<string>) => {
      if (loadState()) {
        state.Components = ComponentStateActions(action.payload, "delete");
      } else {
        ComponentHandler(state.Components, action.payload, "delete");
        saveState(state.Components);
      }
    },
    renameСomponent: (state, action: PayloadAction<IRenameActions>) => {
      if (loadState()) {
        state.Components = ComponentStateActions(
          action.payload.component,
          "rename",
          action.payload.value
        );
      } else {
        ComponentHandler(
          state.Components,
          action.payload.component,
          "rename",
          action.payload.value
        );
        saveState(state.Components);
      }
    },
    valueInputChange: (state, action: PayloadAction<IRenameActions>) => {
      if (loadState()) {
        state.Components = ComponentStateActions(
          action.payload.component,
          "changeValue",
          action.payload.value
        );
      } else {
        ComponentHandler(
          state.Components,
          action.payload.component,
          "changeValue",
          action.payload.value
        );
        saveState(state.Components);
      }
    },
  },
});

export const {
  addСomponent,
  deleteСomponent,
  renameСomponent,
  valueInputChange,
  setСomponent,
} = ComponentsSlice.actions;
export default ComponentsSlice.reducer;
