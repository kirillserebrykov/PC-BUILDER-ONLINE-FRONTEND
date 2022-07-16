import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ComonentsResponse } from './types'

const BaseURL = "http://localhost:5000/"
export const GetDataApi = createApi({
  reducerPath: 'GetDataApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getDataComponent: builder.query<ComonentsResponse, string>({
      query: (url) => `${BaseURL}getDataComponent?url=${url.toString()}`,
    }),
  }),
})

export const { useGetDataComponentQuery } = GetDataApi