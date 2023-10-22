import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMovieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    movieDetails: null,
    movieAllDetails: null,
    playNow: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },

    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },

    getMovieById: (state, action) => {
      state.movieDetails = action.payload;
    },

    getMovieAllDetails: (state, action) => {
      state.movieAllDetails = action.payload;
    },

    getPlayNow: (state, action) => {
      state.playNow = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  getMovieById,
  getMovieAllDetails,
  getPlayNow,
} = nowPlayingMovieSlice.actions;
export default nowPlayingMovieSlice.reducer;
