import { createSlice } from '@reduxjs/toolkit';
import { getAdverts } from './operations';

const slice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    isLoading: false,
    error: false,
  },
  extraReducers: builder => {
    builder
      .addCase(getAdverts.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getAdverts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(getAdverts.rejected, state => {
        state.error = true;
        state.isLoading = false;
      });
  },
});

export default slice.reducer;
