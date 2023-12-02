import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Providers/AuthProvider.jsx";
import Route from "./Routes/Route.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={Route}></RouterProvider>
      </AuthProvider>
    </React.StrictMode>
  </div>
);
