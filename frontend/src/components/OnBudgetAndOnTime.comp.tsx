import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

import calendarInvoice from "../assets/calendarInvoice.svg";

const OnBudgetAndOnTime = () => {
  const theme = useTheme();
  const mdDownMediaQuery = useMediaQuery(theme.breakpoints.down("md"));
  const lgDownMediaQuery = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Grid
      container
      sx={{
        my: 2,
      }}
    >
      <Grid item xs={12} md={6} sx={{ textAlign: "center", px: 2 }}>
        <img
          src={calendarInvoice}
          style={{
            maxWidth: mdDownMediaQuery
              ? "55vw"
              : lgDownMediaQuery
              ? "30vw"
              : "27vw",
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3">On budget and on time</Typography>
        <Typography>
          Stick to your budget and get your site or app done in a timely manner.
          Prices are competetive and schedules are accounted for. No surprises
          here.
        </Typography>
      </Grid>
    </Grid>
  );
};
export default OnBudgetAndOnTime;
