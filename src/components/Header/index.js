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
  const { handleSignOut, handleGptSearchClick, handleLanguageChange } =
    useAuthHeaderActions();

  return (
    <div className="absolute w-screen px-14 py-3 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={NETFLIX_LOGO} alt="logo" />

      {user && (
        <div className="flex items-center justify-center space-x-5">
          {showGptSearchState && (
            <select
              className=" py-2 rounded-md p-2 focus:outline-none bg-gray-900 text-white"
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
            className="p-[6px]  py-2 bg-purple-900 hover:bg-sky-900 transition-all ease-in text-white rounded-lg shadow-sm"
            onClick={handleGptSearchClick}
          >
            {showGptSearchState ? "back to Browse" : "GPT Search"}
          </button>
          <img
            className="w-12 h-12 object-cover rounded-full"
            src={user?.photoURL ?? SIGN_OUT_LOGO}
            alt="user-icon"
          />
          <button
            className="p-[6px]  rounded-lg bg-orange-600 hover:bg-red-600"
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
