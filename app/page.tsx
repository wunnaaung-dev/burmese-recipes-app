"use client";
import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import {
  setAllRecipes,
  setUserType,
  setItemsToShow,
  setSearchQuery,
} from "@/features/recipesSlice";
import { useFetchRecipesQuery } from "@/features/receipes-api-slice";
import BurmeseRecipes from "@/components/dataDisplay/BurmeseRecipes";
import SelectItems from "@/components/selectBox/SelectItems";
import Loading from "@/components/loading/Loading";
import SearchRecipes from "@/components/search/SearchRecipes";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { allRecipes, userType, itemsToShow, searchQuery } = useSelector(
    (state: RootState) => state.recipes
  );
  const { data = [], isFetching, isError } = useFetchRecipesQuery();

  useEffect(() => {
    if (data.length > 0) {
      dispatch(setAllRecipes(data));
    }
  }, [data, dispatch]);

  const filteredRecipes = allRecipes
    .filter((recipe) => {
      if (userType !== "000" && recipe.UserType !== userType) return false;
      if (
        searchQuery.trim() &&
        !recipe.Name.toLowerCase().includes(searchQuery.trim().toLowerCase())
      )
        return false;
      return true;
    })
    .slice(0, itemsToShow);

  const handleSelectChange = (value: string) => {
    dispatch(setUserType(value));
    dispatch(setItemsToShow(12));
  };

  const handleSearch = (query: string) => {
    dispatch(setSearchQuery(query));
    dispatch(setItemsToShow(12));
  };

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 &&
      !isFetching
    ) {
      dispatch(setItemsToShow(itemsToShow + 12));
    }
  }, [isFetching, itemsToShow, dispatch]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <main>
      <div className="container flex justify-end gap-4">
        <SearchRecipes onSearch={handleSearch} />
        <SelectItems onChange={handleSelectChange} />
      </div>

      {isFetching && <Loading />}

      {!isFetching && filteredRecipes.length === 0 && (
        <p className="text-center text-gray-600 mt-4 min-h-screen">
          No recipes found.
        </p>
      )}

      {filteredRecipes.length > 0 && <BurmeseRecipes data={filteredRecipes} />}
    </main>
  );
};

export default Home;
