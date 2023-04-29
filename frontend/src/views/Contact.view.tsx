import React, { useState } from "react";

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
  CardContent,
  Card,
  Modal,
} from "@mui/material";

import CalendarMonth from "@mui/icons-material/CalendarMonth";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import upwork from "../assets/upwork.svg";
import EmailIcon from "@mui/icons-material/Email";

import Nav from "../components/Nav.comp";
import Headline from "../components/Headline.comp";
import Footer from "../components/Footer.comp";
import { PopupButton } from "react-calendly";

const Contact = () => {
  const [emailOpenModal, setEmailOpenModal] = useState<boolean>(false);

  return (
    <>
      <Nav />
      <Container sx={{ minHeight: "calc(100vh - 300px)" }}>
        <Headline />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            my: 3,
          }}
        >
          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Typography variant="h3">Let's get in touch</Typography>
                <Button
                  variant="contained"
                  onClick={(e) => {
                    if (!e.currentTarget.className.includes("calendlyBtn")) {
                      (
                        e.currentTarget.firstChild as HTMLButtonElement | null
                      )?.click();
                    }
                  }}
                  sx={{
                    gap: "3px",
                    width: "250px",
                    display: "flex",
                    flexDirection: "row-reverse",
                    fontSize: "1.5rem",
                  }}
                >
                  <PopupButton
                    className="calendlyBtn"
                    url="https://calendly.com/isaachormel"
                    /*
                     * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                     * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                     */
                    rootElement={
                      document.getElementById("portfolio") as HTMLDivElement
                    }
                    text="CALENDLY"
                    styles={{
                      background: "inherit",
                      border: "none",
                      font: "inherit",
                      fontSize: "inherit",
                      color: "inherit",
                      cursor: "inherit",
                      margin: 0,
                      padding: 0,
                    }}
                  />
                  <CalendarMonth fontSize="inherit" sx={{ fontSize: "50px" }} />
                </Button>
                <Button
                  href="https://github.com/rewrite123"
                  target="_blank"
                  variant="contained"
                  color="inherit"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "3px",
                    width: "250px",
                    color: "black",
                  }}
                >
                  <GitHubIcon fontSize="inherit" sx={{ fontSize: "50px" }} />
                  <Typography variant="h5">Github</Typography>
                </Button>
                <Button
                  href="https://www.linkedin.com/in/isaac-hormel/"
                  target="_blank"
                  variant="contained"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "3px",
                    width: "250px",
                  }}
                >
                  <LinkedInIcon fontSize="inherit" sx={{ fontSize: "50px" }} />
                  <Typography variant="h5">LinkedIn</Typography>
                </Button>
                <Button
                  href="https://www.upwork.com/freelancers/~012942aabda8889dd5"
                  target="_blank"
                  color="success"
                  variant="contained"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "3px",
                    width: "250px",
                  }}
                >
                  <Box sx={{ display: "flex", mr: 1 }}>
                    <SvgIcon
                      component={() => (
                        <img
                          src={upwork}
                          alt="Upwork"
                          style={{ height: "50px" }}
                        />
                      )}
                    />
                  </Box>
                </Button>
                <Button
                  onClick={() => {
                    setEmailOpenModal(true);
                  }}
                  color="secondary"
                  variant="contained"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "3px",
                    width: "250px",
                  }}
                >
                  <EmailIcon fontSize="inherit" sx={{ fontSize: "50px" }} />
                  <Typography variant="h5">Email</Typography>
                </Button>
                <Modal
                  open={emailOpenModal}
                  onClose={() => {
                    setEmailOpenModal(false);
                  }}
                >
                  <Card
                    sx={{
                      position: "absolute" as "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h3">Email:</Typography>
                      <Typography variant="h5">
                        Send me an email @ this address and I will get back to
                        you as soon as possible
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ p: 3 }}
                        onClick={() => {
                          // copy("caasilemroh@gmail.com");
                        }}
                      >
                        caasilemroh@gmail.com
                      </Typography>
                      {/* <Typography variant="overline">
                        {value.value ?? "copied to clipboard"}
                      </Typography> */}
                    </CardContent>
                  </Card>
                </Modal>
              </Box>
              <Typography></Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
      <Footer />
    </>
  );
};
export default Contact;
