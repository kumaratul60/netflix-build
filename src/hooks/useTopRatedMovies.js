import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, TOP_RATED_MOVIES } from "../constants/constants";
import { addTopRatedMovies } from "../utils/slices/nowPlayingSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        const movies = await fetch(TOP_RATED_MOVIES, API_OPTIONS);
        const moviesResponse = await movies.json();

        dispatch(addTopRatedMovies(moviesResponse.results));
    };
}

export default useTopRatedMovies