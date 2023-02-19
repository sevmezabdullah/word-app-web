import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  currentIndex: 0,
};

export const pageSlice = createSlice({
  name: 'pageManager',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.currentIndex = action.payload.currentIndex;
    },
  },
});

export const { changePage } = pageSlice.actions;

export default pageSlice.reducer;
