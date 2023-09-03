import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, VIDEOS_API } from "../constants/constants";
import { getMovieAllDetails } from "../utils/slices/nowPlayingSlice";

const useMovieDetails = (mId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMovieDetails();
  }, [dispatch, mId]);

  const fetchMovieDetails = async () => {
    try {
      const videoDetail = await fetch(
        `${VIDEOS_API}/${mId}?language=en-US`,
        API_OPTIONS
      );
      const videoDetailResponse = await videoDetail.json();
      dispatch(getMovieAllDetails(videoDetailResponse));
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };
};

export default useMovieDetails;
