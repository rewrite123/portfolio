import {
  Box,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

import PunchClockIcon from "@mui/icons-material/PunchClock";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";

const ActionableData = () => {
  const theme = useTheme();
  const mdDownMediaQuery = useMediaQuery(theme.breakpoints.down("md"));

  const datapoints = [
    {
      title: (
        <>
          <PunchClockIcon /> Fast turnaround
        </>
      ),
      text: "Average project completion is only three weeks",
    },
    {
      title: (
        <>
          <DoneAllIcon /> All-in-one developer
        </>
      ),
      text: "Frontend, backend and deployment all in one",
    },
    {
      title: (
        <>
          <PriceCheckIcon /> No surprises
        </>
      ),
      text: "Stay on budget and avoid delays",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        my: 3,
        p: 2,
        // background: "#fff",
      }}
    >
      {!mdDownMediaQuery && (
        <>
          {datapoints.map((dp, dpIndex) => {
            return (
              <>
                <Box key={dpIndex} sx={{ textAlign: "center", width: "100%" }}>
                  <Typography variant="h6">{dp.title}</Typography>
                  <Typography variant="body1">{dp.text}</Typography>
                </Box>
                {dpIndex + 1 < datapoints.length && (
                  <Divider orientation="vertical" flexItem />
                )}
              </>
            );
          })}
        </>
      )}
      {mdDownMediaQuery && (
        <Carousel
          autoPlay={true}
          navButtonsAlwaysInvisible={true}
          animation="slide"
          sx={{ width: "100%" }}
        >
          {datapoints.map((dp, dpIndex) => {
            return (
              <Box
                key={dpIndex}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  flexDirection: "column",
                  minHeight: "80px",
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  {dp.title}
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  {dp.text}
                </Typography>
              </Box>
            );
          })}
        </Carousel>
      )}
    </Box>
  );
};
export default ActionableData;
