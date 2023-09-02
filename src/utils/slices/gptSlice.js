import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT-Search",
  initialState: {
    showGptSearch: false,
    // gptMovies: null,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    gptToggle: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMoviesResult: (state, action) => {
      // state.gptMovies = action.payload;

      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});
export const { gptToggle, addGptMoviesResult } = gptSlice.actions;
export default gptSlice.reducer;
