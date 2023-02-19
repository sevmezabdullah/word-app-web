import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { localUrls } from '../../constants/uri';

const initialState = {
  categories: [],
  categoriesContainer: [],
};

const getUser = async () => {
  const token = JSON.parse(await localStorage.getItem('user')).token;
  return token;
};

export const deleteCategoryById = createAsyncThunk(
  'category/delete',
  async (id) => {
    const response = await axios.post(localUrls.DELETE_CATEGORY_URL, {
      id: id,
    });
    return response.data;
  }
);
export const getAllCategory = createAsyncThunk('category/getAll', async () => {
  const token = await getUser();
  if (token) {
    const response = await axios.get(localUrls.GET_CATEGORIES, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } else {
    return null;
  }
});
export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(deleteCategoryById.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export default categoriesSlice.reducer;
