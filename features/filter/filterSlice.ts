import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
  selectedCategory: '000' | '001' | '002'; 
}

const initialState: FiltersState = {
  selectedCategory: '000', 
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<'000' | '001' | '002'>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSelectedCategory } = filtersSlice.actions;

export default filtersSlice.reducer;
