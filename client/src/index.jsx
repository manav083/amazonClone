import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import App from "./App";
import Register from "./pages/Register/Register";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

let element = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/CategoryPage",
    element: <CategoryPage />,
  },
]);

export default element;
