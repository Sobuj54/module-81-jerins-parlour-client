import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../../pages/Home/Home";
import OurTeam from "../../pages/OurTeam/OurTeam";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/team",
        element: <OurTeam></OurTeam>,
      },
    ],
  },
]);

export default Router;
