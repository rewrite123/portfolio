import { lazy, Suspense } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SiteLayout from "./components/SiteChrome";

const Landing = lazy(() => import("./views/Landing.view"));
const About = lazy(() => import("./views/About.view"));
const Portfolio = lazy(() => import("./views/Portfolio.view"));
const Contact = lazy(() => import("./views/Contact.view"));
const Philosophy = lazy(() => import("./views/Philosophy.view"));
const Blog = lazy(() => import("./views/Blog.view"));
const BlogPage = lazy(() => import("./views/BlogPage.view"));
const NotFound = lazy(() => import("./views/NotFound.view"));

const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/about", element: <About /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/contact", element: <Contact /> },
      { path: "/philosophy", element: <Philosophy /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:blogId", element: <BlogPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#b7ff3c" },
    secondary: { main: "#ffd84d" },
    background: { default: "#111311", paper: "#1b1e1b" },
    text: { primary: "#f0f3ed", secondary: "#a7aea5" },
  },
  typography: {
    fontFamily: '"Space Grotesk", sans-serif',
    button: { textTransform: "none", fontWeight: 600 },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HelmetProvider>
        <Suspense fallback={<div className="route-loading" aria-label="Loading page" />}>
          <RouterProvider router={router} />
        </Suspense>
      </HelmetProvider>
    </ThemeProvider>
  );
}
