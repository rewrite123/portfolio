import React from 'react';

import './style/index.scss';

import { ParallaxProvider } from 'react-scroll-parallax';
import { RouterProvider } from "react-router-dom";
import defaultRouter from './routers/defaultRouter.router';

const App = ()=>{

  return (
    <React.StrictMode>
      <ParallaxProvider>
        <RouterProvider router={defaultRouter} />
      </ParallaxProvider>
    </React.StrictMode>
  );
}
export default App;