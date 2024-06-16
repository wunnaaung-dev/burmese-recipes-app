import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BURMESE_RECIPES_API =
  "https://raw.githubusercontent.com/sannlynnhtun-coding/Burmese-Recipes/main/BurmeseRecipes.json";

export interface Recipe {
  Guid: string;
  Name: string;
  Ingredients: string;
  CookingInstructions: string;
  UserType: string;
}

export const recipesApi = createApi({
  reducerPath: "recipesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    fetchRecipes: builder.query<Recipe[], void>({
      query: () => BURMESE_RECIPES_API,
    }),


  }),
});

export const { useFetchRecipesQuery} = recipesApi;
export const { endpoints, reducerPath, reducer, middleware } = recipesApi;
