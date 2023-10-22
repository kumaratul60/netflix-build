import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, VIDEOS_API } from "../../constants/constants";
import { getPlayNow } from "../../utils/slices/nowPlayingSlice";

const PlayVideo = () => {
  const [key, setkey] = useState();
  const dispatch = useDispatch();

  const video = useSelector((store) => store.movies?.playNow);

  const getMovieVideos = async () => {
    const data = await fetch(
      VIDEOS_API + video?.id + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((r) => r.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(getPlayNow(null));
    setkey(trailer);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div>
      <div className="w-full h-screen">
        <iframe
          className="w-full h-full brightness-150"
          src={
            "https://www.youtube.com/embed/" +
            key?.key +
            "?autoplay=1&mute=1&controls=1&loop=1"
          }
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default PlayVideo;
