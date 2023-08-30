import { IMAGE_URL } from "../../constants/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-[120px] md:w-[150px] lg:w-[200px] xl:w-[170px]">
      <img
        className="w-full h-auto md:h-[180px] lg:h-[240px] xl:h-[200px] object-cover rounded cursor-pointer hover:scale-110 transform transition duration-300 ease-out"
        src={`${IMAGE_URL}${posterPath}`}
        alt="bg-poster"
      />
    </div>
  );
};

export default MovieCard;
