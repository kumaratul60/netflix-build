import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, API_URL } from "../constants/constants";
import { addNowPlayingMovies } from "../utils/slices/nowPlayingSlice";

const useNowPlayingMovies = () => {
  // Fetch data from TMBD API and update store
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const movies = await fetch(API_URL, API_OPTIONS);
    const moviesResponse = await movies.json();

    dispatch(addNowPlayingMovies(moviesResponse.results));
  };
};
export default useNowPlayingMovies;
