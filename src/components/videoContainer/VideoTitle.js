const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video  pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-4xl mb-2">{title}</h1>
      <p className="text-lg w-1/4 leading-snug tracking-tight">{overview}</p>
      <div className="mt-3">
        <button className="px-10 py-1 bg-white text-black text-lg rounded-md hover:bg-opacity-70">
          <span className=" text-xl"> ▶</span>Play
        </button>
        <button className="px-12 py-1 bg-gray-400 bg-opacity-50   text-lg mx-2 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
