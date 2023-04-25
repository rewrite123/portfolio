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

import Conversation from "../assets/Conversation.svg";

const ConsultationsPromotional = () => {
  const theme = useTheme();
  const smDownMediaQuery = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDownMediaQuery = useMediaQuery(theme.breakpoints.down("md"));

  return (
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
                cost to you.
              </Typography>
              <Box sx={{ textAlign: "right", width: "100%" }}>
                <Button
                  href="mailto:caasilemroh@gmail.com?subject=I%20want%20to%20schedule%20a%20consultation%20with%20you&body=Let's%20set%20up%20a%20time%20to%20get%20in%20touch%20and%20talk%20about%your%20business%20needs."
                  // target="_blank"
                  // rel="noopener noreferrer"
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{ mt: 1, fontWeight: "bold" }}
                >
                  Schedule now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};
export default ConsultationsPromotional;
