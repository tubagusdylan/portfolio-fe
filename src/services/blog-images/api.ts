import { baseApi } from "@services/baseApi";
import { ResponsePost, ResponseDelete, ResponseBlogImage, ResponseBlogImages } from "./types";

export const blogImageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlogImage: builder.query<ResponseBlogImage, string>({
      query: (id) => {
        return {
          url: `/api/v1/admin/blog-images/${id}`,
          method: "GET",
        };
      },
      providesTags: ["BlogImages"],
    }),
    getBlogImages: builder.query<ResponseBlogImages, string>({
      query: (blog_id) => {
        return {
          url: `/api/v1/admin/blog-images`,
          method: "GET",
          params: { blog_id },
        };
      },
      providesTags: [{ type: "BlogImages", id: "LIST" }],
    }),
    getPublicBlogImages: builder.query<ResponseBlogImages, string>({
      query: (blog_id) => {
        return {
          url: `/api/v1/public/blog-images`,
          method: "GET",
          params: { blog_id },
        };
      },
      providesTags: [{ type: "BlogImages", id: "LIST" }],
    }),
    addBlogImage: builder.mutation<ResponsePost, FormData>({
      query: (data) => {
        return {
          url: `/api/v1/admin/blog-images`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["BlogImages"],
    }),
    deleteBlogImage: builder.mutation<ResponseDelete, string>({
      query: (id) => {
        return {
          url: `/api/v1/admin/blog-images/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["BlogImages"],
    }),
  }),
});

export const { useGetBlogImageQuery, useGetBlogImagesQuery, useGetPublicBlogImagesQuery, useAddBlogImageMutation, useDeleteBlogImageMutation } =
  blogImageApi;
