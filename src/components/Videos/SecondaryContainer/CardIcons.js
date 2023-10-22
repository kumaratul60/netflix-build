import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPlayNow } from "../../../utils/slices/nowPlayingSlice";
import { addItem, removeItem } from "../../../utils/slices/watchLaterSlice";

const CardIcons = ({ movie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const watchlater = useSelector((store) => store.watchlater.items);
  const added = watchlater.some((item) => item.id === movie.id);

  const handleWatch = () => {
    if (added) {
      dispatch(removeItem(movie));
      alert(` OOPs ${movie.title} removed`);
    } else {
      dispatch(addItem(movie));
      alert(`${movie.title} added`);
    }
  };

  const playVideo = (movie) => {
    dispatch(getPlayNow(movie));
    navigate("/play");
  };

  const playVideo1 = () => {
    dispatch(getPlayNow(movie));
    navigate("/play");
  };
  return (
    <div className="flex justify-between items-center">
      <button
        className="text-white py-3 hover:bg-opacity-80 rounded-md flex items-center"
        // onClick={() => playVideo(movie)}
        onClick={playVideo1}
      >
        ▶️ Play
      </button>

      <button
        className="text-white py-3 hover:bg-opacity-80 rounded-md flex items-center"
        onClick={handleWatch}
      >
        {added ? "remove" : "Add to watch"}
      </button>
    </div>
  );
};
export default CardIcons;
