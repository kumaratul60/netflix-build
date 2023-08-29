import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/authUserSlice";
import movieReducer from "../slices/nowPlayingSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
});

export default appStore;
