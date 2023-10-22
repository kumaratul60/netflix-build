import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IMAGE_URL, NULL_IMAGE } from "../../constants/constants";
import {
  formatNumberWithSuffix,
  minutesToHours,
} from "../../utils/statsConversion";
import Spinner from "../Shimmer/Spinner";
import Shimmer from "./Shimmer4MovieDetail";

const DetailMovieCard = () => {
  const [loading, setLoading] = useState(true);
  const getAllDetails = useSelector((store) => store.movies?.movieAllDetails);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (!getAllDetails) {
    return <Shimmer />;
  }

  const {
    budget,
    genres,
    original_title,
    title,
    overview,
    poster_path,
    production_companies,
    production_countries,
    release_date,
    revenue,
    runtime,
    spoken_languages,
    tagline,
    vote_average,
    vote_count,
  } = getAllDetails;

  const SRC_IMG = `${IMAGE_URL}${poster_path}`;
  const getGenres = genres.map((gen) => gen.name);
  const prod_companies = production_companies.map((com) => com.name);
  const prod_countries = production_countries.map((cn) => cn.name);
  const languages = spoken_languages.map((lang) => lang.english_name);
  const duration = minutesToHours(runtime).toFixed(1);
  const formattedBudget = formatNumberWithSuffix(budget);
  const formattedRevenue = formatNumberWithSuffix(revenue);
  const formattedVote = formatNumberWithSuffix(vote_count);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-6 p-2 m-auto pl-[15%]">
        {loading ? (
          <Shimmer />
        ) : (
          <img
            src={poster_path !== null ? SRC_IMG : NULL_IMAGE}
            alt="movie-poster"
            className="w-9/12 object-cover rounded"
          />
        )}
      </div>

      <div className="col-span-12 md:col-span-6 p-4 md:p-8">
        <h1 className="text-3xl font-semibold text-orange-600 mb-4">
          {title || original_title}
        </h1>
        <p className="text-xl text-gray-600 mb-4">{overview}</p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <span className="font-semibold text-orange-600">
              Released Date:
            </span>
            <p>{release_date}</p>
          </div>
          <div>
            <span className="font-semibold text-orange-600">Revenue:</span>
            <p>{formattedRevenue}</p>
          </div>
          <div>
            <span className="font-semibold text-orange-600">Budget:</span>
            <p>{formattedBudget}</p>
          </div>
          <div>
            <span className="font-semibold text-orange-600">Tagline:</span>
            <p>{tagline}</p>
          </div>
          <div>
            <span className="font-semibold text-orange-600">Rating:</span>
            <p>{parseInt(vote_average).toFixed(1)}</p>
          </div>
          <div>
            <span className="font-semibold text-orange-600">Vote:</span>
            <p>{formattedVote}</p>
          </div>
          <div>
            <span className="font-semibold text-orange-600">Duration:</span>
            <p>{`${duration} hours`}</p>
          </div>
          <div>
            <span className="font-semibold text-orange-600">Genres:</span>
            <p>{getGenres.join(", ")}</p>
          </div>
        </div>

        <div className="mb-4">
          <span className="font-semibold text-orange-600">
            Production Companies:
          </span>
          <p>{prod_companies.join(", ")}</p>
        </div>

        <div className="mb-4">
          <span className="font-semibold text-orange-600">
            Production Countries:
          </span>
          <p>{prod_countries.join(", ")}</p>
        </div>

        <div>
          <span className="font-semibold text-orange-600">Languages:</span>
          <p>{languages.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailMovieCard;
