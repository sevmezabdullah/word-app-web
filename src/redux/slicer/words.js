import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { localUrls } from '../../constants/uri';

const initialState = {
  words: [],
  wordsContainer: [],
  isLoading: false,
};

export const postWord = createAsyncThunk('words/create', async (word) => {
  const response = await axios.post(localUrls.POST_WORD, word);
  return response.data;
});
export const getAllWords = createAsyncThunk('words/getAll', async () => {
  const response = await axios.get(localUrls.GET_ALL_WORDS);
  return response.data;
});

export const deleteWord = createAsyncThunk('words/delete', async (wordId) => {
  const response = await axios.post(localUrls.DELETE_WORD, { wordId: wordId });
  return response.data;
});
const wordsSlice = createSlice({
  name: 'words',
  initialState,

  reducers: {
    removeWordsFromList(state, action) {
      state.words = [
        ...state.words.filter((word) => word._id !== action.payload.wordId),
      ];
      console.log(action.payload.wordId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllWords.pending, (state, action) => {
        state.isLoading = true;
        state.words = [];
      })
      .addCase(getAllWords.fulfilled, (state, action) => {
        state.isLoading = true;
        state.words = action.payload;
        state.wordsContainer = action.payload;
      })
      .addCase(postWord.fulfilled, (state, action) => {
        state.words.push(action.payload);
      })
      .addCase(deleteWord.fulfilled, (state, action) => {
        state.words = state.wordsContainer;
      });
  },
});
export const { removeWordsFromList } = wordsSlice.actions;
export default wordsSlice.reducer;
