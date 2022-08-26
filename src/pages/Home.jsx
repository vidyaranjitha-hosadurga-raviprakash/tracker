import React, { lazy, Suspense } from "react";
import { Container, Typography, Stack, Divider } from "@mui/material";
import { useAuth } from "features/authentication/context";
import { Subscribe } from "features/";
import { getTodaysDate } from "utils/dateTimeCalculation";
import { greetUser } from "utils/generalOperation";
import { pageContainer, flexCenterColumn } from "utils/styles";
import { Loader } from "components/";

const Tasks = lazy(() => import("features/tasks/components/Tasks"));

export const Home = () => {
  const { currentUser } = useAuth();

  return (
    <Container sx={{ ...pageContainer, ...flexCenterColumn }}>
      <Stack spacing={2} direction="column">
        <Typography gutterBottom align="center" variant="body1">
          {getTodaysDate}
        </Typography>
        <Typography
          gutterBottom
          component="h2"
          align="center"
          variant="h5"
          sx={{ fontWeight: "550" }}
        >
          {greetUser(currentUser?.name)}
        </Typography>
        <Divider variant="middle" />
        <Suspense fallback={<Loader />}>
          <Tasks />
        </Suspense>
        <Subscribe />
      </Stack>
    </Container>
  );
};
