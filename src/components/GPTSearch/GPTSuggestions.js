import { useSelector } from "react-redux";
import MovieList from "../videoContainer/MovieList";

const GPTSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, movieResults } = gpt;

  if (
    !movieNames ||
    movieNames.length === 0 ||
    !movieResults ||
    movieResults.length === 0
  ) {
    return null;
  }

  return (
    <div className="text-white p-4 m-2 bg-black bg-opacity-85 px-5">
      <MovieList title={movieNames[0]} movies={movieResults} />

      {/* {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movie={movieResults}
        />
      ))} */}
    </div>
  );
};

export default GPTSuggestions;
