import { Grid } from "@mui/material";

export const LandingPageBg = () => {
  return (
    <Grid
      item
      xs={12}
      sm={4}
      md={7}
      lg={7}
      sx={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};
