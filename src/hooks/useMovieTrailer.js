import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, VIDEOS_API } from "../constants/constants";
import { addTrailerVideo } from "../utils/slices/nowPlayingSlice";

const useMovieTrailer = (movie_id) => {
  const dispatch = useDispatch();

  const trailer = useSelector((store) => store.movies?.trailerVideo);

  // fetch trailer video && updating  the store with trailer video data
  const fetchTrailer = async () => {
    const videoTrailer = await fetch(
      `${VIDEOS_API}/${movie_id}/videos`,
      API_OPTIONS
    );
    const videoTrailerResponse = await videoTrailer.json();
    const filterTrailer = videoTrailerResponse.results.filter(
      (video) => video.type === "Trailer"
    );
    const getTrailer = filterTrailer.length
      ? filterTrailer[0]
      : videoTrailerResponse.results[0];

    // to get trailerId or trailer key, we can do it 2 ways first way to by declaring the useState and set like setMovieTrailer(getTrailer);
    //  second way using redux store

    dispatch(addTrailerVideo(getTrailer));
  };

  useEffect(() => {
    if (!trailer) fetchTrailer();
  }, []);
};

export default useMovieTrailer;
