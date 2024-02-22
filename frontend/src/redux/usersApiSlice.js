import { apiSlice } from './apiSlice';

// const URL = 'http://localhost:5000';
const DEPLOYED_URL = 'https://frightened-colt-hat.cyclic.app';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${DEPLOYED_URL}/api/user/login`,
                method: 'POST',
                body: data
            }),
        }),
        logout: builder.mutation({
            query: (data) => ({
                url: `${DEPLOYED_URL}/api/user/logout`,
                method: 'POST',
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${DEPLOYED_URL}/api/user/register`,
                method: 'POST',
                body: data
            }),
        }),
        getSingleUserById: builder.mutation({
            query: (id) => ({
                url: `${DEPLOYED_URL}/api/user/${id}`,
                method: 'GET',
            }),
        }),

    }),
})

export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useGetSingleUserByIdMutation } = userApiSlice