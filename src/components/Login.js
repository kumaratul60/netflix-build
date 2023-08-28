import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_URL } from "../constants/constants";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // get the reference of input fields by useRef
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const formType = isSignIn ? "Sign In" : "Sign Up";
  const buttonText = isSignIn ? "Sign In" : "Sign Up";
  const promptText = isSignIn ? "New to Netflix? " : "Already have Netflix? ";

  const toggleSignUpForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleBtnClick = () => {
    let validationRes;
    if (name.current) {
      validationRes = checkValidData(
        name.current.value,
        email.current.value,
        password.current.value
      );
    } else {
      validationRes = checkValidData(
        email.current.value,
        password.current.value
      );
    }

    setErrorMessage(validationRes);

    console.log(email.current.value);
    console.log(password.current.value);
    if (name.current) {
      console.log(name.current.value);
    }
  };

  return (
    <div>
      <div>
        <Header />
        <div className="absolute">
          <img className="object-cover" src={BG_URL} alt="background-logo" />
        </div>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-4/12 absolute p-12 bg-[#040100] bg-opacity-90 my-32 mx-auto right-0 left-0 text-white rounded-lg "
      >
        <h1 className="text-3xl font-semibold my-3 mx-10">{formType}</h1>
        {!isSignIn && (
          <input
            ref={name}
            className="w-9/12 p-2 py-4 my-2 px-5 mx-10 rounded-md bg-[#333333] outline-none focus:ring-2"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          ref={email}
          className="w-9/12 p-2 py-4 my-2 px-5 mx-10 rounded-md bg-[#333333] outline-none focus:ring-2"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="w-9/12 p-2 py-4 my-2 px-5 mx-10 rounded-md bg-[#333333] outline-none focus:ring-2"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500 text-sm font-semibold  mx-11 my-[-6px] mb-8">
          {errorMessage}
        </p>
        <button
          className="w-9/12 p-2 py-4 my-6 px-5 mx-10 rounded-md  bg-[#E50914]"
          onClick={handleBtnClick}
        >
          {buttonText}
        </button>
        <p className="mt-14 mx-14">
          <span className="text-gray-400">{promptText}</span>
          <span
            className="hover:underline cursor-pointer"
            onClick={toggleSignUpForm}
          >
            {isSignIn ? " Sign up now" : " Sign in now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
