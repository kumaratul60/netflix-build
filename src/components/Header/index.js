import { useDispatch, useSelector } from "react-redux";
import {
  NETFLIX_LOGO,
  SIGN_OUT_LOGO,
  SUPPORTED_LANGUAGES,
} from "../../constants/constants";

import { Link, useNavigate } from "react-router-dom";
import { useAuthHeaderActions } from "../../hooks";
import { getPlayNow } from "../../utils/slices/nowPlayingSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearchState = useSelector((store) => store.gpt?.showGptSearch);
  const getMovie = useSelector((store) => store.movies?.movieDetails);
  const watchList = useSelector((store) => store.watchlater?.items);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    handleSignOut,
    handleGptSearchClick,
    handleBackToHomeClick,
    handleLanguageChange,
  } = useAuthHeaderActions();

  const playVideo = (movie) => {
    dispatch(getPlayNow(movie));
    navigate("/play");
  };

  return (
    <div className="absolute w-screen px-14 py-3 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row  justify-between">
      <img className="w-44 mx-auto md:mx-0" src={NETFLIX_LOGO} alt="logo" />

      {user && (
        <div className="flex items-center justify-center  md:space-x-5">
          {showGptSearchState && (
            <select
              className=" py-2 rounded-md p-2 mr-4 md:mr-0 focus:outline-none bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="p-[6px] py-2 px-2 mr-4 md:mr-0 bg-purple-900 hover:bg-sky-900 transition-all ease-in text-white rounded-lg shadow-sm"
            onClick={!getMovie ? handleGptSearchClick : handleBackToHomeClick}
          >
            {showGptSearchState
              ? "Home"
              : getMovie
              ? "Back to Home"
              : "GPT Search"}
          </button>

          {watchList && watchList.length > 0 ? (
            <Link to="/watchlater">
              <button className="text-white p-[6px] py-2 px-2 mr-4 md:mr-0 bg-teal-600 hover:bg-sky-900 transition-all ease-in rounded-lg shadow-sm">
                {`My Watch List (${watchList.length})`}
              </button>
            </Link>
          ) : (
            ""
          )}

          <img
            className="hidden md:block  w-10 h-10 m-2 object-cover rounded-full"
            src={user?.photoURL ?? SIGN_OUT_LOGO}
            alt="user-icon"
          />

          <button
            className="p-[6px] truncate rounded-lg bg-orange-600  hover:bg-red-600"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
