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
        <title>Ideas to reality - Isaac Hormel</title>
        <meta
          name="description"
          content="Build your online business and bring your ideas to life with a professional web developer. Get custom websites, apps, illustrations and designs at an affordable price and in a timely manner."
        />
        <meta property="og:title" content="Ideas to reality - Isaac Hormel" />
        <meta
          property="og:description"
          content="Build your online business and bring your ideas to life with a professional web developer. Get custom websites, apps, illustrations and designs at an affordable price and in a timely manner."
        />
        <meta property="robots" content="index" />
        <meta property="author" content="Isaac Hormel" />
        <meta property="publisher" content="Isaac Hormel" />
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
