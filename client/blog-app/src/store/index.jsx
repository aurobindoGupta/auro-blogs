import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./slices/postSlices";

const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
  },
});

export default store;
