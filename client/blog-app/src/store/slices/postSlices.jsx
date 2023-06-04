import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addInitialPosts(state, action) {
      state.push(...action.payload);
      console.log(action.payload[4]);
    },
    addPost(state, action) {},
    updatePost(state, action) {
      console.log(state);
      state = state.filter((item) => {
        if (item.id === action.payload.id) {
          item.body = action.payload.body;
        }
      })
    },
    deletePosts(state, action) {},
  },
});
export { postsSlice };
export const { addInitialPosts, updatePost } = postsSlice.actions;
