import { useSelector } from "react-redux";

import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import GPTSearch from "../GPTSearch";
import Header from "../Header";
import MainContainer from "../Videos/MainContainer/MainContainer";
import SecondaryContainer from "../Videos/SecondaryContainer/SecondaryContainer";
import MovieDetails from "../MovieDetails";

const Browse = () => {
  const gptState = useSelector((store) => store.gpt?.showGptSearch);
  const getMovie = useSelector((store) => store.movies?.movieDetails);


  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      { getMovie ? (
        <MovieDetails mId={ getMovie?.id } />
      ) : gptState ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      ) }
    </div>
  );
};

export default Browse;
