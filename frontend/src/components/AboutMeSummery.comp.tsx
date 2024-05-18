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
              I am a software engineer with a passion for fullstack web
              development. I specialize in NodeJS and TypeScript, but I have
              worked with a variety of technologies in my career. If I haven't
              listed your tech stack under the technologies section, feel free
              to ask me as there is a good chance I have used it in the past. I
              have over five years of professional programming experience on
              many different teams. In the past, I have been a project leader,
              senior developer, graphic and UX designer to name a few of the
              roles I have fulfilled. You can expect quality APIs and
              exceptional frontends in React or Angular from a trustworthy
              developer with a proven track record like me.
            </Typography>
            <br />
            <Typography>
              I started my career like many others in software development, by
              hacking and modding games over 15 years ago. Of course that is a
              slippery slope and I quickly found myself learning how to make
              applications and websites. I have always had a passion for
              technology and I have been lucky enough to turn that passion into
              a career. I am always looking for new and exciting projects to
              work on. I especially enjoy challenging work that I can learn
              from. It's even better when I see my work impacting others in a
              positive way.
            </Typography>
            <br />
            <Typography>
              In my opinion, the best way to insure success in software is to
              have very clear and explicit communication. After all, nobody
              wants to develop a feature that isn't usefull. In order to avoid
              missunderstandings and keep on track, its best to at least write
              out feature requests and bug reports. It is even better if we can
              get a design file or screen shot to collaborate over. This way
              things stay below budget and on time with little to no hiccups
              throughout the project's development lifecycle.
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
