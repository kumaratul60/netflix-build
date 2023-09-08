import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

import { auth, gitProvider, provider } from "../firebase/firebase";
import { GUEST_USER_ICON, USER_AVATAR } from "../constants/constants";
import { addUser } from "../utils/slices/authUserSlice";

const useAuth = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleAuthError = (error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(`${errorCode} - ${errorMessage}`);
  };

  const handleErrorMessageText = (text) => {
    setErrorMessage(text);
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
    } catch (error) {
      handleAuthError(error);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);

      // const result = await signInWithPopup(auth, provider);
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // const user = result.user;
      // console.log({ result, credential, token, user });
    } catch (error) {
      const credentialError = GoogleAuthProvider.credentialFromError(error);
      console.error({ error, credentialError });
    }
  };

  const handleSignInWithGitHub = async () => {
    try {
      await signInWithPopup(auth, gitProvider);

      // const result = await signInWithPopup(auth, provider);
      // const credential = GithubAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // const user = result.user;
      // console.log({ result, credential, token, user });
    } catch (error) {
      const credentialError = GithubAuthProvider.credentialFromError(error);
      console.error({ error, credentialError });
    }
  };

  const handleGuestLogin = async () => {
    try {
      const guestEmail = "test@in.in";
      const guestPassword = "Test@123";
      const guestName = "Guest";

      const userCredential = await signInWithEmailAndPassword(
        auth,
        guestEmail,
        guestPassword
      );

      const user = userCredential.user;

      await updateProfile(user, {
        displayName: guestName,
        photoURL: GUEST_USER_ICON,
      });
      const { uid, email, displayName, photoURL } = auth.currentUser;
      dispatch(
        addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        })
      );
    } catch (error) {
      handleAuthError(error);
    }
  };

  return {
    isSignInForm,
    errorMessage,
    handleErrorMessageText,
    toggleSignUpForm,
    handleSignUp,
    handleSignIn,
    handleGuestLogin,
    handleSignInWithGoogle,
    handleSignInWithGitHub,
  };
};

export default useAuth;
