import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import Nav from "../components/Nav.comp";
import Headline from "../components/Headline.comp";
import Footer from "../components/Footer.comp";

import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import LaunchIcon from "@mui/icons-material/Launch";
import thrivsportsEx from "../assets/thrivsportsEx.png";
import batrxEx from "../assets/batrxEx.png";

const Portfolio = () => {
  return (
    <>
      <Nav />
      <Container>
        {/* <Headline /> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "30px",
            my: 4,
          }}
        >
          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Box>
                <Typography variant="h4">ThrivSports</Typography>
                <Typography variant="overline">
                  SR. FULLSTACK DEVELOPER & PROJECT LEAD
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img
                  src={thrivsportsEx}
                  alt="ThrivSports"
                  style={{
                    maxHeight: "40vh",
                    maxWidth: "100%",
                  }}
                />
              </Box>
              <Box>
                <List dense>
                  <ListItem>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText
                      primary="API development"
                      primaryTypographyProps={{ variant: "h6" }}
                      secondary="Architected modern alternative to PHP APIs in TypeScript with
                      ExpressJS with Docker to serve coaches and company partners
                      vital data to their business."
                      secondaryTypographyProps={{ variant: "body1" }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText
                      primary="React CRM Applet"
                      primaryTypographyProps={{ variant: "h6" }}
                      secondary="Built out a CRM portal for coaches and coach managers in React, including many key metrics and KPIs that prooved helpful to
                      increasing coach sales."
                      secondaryTypographyProps={{ variant: "body1" }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText
                      primary="React Coach Applets"
                      primaryTypographyProps={{ variant: "h6" }}
                      secondary="Lead the coach booking applet and profile applet. React applets showcasing services coaches offer and their availabilities that are open for pur-
                      chase and coach profile information."
                      secondaryTypographyProps={{ variant: "body1" }}
                    />
                  </ListItem>
                </List>
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Box>
                <Typography variant="h4">BatRX</Typography>
                <Typography variant="overline">
                  LEAD FRONTEND DEVELOPER
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img
                  src={batrxEx}
                  alt="BatRX"
                  style={{
                    maxHeight: "40vh",
                    maxWidth: "100%",
                  }}
                />
              </Box>
              <Box>
                <List dense>
                  <ListItem>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText
                      primary="React SPA"
                      primaryTypographyProps={{ variant: "h6" }}
                      secondary="Frontend developer responsible for creating a React SPA for data entry and submission with the ability to see and sort data with
                      chartJS."
                      secondaryTypographyProps={{ variant: "body1" }}
                    />
                  </ListItem>
                </List>
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Box>
                <Typography variant="h4">UtopiaCompression</Typography>
                <Typography variant="overline">ELECTRON DEVELOPER</Typography>
              </Box>
              <Box>
                <List dense>
                  <ListItem>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText
                      primary="React SPA & Electron App"
                      primaryTypographyProps={{ variant: "h6" }}
                      secondary="Created an Electron App using React as a Navy Interface Development Consultant"
                      secondaryTypographyProps={{ variant: "body1" }}
                    />
                  </ListItem>
                </List>
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Box>
                <Typography variant="h4">Portland Web Design</Typography>
                <Typography variant="overline">Frontend Developer</Typography>
              </Box>
              <Box>
                <List dense>
                  <ListItem>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText
                      primary="Angular"
                      primaryTypographyProps={{ variant: "h6" }}
                      secondary="Worked as part of the team responsible for creating an maintaining inventory software for a large client."
                      secondaryTypographyProps={{ variant: "body1" }}
                    />
                  </ListItem>
                </List>
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Box>
                <Typography variant="h4">Assorted Freelance work</Typography>
                <Typography variant="overline">
                  FULLSTACK, MOBILE, WEB DESIGN
                </Typography>
              </Box>
              <Box>
                <List dense>
                  <ListItem>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText
                      primary="React Native & API"
                      primaryTypographyProps={{ variant: "h6" }}
                      secondary="As lead developer for SportsVet, I created all APIs, design files, and mobile React Native views for a short two month project."
                      secondaryTypographyProps={{ variant: "body1" }}
                    />
                  </ListItem>
                </List>
                <List dense>
                  <ListItem>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText
                      primary="Software Consultant"
                      primaryTypographyProps={{ variant: "h6" }}
                      secondary="Consulted on software implementations and requirements for a device that collected data in the field and on job sights to provide
                      key metrics to businesses that needed them."
                      secondaryTypographyProps={{ variant: "body1" }}
                    />
                  </ListItem>
                </List>
                <List dense>
                  <ListItem>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText
                      primary="Wordpress"
                      primaryTypographyProps={{ variant: "h6" }}
                      secondary="Assisted in management of Wordpress websites for a client who had recently aquired a batch of sites without a site manager or
                      developer with prior experience."
                      secondaryTypographyProps={{ variant: "body1" }}
                    />
                  </ListItem>
                </List>
                <List dense>
                  <ListItem>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText
                      primary="Software Consultant"
                      primaryTypographyProps={{ variant: "h6" }}
                      secondary="Worked with Flask developer who needed assistance with data collection and view management for his business."
                      secondaryTypographyProps={{ variant: "body1" }}
                    />
                  </ListItem>
                </List>
                <List dense>
                  <ListItem>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText
                      primary="Wordpress"
                      primaryTypographyProps={{ variant: "h6" }}
                      secondary="Utilizing Figma, I have created a variety of designs for web and mobile apps for clients, especially on startups which have little
                      creative direction or idea what they want from their UI."
                      secondaryTypographyProps={{ variant: "body1" }}
                    />
                  </ListItem>
                </List>
                <Box sx={{ textAlign: "center" }}>
                  <Button
                    variant="contained"
                    color="success"
                    href="https://www.upwork.com/freelancers/~012942aabda8889dd5"
                    target="_blank"
                  >
                    Check me out on Upwork <LaunchIcon />
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Box>
                <Typography variant="h4">FundLabs</Typography>
                <Typography variant="overline">FOUNDER</Typography>
              </Box>
              <Box>
                <List dense>
                  <ListItem>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText
                      primary="Fullstack"
                      primaryTypographyProps={{ variant: "h6" }}
                      secondary="Created APIs and frontend views for customers to easily set up an account and start tracking hours and generating invoices."
                      secondaryTypographyProps={{ variant: "body1" }}
                    />
                  </ListItem>
                </List>
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Box>
                <Typography variant="h4">pdfmason.com</Typography>
                <Typography variant="overline">FOUNDER</Typography>
              </Box>
              <Box>
                <List dense>
                  <ListItem>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText
                      primary="Fullstack"
                      primaryTypographyProps={{ variant: "h6" }}
                      secondary="Created APIs and frontend views for users to easily convert and merge files to pdfs."
                      secondaryTypographyProps={{ variant: "body1" }}
                    />
                  </ListItem>
                </List>
              </Box>
            </CardContent>
          </Card>
          <Button
            variant="contained"
            href="/Resume.pdf"
            target="_blank"
            size="large"
            sx={{ width: "100%", p: 2 }}
          >
            Check out my Resume <PictureAsPdfIcon sx={{ ml: "3px" }} />
          </Button>
        </Box>
      </Container>
      <Footer />
    </>
  );
};
export default Portfolio;
