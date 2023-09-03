import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestions from "./GPTSuggestions";
import { BG_URL } from "../../constants/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="object-cover h-screen md:h-auto"
          src={BG_URL}
          alt="background-logo"
        />
      </div>

      <GPTSearchBar />
      <GPTSuggestions />
    </>
  );
};

export default GPTSearch;
