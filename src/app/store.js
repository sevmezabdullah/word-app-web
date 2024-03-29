import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/slicer/user';
import pageReducer from '../redux/slicer/pageManager';
import categoryReducer from '../redux/slicer/category';
import usersReducer from '../redux/slicer/users';
import wordsReducer from '../redux/slicer/words';
import quizReducer from '../redux/slicer/quiz';
import questionReducer from '../redux/slicer/question';
export const store = configureStore({
  reducer: {
    user: userReducer,
    pageManager: pageReducer,
    categories: categoryReducer,
    users: usersReducer,
    words: wordsReducer,
    quiz: quizReducer,
    question: questionReducer,
  },
});
