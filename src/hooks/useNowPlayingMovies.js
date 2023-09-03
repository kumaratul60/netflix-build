import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, API_URL } from "../constants/constants";
import { addNowPlayingMovies } from "../utils/slices/nowPlayingSlice";

const useNowPlayingMovies = () => {
  // Fetch data from TMBD API and update store
  const dispatch = useDispatch();
  const nowPlaying = useSelector((store) => store.movies?.nowPlayingMovies);

  useEffect(() => {
    !nowPlaying && fetchMovies();
  }, [dispatch]);

  const fetchMovies = async () => {
    const movies = await fetch(API_URL, API_OPTIONS);
    const moviesResponse = await movies.json();

    dispatch(addNowPlayingMovies(moviesResponse.results));
  };
};
export default useNowPlayingMovies;
