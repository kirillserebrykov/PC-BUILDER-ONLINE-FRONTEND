import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type {СomponentsState} from "./typeAndInterfaceForItemAccessoriesSlice/reduxInterface"


const initialState: СomponentsState = {
  NamesСomponents: ["GPU","CPU",], 
}

export const СomponentsSlice = createSlice({
  name: 'Сomponent',
  initialState,
  reducers: {
    addСomponent: (state,action: PayloadAction<string>) => {
      state.NamesСomponents.push(action.payload)
    },
    deleteСomponent: (state) => {
      state.NamesСomponents.pop()
    },
    
  },
})

export const { addСomponent, deleteСomponent} = СomponentsSlice.actions
export default СomponentsSlice.reducer