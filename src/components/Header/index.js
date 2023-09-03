import { useSelector } from "react-redux";
import {
  NETFLIX_LOGO,
  SIGN_OUT_LOGO,
  SUPPORTED_LANGUAGES,
} from "../../constants/constants";

import useAuthHeaderActions from "../../hooks/useAuthHeaderActions";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearchState = useSelector((store) => store.gpt?.showGptSearch);
  const getMovie = useSelector((store) => store.movies?.movieDetails);

  const {
    handleSignOut,
    handleGptSearchClick,
    handleBackToHomeClick,
    handleLanguageChange,
  } = useAuthHeaderActions();

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
