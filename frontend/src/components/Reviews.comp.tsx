import {
  Box,
  Card,
  CardContent,
  Rating,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

const Reviews = () => {
  const theme = useTheme();
  const smDownMediaQuery = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDownMediaQuery = useMediaQuery(theme.breakpoints.down("md"));

  const reviews = [
    {
      stars: 5,
      name: "Rob",
      review: "Pleasure to work with! Very knowledgable",
    },
    {
      stars: 5,
      name: "Clayton",
      review: "Very professional and completed his task in a timely manner.",
    },
    {
      stars: 5,
      name: "Chip",
      review:
        "Awesome work on my site. I highly recomend him for all my custom coding jobs!",
    },
    {
      stars: 4,
      name: "Jada",
      review: "Enjoyed working with him. Responsive and helpful.",
    },
    {
      stars: 4,
      name: "Isabella",
      review:
        "He is very organized and thoughtful throughout the process. I was satisfied with his work.",
    },
    {
      stars: 3.5,
      name: "Kris",
      review:
        "Ended up doing really well on our project despite a rough start.",
    },
  ];

  return (
    <Box sx={{ my: 3 }}>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        See what customers are saying about my work
      </Typography>
      <Carousel
        autoPlay={true}
        // navButtonsAlwaysInvisible={true}
        animation="slide"
        // indicators={false}
        sx={{ width: "100%" }}
      >
        {reviews.map((review, reviewIndex) => {
          return (
            <Box
              key={reviewIndex}
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                flexDirection: "column",
                minHeight: "180px",
              }}
            >
              <Card
                sx={{
                  minHeight: smDownMediaQuery
                    ? "250px"
                    : mdDownMediaQuery
                    ? "150px"
                    : "150px",
                  width: "90%",
                }}
              >
                <CardContent>
                  <Typography variant="h4">{review.name}</Typography>
                  <Rating
                    name="read-only"
                    size="large"
                    value={review.stars}
                    precision={0.5}
                    readOnly
                  />
                  <Typography variant="h6">{review.review}</Typography>
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </Carousel>
    </Box>
  );
};
export default Reviews;
