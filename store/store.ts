// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from '@/features/recipesSlice';
import { apiSlice } from '@/features/receipes-api-slice';

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
