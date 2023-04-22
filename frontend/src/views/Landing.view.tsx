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

import Nav from "../components/Nav.comp";
import Jumbotron from "../components/Jumbotron.comp";
import ActionableData from "../components/ActionableData.comp";
import BringYourIdeasToLife from "../components/BringYourIdeasToLife.comp";
import AllInOneDeveloper from "../components/AllInOneDeveloper.comp";
import OnBudgetAndOnTime from "../components/OnBudgetAndOnTime.comp";
import Reviews from "../components/Reviews.comp";
import DesignsPromotional from "../components/DesignsPromotional.comp";
import DeploymentPromotional from "../components/DeploymentPromotional.comp";
import Headline from "../components/Headline.comp";
import Footer from "../components/Footer.comp";

const Landing = () => {
  // const theme = useTheme();
  // const smUpMediaQuery = useMediaQuery(theme.breakpoints.up("sm"));
  // const mdUpMediaQuery = useMediaQuery(theme.breakpoints.up("md"));
  // const lgUpMediaQuery = useMediaQuery(theme.breakpoints.up("lg"));
  // const xlUpMediaQuery = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <>
      <Nav />
      <Container>
        <Jumbotron />
        <ActionableData />
        <BringYourIdeasToLife />
        <AllInOneDeveloper />
        <OnBudgetAndOnTime />
        <Reviews />
        <DesignsPromotional />
        <DeploymentPromotional />
        <Box sx={{ pt: 5 }}>
          <Headline />
        </Box>
      </Container>
      <Footer />
    </>
  );
};
export default Landing;
