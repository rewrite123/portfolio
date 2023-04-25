import React from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import back1 from "../assets/ubuntuLogo.png";
import back2 from "../assets/githubLogo.png";
import back3 from "../assets/awsLogo.png";
import back4 from "../assets/herokuLogo.svg";
import back5 from "../assets/nodeLogo.png";
import back6 from "../assets/dockerLogo.webp";
import back7 from "../assets/expressLogo.png";
import back8 from "../assets/mysqlLogo.png";
import back9 from "../assets/postgresLogo.png";
import back10 from "../assets/elasticsearchLogo.svg";

import front1 from "../assets/jsLogo.png";
import front2 from "../assets/tsLogo.png";
import front3 from "../assets/reactLogo.png";
import front4 from "../assets/webpackLogo.png";
import front5 from "../assets/materialuiLogo.svg";
import front6 from "../assets/bootstrapLogo.svg";
import front7 from "../assets/gmapsLogo.png";
import front8 from "../assets/html5Logo.svg";
import front9 from "../assets/cssLogo.png";
import front10 from "../assets/sassLogo.png";
import front11 from "../assets/eslintLogo.svg";

const Technologies = () => {
  const backendImages = [
    back1,
    back2,
    back3,
    back4,
    back5,
    back6,
    back7,
    back8,
    back9,
    back10,
  ];
  const frontendImages = [
    front1,
    front2,
    front3,
    front4,
    front5,
    front6,
    front7,
    front8,
    front9,
    front10,
  ];

  const theme = useTheme();
  const smUpMediaQuery = useMediaQuery(theme.breakpoints.up("sm"));
  const mdUpMediaQuery = useMediaQuery(theme.breakpoints.up("md"));
  // const lgUpMediaQuery = useMediaQuery(theme.breakpoints.up("lg"));
  // const xlUpMediaQuery = useMediaQuery(theme.breakpoints.up("xl"));

  const techSize = mdUpMediaQuery ? "120px" : smUpMediaQuery ? "90px" : "70px";

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            Technologies
          </Typography>
        </Grid>
        <Grid item sm={12} md={6}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Backend
          </Typography>
          <Card>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              {backendImages.map((imageSrc, imageIndex) => {
                return (
                  <Box
                    sx={{
                      height: techSize,
                      width: techSize,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      key={imageIndex}
                      src={imageSrc}
                      alt="BackendTechnology"
                      style={{ maxWidth: techSize, maxHeight: techSize }}
                    />
                  </Box>
                );
              })}
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={12} md={6}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Frontend
          </Typography>
          <Card>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              {frontendImages.map((imageSrc, imageIndex) => {
                return (
                  <Box
                    sx={{
                      height: techSize,
                      width: techSize,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      key={imageIndex}
                      src={imageSrc}
                      alt="FrontendTechnology"
                      style={{ maxWidth: techSize, maxHeight: techSize }}
                    />
                  </Box>
                );
              })}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
export default Technologies;
