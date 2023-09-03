import { BG_URL } from "../../constants/constants";
import useMovieDetails from "../../hooks/useMovieDetails";
import DetailMovieCard from "./DetailMovieCard";

const MovieDetails = ({ mId }) => {
  useMovieDetails(mId);

  return (
    <>
      <div className="fixed -z-10">
        <img
          className="object-cover h-screen md:h-auto"
          src={BG_URL}
          alt="background-logo"
        />
      </div>
      <div className=" pt-[50%]  md:pt-[6%]">
        <div className="bg-[#242E34] text-white">
          <DetailMovieCard />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
