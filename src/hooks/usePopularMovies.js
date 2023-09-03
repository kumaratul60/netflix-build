import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, POPULAR_MOVIES } from "../constants/constants";
import { addPopularMovies } from "../utils/slices/nowPlayingSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  useEffect(() => {
    !popularMovies && fetchMovies();
  }, [dispatch]);

  const fetchMovies = async () => {
    const movies = await fetch(POPULAR_MOVIES, API_OPTIONS);
    const moviesResponse = await movies.json();

    dispatch(addPopularMovies(moviesResponse.results));
  };
};

export default usePopularMovies;
