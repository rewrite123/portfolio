import React from "react";

import "./style/index.scss";

import { ParallaxProvider } from "react-scroll-parallax";
import { RouterProvider } from "react-router-dom";
import defaultRouter from "./routers/defaultRouter.router";
import { createTheme, ThemeProvider } from "@mui/material";
import { red } from "@mui/material/colors";
import { Helmet } from "react-helmet";

const App = () => {
  const theme = createTheme({
    palette: {
      secondary: {
        main: red[700],
      },
    },
    components: {
      MuiPopover: {
        styleOverrides: {
          root: {
            maxWidth: "80vw",
          },
        },
      },
    },
  });

  return (
    <React.StrictMode>
      <Helmet>
        <title>Isaac Hormel</title>
        <meta property="og:title" content="Isaac Hormel" />
        <meta property="og:description" content="Hi, I'm Isaac. I'm a fullstack developer specializing ing NodeJS and related MERN technologies." />
        <meta property="og:image" content="/images/phoenixWingSquared.png" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <ParallaxProvider>
          <RouterProvider router={defaultRouter} />
        </ParallaxProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};
export default App;
