import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "../components/Browse";
import LoginOP from "../components/Login";
// import MovieDetails from "../components/MovieDetails";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginOP />,
    },
    {
      path: "/browse",
      element: <Browse />,
      // children: [
      //   {
      //     path: "movie/:id",
      //     element: <MovieDetails />,
      //   },
      // ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
