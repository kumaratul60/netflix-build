import MovieCard from "./MovieCard";
import "./scroll.css";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-2 py-2">
      <h1 className="text-2xl font-semibold py-2 text-white">{title}</h1>

      <div className="flex overflow-x-auto hide-scrollbar ">
        <div className="flex gap-5">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie?.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
