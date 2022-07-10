import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type {itemAccessoriesState} from "./typeAndInterfaceForItemAccessoriesSlice/reduxInterface"


const initialState: itemAccessoriesState = {
  NamesAccessories: ["GPU","CPU",], 
}

export const itemAccessoriesSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state,action: PayloadAction<string>) => {
      console.log(action.payload)
      state.NamesAccessories.push(action.payload)
    },
    deleteItem: (state) => {
      state.NamesAccessories.pop()
    },
    
  },
})

export const { addItem, deleteItem} = itemAccessoriesSlice.actions
export default itemAccessoriesSlice.reducer