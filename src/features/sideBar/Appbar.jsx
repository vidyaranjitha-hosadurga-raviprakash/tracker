import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  IconButton,
  Toolbar,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";
import {
  Logout as LogoutIcon,
  Menu as MenuIcon,
  Person as PersonIcon,
} from "@mui/icons-material";

import MuiAppBar from "@mui/material/AppBar";
import { styled, useTheme } from "@mui/material/styles";
import { ThemeToggler } from "components";
import { useAuth } from "features/authentication/context";
import { Popover } from "components";

const drawerWidth = 240;

const CustomizedAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const Appbar = ({ open, handleDrawerOpen }) => {
  const { currentUser, signout } = useAuth();
  const photoUrl = currentUser?.photoURL;
  const theme = useTheme();
  const { pathname } = useLocation();
  const [showProfilePopover, setShowProfilePopover] = useState(false);

  const handleProfilePopoverOpen = (event) => {
    setShowProfilePopover(event.currentTarget);
  };

  const handleProfilePopoverClose = () => {
    setShowProfilePopover(null);
  };
  return (
    <CustomizedAppBar
      position="fixed"
      sx={{
        width: {
          xs: "100%",
          md: open ? `calc(100% - ${drawerWidth}px)` : "100%",
        },
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: theme.palette.background.default,
        color: "inherit",
      }}
      open={open}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          sx={{ textTransform: "capitalize" }}
          variant="h6"
          noWrap
          component="div"
        >
          {pathname.split("/")[1]}
        </Typography>
      </Toolbar>
      <Popover
        showPopOver={showProfilePopover}
        setShowPopOver={setShowProfilePopover}
        handlePopoverClose={handleProfilePopoverClose}
        anchorPosition={{ top: 100, left: 1000 }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{ padding: "2rem 2rem" }}
      >
        <Stack
          direction="column"
          spacing={2}
          sx={{
            alignItems: "baseline",
            padding: "2rem 2rem",
            border: "0.1rem solid #fff",
          }}
        >
          <Typography variant="subtitle1">Name: {currentUser?.name}</Typography>
          <Typography variant="subtitle1">
            Email: {currentUser?.email}
          </Typography>
        </Stack>
      </Popover>

      <Box sx={{ marginRight: "1rem" }}>
        <Stack direction="row" spacing={0.5}>
          <ThemeToggler />
          <IconButton
            onMouseEnter={handleProfilePopoverOpen}
            onMouseLeave={handleProfilePopoverClose}
          >
            {photoUrl ? (
              <Avatar alt="user image" src={photoUrl} />
            ) : (
              <PersonIcon fontSize="medium" />
            )}
          </IconButton>
          <IconButton
            onClick={() => {
              signout();
            }}
          >
            <LogoutIcon fontSize="medium" />
          </IconButton>
        </Stack>
      </Box>
    </CustomizedAppBar>
  );
};
