import { configureStore,  } from '@reduxjs/toolkit'
import { GetDataApi } from './api/getData'
import TotalPriceSlice from './TotalPriceSlice'
import –°omponentsSlice from './–°omponentSlice'

const store = configureStore({
  reducer: {
    –°omponentsSlice: –°omponentsSlice,
    TotalPriceSlice: TotalPriceSlice,
    [GetDataApi.reducerPath]: GetDataApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(GetDataApi.middleware),

})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store