import { configureStore,  } from '@reduxjs/toolkit'
import { GetDataApi } from './api/getData'
import СomponentsSlice from './СomponentSlice'

const store = configureStore({
  reducer: {
    СomponentsSlice: СomponentsSlice,
    [GetDataApi.reducerPath]: GetDataApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(GetDataApi.middleware),

})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store