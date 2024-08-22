import { baseApi } from "./baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCategories: build.query({
      query: () => {
        return {
          url: `/categories`,
          method: "GET",
        };
      },
      providesTags: ["categories"],
    }),
    getAllAnimal: build.query({
      query: () => {
        return {
          url: `/animals`,
          method: "GET",
        };
      },
      providesTags: ["animals"],
    }),
    getAnimalByCategory: build.query({
      query: (args) => {
        return {
          url: `/animals/category/${args.category}`,
          method: "GET",
        };
      },
      providesTags: ["animals"],
    }),
    addCategory: build.mutation({
      query: (data) => {
        return {
          url: "/categories",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["categories"],
    }),
    addAnimal: build.mutation({
      query: (data) => {
        return {
          url: "/animals",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["animals"],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useAddCategoryMutation,
  useAddAnimalMutation,
  useGetAllAnimalQuery,
  useGetAnimalByCategoryQuery,
} = categoryApi;
