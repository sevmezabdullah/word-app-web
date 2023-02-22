import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { localUrls } from '../../constants/uri';

const initialState = {
  quizs: [],
  isLoading: false,
};

export const getAllQuiz = createAsyncThunk('quiz/getAll', async () => {
  const response = await axios.get(localUrls.GET_ALL_QUIZS);
  return response.data;
});
const quizsSlice = createSlice({
  name: 'quiz',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllQuiz.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllQuiz.fulfilled, (state, action) => {
      state.isLoading = false;
      state.quizs = action.payload;
    });
  },
});

export default quizsSlice.reducer;
