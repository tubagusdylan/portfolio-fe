import { baseApi } from "@services/baseApi";
import { BodyBlog, ResponsePost, ResponseDelete, ResponseBlog, ResponseBlogs } from "./types";

export const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlog: builder.query<ResponseBlog, string>({
      query: (id) => {
        return {
          url: `/api/v1/admin/blogs/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Blogs"],
    }),
    getBlogs: builder.query<ResponseBlogs, { page: string; limit: string; category?: string; title?: string }>({
      query: (params) => {
        return {
          url: `/api/v1/admin/blogs`,
          method: "GET",
          params: params,
        };
      },
      providesTags: [{ type: "Blogs", id: "LIST" }],
    }),
    addBlog: builder.mutation<ResponsePost, Partial<BodyBlog>>({
      query: (data) => {
        return {
          url: `/api/v1/admin/blogs`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Blogs"],
    }),
    updateBlog: builder.mutation<ResponsePost, Partial<BodyBlog>>({
      query: (data) => {
        return {
          url: `/api/v1/admin/blogs/${data.id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["Blogs"],
    }),
    deleteBlog: builder.mutation<ResponseDelete, string>({
      query: (id) => {
        return {
          url: `/api/v1/admin/blogs/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Blogs"],
    }),
  }),
});

export const { useGetBlogQuery, useGetBlogsQuery, useAddBlogMutation, useUpdateBlogMutation, useDeleteBlogMutation } = blogApi;
