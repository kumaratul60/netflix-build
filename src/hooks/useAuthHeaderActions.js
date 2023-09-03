import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/firebase";
import { addUser, removeUser } from "../utils/slices/authUserSlice";
import { gptToggle } from "../utils/slices/gptSlice";
import { changeLanguage } from "../utils/slices/configSlice";
import { getMovieById } from "../utils/slices/nowPlayingSlice";

const useAuthHeaderActions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        const { uid, email, displayName, photoURL } = authUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearchClick = () => {
    dispatch(gptToggle());
  };

  const handleBackToHomeClick = () => {
    dispatch(getMovieById());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return {
    handleSignOut,
    handleGptSearchClick,
    handleBackToHomeClick,
    handleLanguageChange,
  };
};

export default useAuthHeaderActions;
