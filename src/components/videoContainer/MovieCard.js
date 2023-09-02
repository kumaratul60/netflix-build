import { IMAGE_URL, NULL_IMAGE } from "../../constants/constants";

const MovieCard = ({ posterPath }) => {
  const SRC_IMG = `${IMAGE_URL}${posterPath}`;

  return (
    <div className="w-[120px] md:w-[150px] lg:w-[200px] xl:w-[170px]">
      <img
        className="w-full md:h-[180px] lg:h-[240px] xl:h-[190px] object-cover rounded cursor-pointer hover:scale-90 transform transition duration-300 ease-in"
        src={ posterPath !== null ? SRC_IMG : NULL_IMAGE }
        alt="bg-poster"
      />
    </div>
  );
};

export default MovieCard;
