"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useFetchRecipeBySlugQuery } from "@/features/receipes-api-slice"; // Adjust the import path based on your project structure
import Loading from "@/components/loading/Loading";
import Image from "next/image";
import { useState } from "react";

const RecipeDetails = () => {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  console.log("Slug:", slug);

  const { data: recipe, isFetching } = useFetchRecipeBySlugQuery(slug ?? "");

  const [imageSrc, setImageSrc] = useState<string | null>(null);

  if (isFetching) {
    return <Loading />;
  }

  if (!recipe) {
    return <div className="container mx-auto p-4">Recipe not found</div>;
  }

  const handleImageError = () => {
    setImageSrc("/img/default.png");
  };

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <Link href="/">
        <button className="bg-slate-200 rounded-full px-3 py-1">
          နောက်သို့
        </button>
      </Link>
      <div className="flex flex-col md:flex-row justify-around mt-3">
        <div className="flex justify-center">
          <Image
            src={imageSrc || `/img/${recipe.Name}.jpg`}
            alt="food"
            width={200}
            height={200}
            objectFit="cover"
            className=" w-96"
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
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
