export const NETFLIX_LOGO =
  "https://www.freepnglogos.com/uploads/netflix-logo-0.png";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SIGN_OUT_LOGO =
  "https://cdn-icons-png.flaticon.com/512/2504/2504929.png";

export const USER_AVATAR =
  "https://steamuserimages-a.akamaihd.net/ugc/952979309891314703/9532DF045969448C2280ACAF3E181CDF190D4EA2/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false";

export const GUEST_USER_ICON =
  "https://lab.kb.nl/sites/default/files/styles/large/public/images/font-awesome_4-7-0_user_256_0_333333_none.png?itok=Ur-NisRj";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTU4MmZmY2VjNjdiMjBjN2U0NTRiZGQ2ZGMyNmQzNSIsInN1YiI6IjYyMTFkOGYxNDRhNDI0MDA0NmNhMTRkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c8x55qus4A4F_AyIMOvKyWsTaKtEDHES03QMqpIhc5c";

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

export const PLATFORM = "https://www.youtube.com/watch?v=";

export const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";

export const POPULAR_MOVIES =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const TOP_RATED_MOVIES =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const UPCOMING_MOVIES =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
  { identifier: "french", name: "French" },
];
