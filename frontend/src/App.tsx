import React from "react";

import "./style/index.scss";

import { ParallaxProvider } from "react-scroll-parallax";
import { RouterProvider } from "react-router-dom";
import defaultRouter from "./routers/defaultRouter.router";
import { createTheme, ThemeProvider } from "@mui/material";
import { red } from "@mui/material/colors";

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
      <ThemeProvider theme={theme}>
        <ParallaxProvider>
          <RouterProvider router={defaultRouter} />
        </ParallaxProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};
export default App;
