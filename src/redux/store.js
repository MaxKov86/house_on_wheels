import { configureStore } from '@reduxjs/toolkit';
import advertsReduser from './adverts/slice';
import favoritesReduser from './favorites/slice';

export const store = configureStore({
  reducer: {
    adverts: advertsReduser,
    favorites: favoritesReduser,
  },
});
