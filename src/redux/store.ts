import { configureStore,  } from '@reduxjs/toolkit'

import itemAccessoriesSlice from './itemAccessoriesSlice'

const store = configureStore({
  reducer: itemAccessoriesSlice,
  
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store