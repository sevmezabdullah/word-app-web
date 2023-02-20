import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { localUrls } from '../../constants/uri';
const initialState = {
  users: [],
  stats: null,
};

export const getAllUser = createAsyncThunk('users/getAll', async () => {
  const response = await axios.get(localUrls.GET_ALL_USER);
  return response.data;
});

export const getUsersStat = createAsyncThunk('users/stat', async (year) => {
  const response = await axios.get(localUrls.GET_USERS_STAT + `${year}`);
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(getUsersStat.fulfilled, (state, action) => {
        state.stats = action.payload;
      });
  },
});

export default usersSlice.reducer;
