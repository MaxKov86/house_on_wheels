import { createSlice } from '@reduxjs/toolkit';
import { getAllFavorites } from './operations';

const slice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
    isLoading: false,
    error: false,
  },
  extraReducers: builder => {
    builder
      .addCase(getAllFavorites.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getAllFavorites.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(getAllFavorites.rejected, state => {
        state.error = true;
        state.isLoading = false;
      });
  },
});

export default slice.reducer;
