import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../../pages/Home/Home";
import OurTeam from "../../pages/OurTeam/OurTeam";
import Services from "../Services/Services";
import LogIn from "../../pages/Login/LogIn";
import SignUp from "../../pages/SignUp/SignUp";
import AdminPanel from "../../pages/Admin/AdminPanel";
import OrderList from "../OrderList/OrderList";
import Book from "../Book/Book";
import BookingList from "../BookingList/BookingList";
import Review from "../Review/Review";
import PrivateRoute from "../Routes/PrivateRoute";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import AddService from "../../pages/AdminPages/AddService/AddService";
import MakeAdmin from "../../pages/AdminPages/MakeAdmin/MakeAdmin";

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
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "admin",
    element: (
      <PrivateRoute>
        <AdminPanel></AdminPanel>
      </PrivateRoute>
    ),

    children: [
      // customer panel routes
      {
        path: "book",
        element: <Book></Book>,
      },
      {
        path: "bookingList",
        element: <BookingList></BookingList>,
      },
      {
        path: "review",
        element: <Review></Review>,
      },
      // admin routes
      {
        path: "orderList",
        element: <OrderList></OrderList>,
      },
      {
        path: "addService",
        element: <AddService></AddService>,
      },
      {
        path: "makeAdmin",
        element: <MakeAdmin></MakeAdmin>,
      },
    ],
  },
]);

export default Router;
