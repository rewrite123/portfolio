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
  Link,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {Helmet} from "react-helmet";

import Nav from "../components/Nav.comp";
import Headline from "../components/Headline.comp";
import Footer from "../components/Footer.comp";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import blogs from "../blogs";
import { useParams } from "react-router-dom";

const BlogPage = () => {
  const { blogId } = useParams();
  const blog = blogs.find((b) => {
    return b.id == blogId;
  });

  return (
    <>
      
      <Nav />
      <Container sx={{ minHeight: "calc(100vh - 300px)" }}>
        <Headline />
        <Button href="/blog" size="large">
          <ArrowBackIosIcon /> Back
        </Button>
        {blog && (
          <>
            <Helmet>
              <title>{blog.title}</title>
              <meta property="og:title" content={blog.title} />
              <meta property="og:description" content={blog.summery} />
              <meta property="og:image" content="/images/phoenixWingSquaredBlogs.png" />
            </Helmet>
            <Card sx={{ mt: 2, mb: 6 }}>
              <CardContent>
                {blog != undefined && (
                  <ReactMarkdown
                    children={blog.content}
                    components={{
                      h1: ({ node, ...props }) => (
                        <Typography variant="h4" sx={{ my: 2 }}>
                          <span {...props}></span>
                        </Typography>
                      ),
                      h2: ({ node, ...props }) => (
                        <Typography variant="h5">
                          <span {...props}></span>
                        </Typography>
                      ),
                      h3: ({ node, ...props }) => (
                        <Typography variant="h6">
                          <span {...props}></span>
                        </Typography>
                      ),
                      p: ({ node, ...props }) => (
                        <Typography sx={{ my: 2 }}>
                          <span {...props}></span>
                        </Typography>
                      ),
                      blockquote: ({ node, ...props }) => (
                        <Box
                          sx={{
                            background: "#1976d222",
                            pl: "10px",
                            fontFamily: "Times New Roman",
                          }}
                        >
                          <span {...props}></span>
                        </Box>
                      ),
                      code: ({ node, ...props }) => (
                        <Typography
                          sx={{
                            background: "#1976d222",
                            px: "2px",
                            display: "inline",
                            fontWeight: "500",
                          }}
                        >
                          <span {...props}></span>
                        </Typography>
                      ),
                      a: ({ node, ...props }) => (
                        <Link href={props.href} target="_blank">
                          <span {...props}></span>
                        </Link>
                      ),
                    }}
                    remarkPlugins={[remarkGfm]}
                  />
                )}
              </CardContent>
            </Card>
          </>
        )}
        {blog==undefined && (
          <>
            <Helmet>
              <title>Oops: Broken link</title>
              <meta property="og:title" content="No article :(" />
              <meta property="og:description" content="Looks like the link you're trying to use is broken." />
              <meta property="og:image" content="/images/phoenixWingSquaredBlogs.png" />
            </Helmet>
            <Typography variant="h2">Oops!</Typography>
            <Typography variant="h5">Looks like you're lost. Try going back to find more interesting posts.</Typography>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
};
export default BlogPage;
