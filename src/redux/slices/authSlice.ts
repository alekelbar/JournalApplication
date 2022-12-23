import { createSlice } from "@reduxjs/toolkit";
import { Auth } from "../types/auth.type";

const initialState: Auth = {
  status: "not-autenticated", // 'autenticated', 'not-autenticated'
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
    checkingCredentials: (state) => {
      return {
        ...state,
        status: "cheking",
      };
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
