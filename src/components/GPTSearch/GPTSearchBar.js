import React from "react";
const GPTSearchBar = () => {
  return (
    <div className="flex justify-center bg-black py-4">
      <form className="flex items-center bg-white rounded-full px-12">
        <input
          className="bg-transparent bg-gradient-to-r from bg-white pl-2  border-none focus:outline-none w-[500px] px-20 py-4 pr-2 placeholder-gray-500"
          type="text"
          placeholder="Search"
        />
        <button className="ml-4 text-gray-600 hover:text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
