import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

import ideaMachine from "../assets/ideaMachine.svg";

const BringYourIdeasToLife = () => {
  const theme = useTheme();
  const mdDownMediaQuery = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container sx={{ my: 2 }}>
      <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
        <img
          src={ideaMachine}
          style={{ maxWidth: mdDownMediaQuery ? "50vw" : "35vw" }}
        />
      </Grid>
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
        <Typography variant="h3">Bring your ideas to life</Typography>
        <Typography>
          Schedule a consultation and discuss the best plan of action for
          bringing your idea to the online world. Work will start immediatly
          after we have a contract and a design. You can expect speedy delivery
          with lots of updates in between.
          {/* Schedule a consultation and discuss the best plan of action for
          bringing your idea to the online world. Once we have a contract and
          design, work will start on your project. You can expect a speedy
          delivery with lots of updates in between. */}
          {/* Once we've assessed your
          business's needs, we'll move into the design phase. I use Figma to
          collaborate on designs with my clients in the browser. */}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default BringYourIdeasToLife;
