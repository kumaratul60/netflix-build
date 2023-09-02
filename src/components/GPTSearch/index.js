import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestions from "./GPTSuggestions";
import { BG_URL } from "../../constants/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img className="object-cover" src={BG_URL} alt="background-logo" />
      </div>
      <GPTSearchBar />
      <GPTSuggestions />
    </div>
  );
};

export default GPTSearch;
