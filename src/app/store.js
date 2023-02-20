import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/slicer/user';
import pageReducer from '../redux/slicer/pageManager';
import categoryReducer from '../redux/slicer/category';
import usersReducer from '../redux/slicer/users';
export const store = configureStore({
  reducer: {
    user: userReducer,
    pageManager: pageReducer,
    categories: categoryReducer,
    users: usersReducer,
  },
});
