import { baseApi } from "@services/baseApi";
import { BodyMyProject, ResponsePost, ResponseDelete, ResponseMyProject, ResponseMyProjects } from "./types";

export const myProjectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyProject: builder.query<ResponseMyProject, string>({
      query: (id) => {
        return {
          url: `/api/v1/admin/my-projects/${id}`,
          method: "GET",
        };
      },
      providesTags: ["MyProjects"],
    }),
    getPublicMyProject: builder.query<ResponseMyProject, string>({
      query: (id) => {
        return {
          url: `/api/v1/public/my-projects/${id}`,
          method: "GET",
        };
      },
      providesTags: ["MyProjects"],
    }),
    getMyProjects: builder.query<ResponseMyProjects, { page: number; limit: number; title?: string; tech_stack?: string }>({
      query: (params) => {
        let newParams: any = { page: params.page, limit: params.limit };
        if (params.title && params.title.trim() !== "") {
          newParams = {
            ...newParams,
            title: params.title,
          };
        }
        if (params.tech_stack && params.tech_stack.trim() !== "") {
          newParams = {
            ...newParams,
            tech_stack: params.tech_stack,
          };
        }
        return {
          url: `/api/v1/admin/my-projects`,
          method: "GET",
          params: newParams,
        };
      },
      providesTags: [{ type: "MyProjects", id: "LIST" }],
    }),
    getPublicMyProjects: builder.query<ResponseMyProjects, { page: number; limit: number; title?: string; tech_stack?: string }>({
      query: (params) => {
        let newParams: any = { page: params.page, limit: params.limit };
        if (params.title && params.title.trim() !== "") {
          newParams = {
            ...newParams,
            title: params.title,
          };
        }
        if (params.tech_stack && params.tech_stack.trim() !== "") {
          newParams = {
            ...newParams,
            tech_stack: params.tech_stack,
          };
        }
        return {
          url: `/api/v1/public/my-projects`,
          method: "GET",
          params: newParams,
        };
      },
      providesTags: [{ type: "MyProjects", id: "LIST" }],
    }),
    addMyProject: builder.mutation<ResponsePost, Partial<BodyMyProject>>({
      query: (data) => {
        return {
          url: `/api/v1/admin/my-projects`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["MyProjects"],
    }),
    updateMyProject: builder.mutation<ResponsePost, Partial<BodyMyProject>>({
      query: (data) => {
        return {
          url: `/api/v1/admin/my-projects/${data.id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["MyProjects"],
    }),
    deleteMyProject: builder.mutation<ResponseDelete, string>({
      query: (id) => {
        return {
          url: `/api/v1/admin/my-projects/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["MyProjects"],
    }),
  }),
});

export const {
  useGetMyProjectQuery,
  useGetMyProjectsQuery,
  useGetPublicMyProjectQuery,
  useGetPublicMyProjectsQuery,
  useAddMyProjectMutation,
  useUpdateMyProjectMutation,
  useDeleteMyProjectMutation,
} = myProjectApi;
