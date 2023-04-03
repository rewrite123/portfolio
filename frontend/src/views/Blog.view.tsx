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
import useMediaQuery from "@mui/material/useMediaQuery";

import Nav from "../components/Nav.comp";
import Headline from "../components/Headline.comp";
import Footer from "../components/Footer.comp";

import blogs from "../blogs";

const Blog = () => {
  return (
    <>
      <Nav />
      <Container sx={{ minHeight: "calc(100vh - 300px)" }}>
        <Headline />
        {blogs.map((blog, blogIndex) => {
          return (
            <Card key={blogIndex} sx={{ width: "100%", mb: 2 }}>
              <CardContent>
                <Typography variant="h4">{blog.title}</Typography>
                <Typography variant="overline">{blog.date}</Typography>
                <Typography>{blog.summery}</Typography>
                <Box sx={{ textAlign: "right" }}>
                  <Button href={`/blog/${blog.id}`} size="large">
                    Read more
                  </Button>
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Container>
      <Footer />
    </>
  );
};
export default Blog;
