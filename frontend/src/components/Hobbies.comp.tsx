import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import hobby1 from "../assets/rustLogo.svg";
import hobby2 from "../assets/yewLogo.png";
import hobby3 from "../assets/microcontrollerHobby.png";
import hobby4 from "../assets/cybersecurityHobby.png";
import hobby5 from "../assets/aiHobby.png";
import hobby6 from "../assets/linuxHobby.png";
import hobby7 from "../assets/decentralizedHobby.webp";

const Hobbies = () => {
  const theme = useTheme();
  const smUpMediaQuery = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Card sx={{ my: 3 }}>
      <CardContent>
        <Typography variant="h3">Hobbies & future professions</Typography>
        <Grid container>
          <Grid item sm={12} md={6}>
            <List dense>
              <ListItem sx={!smUpMediaQuery ? { maxWidth: "85vw", p: 0 } : {}}>
                <ListItemIcon>
                  <Box
                    sx={{
                      width: "65px",
                      height: "65px",
                      padding: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={hobby1}
                      alt="Rust"
                      className="ih-land-hobbies-icon"
                    />
                  </Box>
                </ListItemIcon>
                <ListItemText
                  primary="Rust"
                  primaryTypographyProps={{
                    variant: smUpMediaQuery ? "h4" : "h6",
                  }}
                  secondary="Rust web and IOT projects"
                  secondaryTypographyProps={{
                    variant: smUpMediaQuery ? "h6" : "body1",
                  }}
                />
              </ListItem>
              <ListItem sx={!smUpMediaQuery ? { maxWidth: "85vw", p: 0 } : {}}>
                <ListItemIcon>
                  <Box
                    sx={{
                      width: "65px",
                      height: "65px",
                      padding: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={hobby2}
                      alt="Yew"
                      className="ih-land-hobbies-icon"
                    />
                  </Box>
                </ListItemIcon>
                <ListItemText
                  primary="Yew"
                  primaryTypographyProps={{
                    variant: smUpMediaQuery ? "h4" : "h6",
                  }}
                  secondary="Yew for frontend applications in Rust"
                  secondaryTypographyProps={{
                    variant: smUpMediaQuery ? "h6" : "body1",
                  }}
                />
              </ListItem>
              <ListItem sx={!smUpMediaQuery ? { maxWidth: "85vw", p: 0 } : {}}>
                <ListItemIcon>
                  <Box
                    sx={{
                      width: "65px",
                      height: "65px",
                      padding: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={hobby3}
                      alt="Microcontroller"
                      className="ih-land-hobbies-icon"
                    />
                  </Box>
                </ListItemIcon>
                <ListItemText
                  primary="Microcontrollers"
                  primaryTypographyProps={{
                    variant: smUpMediaQuery ? "h4" : "h6",
                  }}
                  secondary="Microcontrollers like the ESP32 or anything made by ATMEL"
                  secondaryTypographyProps={{
                    variant: smUpMediaQuery ? "h6" : "body1",
                  }}
                />
              </ListItem>
              <ListItem sx={!smUpMediaQuery ? { maxWidth: "85vw", p: 0 } : {}}>
                <ListItemIcon>
                  <Box
                    sx={{
                      width: "65px",
                      height: "65px",
                      padding: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={hobby4}
                      alt="Hackerman"
                      className="ih-land-hobbies-icon"
                    />
                  </Box>
                </ListItemIcon>
                <ListItemText
                  primary="Cyber Security"
                  primaryTypographyProps={{
                    variant: smUpMediaQuery ? "h4" : "h6",
                  }}
                  secondary="Who is notorious hackerman 4chan?"
                  secondaryTypographyProps={{
                    variant: smUpMediaQuery ? "h6" : "body1",
                    component: "a",
                    href: "https://www.youtube.com/watch?v=qz5i171h_no",
                    style: { textDecoration: "none" },
                    target: "_blank",
                  }}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item sm={12} md={6}>
            <List dense>
              <ListItem sx={!smUpMediaQuery ? { maxWidth: "85vw", p: 0 } : {}}>
                <ListItemIcon>
                  <Box
                    sx={{
                      width: "65px",
                      height: "65px",
                      padding: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={hobby5}
                      alt="AI"
                      className="ih-land-hobbies-icon"
                    />
                  </Box>
                </ListItemIcon>
                <ListItemText
                  primary="AI & Neural Networks"
                  primaryTypographyProps={{
                    variant: smUpMediaQuery ? "h4" : "h6",
                  }}
                  secondary="Designing, training, and learning about Neural Networks"
                  secondaryTypographyProps={{
                    variant: smUpMediaQuery ? "h6" : "body1",
                  }}
                />
              </ListItem>
              <ListItem sx={!smUpMediaQuery ? { maxWidth: "85vw", p: 0 } : {}}>
                <ListItemIcon>
                  <Box
                    sx={{
                      width: "65px",
                      height: "65px",
                      padding: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={hobby6}
                      alt="Linux"
                      className="ih-land-hobbies-icon"
                    />
                  </Box>
                </ListItemIcon>
                <ListItemText
                  primary="Linux"
                  primaryTypographyProps={{
                    variant: smUpMediaQuery ? "h4" : "h6",
                  }}
                  secondary="I love Linux, especially Ubuntu ;)"
                  secondaryTypographyProps={{
                    variant: smUpMediaQuery ? "h6" : "body1",
                  }}
                />
              </ListItem>
              <ListItem sx={!smUpMediaQuery ? { maxWidth: "85vw", p: 0 } : {}}>
                <ListItemIcon>
                  <Box
                    sx={{
                      width: "65px",
                      height: "65px",
                      padding: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={hobby7}
                      alt="Web3"
                      className="ih-land-hobbies-icon"
                    />
                  </Box>
                </ListItemIcon>
                <ListItemText
                  primary="Web3"
                  primaryTypographyProps={{
                    variant: smUpMediaQuery ? "h4" : "h6",
                  }}
                  secondary="Wouldn't it be cool to write services that can manage themselves that aren't controlled by tech oligarchs?"
                  secondaryTypographyProps={{
                    variant: smUpMediaQuery ? "h6" : "body1",
                  }}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default Hobbies;
