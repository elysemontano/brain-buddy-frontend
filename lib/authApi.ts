import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCookie } from 'cookies-next';
import { setToken } from './auth/authSlice';
import { RootState } from './store';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
      // Define onSuccess behavior within the mutation definition
      onSuccess: async (data, { dispatch }) => {
        dispatch(setToken(data.token)); // Assuming login response contains a token
        setCookie('token', data.token); // Store token in cookie
      },
    }),
    getUser: builder.query({
      query: () => '/users/current_user',
    }),
  }),
});

export const { useLoginMutation, useGetUserQuery } = authApi;


