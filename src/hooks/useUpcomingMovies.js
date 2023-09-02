import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES } from "../constants/constants";
import { addUpcomingMovies } from "../utils/slices/nowPlayingSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector((store) => store.movies?.upcomingMovies);
  useEffect(() => {
    !upComingMovies && fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const movies = await fetch(UPCOMING_MOVIES, API_OPTIONS);
    const moviesResponse = await movies.json();

    dispatch(addUpcomingMovies(moviesResponse.results));
  };
};

export default useUpcomingMovies;
