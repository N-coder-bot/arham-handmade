import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "./App";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route element={<App />} path="/" />,
    // <Route element={<Error />} path="/profile*" />,
  ])
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} fallbackElement={<Error />} />
);
