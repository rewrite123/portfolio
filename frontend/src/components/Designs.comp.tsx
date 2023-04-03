import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";

import LaunchIcon from "@mui/icons-material/Launch";
import figmaLogo from "../assets/figmaLogo.svg";

const Designs = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Designs with{" "}
            <span style={{ display: "inline-block" }}>
              <img src={figmaLogo} style={{ height: "60px" }} />
              igma
            </span>
          </Typography>
          <Typography>
            Recieve rich designs for websites and apps. Collaborate, design, or
            brainstorm your ideas on any device. Request demos, mockups and
            illustrations from me at your leisure. Add designs to tickets or
            feature requests to make it obvious what they should look like and
            how they should perform.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "end", mt: 2 }}>
            <Button
              variant="contained"
              href="https://www.figma.com/proto/KbFGiHcPordv6VIYcsOMVA/Iremia"
              target="_blank"
            >
              See a mockup that got me hired <LaunchIcon />
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Designs;
