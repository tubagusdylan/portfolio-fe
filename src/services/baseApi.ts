import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { toast } from "react-toastify";
import PATH from "@config/path";
import { ResponseRefreshToken } from "./auth/types";

const BASE_URL = import.meta.env.VITE_BASE_URL_DEV;
let token: string | null = null;

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: "include",
  prepareHeaders: (headers) => {
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && (result.error.status === 401 || result.error.status === 403)) {
    try {
      const refreshResult = await baseQuery("/api/v1/admin/users/token", api, extraOptions);

      if (refreshResult.data) {
        const data = refreshResult.data as ResponseRefreshToken;
        token = data.data.token;

        result = await baseQuery(args, api, extraOptions);
      } else {
        throw new Error("Failed Auth");
      }
    } catch (error) {
      toast.error("Your session has closed. Please login again.");
      setTimeout(() => {
        window.location.href = `${window.location.origin}${PATH.LOGIN_PAGE}`;
      }, 1000);
    }
  }

  return result;
};

export const baseApi = createApi({
  baseQuery: baseQueryWithAuth,
  tagTypes: ["Auth", "Users", "Blogs", "BlogImages", "MyProjects", "ProjectImages", "Testimonies"],
  endpoints: () => ({}),
});
