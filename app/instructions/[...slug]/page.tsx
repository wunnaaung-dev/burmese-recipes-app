"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Recipe, useFetchRecipesQuery } from "@/features/receipes-api-slice";
import Loading from "@/components/loading/Loading";
import AlertBox from "@/components/alert/AlertBox";
import { useAppDispatch } from "@/hooks/hooks";
import { setSearchValue } from "@/features/search/searchSlice";

const RecipeDetails = () => {
  const params = useParams();
  const router = useRouter();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const { data: recipes, isFetching, error } = useFetchRecipesQuery();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [alertDescription, setAlertDescription] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setSearchValue(""))
    if (recipes && slug) {
      const foundRecipe = recipes.find((recipe) => recipe.Guid === slug);
      setRecipe(foundRecipe || null);
      if (foundRecipe) {
        setImageSrc(`/img/${foundRecipe.Name}.jpg`);
        const savedRecipes = JSON.parse(
          localStorage.getItem("savedRecipes") || "[]"
        );
        setIsSaved(savedRecipes.includes(foundRecipe.Guid));
      }
    }
  }, [dispatch, recipes, slug]);

  const handleImageError = () => {
    setImageSrc("/img/default.jpg");
  };

  const handleToggleSave = () => {
    if (recipe) {
      let savedRecipes = JSON.parse(
        localStorage.getItem("savedRecipes") || "[]"
      );
      if (savedRecipes.includes(recipe.Guid)) {
        savedRecipes = savedRecipes.filter((id: string) => id !== recipe.Guid);
        setIsSaved(false);
        setAlertMessage("Recipe Removed");
        setAlertDescription(
          "This recipe has been removed from your saved list."
        );
      } else {
        savedRecipes.push(recipe.Guid);
        setIsSaved(true);
        setAlertMessage("Recipe Saved");
        setAlertDescription("This recipe has been added to your saved list.");
      }
      localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  if (isFetching) return <Loading />;
  if (error) return <div>Oh no, there was an error</div>;
  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div className="container mx-auto p-4 min-h-screen">
      {showAlert && (
        <div className="fixed top-4 md:left-1/2 md:transform md:-translate-x-1/2">
          <AlertBox message={alertMessage} description={alertDescription} />
        </div>
      )}

      <button
        className="bg-slate-200 rounded-full px-3 py-1"
        onClick={() => router.back()}
      >
        နောက်သို့
      </button>

      <div className="flex flex-col md:flex-row justify-around mt-3">
        <div className="flex justify-center">
          <Image
            src={imageSrc || "/img/placeholder.jpg"}
            alt="food"
            width={200}
            height={200}
            objectFit="cover"
            className="w-96"
            onError={handleImageError}
          />
        </div>
        <div className="md:max-w-xl text-justify mt-5 md:mt-0 md:ml-10">
          <h1 className="text-2xl font-bold mb-4">{recipe.Name}</h1>
          <p className="mb-4">
            <strong>Ingredients:</strong> {recipe.Ingredients}
          </p>
          <p className="mb-4">
            <strong>Cooking Instructions:</strong> {recipe.CookingInstructions}
          </p>
          <button
            className={`${
              isSaved ? "bg-red-400" : "bg-blue-500"
            } w-full text-white rounded-md px-4 py-3 mt-4`}
            onClick={handleToggleSave}
          >
            {isSaved ? "Remove from favorite" : "Save to favorite"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
