import { useRef, useState } from "react";
import Header from "../Header";
import { BG_URL, GITHUB_LOGO, GOOGLE_LOGO } from "../../constants/constants";
import { checkValidData, checkValidDataWithName } from "../../utils/validate";
import useAuth from "../../hooks/useAuth";

const LoginOP = () => {
  const {
    isSignInForm,
    errorMessage,
    handleErrorMessageText,
    toggleSignUpForm,
    handleSignUp,
    handleSignIn,
    handleGuestLogin,
    handleSignInWithGoogle,
    handleSignInWithGitHub,
  } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  // get the reference of input fields by useRef
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleBtnClick = () => {
    const userName = name.current ? name.current.value.trim() : "";
    const userEmail = email.current.value;
    const userPassword = password.current.value;

    const validationRes = name.current
      ? checkValidDataWithName(userName, userEmail, userPassword)
      : checkValidData(userEmail, userPassword);

    handleErrorMessageText(validationRes);

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
          <img
            className="object-cover  h-screen md:h-auto"
            src={BG_URL}
            alt="background-logo"
          />
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
          className="w-9/12 py-4 my-2 px-5 mx-10 rounded-md bg-[#333333] outline-none focus:ring-2"
          type="text"
          placeholder="Email Address"
        />
        <div className="relative">
          <input
            ref={password}
            className="w-9/12 py-4 my-2 px-5 mx-10  rounded-md bg-[#333333] outline-none focus:ring-2"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <button
            className="absolute right-[4.1rem] md:right-[4.8rem] top-6 text-gray-400"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <p className="text-red-500 text-sm font-semibold  mx-11 my-[-6px] mb-8">
          {errorMessage}
        </p>
        <button
          className="w-9/12  py-4 my-4 px-5 mx-10 rounded-md  bg-[#E50914]"
          onClick={handleBtnClick}
        >
          {buttonText}
        </button>

        {isSignInForm && (
          <button
            className="w-9/12 py-4 my-2 px-5 mx-10 rounded-md  bg-[#e57b09]"
            onClick={handleGuestLogin}
          >
            Login as Guest
          </button>
        )}

        <div className="flex flex-row items-center gap-4 mt-8 justify-center">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center  cursor-pointer bg-white hover:opacity-80 transition"
            onClick={handleSignInWithGoogle}
          >
            <img className="h-10 w-10 " src={GOOGLE_LOGO} alt="google-icon" />
          </div>
          {/* <div
            className="w-10 h-10 rounded-full flex items-center justify-center  cursor-pointer bg-white hover:opacity-80 transition"
            onClick={handleSignInWithGitHub}
          >
            <img className="h-10 w-10 " src={GITHUB_LOGO} alt="google-icon" />
          </div> */}
        </div>

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
