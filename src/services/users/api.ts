import { baseApi } from "@services/baseApi";
import { BodyUser, ResponsePost, ResponseDelete, ResponseUser, ResponseUsers } from "./types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<ResponseUser, string>({
      query: (id) => {
        return {
          url: `/api/v1/admin/users/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Users"],
    }),
    getUsers: builder.query<ResponseUsers, void>({
      query: () => {
        return {
          url: `/api/v1/admin/users`,
          method: "GET",
        };
      },
      providesTags: [{ type: "Users", id: "LIST" }],
    }),
    addUser: builder.mutation<ResponsePost, Partial<BodyUser>>({
      query: (data) => {
        return {
          url: `/api/v1/admin/users`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Users"],
    }),
    updateUser: builder.mutation<ResponsePost, Partial<BodyUser>>({
      query: (data) => {
        return {
          url: `/api/v1/admin/users/${data.id}`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Users"],
    }),
    deleteUser: builder.mutation<ResponseDelete, string>({
      query: (id) => {
        return {
          url: `/api/v1/admin/users/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useGetUserQuery, useGetUsersQuery, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation } = userApi;
