import React, { useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Menubar, Appbar } from "features";
import "../App.css";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingBottom: 0,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: "97vw",
    ...(open && {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      width: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const App = () => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: "flex", height: "100vh" }}>
        <CssBaseline />
        <Menubar
          DrawerHeader={DrawerHeader}
          handleDrawerClose={handleDrawerClose}
          open={open}
        />
        <Main open={open}>
          <DrawerHeader />
          <Outlet />
        </Main>
        <Appbar open={open} handleDrawerOpen={handleDrawerOpen} />
      </Box>
    </>
  );
};
