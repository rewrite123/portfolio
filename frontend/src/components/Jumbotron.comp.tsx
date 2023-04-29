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
import { PopupButton } from "react-calendly";

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
        <Typography variant="h1" sx={{ fontSize: "3rem", fontWeight: "400" }}>
          Build your online business
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontSize: "1.25rem", fontWeight: "500" }}
        >
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
          {/* <Button
            variant="contained"
            href="/contact"
            sx={{ minWidth: "150px", minHeight: "60px", fontSize: "16px" }}
          >
            Contact me
          </Button> */}
          <Button
            variant="contained"
            size="large"
            onClick={(e) => {
              if (!e.currentTarget.className.includes("calendlyBtn")) {
                (
                  e.currentTarget.firstChild as HTMLButtonElement | null
                )?.click();
              }
            }}
            sx={{ minWidth: "150px", minHeight: "60px", fontSize: "16px" }}
          >
            <PopupButton
              className="calendlyBtn"
              url="https://calendly.com/isaachormel"
              /*
               * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
               * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
               */
              rootElement={
                document.getElementById("portfolio") as HTMLDivElement
              }
              text="CONTACT ME"
              styles={{
                background: "inherit",
                border: "none",
                font: "inherit",
                fontSize: "inherit",
                color: "inherit",
                cursor: "inherit",
                margin: 0,
                padding: 0,
              }}
            />
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
            alt="WebDevIllustration"
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
