import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./components/router/Router.jsx";
import { RouterProvider } from "react-router-dom";
import ContextApi from "./ContextApi/ContextApi";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ContextApi>
          <RouterProvider router={Router}></RouterProvider>
        </ContextApi>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
