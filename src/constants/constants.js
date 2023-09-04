export const NETFLIX_LOGO =
  "https://www.freepnglogos.com/uploads/netflix-logo-0.png";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SIGN_OUT_LOGO =
  "https://cdn-icons-png.flaticon.com/512/2504/2504929.png";

export const USER_AVATAR =
  "https://img.freepik.com/premium-vector/login-icon-comic-style-people-secure-access-cartoon-vector-illustration-white-isolated-background-password-approved-splash-effect-business-concept_157943-6970.jpg?w=2000";

export const GUEST_USER_ICON =
  "https://cfocussoftware.com/wp-content/uploads/2017/04/office-365-government-groups-feature-working-with-guest-access-300x300.jpg";

export const GOOGLE_LOGO =
  "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png";

const API_TOKEN = process.env.REACT_APP_TMBD_KEY;

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
};
// https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1

export const API_URL = "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const VIDEOS_API = `https://api.themoviedb.org/3/movie/`;

export const POPULAR_MOVIES =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const TOP_RATED_MOVIES =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const UPCOMING_MOVIES =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const PLATFORM = "https://www.youtube.com/watch?v=";

export const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";

export const NULL_IMAGE =
  "https://cdn.pixabay.com/photo/2018/08/26/23/55/woman-3633737_1280.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
  { identifier: "french", name: "French" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

export const MOVIE_SEARCH_API = "https://api.themoviedb.org/3/search/movie";
// "https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1";
