import React from "react";
import ReactDOM from "react-dom/client";
import element from ".";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={element} />
  </Provider>
);
