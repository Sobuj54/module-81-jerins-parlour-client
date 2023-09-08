import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../../pages/Home/Home";
import OurTeam from "../../pages/OurTeam/OurTeam";
import Services from "../Services/Services";
import LogIn from "../../pages/Login/LogIn";
import SignUp from "../../pages/SignUp/SignUp";
import AdminPanel from "../../pages/Admin/AdminPanel";

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
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminPanel></AdminPanel>,
  },
]);

export default Router;
