import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import {
  Home as HomeIcon,
  Menu as MenuOpenIcon,
  Person as ProfileIcon,
} from "@mui/icons-material/";
import { routesPath } from "data/Constants";

const drawerWidth = 240;

export const Menubar = ({ DrawerHeader, handleDrawerClose, open }) => {
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Home",
      path: routesPath.HOME_PAGE,
      icon: <HomeIcon />,
    },
    {
      name: "Profile",
      path: routesPath.PROFILE_PAGE,
      icon: <ProfileIcon />,
    },
  ];

  return (
    <>
      <Drawer
        sx={{
          width: open ? drawerWidth : 0,
          flexShrink: 0,
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
          "& .MuiDrawer-paper": {
            width: open ? drawerWidth : 0,
            boxSizing: "border-box",
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            },
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{ marginLeft: "0.5rem", fontWeight: "600" }}
          >
            Tracker
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <MenuOpenIcon />
          </IconButton>
        </DrawerHeader>
        <List>
          {menuItems.map((item, index) => {
            return (
              <ListItem button onClick={() => navigate(item.path)} key={index}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>

      {/* Botombar navigation only for xs and sm devices */}
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: { xs: "block", sm: "block", md: "none" },
          zIndex: "1",
        }}
        elevation={2}
      >
        <BottomNavigation>
          {menuItems.map((item, index) => {
            return (
              <BottomNavigationAction
                onClick={() => navigate(item.path)}
                key={index}
                icon={item.icon}
              ></BottomNavigationAction>
            );
          })}
        </BottomNavigation>
      </Paper>
    </>
  );
};
