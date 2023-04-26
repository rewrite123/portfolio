import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const Blog = React.lazy(() => import("../views/Blog.view"));
const Contact = React.lazy(() => import("../views/Contact.view"));
const Portfolio = React.lazy(() => import("../views/Portfolio.view"));
const BlogPage = React.lazy(() => import("../views/BlogPage.view"));
const About = React.lazy(() => import("../views/About.view"));
const NotFound = React.lazy(() => import("../views/NotFound.view"));
const Landing = React.lazy(() => import("../views/Landing.view"));

const defaultRouter = createBrowserRouter(
  [
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
      element: <About />,
    },
    {
      path: "/about/",
      element: <About />,
    },
    {
      path: "/",
      element: <Landing />,
      errorElement: <NotFound />,
    },
  ],
  {}
);
export default defaultRouter;
