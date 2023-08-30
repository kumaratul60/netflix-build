import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/authUserSlice";
import movieReducer from "../slices/nowPlayingSlice";
import gptReducer from "../slices/gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
  },
});

export default appStore;
