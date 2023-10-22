import { useSelector } from "react-redux";
import {
  useNowPlayingMovies,
  usePopularMovies,
  useTopRatedMovies,
  useUpcomingMovies,
} from "../../hooks";
import GPTSearch from "../GPTSearch";
import Header from "../Header";
import MovieDetails from "../MovieDetails";
import MainContainer from "../Videos/MainContainer/MainContainer";
import SecondaryContainer from "../Videos/SecondaryContainer/SecondaryContainer";

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
      {getMovie ? (
        <MovieDetails mId={getMovie.id} />
      ) : gptState ? (
        <GPTSearch />
      ) : (
        <div>
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
