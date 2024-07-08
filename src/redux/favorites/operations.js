import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65fed866b2a18489b386a5fd.mockapi.io';

export const getAllFavorites = createAsyncThunk(
  'favorites/getAllFavorites',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/favorites');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addFavoritesCard = createAsyncThunk(
  'favorites/addFavoritesCard',
  async (_, thunkApi) => {
    try {
      const response = await axios.post(`/favorites`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
