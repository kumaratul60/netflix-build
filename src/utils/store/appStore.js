import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/authUserSlice";
import configReducer from "../slices/configSlice";
import gptReducer from "../slices/gptSlice";
import movieReducer from "../slices/nowPlayingSlice";
import watchLaterSliceReducer from "../slices/watchLaterSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
    config: configReducer,
    watchlater: watchLaterSliceReducer,
  },
});

export default appStore;
