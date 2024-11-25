import { baseApi } from "@services/baseApi";
import { ResponsePost, ResponseDelete, ResponseProjectImage, ResponseProjectImages } from "./types";

export const projectImageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProjectImage: builder.query<ResponseProjectImage, string>({
      query: (id) => {
        return {
          url: `/api/v1/admin/project-images/${id}`,
          method: "GET",
        };
      },
      providesTags: ["ProjectImages"],
    }),
    getProjectImages: builder.query<ResponseProjectImages, string>({
      query: (project_id) => {
        return {
          url: `/api/v1/admin/project-images`,
          method: "GET",
          params: { project_id },
        };
      },
      providesTags: [{ type: "ProjectImages", id: "LIST" }],
    }),
    getPublicProjectImages: builder.query<ResponseProjectImages, string>({
      query: (project_id) => {
        return {
          url: `/api/v1/public/project-images`,
          method: "GET",
          params: { project_id },
        };
      },
      providesTags: [{ type: "ProjectImages", id: "LIST" }],
    }),
    addProjectImage: builder.mutation<ResponsePost, FormData>({
      query: (data) => {
        return {
          url: `/api/v1/admin/project-images`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["ProjectImages"],
    }),
    deleteProjectImage: builder.mutation<ResponseDelete, string>({
      query: (id) => {
        return {
          url: `/api/v1/admin/project-images/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["ProjectImages"],
    }),
  }),
});

export const {
  useGetProjectImageQuery,
  useGetProjectImagesQuery,
  useGetPublicProjectImagesQuery,
  useAddProjectImageMutation,
  useDeleteProjectImageMutation,
} = projectImageApi;
