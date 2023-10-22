import { useSelector } from "react-redux";
import { useMovieTrailer } from "../../../hooks";

const VideoBackground = ({ movie_id }) => {
  const getMovieTrailer = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movie_id);

  return (
    <div className="w-screen ">
      <iframe
        className="w-full aspect-video "
        src={`https://www.youtube.com/embed/${getMovieTrailer?.key}?autoplay=1&mute=1&playlist=${getMovieTrailer?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
