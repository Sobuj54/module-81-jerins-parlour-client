import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../../pages/Home/Home";
import OurTeam from "../../pages/OurTeam/OurTeam";
import Services from "../Services/Services";

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
        path: "team",
        element: <OurTeam></OurTeam>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
    ],
  },
]);

export default Router;
