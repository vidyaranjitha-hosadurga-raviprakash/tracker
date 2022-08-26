import React from "react";

import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { indigo } from "@mui/material/colors";

import { flexCenter, pageContainer } from "utils/styles";
import { useAuth } from "features/authentication/context";
export const UserProfile = () => {
  const { currentUser, signout } = useAuth();
  const { name, email, photoURL } = currentUser;
  return (
    <div>
      <Container sx={{ ...pageContainer }}>
        <Box
          sx={{
            margin: "auto",
            ...flexCenter,
          }}
        >
          <Stack spacing={3} sx={{ alignItems: "flex-start", padding: "1rem" }}>
            <Avatar
              sx={{
                width: "5rem",
                height: "5rem",
                bgcolor: indigo[300],
                alignSelf: "center",
              }}
              alt="User Profile image"
              src={photoURL}
            />

            <Stack direction="row" spacing={5} sx={{ alignItems: "baseline" }}>
              <Typography variant="subtitle1">Name: {name}</Typography>
            </Stack>
            <Stack direction="row" spacing={5} sx={{ alignItems: "baseline" }}>
              <Typography variant="subtitle1">Email: {email}</Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={5}
              sx={{
                alignItems: "baseline",
                width: "100%",
                justifyContent: "space-between",
                paddingTop: "4rem",
              }}
            >
              <Button onClick={signout} variant="contained" color="error">
                Logout
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </div>
  );
};
