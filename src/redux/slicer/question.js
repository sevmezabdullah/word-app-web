import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { localUrls } from '../../constants/uri';

const initialState = {
  questions: [],
  isLoading: false,
};

export const getAllQuestion = createAsyncThunk('question/getAll', async () => {
  const response = await axios.get(localUrls.GET_ALL_QUESTIONS);
  return response.data;
});

const questionSlice = createSlice({
  name: 'question',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getAllQuestion.fulfilled, (state, action) => {
      state.questions = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getAllQuestion.pending, (state, action) => {
      state.isLoading = true;
      state.questions = [];
    });
  },
});
export default questionSlice.reducer;
