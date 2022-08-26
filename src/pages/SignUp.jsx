import React, { useRef } from "react";
import { Link } from "react-router-dom";

import GoogleIcon from "@mui/icons-material/Google";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import { LandingPageBg, useAuth } from "features/";
import { pageContainer } from "utils/styles/";

export const SignUp = () => {
  const { signup, signinWithGoogle } = useAuth();

  var signUpFieldsRef = useRef({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(signUpFieldsRef.current);
  };
  return (
    <Container maxWidth={false} disableGutters>
      <Grid
        container
        component="main"
        sx={{ ...pageContainer, minHeight: "100vh" }}
      >
        <LandingPageBg />
        <Grid
          container
          item
          alignItems="center"
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          sx={{ borderRadius: "0" }}
        >
          <Grid
            container
            item
            direction="column"
            alignItems="center"
            my={4}
            mx={4}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.dark" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form onSubmit={handleSubmit}>
              <Box sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Full name"
                  id="name"
                  autoFocus
                  onChange={(e) =>
                    (signUpFieldsRef.current.name = e.target.value)
                  }
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) =>
                    (signUpFieldsRef.current.email = e.target.value)
                  }
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) =>
                    (signUpFieldsRef.current.password = e.target.value)
                  }
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 1 }}
                >
                  Sign Up
                </Button>
                <Button
                  startIcon={<GoogleIcon />}
                  onClick={signinWithGoogle}
                  variant="contained"
                  color="primary"
                  sx={{ mt: 1, mb: 2 }}
                  fullWidth
                >
                  Sign In with Google account
                </Button>
                <Grid container>
                  <Grid item>
                    <Link to="/" variant="body2" style={{ color: "inherit" }}>
                      Already have an account?
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
