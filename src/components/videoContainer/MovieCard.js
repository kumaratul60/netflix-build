import { IMAGE_URL } from "../../constants/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-[120px] md:w-[150px] lg:w-[200px] xl:w-[180px]">
      <img
        className="w-full h-auto md:h-[180px] lg:h-[240px] xl:h-[170px] object-fill rounded cursor-pointer hover:scale-110 transform transition duration-300 ease-out"
        src={`${IMAGE_URL}${posterPath}`}
        alt="bg-poster"
      />
    </div>
  );
};

export default MovieCard;
