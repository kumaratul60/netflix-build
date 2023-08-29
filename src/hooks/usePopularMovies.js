import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, POPULAR_MOVIES } from "../constants/constants";
import { addPopularMovies } from "../utils/slices/nowPlayingSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        const movies = await fetch(POPULAR_MOVIES, API_OPTIONS);
        const moviesResponse = await movies.json();

        dispatch(addPopularMovies(moviesResponse.results));
    };
};

export default usePopularMovies;
