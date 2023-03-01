import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { localUrls } from '../../constants/uri';

const initialState = {
  questions: [],
  questionsContainer: [],
  isLoading: false,
};

export const getAllQuestion = createAsyncThunk('question/getAll', async () => {
  const response = await axios.get(localUrls.GET_ALL_QUESTIONS);
  return response.data;
});

export const deleteQuestion = createAsyncThunk(
  'question/delete',
  async (id) => {
    const response = await axios.post(localUrls.DELETE_QUESTION, { id: id });
    return response.data;
  }
);
export const postQuestion = createAsyncThunk(
  'question/post',
  async (question) => {
    console.log(question);
    const response = await axios.post(localUrls.POST_QUESTION, question);
    console.log(response.data);
    return response.data;
  }
);

const questionSlice = createSlice({
  name: 'question',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getAllQuestion.fulfilled, (state, action) => {
      state.questions = action.payload;
      state.questionsContainer = action.payload;
      state.isLoading = false;
    });
    builder
      .addCase(getAllQuestion.pending, (state, action) => {
        state.isLoading = true;
        state.questions = [];
      })
      .addCase(postQuestion.fulfilled, (state, action) => {
        state.questions.push(action.payload);
      })
      .addCase(deleteQuestion.fulfilled, (state, action) => {
        console.log(action.payload);
        state.questions = state.questionsContainer.filter(
          (question) => question._id !== action.payload._id
        );
      });
  },
});
export default questionSlice.reducer;
