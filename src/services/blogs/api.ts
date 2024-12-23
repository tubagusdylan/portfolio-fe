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
    getBlogs: builder.query<ResponseBlogs, { page: number; limit: number; category?: string; title?: string }>({
      query: (params) => {
        let newParams: any = { page: params.page, limit: params.limit };
        if (params.category && params.category.trim() !== "") {
          newParams = {
            ...newParams,
            category: params.category,
          };
        }
        if (params.title && params.title.trim() !== "") {
          newParams = {
            ...newParams,
            title: params.title,
          };
        }
        return {
          url: `/api/v1/admin/blogs`,
          method: "GET",
          params: newParams,
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
