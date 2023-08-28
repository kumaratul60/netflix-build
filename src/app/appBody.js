// import Login from "../components/Login";
import Browse from "../components/Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginOP from "../components/LoginOptimize";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {/* <Login /> */}
          <LoginOP />
        </>
      ),
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
