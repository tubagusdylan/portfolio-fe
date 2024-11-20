import { baseApi } from "@services/baseApi";
import { BodyLogin, ResponseLogin, ResponseLogout, ResponseRefreshToken } from "./types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ResponseLogin, BodyLogin>({
      query: (data) => {
        return {
          url: `/api/v1/admin/users/login`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: [{ type: "Auth", id: "LIST" }],
    }),
    logout: builder.mutation<ResponseLogout, void>({
      query: () => {
        return {
          url: `/api/v1/admin/users/logout`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Auth"],
    }),
    refreshToken: builder.query<ResponseRefreshToken, void>({
      query: () => {
        return {
          url: "/api/v1/admin/users/token",
          method: "GET",
        };
      },
      providesTags: ["Auth"],
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRefreshTokenQuery } = authApi;
