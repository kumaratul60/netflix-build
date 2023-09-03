import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import ShimmerEffect from "../../Shimmer/ShimmerEffect";

const isNotEmptyArray = (array) => Array.isArray(array) && array.length > 0;

const SecondaryContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const renderMovieList = (title, movieList) => {
    if (isNotEmptyArray(movieList)) {
      return <MovieList title={title} movies={movieList} />;
    }
    return null;
  };

  return (
    <div className="relative bg-black ">
      <div className="mt-[75%] md:-mt-52 px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-15 z-20 ">
        {isLoading ? (
          <>
            <ShimmerEffect />
            <ShimmerEffect />
            <ShimmerEffect />
            <ShimmerEffect />
          </>
        ) : (
          <>
            {renderMovieList("Now Playing", movies?.nowPlayingMovies)}
            {renderMovieList("Top rated", movies?.topRatedMovies)}
            {renderMovieList("Popular", movies?.popularMovies)}
            {renderMovieList("Upcoming", movies?.upcomingMovies)}
          </>
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
