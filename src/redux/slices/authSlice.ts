import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    login: (_, { payload }: PayloadAction<Auth>) => {
      return { ...payload };
    },
    logout: (_, { payload }: PayloadAction<string>) => {
      return { ...initialState, errorMessage: payload };
    },
    checkingCredentials: (state) => {
      return {
        ...state,
        status: "cheking",
      };
    },
    loginWithEmailAndPassword: (state, { payload }: PayloadAction<Auth>) => {
      return { ...state, ...payload };
    },
  },
});

export const { login, logout, checkingCredentials, loginWithEmailAndPassword } =
  authSlice.actions;
