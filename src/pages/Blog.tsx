import React from "react";
import { Box, Container, keyframes } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

interface postProps {
  description: string;
  image: string;
  imageText: string;
  linkText: string;
  title: string;
}

const bgImage = keyframes`
  0% {
    -webkit-transform: scale(1) translate(0, 0);
            transform: scale(1) translate(0, 0);
    -webkit-transform-origin: 84% 16%;
            transform-origin: 84% 16%;
  }
  100% {
    -webkit-transform: scale(1.25) translate(20px, -15px);
            transform: scale(1.25) translate(20px, -15px);
    -webkit-transform-origin: right top;
            transform-origin: right top;
  }
`;

const post: postProps = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
  linkText: "Continue reading…"
};

export const Blog = () => {
  return (
    <Container id="#blog" maxWidth="lg" sx={{ pt: 2, pb: 6 }}>
      <Paper
        sx={{
          mt: 3,
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${post.image})`
          // "&:hover": {
          //   animation: `${bgImage} 0.6s both`
          // }
        }}
      >
        {/* Increase the priority of the hero background image */}
        {
          <img
            style={{ display: "none" }}
            src={post.image}
            alt={post.imageText}
          />
        }
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)"
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 }
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                {post.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {post.description}
              </Typography>
              <Link variant="subtitle1" href="#">
                {post.linkText}
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
