import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

import figmaLogo from "../assets/figmaLogo.svg";
import designPenPencil from "../assets/designPenPencil.svg";

const DesignsPromotional = () => {
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
            Designs with{" "}
            <span style={{ display: "inline-block" }}>
              <img src={figmaLogo} style={{ height: "60px" }} />
              igma
            </span>
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
                src={designPenPencil}
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
              }}
            >
              <Typography variant="h5">
                Request demos, mockups and illustrations from me at your
                leisure. Add designs to tickets to make it obvious how
                components should look and perform.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};
export default DesignsPromotional;
