import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "../components/Browse";
import LoginOP from "../components/Login";

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
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
