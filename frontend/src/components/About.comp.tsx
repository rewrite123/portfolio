import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const About = () => {
  const theme = useTheme();
  const smUpMediaQuery = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box sx={{ my: 4 }}>
      <Accordion defaultExpanded={smUpMediaQuery}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h3">About</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ pl: 3 }}>
            <Typography>
              I am a fullstack web developer based in the Pacific North West. I
              specialize in NodeJS and TypeScript and their related
              technologies. I have close to four years of professional
              programming experience on many different teams. In the past, I
              have been a project leader, senior developer, graphic and UX
              designer to name a few of the roles I have fulfilled. You can
              expect quality Express APIs and functional frontends in React or
              Angular from a trustworthy developer with a proven track record
              like me.
            </Typography>
            <br />
            <Typography>
              I mainly do contract work, but I am also open to full-time W2
              positions. You can send me an email or find me on Upwork via my
              contact page. Keep in mind that most of my clients move away from
              Upwork as they take 20% of my hourly rate or project fee. Leaving
              Upwork allows me to charge less and make more, but I am not
              opposed to working through Upwork if you are weary of leaving
              their mediation services.
            </Typography>
            <br />
            <Typography>
              The best way to insure success from my experience is to have very
              clear and explicit communication. Nobody wants to develop a
              feature that isn't usefull. In order to avoid missunderstandings
              and keep on track its best to at least write out feature requests
              and bug reports. It is even better if we can get a design file or
              screen shot to collaborate over. This way things stay below budget
              and on time with little to no hiccups throughout the project's
              development lifecycle.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "end", mt: 2 }}>
            <Button variant="contained" href="/Resume.pdf" target="_blank">
              See more on my Resume <PictureAsPdfIcon sx={{ ml: "3px" }} />
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default About;
