import React from "react";
import { NETFLIX_LOGO, SIGN_OUT_LOGO } from "../constants/constants";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-14 py-3 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={NETFLIX_LOGO} alt="logo" />

      {user && (
        <div className="flex items-center p-1">
          <img
            className="w-10 h-10 object-cover rounded-full"
            src={user?.photoURL ?? SIGN_OUT_LOGO}
            alt="user-icon"
          />
          <button
            className="p-1 m-2 rounded-lg bg-orange-600 hover:bg-red-600"
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
