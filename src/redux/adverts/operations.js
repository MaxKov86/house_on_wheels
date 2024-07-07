import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65fed866b2a18489b386a5fd.mockapi.io';

export const getAdverts = createAsyncThunk(
  'adverts/getAdverts',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/adverts');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
