import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ComonentsResponse } from './types'

// Define a service using a base URL and expected endpoints
export const GetDataApi = createApi({
  reducerPath: 'GetDataApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/getDataComponent?url=https://www.moyo.ua/ua/videokarta_msi_geforce_rtx3070_ti_8gb_gddr6_suprim_x_rtx_3070ti_suprim_x_8g_/512421.html' }),
  endpoints: (builder) => ({
    getDataComponent: builder.query<ComonentsResponse, string>({
      query: (url) => ``,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDataComponentQuery } = GetDataApi