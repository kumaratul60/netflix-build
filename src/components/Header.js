import React from "react";
import { NETFLIX_LOGO } from "../constants/constants";

const Header = () => {
  return (
    <div className="absolute px-14 py-3 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={NETFLIX_LOGO} alt="logo" />
    </div>
  );
};

export default Header;
