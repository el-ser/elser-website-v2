import { configureStore } from "@reduxjs/toolkit";

import navigationReducer from "./navigation/navigation.slice";
import blogsReducer from "./blogs/blogs.slice";
import { blogsApi } from "./blogs/blogs.api";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    blogs: blogsReducer,
    [blogsApi.reducerPath]: blogsApi.reducer,
  },
  middleware: (getDefaulMiddleware) =>
    getDefaulMiddleware().concat(blogsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch