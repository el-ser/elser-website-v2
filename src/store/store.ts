import { configureStore } from "@reduxjs/toolkit";

import navigationReducer from "./navigation/navigation.slice";
import blogsReducer from "./blogs/blogs.slice";
import { blogsApi } from "./blogs/blogs.api";
import { githubApi } from "./github/github.api";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    blogs: blogsReducer,
    [blogsApi.reducerPath]: blogsApi.reducer,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaulMiddleware) =>
    getDefaulMiddleware({ serializableCheck: false })
      .concat(blogsApi.middleware)
      .concat(githubApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
