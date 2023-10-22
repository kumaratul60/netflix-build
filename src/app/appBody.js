import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "../components/Browse";
import LoginOP from "../components/Login";
import PlayVideo from "../components/PlayVideo";
import WatchLater from "../components/WatchLater";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginOP />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/watchlater",
      element: <WatchLater />,
    },
    {
      path: "/play",
      element: (
        <>
          <PlayVideo />
        </>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
