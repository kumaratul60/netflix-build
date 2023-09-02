import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/authUserSlice";
import movieReducer from "../slices/nowPlayingSlice";
import gptReducer from "../slices/gptSlice";
import configReducer from "../slices/configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
