import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

import clipboard from "../assets/clipboard.svg";

const AllInOneDeveloper = () => {
  const theme = useTheme();
  const mdDownMediaQuery = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      sx={{
        flexDirection: mdDownMediaQuery ? "column-reverse" : undefined,
        my: 2,
      }}
    >
      <Grid
        item
        xs={12}
        md={7}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3">Everything you need</Typography>
        <Typography>
          Get everything your business needs to operate in the online world from
          one developer. From pretty splash pages to functional APIs. You're in
          capable hands.
        </Typography>
      </Grid>
      <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
        <img
          src={clipboard}
          alt="Clipboard"
          style={{ maxWidth: mdDownMediaQuery ? "40vw" : "25vw" }}
        />
      </Grid>
    </Grid>
  );
};
export default AllInOneDeveloper;
