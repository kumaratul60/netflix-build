import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_URL, USER_AVATAR } from "../constants/constants";
import { checkValidData, checkValidDataWithName } from "../utils/validate";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/slices/userSlice";

const LoginOP = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  // get the reference of input fields by useRef
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSignUp = async (userName, userEmail, userPassword) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: userName,
        photoURL: USER_AVATAR,
      });
      const { uid, email, displayName, photoURL } = auth.currentUser;

      dispatch(
        addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL,
        })
      );
    } catch (error) {
      handleAuthError(error);
    }
  };

  const handleSignIn = async (userEmail, userPassword) => {
    try {
      await signInWithEmailAndPassword(auth, userEmail, userPassword);

      // const userCredential = await signInWithEmailAndPassword(auth, userEmail, userPassword);
      // const user = userCredential.user;
      // console.log({ signIn: user });

      // navigate("/browse");
    } catch (error) {
      handleAuthError(error);
    }
  };

  const handleAuthError = (error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(` ${errorCode} - ${errorMessage}`);
  };

  const handleBtnClick = () => {
    const userName = name.current ? name.current.value.trim() : "";
    const userEmail = email.current.value;
    const userPassword = password.current.value;

    const validationRes = name.current
      ? checkValidDataWithName(userName, userEmail, userPassword)
      : checkValidData(userEmail, userPassword);

    setErrorMessage(validationRes);

    if (validationRes) return;

    if (!isSignInForm) {
      if (!userName) {
        alert("Please enter your name");
        return;
      }

      handleSignUp(userName, userEmail, userPassword);
    } else {
      handleSignIn(userEmail, userPassword);
    }
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

export default LoginOP;
