import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import AuthProvider from "./provider/AuthProvider";
import CategoryProvider from "./provider/CategoryProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CategoryProvider>
        <RouterProvider router={router} />
      </CategoryProvider>
    </AuthProvider>
  </React.StrictMode>
);
