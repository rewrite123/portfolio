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
import React from "react";
import { InlineWidget, PopupButton, PopupWidget } from "react-calendly";

import Conversation from "../assets/Conversation.svg";

const ConsultationsPromotional = () => {
  const theme = useTheme();
  const smDownMediaQuery = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDownMediaQuery = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "50px",
        }}
      >
        <Card
          sx={{
            width: smDownMediaQuery
              ? undefined
              : mdDownMediaQuery
              ? "90%"
              : "760px",
            minHeight: "320px",
            // background: "#000",
            backgroundImage:
              "radial-gradient(ellipse farthest-corner at 10% 250%, #1976d2 0%, #1976d2 77%, #4e95d3 77%)",
            color: "#fff",
          }}
        >
          <CardContent>
            <Typography variant="h3" sx={{ textAlign: "center", mb: 2 }}>
              Schedule a free consultation
            </Typography>
            <Grid container>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={Conversation}
                  alt="Conversation"
                  style={{
                    maxWidth: "100%",
                    height: "260px",
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
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h5" sx={{ mt: 1 }}>
                  Let's get in touch and schedule a free consultation. Discuss
                  project scope, technologies, timelines and deliverables at no
                  cost to you. Feel free to use my Calendly below
                </Typography>
                <Box sx={{ textAlign: "right", width: "100%" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={(e) => {
                      if (!e.currentTarget.className.includes("calendlyBtn")) {
                        (
                          e.currentTarget.firstChild as HTMLButtonElement | null
                        )?.click();
                      }
                    }}
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
                      text="SCHEDULE NOW"
                      styles={{
                        background: "inherit",
                        border: "none",
                        font: "inherit",
                        fontSize: "inherit",
                        color: "inherit",
                        cursor: "inherit",
                      }}
                    />
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
      {/* <InlineWidget url="https://calendly.com/isaachormel" /> */}
      {/* <PopupWidget
        url="https://calendly.com/isaachormel"
        
        //  * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
        //  * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
        
        rootElement={document.getElementById("portfolio") as HTMLDivElement}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#00a2ff"
      /> */}
    </>
  );
};
export default ConsultationsPromotional;
