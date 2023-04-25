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
  Card,
  CardContent,
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
import ConsultationsPromotional from "../components/ConsultationsPromotional.comp";
import Headline from "../components/Headline.comp";
import Footer from "../components/Footer.comp";

const NotFound = () => {
  return (
    <>
      <Nav />
      <Container sx={{ minHeight: "calc(100vh - 300px)" }}>
        <Headline />
        <Card>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h1">Oops!</Typography>
            <Typography variant="h4">Looks like you're lost</Typography>
            <Button
              href="/"
              variant="contained"
              size="large"
              sx={{ fontSize: "22px", fontWeight: "black", mt: 3 }}
            >
              Go home now
            </Button>
          </CardContent>
        </Card>
      </Container>
      <Footer />
    </>
  );
};
export default NotFound;
