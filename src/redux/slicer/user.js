import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { localUrls } from '../../constants/uri';
import uuid from 'react-uuid';
const AUTH_URL = localUrls.AUTH_URL;
const LOGOUT_URL = localUrls.LOGOUT_URL;
const initialState = {
  user: null,
  token: null,
  error: null,
};

const storeUser = async (user, email) => {
  user.email = email;
  console.log(user);
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
  const sessionId = uuid();
  await localStorage.setItem('sessionId', sessionId);
  const response = await axios.post(AUTH_URL, {
    email: authInfo.email,
    password: authInfo.password,
    sessionId: sessionId,
    lang: 'tr',
  });
  storeUser(response.data, authInfo.email);
  return response.data;
});
export const logout = createAsyncThunk('auth/logout', async () => {
  const user = JSON.parse(await localStorage.getItem('user'));
  const sessionId = await localStorage.getItem('sessionId');
  const response = await axios.post(LOGOUT_URL, {
    userEmail: user.email,
    sessionId: sessionId,
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
        if (action.payload.isLogged) {
          state.user = action.payload;
          state.error = null;
        } else {
          state.user = null;
          state.error = 'Giriş başarısız oldu. Lütfen tekrar deneyin.';
        }
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
