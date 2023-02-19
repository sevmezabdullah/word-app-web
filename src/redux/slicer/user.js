import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { localUrls } from '../../constants/uri';
const AUTH_URL = localUrls.AUTH_URL;
const LOGOUT_URL = localUrls.LOGOUT_URL;
const initialState = {
  user: null,
  token: null,
};

const storeUser = async (user) => {
  const jsonUser = JSON.stringify(user);
  await localStorage.setItem('user', jsonUser);
};

export const getUser = createAsyncThunk('auth/check', async () => {
  const localUser = await localStorage.getItem('user');
  if (localUser) {
    const jsonUser = JSON.parse(localUser);
    return jsonUser;
  } else {
    return null;
  }
});
export const signIn = createAsyncThunk('auth/user', async (authInfo) => {
  const response = await axios.post(AUTH_URL, {
    email: authInfo.email,
    password: authInfo.password,
    lang: 'tr',
  });
  storeUser(response.data);
  return response.data;
});
export const logout = createAsyncThunk('auth/logout', async () => {
  const user = JSON.parse(await localStorage.getItem('user'));
  const response = await axios.post(LOGOUT_URL, {
    userEmail: user.email,
  });
  await localStorage.clear();
  return response.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = null;
        state.token = null;
      });
  },
});

export default userSlice.reducer;
