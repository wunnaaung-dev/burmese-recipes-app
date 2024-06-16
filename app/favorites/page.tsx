"use client";

import { useState, useEffect } from "react";
import { useFetchRecipesQuery } from "@/features/receipes-api-slice";
import Loading from "@/components/loading/Loading";
import { Recipe } from "@/features/receipes-api-slice";
import RecipesCard from "@/components/dataDisplay/RecipesCard";
const FavoriteRecipes = () => {
  const { data: recipes, isFetching, error } = useFetchRecipesQuery();
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    if (recipes) {
      const savedRecipeIds = JSON.parse(localStorage.getItem("savedRecipes") || "[]");
      const filteredRecipes = recipes.filter(recipe => savedRecipeIds.includes(recipe.Guid));
      setFavoriteRecipes(filteredRecipes);
    }
  }, [recipes]);

  if (isFetching) return <Loading />;
  if (error) return <div>Oh no, there was an error</div>;
  if (favoriteRecipes.length === 0) return <div>No favorite recipes found</div>;

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center text-slate-600">Favorite Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favoriteRecipes.map(recipe => (
          <RecipesCard
          key={recipe.Guid}
          img={`/img/${recipe.Name}.jpg`}
          name={recipe.Name}
          type={recipe.UserType}
          slug={recipe.Guid}
        />
        ))}
      </div>
    </div>
  );
};

export default FavoriteRecipes;
