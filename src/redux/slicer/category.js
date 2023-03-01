import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { localUrls } from '../../constants/uri';

const initialState = {
  categories: [],
  categoriesContainer: [],
  currentCategory: null,
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
  async (info) => {
    const response = await axios.post(localUrls.ADD_WORD_TO_CATEGORY, info);
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
    return response.data;
  }
);
export const removeWordFromCategory = createAsyncThunk(
  'words/remove',
  async (wordId, categoryId) => {
    const response = await axios.post(localUrls.REMOVE_WORD_FROM_CATEGORY, {
      wordId: wordId,
      categoryId: categoryId,
    });
    return response.data;
  }
);
export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,

  reducers: {
    addWordToCategoryHandler(state, action) {
      state.includeWords.push(action.payload);
    },
  },

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
      .addCase(addWordToCategory.fulfilled, (state, action) => {
        state.addingWord = 'fullFilled';
        state.currentCategory = action.payload;
      })
      .addCase(getCategoryById.fulfilled, (state, action) => {
        state.currentCategory = action.payload;
      })
      .addCase(getCategoryWordsById.fulfilled, (state, action) => {
        state.includeWords = action.payload;
      })
      .addCase(removeWordFromCategory.fulfilled, (state, action) => {
        state.currentCategory = action.payload;
      });
  },
});
export const { addWordToCategoryHandler, removeWordFromCategoryHandler } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
