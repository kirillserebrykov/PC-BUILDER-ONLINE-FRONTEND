export const loadState = () => {
    try {
      const serialState = localStorage.getItem('appState');
      if (serialState === null) {
        return undefined;
      }
      return JSON.parse(serialState);
    } catch (err) {
      return undefined;
    }
};


export const saveState = (state:any) => {
    try {
      const serialState = JSON.stringify(state);
      localStorage.setItem('appState', serialState);
    } catch(err) {
        console.log(err);
    }
};



export const ComponentStateActions = (value:string, type:string) => {

  try {
    const serialState =  localStorage.getItem('appState');
    if (serialState === null) {
      return undefined;
    }
    
    //  JSON.parse(serialState).map((el: string, i: string | number) => {
    //   if (el === value) {
    //     if (type === "delete") return saveState(JSON.parse(serialState).splice(i, 1)) 
    //     if (type === "rename") return saveState(JSON.parse(serialState)[i] = value) 
    //   }
    // });


  } catch (err) {
    return undefined;
  }
  
};

