import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../slices/auth";
import journalSlice from '../slices/journal/index';
import themeSlice from '../slices/theme/index';
// ...

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    journal: journalSlice.reducer,
    theme: themeSlice.reducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
