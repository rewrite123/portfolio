import React from "react";

import {
  Container,
  Grid,
  Box,
  Typography,
  useTheme,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  SvgIcon,
  Paper,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ParallaxBanner } from "react-scroll-parallax";
import Tilt from "react-parallax-tilt";

import LandingJumboBackground from "../assets/landingJumbo.jpg";

import back1 from "../assets/ubuntuLogo.png";
import back2 from "../assets/githubLogo.png";
import back3 from "../assets/awsLogo.png";
import back4 from "../assets/herokuLogo.svg";
import back5 from "../assets/nodeLogo.png";
import back6 from "../assets/dockerLogo.webp";
import back7 from "../assets/expressLogo.png";
import back8 from "../assets/mysqlLogo.png";
import back9 from "../assets/postgresLogo.png";
import back10 from "../assets/elasticsearchLogo.svg";

import front1 from "../assets/jsLogo.png";
import front2 from "../assets/tsLogo.png";
import front3 from "../assets/reactLogo.png";
import front4 from "../assets/webpackLogo.png";
import front5 from "../assets/materialuiLogo.svg";
import front6 from "../assets/bootstrapLogo.svg";
import front7 from "../assets/gmapsLogo.png";
import front8 from "../assets/html5Logo.svg";
import front9 from "../assets/cssLogo.png";
import front10 from "../assets/sassLogo.png";
import front11 from "../assets/eslintLogo.svg";

import figmaLogo from "../assets/figmaLogo.svg";

import designBackground from "../assets/designBackground.jpg";

import hobbiesBackground from "../assets/hobbiesBackground.jpg";

import hobby1 from "../assets/rustLogo.svg";
import hobby2 from "../assets/yewLogo.png";
import hobby3 from "../assets/microcontrollerHobby.png";
import hobby4 from "../assets/cybersecurityHobby.png";
import hobby5 from "../assets/aiHobby.png";
import hobby6 from "../assets/linuxHobby.png";
import hobby7 from "../assets/decentralizedHobby.webp";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Nav from "../components/Nav.comp";
import Headline from "../components/Headline.comp";
import Jumbotron from "../components/Jumbotron.comp";
import AboutMeSummery from "../components/AboutMeSummery.comp";
import Technologies from "../components/Technologies.comp";
import Designs from "../components/Designs.comp";
import Hobbies from "../components/Hobbies.comp";
import Footer from "../components/Footer.comp";

const About = () => {
  const theme = useTheme();
  const smUpMediaQuery = useMediaQuery(theme.breakpoints.up("sm"));
  const mdUpMediaQuery = useMediaQuery(theme.breakpoints.up("md"));
  const lgUpMediaQuery = useMediaQuery(theme.breakpoints.up("lg"));
  const xlUpMediaQuery = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <>
      <Nav />
      <Container>
        <Headline />
        <AboutMeSummery />
        <Technologies />
        <Designs />
        <Hobbies />
      </Container>
      <Footer />
    </>
  );
};
export default About;
