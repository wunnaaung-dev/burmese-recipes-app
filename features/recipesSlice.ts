import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Recipe } from "@/features/receipes-api-slice";

interface RecipesState {
  allRecipes: Recipe[];
  userType: string;
  itemsToShow: number;
  searchQuery: string;
  page: number;
}

const initialState: RecipesState = {
  allRecipes: [],
  userType: "000",
  itemsToShow: 12,
  searchQuery: "",
  page: 1,
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setAllRecipes(state, action: PayloadAction<Recipe[]>) {
      state.allRecipes = action.payload;
    },
    setUserType(state, action: PayloadAction<string>) {
      state.userType = action.payload;
    },
    setItemsToShow(state, action: PayloadAction<number>) {
      state.itemsToShow = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export const {
  setAllRecipes,
  setUserType,
  setItemsToShow,
  setSearchQuery,
  setPage,
} = recipesSlice.actions;

export default recipesSlice.reducer;
