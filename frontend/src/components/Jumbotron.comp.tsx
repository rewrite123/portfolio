import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import webDevIllustration from "../assets/webDevIllustration.svg";

const Jumbotron = () => {
  const theme = useTheme();
  const smDownMediaQuery = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDownMediaQuery = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      sx={{
        flexDirection: mdDownMediaQuery ? "column-reverse" : undefined,
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          mt: 1,
        }}
      >
        <Typography variant="h3">Build your online business</Typography>
        <Typography variant="h6">
          Get highly custom websites, apps, illustrations and designs from a
          professional.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center ",
            gap: 1,
            mt: 2,
          }}
        >
          <Button
            variant="contained"
            href="/contact"
            sx={{ minWidth: "150px", minHeight: "60px", fontSize: "16px" }}
          >
            Contact me
          </Button>
          <Typography>
            Visitors develop their opinion on a company within the first 50
            milliseconds. Why not impress them?
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        {/* <Card
          sx={{
            m: 2,
          }}
        > */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            m: 2,
          }}
        >
          <img
            src={webDevIllustration}
            alt=""
            style={{
              maxWidth: "100%",
              maxHeight: smDownMediaQuery
                ? "50vw"
                : mdDownMediaQuery
                ? "50vh"
                : "50vh",
              minHeight: "320px",
            }}
          />
        </Box>
        {/* </Card> */}
      </Grid>
    </Grid>
  );
};
export default Jumbotron;
