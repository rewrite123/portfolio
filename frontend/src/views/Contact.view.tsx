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

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import upwork from "../assets/upwork.svg";
import EmailIcon from "@mui/icons-material/Email";

import Nav from "../components/Nav.comp";
import Headline from "../components/Headline.comp";
import Footer from "../components/Footer.comp";

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
                        <img src={upwork} style={{ height: "50px" }} />
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
