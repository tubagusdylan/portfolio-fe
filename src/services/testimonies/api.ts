import { baseApi } from "@services/baseApi";
import { BodyTestimonie, ResponsePost, ResponseDelete, ResponseTestimonie, ResponseTestimonies } from "./types";

export const testimonieApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTestimonie: builder.query<ResponseTestimonie, string>({
      query: (id) => {
        return {
          url: `/api/v1/admin/testimonies/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Testimonies"],
    }),
    getTestimonies: builder.query<ResponseTestimonies, { page: number; limit: number }>({
      query: (params) => {
        return {
          url: `/api/v1/admin/testimonies`,
          method: "GET",
          params: params,
        };
      },
      providesTags: [{ type: "Testimonies", id: "LIST" }],
    }),
    getPublicTestimonies: builder.query<ResponseTestimonies, { page: number; limit: number }>({
      query: (params) => {
        return {
          url: `/api/v1/public/testimonies`,
          method: "GET",
          params: params,
        };
      },
      providesTags: [{ type: "Testimonies", id: "LIST" }],
    }),
    addTestimonie: builder.mutation<ResponsePost, Partial<BodyTestimonie>>({
      query: (data) => {
        return {
          url: `/api/v1/public/testimonies`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Testimonies"],
    }),
    deleteTestimonie: builder.mutation<ResponseDelete, string>({
      query: (id) => {
        return {
          url: `/api/v1/admin/testimonies/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Testimonies"],
    }),
  }),
});

export const { useGetTestimonieQuery, useGetTestimoniesQuery, useGetPublicTestimoniesQuery, useAddTestimonieMutation, useDeleteTestimonieMutation } =
  testimonieApi;
