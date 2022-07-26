export const loadState = () => {
  try {
    const serialState = localStorage.getItem("appState");
    if (serialState === null) {
      return undefined;
    }
    return JSON.parse(serialState);
  } catch (err) {
    return undefined;
  }
};




export const saveState = (state: Array<string>) => {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem("appState", serialState);
  } catch (err) {
    console.log(err);
  }
};
const StateMap = (
  state: Array<string>,
  component: string,
  type: string,
  value: string = ""
) => {
  return state.map((el: string, i: number) => {
    if (el === component) {
      if (type === "delete") {
        state.splice(i, 1);
        saveState(state);
        return  state
      } else if (type === "rename") {
        state[i] = value;
        return saveState(state);
      }
    }
  });
};



export const ComponentStateActions = (
  component: string,
  type: string,
  value: string = ""
): Array<string> => {
  try {
    let LocalStorageStateJSON = localStorage.getItem("appState");
    if (LocalStorageStateJSON === null) {
      return [""];
    }
    let LocalStorageState = JSON.parse(LocalStorageStateJSON);
    const results: Array<any> = StateMap(LocalStorageState, component, type, value).filter(element => {
      return element !== undefined;
    });
   return  results[0]
  } catch (err) {
    return [""]
  }
};
