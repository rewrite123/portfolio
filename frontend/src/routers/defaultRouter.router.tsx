import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Contact from "../views/Contact.view";
import Portfolio from "../views/Portfolio.view";
import Landing from "../views/Landing.view";
import Blog from "../views/Blog.view";
import BlogPage from "../views/BlogPage.view";

const defaultRouter = createBrowserRouter([
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/",
    element: <Blog />,
  },
  {
    path: "/blog/:blogId",
    element: <BlogPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/contact/",
    element: <Contact />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/portfolio/",
    element: <Portfolio />,
  },
  {
    path: "/about",
    element: <Landing />,
  },
  {
    path: "/about/",
    element: <Landing />,
  },
  {
    path: "/",
    element: <Landing />,
  },
]);
export default defaultRouter;
