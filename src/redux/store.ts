import { configureStore,  } from '@reduxjs/toolkit'

import СomponentsSlice from './СomponentSlice'

const store = configureStore({
  reducer: СomponentsSlice,
  
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store