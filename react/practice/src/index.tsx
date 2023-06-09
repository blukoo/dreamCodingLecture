import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFounds from "@/pages/NotFounds";
import TestIndex from "@/pages/TestPages/TestIndex";
import TestPage1 from "@/pages/TestPages/TestPage1";
import TestPage2 from "@/pages/TestPages/TestPage2";
import ProtectedRoute from "@/components/ProtectedRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <NotFounds />,
    children: [
      {
        // index: true,
        element: <TestIndex />,
      },
      {
        index: true,
        // path: "/",
        element: (
          // <ProtectedRoute>
          <TestPage1 />
        ),
        // </ProtectedRoute>
      },
      {
        // index: true,
        path: "test2",
        element: <TestPage2 />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
