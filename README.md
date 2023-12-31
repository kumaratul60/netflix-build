# <mark> NetflixGPT-build </mark>

[![wakatime](https://wakatime.com/badge/user/1499525d-7f42-4e3a-b9c6-fbf14aa13712/project/6cc84c9e-b6df-4fca-8fd1-c61687bca79b.svg)](https://wakatime.com/badge/user/1499525d-7f42-4e3a-b9c6-fbf14aa13712/project/6cc84c9e-b6df-4fca-8fd1-c61687bca79b)

## **Core Features**

**Before Authentication**

- Home page
- Login/Sign up page
  - Sign up/Sign in form
  - redirect to browse page
  - Guest Login
  - Goggle Authentication
  - Password show/hide

**After Authentication**

- Browse

  - Header
  - Main movie page

    - Trailer in background
    - Title & description
    - Movie Suggestions
      - MovieList \* N (in vertical scroll)
    - Get separate Movie Details

  - Add/Remove movies at Watch Later page
  - individual vedio trailer by clicking it

- Netflix GPT
  - Search Bar
  - Movie Suggestion
  - Multi-Lingual support

### Process & Planning for development

- React
- Tailwind-CSS
- firebase
- react-router-dom - Routing of App
- Header
- Login Form
- Sign up Form
- Login as guest
- Goggle Authentication
- Password show/hide
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create SignUp User Account
- Implement Sign In user Api
- Created Redux Store with userSlice - Redux tool kit
- Implemented Sign out
- Implemented Sign with Google
- implement Protected routes
  - if the user is not logged in Redirect /browse to Login Page and vice-versa
- Unsubscribed to the onAuthStateChanged callback
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create nowPlayingSlice to store movies
- Update Store with movies Data
- Planning for MainContainer & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Youtube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Build Secondary Component
- Build Movie List
- build Movie Card
- TMDB Image CDN URL
- Made the Browser page amazing with Tailwind CSS
- Created Custom hooks
- GPT Search Page
- GPT Search Bar
- Multi-language Feature in our App
- Get Open AI Api Key
- Gpt Search API Call
- fetched gptMoviesSuggestions from TMDB
- created gptSlice added data
- Reused Movie List component to make movie suggestion container
- Movie Details based on click on movie poster
- Shimmer UI Effect to make interactive experience
- Memoization
- Added .env file
- Adding .env file to gitignore
- Made our Site Responsive
