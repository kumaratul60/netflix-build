import lang from "../../constants/languageConstants";
import useSearchMovie from "../../hooks/useSearchMovie";
const GPTSearchBar = () => {
  const { handleMovieSearch, getSelectedLanguage, searchText } =
    useSearchMovie();

  return (
    <div className="pt-[10%] flex justify-center mb-[8%]">
      <form
        className="w-1/2 bg-black grid grid-cols-12 rounded-full"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={searchText}
          className=" px-6 col-span-10 border-none focus:outline-none py-4 placeholder-gray-500  rounded-l-full bg-slate-100 caret-red-600"
          type="text"
          placeholder={lang[getSelectedLanguage]?.gptSearchPlaceholder}
        />

        <button
          className="m-auto col-span-2 text-gray-600 hover:text-sky-900 rounded-r-full"
          onClick={handleMovieSearch}
        >
          {lang[getSelectedLanguage]?.search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
