import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Post = {
  _id: string;
  title: string;
  brief: string;
  slug: string;
  coverImage: string;

}
type BlogsResponse = {
  data: {
    user: {
      publication: {
        posts: Post[]
      }
    }
  }
}

type InitialState = {
  isLoading: boolean;
  blogsInfo: BlogsResponse | {};
  error?: Error
}

const INITIAL_STATE: InitialState = {
  isLoading: false,
  blogsInfo: {}
};

export const blogsSlice = createSlice({
  name: "blogs",
  initialState: INITIAL_STATE,
  reducers: {
    fetchInitiate: (state) => {
      state.isLoading = true;
    },
    fetchSuccess: (state, action: PayloadAction<BlogsResponse>) => {
      state.blogsInfo = action.payload;
      state.isLoading = false;
    },
    fetchFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { fetchInitiate, fetchSuccess, fetchFailed } = blogsSlice.actions;

export default blogsSlice.reducer;
