import React, { useRef } from "react";
import lang from "../../constants/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../../utils/openai";
import { API_OPTIONS, MOVIE_SEARCH_API } from "../../constants/constants";
import { addGptMoviesResult } from "../../utils/slices/gptSlice";
const GPTSearchBarTest = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const getSelectedLanguage = useSelector((store) => store.config.language);
  if (!getSelectedLanguage) return;

  const searchMovieTMDB = async (movieName) => {
    const fetchSearchMovieData = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const jsonRes = await fetchSearchMovieData.json();
    return jsonRes.results;
  };

  const searchMovieTMDB2 = async (movieName) => {
    // `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
    const movieAPI_URL = MOVIE_SEARCH_API.replace(
      "${movieName}",
      `${movieName}`
    );
    const fetchSearchMovieData = await fetch(movieAPI_URL, API_OPTIONS);

    const jsonRes = await fetchSearchMovieData.json();
    return jsonRes.results;
  };

  const handleGptSearchClick = async () => {
    const searchTextValue = searchText.current.value;
    console.log(searchTextValue);
    // Make a API call to GPT API to get movie results

    // AI is dumb,so you have to make your query as clear as possible, the more clear your queries, the better results you will get

    const gptQuery = `Act as a Movie Recommended system  and suggest some movies for the query: ${searchTextValue}. Only give me names of 5 movies,comma separated like the example result given ahead. Example Result: Gadar,Sholay,Bajirao Mastani,Dilwale,Don.`;

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // TODO: Write error handling
    }

    const gptMovieList = gptResults.choices?.[0]?.message?.content;
    //  res of gptMovieList = "Gadar2 Sholay2 Bajirao Mastani2 Dilwale2 Don2"

    // now get the movie list in a string format, and now for the string of movie list let me extract those movies in the array
    const extractedMovie = gptMovieList.split(",");
    //  res of extractedMovie = ["Gadar2", "Sholay2", "Bajirao Mastani2", "Dilwale2", "Don2"]
    // console.log({ extractedMovie });

    // for each movie in the extracted movie list, make a API call to TMDB to get the movie details

    const promiseArray = extractedMovie.map((movie) => searchMovieTMDB(movie));
    //  promiseArray will return 5 promise, not get result immediately, so we need to wait for all the promises to resolve

    const tmbdMovieResult = await Promise.all(promiseArray);

    // console.log({
    //   tmbdMovieResult,
    //   gptMovieList,
    //   extractedMovie,
    //   promiseArray,
    //   gptResults
    // });

    // dispatch(addGptMoviesResult(tmbdMovieResult));

    // passing multiple arguments as data to dispatch action
    dispatch(
      addGptMoviesResult({
        movieName: gptMovieList,
        movieResult: tmbdMovieResult,
      })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12 rounded-full"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={searchText}
          className=" px-6 col-span-10 border-none focus:outline-none py-4 placeholder-gray-500  rounded-l-full bg-slate-100 caret-red-600"
          type="text"
          placeholder={lang[getSelectedLanguage]?.gptSearchPlaceholder}
        />

        <button
          className="m-auto col-span-2 text-gray-600 hover:text-sky-900 rounded-r-full"
          onClick={handleGptSearchClick}
        >
          {lang[getSelectedLanguage]?.search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBarTest;
