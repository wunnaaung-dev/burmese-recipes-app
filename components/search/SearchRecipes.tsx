"use client";
import { setSearchValue } from "@/features/search/searchSlice";
import { useAppDispatch } from "@/hooks/hooks";
import React, { useState } from "react";

const SearchRecipes: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <input
      type="text"
      className="w-44 md:w-80 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
      placeholder="Search recipes..."
      value={searchQuery}
      onChange={handleSearchChange}
    />
  );
};

export default SearchRecipes;
