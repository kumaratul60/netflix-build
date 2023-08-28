import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS, API_URL } from "../constants/constants";

const Browse = () => {
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const movies = await fetch(API_URL, API_OPTIONS);
    const moviesResponse = await movies.json();
    console.log({ moviesResponse });
  };

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
