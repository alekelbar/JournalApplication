import { createSlice } from "@reduxjs/toolkit";

interface ThemeMode {
  mode: boolean;
}

const initialState: ThemeMode = {
  mode: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMode: (state) => {
      return { mode: !state.mode };
    },
  },
});

export const { setMode } = themeSlice.actions;

export default themeSlice;
