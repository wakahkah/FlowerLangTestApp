import {BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError,} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.API_URL,
});

const baseQueryWithInterceptor:
    BaseQueryFn<string|FetchArgs, unknown, FetchBaseQueryError> =
        async (args, api, extraOptions) => {
      let result = await baseQuery(args, api, extraOptions);
      // console.log('result', result);
      if (result.error && result.error.status === 401) {
      }
      return result;
    };

export const api = createApi({
  reducerPath: 'flower-lang-api',
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});
