import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./components/router/Router.jsx";
import { RouterProvider } from "react-router-dom";
import ContextApi from "./ContextApi/ContextApi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextApi>
      <RouterProvider router={Router}></RouterProvider>
    </ContextApi>
  </React.StrictMode>
);
