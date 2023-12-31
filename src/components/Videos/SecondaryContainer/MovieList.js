import { useDispatch } from "react-redux";
import { getMovieById } from "../../../utils/slices/nowPlayingSlice";
import CardIcons from "./CardIcons";
import MovieCard from "./MovieCard";
import "./scroll.css";

const MovieList = ({ title, movies }) => {
  const dispatch = useDispatch();

  const handleMovieClick = (movie) => {
    dispatch(getMovieById(movie));
  };

  return (
    <div className="px-2 py-2">
      <h1 className="md:text-2xl text-lg font-semibold py-2 text-white">
        {title}
      </h1>

      <div className="flex overflow-x-auto overflow-y-hidden hide-scrollbar ">
        <div className="flex gap-5">
          {movies &&
            movies.map((movie) => (
              <div className="flex flex-col">
                <div key={movie.id} onClick={() => handleMovieClick(movie)}>
                  <MovieCard
                    key={movie.id}
                    posterPath={movie?.poster_path}
                    title={movie.title}
                    movie={movie}
                  />
                </div>
                <CardIcons movie={movie} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
