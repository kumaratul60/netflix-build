import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, MOVIE_SEARCH_API } from "../constants/constants";
import { addGptMoviesResult } from "../utils/slices/gptSlice";

const useSearchMovie = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const getSelectedLanguage = useSelector((store) => store.config.language);
  const searchMovieTMDB = async (movieName) => {
    const apiUrl = new URL(MOVIE_SEARCH_API);
    const params = new URLSearchParams({
      query: movieName,
      include_adult: false,
      language: "en-US",
      page: 1,
      // Add any other parameters you need here
    });

    apiUrl.search = params.toString();

    try {
      const fetchSearchMovieData = await fetch(apiUrl.toString(), API_OPTIONS);

      if (!fetchSearchMovieData.ok) {
        throw new Error("Failed to fetch movie data");
      }

      const jsonRes = await fetchSearchMovieData.json();
      return jsonRes.results;
    } catch (error) {
      console.error("Error searching for movie:", error);
      throw error;
    }
  };

  const handleMovieSearch = async () => {
    const searchTextValue = searchText.current.value;

    const tmdbMovieResults = await searchMovieTMDB(searchTextValue);

    const extractedMovieNames = tmdbMovieResults.map(
      (tmdbMovie) => tmdbMovie?.original_title || tmdbMovie?.title
    );
    dispatch(
      addGptMoviesResult({
        movieNames: extractedMovieNames,
        movieResults: tmdbMovieResults,
      })
    );
  };
  return { handleMovieSearch, getSelectedLanguage, searchText };
};

export default useSearchMovie;
