import React from "react";
import {
  Box,
  SvgIcon,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import ihIcon from "../assets/ihLogo.svg";

const Headline = () => {
  const theme = useTheme();
  const smUpMediaQuery = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        my: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "100vw",
        }}
      >
        <SvgIcon
          component={() => (
            <img
              src={ihIcon}
              alt="IsaacHormelIcon"
              style={{ height: smUpMediaQuery ? "75px" : "60px" }}
            />
          )}
        />
        <Typography
          variant={smUpMediaQuery ? "h4" : "h5"}
          noWrap
          sx={{
            mr: 2,
            display: "flex",
            fontFamily: "Inter",
            // fontWeight: 500,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          ISAAC HORMEL
        </Typography>
      </Box>
      <Typography variant="overline" sx={{ lineHeight: "1.5" }}>
        Fullstack developer specializing in nodeJS and related MERN technologies
      </Typography>
    </Box>
  );
};
export default Headline;
