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

import OpenAPIs from "../../ReactComponents/Consumer-dashboard-screens/OpenAPIs";
import GetAPIKeyScreen from "../../ReactComponents/Consumer-dashboard-screens/GetAPIKeyScreen";
import TestRemoteDatabaseAccessUrlScreen from "../../ReactComponents/Consumer-dashboard-screens/TestRemoteDatabaseAccessUrlScreen";
import TestHostAccresUrlScreen from "../../ReactComponents/Consumer-dashboard-screens/TestHostAccresUrlScreen";
import SettingsScreen from "../../ReactComponents/Consumer-dashboard-screens/SettingsScreen";
import StatisticsScreen from "../../ReactComponents/Consumer-dashboard-screens/StatisticsScreen";
import { useRouter } from "next/router";
import {
  AUTH_PAGE,
  LOAD_LIST_OF_ACTIVE_HOSTS_BY_DEVELOPER_ID,
  VERIFY_JWT_TOKEN,
} from "../../request-manager/requestUrls";
import {
  TOKEN_NOT_VERIFIED,
  TOKEN_VERIFIED,
} from "../../request-manager/responseCodes";
import dialogueTypes from "../../ReactComponents/Dialogues/dialogueTypes";
import { useEffect } from "react";
import CustomDialog from "../../ReactComponents/Dialogues/CustomDialog";
import { sendResquestToCentralAPI } from "../../request-manager/requestManager";
import AvaibleServiceProviders from "../../ReactComponents/Consumer-dashboard-screens/AvaibleServiceProviders";
import GenerateTokenScreen from "../../ReactComponents/Consumer-dashboard-screens/GenerateTokenScreen";
import openNotificationWithIcon from "../../ReactComponents/Dialogues/Notification";

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
    <StatisticsScreen />
  );

  const [listOfHosts, setListOfHosts] = useState([
    {
      key: "1",
      label: <a>1st menu item</a>,
    },
  ]);

  const navigation = useRouter();
  const [alertType, setAlertType] = useState(null);
  const [openCustomDialog, setOpenCustomDialog] = useState(false);
  const [alertMessage_CustomDialog, setAlertMessage_CustomDialog] =
    useState("");
  const [alertTitle_CustomDialog, setAlertTitle_CustomDialog] = useState("");
  const [accountType, setAccountType] = useState(null);

  // Check if it is authenticated or not?
  useEffect(() => {
    let loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser != undefined) {
      if (
        localStorage.getItem("accountType") == "developer" &&
        localStorage.getItem("isLoggedIn") == "true"
      ) {
        loggedInUser = JSON.parse(loggedInUser);
        console.log(loggedInUser);
        let token = loggedInUser.responsePayload.jwtToken;
        sendResquestToCentralAPI("POST", VERIFY_JWT_TOKEN, {
          _id: loggedInUser.responsePayload._id,
          accountType: "developer",
        }).then(
          async (response) => {
            const data = await response.json();
            console.log("after verfiying the data ", data);

            if (data.responseCode == TOKEN_VERIFIED) {
              // token verified.
              localStorage.setItem("isLoggedIn", true);
            } else if (data.responseCode == TOKEN_NOT_VERIFIED) {
              // token is not verified
              displayDialog(
                dialogueTypes.INVALID_LOGIN,
                "Something went wrong",
                data.responseMessage
              );
            }
          },
          (error) => {
            // when error in verfirication
          }
        );
      } else {
        displayDialog(
          dialogueTypes.INFO,
          "Something went wrong",
          "Please login"
        );
      }
    }
  }, []);

  const displayDialog = (dialogType, dialogTitle, dialogMessage) => {
    setAlertMessage_CustomDialog(dialogMessage);
    setAlertTitle_CustomDialog(dialogTitle);
    setAlertType(dialogType);
    handleClickOpen_CustomDialog();
  };

  const handleClickOpen_CustomDialog = () => {
    setOpenCustomDialog(true);
  };

  const handleClose_CustomDialog = () => {
    setOpenCustomDialog(false);
  };

  const handleOkEvent = (action) => {
    if (action == "re-login") {
      localStorage.setItem("isLoggedIn", false);
      navigation.push(AUTH_PAGE);
    } else if (action == null) {
      handleClose_CustomDialog();
    }
  };

  const handleNoEvent = () => {
    handleClose_CustomDialog();
  };

  const handleScreenChange = (index) => {
    switch (index) {
      case 0:
        // Profile
        setCurrentOpenedScreen(<StatisticsScreen />);
        break;
      case 1:

        // Renew token screen
        //TODO:Open get api dialoage.
        // openNotificationWithIcon("info","Please wait","Loading the allowed hosts to generate tokens.!!","bottom")
        displayDialog(
          dialogueTypes.PLEASE_WAIT,
          "Get token for LD-Url",
         "Please wait, loading your allowed hosts list..!"
        );
        const useData = JSON.parse(localStorage.getItem("loggedInUser"));
        const _id = useData.responsePayload._id;
        sendResquestToCentralAPI(
          "POST",
          LOAD_LIST_OF_ACTIVE_HOSTS_BY_DEVELOPER_ID,
          {
            developerId: _id,
          }
        ).then(
          async (success) => {
            const response = await success.json();
            let temp = [];
            console.log(" response.responsePayload", response.responsePayload);
           
            response.responsePayload.forEach((host, index) => {
                if (host.hostAcessUrl.status == true) {
                 
                  let m = {
                    key: JSON.stringify(host),
                    label: <a>{host.hostName}</a>,
                  };
                  temp.push(m);
                }
              });
         

            setListOfHosts(temp);

            setTimeout(() => {
              handleClose_CustomDialog();

              displayDialog(
                dialogueTypes.GET_TOKEN,
                "Get token for LD-Url",
               temp
              );  
            }, 3000);

            
          },
          (error) => {
            console.log("Error", error);
            //TODO:add notification
            openNotificationWithIcon("error","Server sent error",JSON.stringify(error));
          }
        );
        // setCurrentOpenedScreen(<GenerateTokenScreen />);
        break;
      case 2:
        setCurrentOpenedScreen(<AvaibleServiceProviders />);
        break;
      case 3:
        displayDialog(
          dialogueTypes.GENERATE_AND_UPDATE_API_KEY,
          "Manage API Keys",
          null
        );
        // setCurrentOpenedScreen(<GetAPIKeyScreen />);

        break;
      case 4:
        // Test Token
        setCurrentOpenedScreen(<OpenAPIs />);
        break;
      case 5:
        // Test Host Access Url
        setCurrentOpenedScreen(<TestHostAccresUrlScreen />);
        break;
      case 6:
        // TestRemoteDatabaseAccessUrlScreen
        setCurrentOpenedScreen(<TestRemoteDatabaseAccessUrlScreen />);
        break;
      case 7:
        // Settings
        setCurrentOpenedScreen(<SettingsScreen />);
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
              <img src="/statistics.png" width="40" height="40" />
            </ListItemIcon>
            <ListItemText
              primary={"Statistics"}
              sx={{ marginLeft: 0, opacity: open ? 1 : 0 }}
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
              <img
                src="/home-page/manage_connection_icon.png"
                width="40"
                height="40"
              />
            </ListItemIcon>
            <ListItemText
              primary={"Access Tokens"}
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
              <img src="/home-page/connectionIcon.png" width="40" height="40" />
            </ListItemIcon>
            <ListItemText
              primary={"Service Managers"}
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
              <img src="/api-key.png" width="40" height="40" />
            </ListItemIcon>
            <ListItemText primary={"API Key"} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>

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
              <img src="/home-page/hostIcon.png" width="40" height="40" />
            </ListItemIcon>
            <ListItemText
              primary={"Open APIs"}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
          <Divider />
          {/* <ListItemButton
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
              <img src="/home-page/plansIcon.png" width="50%" />
            </ListItemIcon>
            <ListItemText
              primary={"Test Host Access Url"}
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
              <img src="/home-page/settingsIcon.png" width="50%" />
            </ListItemIcon>
            <ListItemText  primary={"Test Remote database access urls"} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton> */}
          <Divider />
          <ListItemButton
            key={"2"}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            onClick={() => {
              handleScreenChange(7);
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <img src="/settings.png" width="40" height="40" />
            </ListItemIcon>
            <ListItemText primary={"Settings"} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 10 }}>
        {/* <DrawerHeader /> */}
        {currentOpenedScreen}
        {/* <HomePagefooter/> */}
      </Box>

      <CustomDialog
        alertType={alertType}
        handleClickOpen={handleClickOpen_CustomDialog}
        handleCloseEvent={handleClose_CustomDialog}
        open={openCustomDialog}
        alertMessage={alertMessage_CustomDialog}
        alertTitle={alertTitle_CustomDialog}
        handleOkEvent={handleOkEvent}
        handleNoEvent={handleNoEvent}
        listOfHosts={listOfHosts}
      />
    </Box>
  );
};

export default NavbarWraper(Index);
