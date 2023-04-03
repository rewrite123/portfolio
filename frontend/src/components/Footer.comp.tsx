import React from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  SvgIcon,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import ihIcon from "../assets/ihLogo.svg";

const Footer = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{ background: theme.palette.primary.main, p: 2, color: "white" }}
      square
    >
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              height: "175px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SvgIcon component={() => <img src={ihIcon} />} />
                <Typography
                  variant="h5"
                  noWrap
                  sx={{
                    mr: 2,
                    display: "flex",
                    fontFamily: "Inter",
                    // fontWeight: 500,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  ISAAC HORMEL
                </Typography>
              </Box>
            </Box>
            <Typography sx={{ textAlign: "center" }}>&copy; 2023</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              height: "175px",
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6">Links:</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexDirection: "column",
                pl: 2,
              }}
            >
              <Typography
                variant="overline"
                component="a"
                href="/"
                sx={{ textDecoration: "none", color: "white" }}
              >
                About
              </Typography>
              <Typography
                variant="overline"
                component="a"
                href="/portfolio"
                sx={{ textDecoration: "none", color: "white" }}
              >
                Portfolio
              </Typography>
              <Typography
                variant="overline"
                component="a"
                href="/contact"
                sx={{ textDecoration: "none", color: "white" }}
              >
                Contact
              </Typography>
              <Typography
                variant="overline"
                component="a"
                href="/blog"
                sx={{ textDecoration: "none", color: "white" }}
              >
                Blog
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Card>
  );
};
export default Footer;
