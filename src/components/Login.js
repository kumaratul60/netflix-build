import React, { useState } from "react";
import Header from "./Header";
import { NETFLIX_BACKGROUND_IMAGE } from "../constants/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const formType = isSignIn ? "Sign In" : "Sign Up";
  const buttonText = isSignIn ? "Sign In" : "Sign Up";
  const promptText = isSignIn ? "New to Netflix? " : "Already have Netflix? ";

  const toggleSignUpForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="relative">
      <div>
        <Header />
        <div className="absolute">
          <img src={NETFLIX_BACKGROUND_IMAGE} alt="background-logo" />
        </div>
      </div>

      <form className="w-4/12 h-[550px] absolute p-12 bg-[#040100] bg-opacity-90 my-36 mx-auto right-0 left-0 text-white rounded-lg ">
        <h1 className="text-3xl font-semibold my-3 mx-10">{formType}</h1>
        {!isSignIn && (
          <input
            className="w-9/12 p-2 py-4 my-2 px-5 mx-10 rounded-md bg-[#333333] outline-none focus:ring-2"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          className="w-9/12 p-2 py-4 my-2 px-5 mx-10 rounded-md bg-[#333333] outline-none focus:ring-2"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="w-9/12 p-2 py-4 my-2 px-5 mx-10 rounded-md bg-[#333333] outline-none focus:ring-2"
          type="password"
          placeholder="Password"
        />
        <button className="w-9/12 p-2 py-4 my-6 px-5 mx-10 rounded-md  bg-[#E50914]">
          {buttonText}
        </button>
        <p className="mt-14 mx-14">
          <span className="text-gray-400">{promptText}</span>
          <span
            className="hover:underline cursor-pointer"
            onClick={toggleSignUpForm}
          >
            {isSignIn ? " Sign up now." : " Sign in now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
