const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[60%] md:pt-[20%] px-4 sm:px-24 absolute text-white bg-gradient-to-t from-black">
      <h1 className="font-bold text-3xl sm:text-4xl mb-2">{title}</h1>
      <p className="text-base md:w-1/4 sm:text-lg leading-snug tracking-tight">
        {overview}
      </p>
      <div className="mt-6 flex flex-col sm:flex-row items-center">
        <button className="w-full sm:w-auto px-6 py-1 mt-2 bg-white text-black text-lg rounded-md mb-2 sm:mb-0 sm:mr-2 hover:bg-opacity-70">
          <span className="text-xl">▶</span> Play
        </button>
        <button className="w-full sm:w-auto px-6 py-1 mt-2 bg-gray-400 bg-opacity-50 text-lg rounded-md  mb-5 md:mb-0">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
