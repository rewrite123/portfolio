import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Landing from '../views/Landing.view';

const defaultRouter = createBrowserRouter([
  {
    path: "/portfolio",
    element: <Landing />,
  },
  {
    path: "/portfolio/",
    element: <Landing />,
  },
  {
    path: "/",
    element: <Landing />,
  },
]);
export default defaultRouter;