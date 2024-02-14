import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./LandingPage";
import About from "./About";
import ContactForm from "./Contact";
import Donate from "./Donate";
import Services from "./Services";
import Single from "./Single";
import Group from "./Group";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactForm />,
      },
      {
        path: "/donate",
        element: <Donate />,
      },
      {
        path: "/services",
        element: <Services />,
        children: [
          {
            path: "/services/single",
            element: <Single />,
          },
          {
            path: "/services/group",
            element: <Group />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
