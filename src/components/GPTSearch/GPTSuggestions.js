import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovieList from "../Videos/SecondaryContainer/MovieList";
import Spinner from "../Shimmer/Spinner";

const GPTSuggestions = () => {
  const [isLoading, setIsLoading] = useState(true);
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, movieResults } = gpt;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (
    !movieNames ||
    movieNames.length === 0 ||
    !movieResults ||
    movieResults.length === 0
  ) {
    return null;
  }

  return (
    <div className="text-white p-4 bg-black bg-opacity-85 px-5 w-9/12 m-auto">
      { isLoading ? (
        <Spinner />
      ) : (
        <MovieList title={ movieNames[0] } movies={ movieResults } />
      ) }

      {/* {movieNames.map((movieName, index) => (
        <MovieList key={movieName} title={movieName} movie={movieResults[index]} />
      ))} */}
    </div>
  );
};

export default GPTSuggestions;
