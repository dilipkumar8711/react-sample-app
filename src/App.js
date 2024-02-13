import React from "react";
import ReactDom from "react-dom/client";
import AppLayout from "./components/AppLayout";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const title = React.createElement("h1", {}, "Hello world!!");
const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
