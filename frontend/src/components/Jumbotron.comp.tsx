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
            mt: 1,
          }}
        >
          <Button
            variant="contained"
            href="/contact"
            sx={{ minWidth: "150px" }}
          >
            Contact me
          </Button>
          <Typography>
            Get in touch and see why clients love working with someone who can
            take their business to the next level.
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
              maxHeight: mdDownMediaQuery ? "35vh" : "50vh",
            }}
          />
        </Box>
        {/* </Card> */}
      </Grid>
    </Grid>
  );
};
export default Jumbotron;
