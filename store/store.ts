// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { recipesApi } from '@/features/receipes-api-slice';
import filterReducer from '@/features/filter/filterSlice'
import searchReducer from '@/features/search/searchSlice'
const store = configureStore({
  reducer: {
    filters: filterReducer,
    search: searchReducer,
    [recipesApi.reducerPath]: recipesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
