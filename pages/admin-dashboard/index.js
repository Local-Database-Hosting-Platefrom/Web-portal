import * as React from "react";
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NavbarWraper from "../../ReactComponents/HomePage-Navbar/NavbarWraper";

import Statistics from "../../ReactComponents/Admin-dashboard-screens/Statistics";
import ManageBridge from "../../ReactComponents/Admin-dashboard-screens/ManageBridge";
import ManageHosts from "../../ReactComponents/Admin-dashboard-screens/ManageHosts";
import ServicePlans from "../../ReactComponents/Admin-dashboard-screens/ServicePlans";
import Settings from "../../ReactComponents/Admin-dashboard-screens/Settings";
import Help from "../../ReactComponents/Admin-dashboard-screens/Help";
import ManageConsumers from "../../ReactComponents/Admin-dashboard-screens/ManageConsumers";

const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  marginTop: "5%",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginTop: "5%",
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  // marginTop:"10%",
  // overflowX: 'hidden',
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Index = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [currentOpenedScreen, setCurrentOpenedScreen] = useState(
    <Statistics />
  );

  const handleScreenChange = (index) => {
    switch (index) {
      case 0:
        // Statistics
        setCurrentOpenedScreen(<Statistics />);
        break;
      case 1:
        // Manage Consumers
        setCurrentOpenedScreen(<ManageConsumers />);
        break;
      case 2:
        // Manage Bridge
        setCurrentOpenedScreen(<ManageBridge />);
        break;
      case 3:
        // Manage Hosts
        setCurrentOpenedScreen(<ManageHosts />);
        break;
      case 4:
        // Service Pans
        setCurrentOpenedScreen(<ServicePlans />);
        break;
      case 5:
        // Settings
        setCurrentOpenedScreen(<Settings />);
        break;
      case 6:
        // Help
        setCurrentOpenedScreen(<Help />);
        break;
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen((p) => !p);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        {/* <DrawerHeader >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader> */}
        {/* <Divider /> */}

        <List>
          <ListItemButton
            key={"opener"}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            onClick={handleDrawerClose}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton
            key={"2"}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            onClick={() => {
              handleScreenChange(0);
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "80%" }}>
                <img src="/home-page/overviewIcon.png" width="50%" />
              </div>
            </ListItemIcon>
            <ListItemText
              primary={"Statistics"}
              sx={{ marginLeft: -4, opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
          <ListItemButton
            key={"2"}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            onClick={() => {
              handleScreenChange(1);
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <img src="/home-page/manage_connection_icon.png" width="50%" />
            </ListItemIcon>
            <ListItemText
              primary={"Manage Consumers"}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
          <ListItemButton
            key={"2"}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            onClick={() => {
              handleScreenChange(2);
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <img src="/home-page/connectionIcon.png" width="50%" />
            </ListItemIcon>
            <ListItemText
              primary={"Manage Bridge"}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
          <ListItemButton
            key={"2"}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            onClick={() => {
              handleScreenChange(3);
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <img src="/home-page/hostIcon.png" width="50%" />
            </ListItemIcon>
            <ListItemText
              primary={"Manage Hosts"}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
          <Divider />
          <ListItemButton
            key={"2"}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            onClick={() => {
              handleScreenChange(4);
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <img src="/home-page/plansIcon.png" width="50%" />
            </ListItemIcon>
            <ListItemText
              primary={"Service Plans"}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
          <Divider />
          <ListItemButton
            key={"2"}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            onClick={() => {
              handleScreenChange(5);
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <img src="/home-page/settingsIcon.png" width="50%" />
            </ListItemIcon>
            <ListItemText primary={"Settings"} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
          <ListItemButton
            key={"2"}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            onClick={() => {
              handleScreenChange(6);
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <img src="/home-page/helpIcon.png" width="50%" />
            </ListItemIcon>
            <ListItemText primary={"Help"} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 10 }}>
        {/* <DrawerHeader /> */}
        {currentOpenedScreen}
        {/* <HomePagefooter/> */}
      </Box>
    </Box>
  );
};

export default NavbarWraper(Index);
