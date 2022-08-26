import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Grid,
  Avatar,
  TextField,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LandingPageBg, useAuth } from "features";
import { routesPath } from "data/Constants";
import { pageContainer } from "utils/styles/";

export const SignIn = () => {
  const { signin, signinWithGoogle } = useAuth();

  const signInFields = [
    {
      id: "email",
      label: "Email Address",
      type: "email",
      autoComplete: "email",
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      autoComplete: "password",
    },
  ];

  var signInFieldsRef = useRef({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "SignIn:  handleSubmit :: signInFieldsRef = ",
      signInFieldsRef.current
    );
    signin(signInFieldsRef.current);
  };

  return (
    <Container maxWidth={false} disableGutters>
      <Grid
        container
        component="main"
        sx={{ ...pageContainer, minHeight: "100vh" }}
        justifyContent="space-evenly"
      >
        <LandingPageBg />
        <Grid
          container
          alignItems="center"
          item
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
              Sign in
            </Typography>
            <form onSubmit={handleSubmit}>
              <Box sx={{ mt: 1 }}>
                {signInFields.map((field, index) => {
                  return (
                    <TextField
                      key={index}
                      margin={"normal"}
                      required
                      fullWidth
                      id={field.id}
                      label={field.label}
                      type={field.type}
                      autoComplete={field.autoComplete}
                      autoFocus
                      onChange={(e) =>
                        (signInFieldsRef.current[field.id] = e.target.value)
                      }
                    />
                  );
                })}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 1 }}
                  color="primary"
                >
                  Sign In
                </Button>
                <Button
                  startIcon={<GoogleIcon />}
                  onClick={signinWithGoogle}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 1, mb: 2 }}
                  color="primary"
                >
                  Sign In with Google account
                </Button>
                <Link
                  to={routesPath.SIGNUP_PAGE}
                  variant="body2"
                  style={{ color: "inherit" }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
