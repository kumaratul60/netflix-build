import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  /**
  apiKey: "AIzaSyA-NtEvz1fjZryEDlDhB8jfmcet_Lujpq8",
  authDomain: "netflixgpt-823.firebaseapp.com",
  projectId: "netflixgpt-823",
  storageBucket: "netflixgpt-823.appspot.com",
  messagingSenderId: "359209204947",
  appId: "1:359209204947:web:249062b1fddf5749e52826",
  measurementId: "G-81DR4QW4FZ",

  */

  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const provider = new GoogleAuthProvider();

export const auth = getAuth();
