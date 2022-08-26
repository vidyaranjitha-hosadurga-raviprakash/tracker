import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { pageContainer } from "utils/styles/";
import pageNotFoundImage from "assets/image/pageNotFound.svg";

export const PageNotFound = () => {
  return (
    <Container
      sx={{
        ...pageContainer,
      }}
    >
      <Box sx={{ width: "30rem" }}>
        <img src={pageNotFoundImage} alt="page not found" />
      </Box>
      <Typography variant="h3">Oops! Page not found</Typography>
    </Container>
  );
};
