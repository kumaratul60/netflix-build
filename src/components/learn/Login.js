import React, { useRef, useState } from "react";
import Header from "../Header";
import { BG_URL } from "../../constants/constants";
import { checkValidData, checkValidDataWithName } from "../../utils/validate";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // get the reference of input fields by useRef
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleBtnClick = () => {
    let validationRes;
    if (name.current) {
      validationRes = checkValidDataWithName(
        name.current.value.trim(),
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

    // if(!validationRes){// sign in / sign up} or  if (validationRes) return
    const userEmail = email.current.value;
    const userPassword = password.current.value;

    if (validationRes) return;

    if (!isSignInForm) {
      const userName = name.current.value;
      if (!userName || userName.length === 0) {
        alert("Please enter your name");
        return; // Exit the function
      }

      // Sign up Logic
      createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
          const user = userCredential.user;

          // Update the user's display name
          return updateProfile(user, {
            displayName: userName,
          });
        })
        .then(() => {
          console.log("👍🏼");
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(
            `something went wrong: ${errorCode} - ${errorMessage}`
          );
        });
    } else {
      // Sign in Logic
      signInWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
          // Signed in

          const user = userCredential.user;
          // console.log({ signUp: user });
        })
        .then(() => {
          console.log("🚀");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(
            `something went wrong: ${errorCode} - ${errorMessage}`
          );
        });
    }

    // Sign in/ sign up

    // console.log(email.current.value);
    // console.log(password.current.value);
    // if (name.current) {
    //   console.log(name.current.value);
    // }
  };

  const formType = isSignInForm ? "Sign In" : "Sign Up";
  const buttonText = isSignInForm ? "Sign In" : "Sign Up";
  const promptText = isSignInForm
    ? "New to Netflix? "
    : "Already have Netflix? ";

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
        {!isSignInForm && (
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
            {isSignInForm ? " Sign up now" : " Sign in now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
