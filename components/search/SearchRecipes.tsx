'use client'
import React, { useState } from 'react';

interface SearchRecipesProps {
  onSearch: (query: string) => void;
}

const SearchRecipes: React.FC<SearchRecipesProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
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
