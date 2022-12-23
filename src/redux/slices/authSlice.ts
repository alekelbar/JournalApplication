import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "cheking", // 'autenticated', 'not-autenticated'
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  // TODO: Define dataypes of: ActionsPayload
  reducers: {
    login: (state, actions) => {},
    logout: (state, actions) => {},
    checkingCredentials: (state) => {},
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
