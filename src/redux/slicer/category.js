import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { localUrls } from '../../constants/uri';

const initialState = {
  categories: [],
  categoriesContainer: [],
  currentCategory: null,
  includeWords: [],
  filteredWords: [],
};

const getUser = async () => {
  const user = JSON.parse(await localStorage.getItem('user'));
  return user.token;
};

export const getCategoryById = createAsyncThunk(
  'category/getById',
  async (categoryId) => {
    const response = await axios.get(localUrls.GET_CATEGORY_BY_ID + categoryId);

    return response.data;
  }
);
export const deleteCategoryById = createAsyncThunk(
  'category/delete',
  async (id) => {
    const response = await axios.post(localUrls.DELETE_CATEGORY_URL, {
      id: id,
    });
    return response.data;
  }
);

export const getWordsByCategoryId = createAsyncThunk(
  'category/getWords',
  async (categoryId) => {
    const response = await axios.get(
      localUrls.GET_WORDS_BY_CATEGORY_ID + categoryId
    );
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
  }
});

export const addWordToCategory = createAsyncThunk(
  'category/addWord',
  async (categoryId, wordId) => {
    const response = await axios.post(localUrls.ADD_WORD_TO_CATEGORY, {
      categoryId: categoryId,
      wordId: wordId,
    });
    return response.data;
  }
);

export const postCategory = createAsyncThunk(
  'category/post',
  async (category) => {
    const formData = new FormData();
    const jsonTitles = JSON.stringify(category.titles);
    formData.append('logo', category.logo);
    formData.append('awardId', category.awardId);
    formData.append('titles', jsonTitles);

    const response = await axios.post(localUrls.POST_CATEGORY, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    return response.data;
  }
);

export const getCategoryWordsById = createAsyncThunk(
  'category/words',
  async (categoryId) => {
    const response = await axios.get(
      localUrls.GET_WORDS_BY_CATEGORY_ID + categoryId
    );

    console.log(response.data);
    return response.data;
  }
);
export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(deleteCategoryById.fulfilled, (state, action) => {
        state.categories = state.categoriesContainer.map(
          (category) => category._id !== action.payload.categoryId
        );
        state.categories = action.payload;
      })
      .addCase(postCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })
      .addCase(addWordToCategory, (state, action) => {})
      .addCase(getCategoryById.fulfilled, (state, action) => {
        state.currentCategory = action.payload;
      })
      .addCase(getCategoryWordsById.fulfilled, (state, action) => {
        state.includeWords = action.payload;
        console.log(action.payload);
      });
  },
});

export default categoriesSlice.reducer;
