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

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    
    fetchRecipes: builder.query<Recipe[], void>({
      query: () => BURMESE_RECIPES_API,
    }),

    fetchRecipeBySlug: builder.query<Recipe | undefined, string>({
      queryFn: async (slug, _queryApi, _extraOptions, fetchWithBQ) => {
        const { data } = await fetchWithBQ(BURMESE_RECIPES_API);
        if (!data) {
          return {
            error: { status: "FETCH_ERROR", error: "Could not fetch recipes" },
          };
        }
        const recipe = (data as Recipe[]).find(
          (recipe) => recipe.Guid === slug
        );

        return { data: recipe };
      },
    }),
  }),
});

export const { useFetchRecipesQuery, useFetchRecipeBySlugQuery } = apiSlice;
export const { endpoints, reducerPath, reducer, middleware } = apiSlice;
