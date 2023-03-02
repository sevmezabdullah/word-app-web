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

export const postQuiz = createAsyncThunk('quiz/post', async (quiz) => {
  const response = await axios.post(localUrls.POST_QUIZ, quiz);
  return response.data;
});
export const deleteQuiz = createAsyncThunk('quiz/delete', async (id) => {
  const response = await axios.post(localUrls.DELETE_QUIZ, id);
  return response.data;
});
const quizsSlice = createSlice({
  name: 'quiz',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllQuiz.pending, (state, action) => {
      state.isLoading = true;
    });
    builder
      .addCase(getAllQuiz.fulfilled, (state, action) => {
        state.isLoading = false;
        state.quizs = action.payload;
      })
      .addCase(postQuiz.fulfilled, (state, action) => {
        state.quizs.push(action.payload);
      })
      .addCase(deleteQuiz.fulfilled, (state, action) => {
        state.quizs = action.payload;
      });
  },
});

export default quizsSlice.reducer;
