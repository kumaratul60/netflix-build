import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IMAGE_URL, NETFLIX_LOGO } from "../../constants/constants";
import { getPlayNow } from "../../utils/slices/nowPlayingSlice";

const WatchLater = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const watchlater = useSelector((store) => store.watchlater.items);

  const playVideo = (movie) => {
    dispatch(getPlayNow(movie));
    navigate("/play");
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="pt-2 px-4 md:px-8 z-10 bg-gradient-to-b from-black flex items-center justify-between">
        <Link to="/browse">
          <img src={NETFLIX_LOGO} alt="logo" className="w-32 md:w-44" />
        </Link>
        {user && (
          <div className="flex items-center gap-6">
            <Link to="/browse">
              <button className="bg-red-600 hover:bg-red-700 px-5 py-2 text-white font-bold rounded-lg">
                Back to Browse
              </button>
            </Link>
          </div>
        )}
      </div>
      <div className="mt-32 px-8 md:px-32  ">
        <h1 className="text-3xl font-bold text-white text-center">
          Your watch wish list
        </h1>
        <div className="flex overflow-x-auto gap-7 mt-5 justify-center ">
          {watchlater.length !== 0 ? (
            watchlater.map((movie, index) => (
              <div className="max-w-sm " key={index}>
                <div className="overflow-hidden shadow-lg rounded-lg">
                  <img
                    src={IMAGE_URL + movie.poster_path}
                    alt=""
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <button
                      className="w-full px-6 py-2 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-700"
                      onClick={() => playVideo(movie)}
                    >
                      <span className="text-xl">▶</span> Play
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-white text-center">
              No items in your watchlist.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchLater;
