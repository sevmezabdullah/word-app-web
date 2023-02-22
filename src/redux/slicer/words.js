import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { localUrls } from '../../constants/uri';

const initialState = {
  words: [],
  isLoading: false,
};

export const getAllWords = createAsyncThunk('words/getAll', async () => {
  const response = await axios.get(localUrls.GET_ALL_WORDS);
  return response.data;
});
const wordsSlice = createSlice({
  name: 'words',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllWords.pending, (state, action) => {
        state.isLoading = true;
        state.words = [];
      })
      .addCase(getAllWords.fulfilled, (state, action) => {
        state.isLoading = true;
        state.words = action.payload;
      });
  },
});
export default wordsSlice.reducer;
