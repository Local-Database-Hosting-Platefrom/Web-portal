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

import RenewTokenScreen from "../../ReactComponents/Consumer-dashboard-screens/RenewTokenScreen"
import TestTokenScreen from "../../ReactComponents/Consumer-dashboard-screens/TestTokenScreen";
import GetTokenDetailsScreen from "../../ReactComponents/Consumer-dashboard-screens/GetTokenDetailsScreen";
import TestRemoteDatabaseAccessUrlScreen from "../../ReactComponents/Consumer-dashboard-screens/TestRemoteDatabaseAccessUrlScreen";
import TestHostAccresUrlScreen from "../../ReactComponents/Consumer-dashboard-screens/TestHostAccresUrlScreen";
import SettingsScreen from "../../ReactComponents/Consumer-dashboard-screens/SettingsScreen";
import StatisticsScreen from "../../ReactComponents/Consumer-dashboard-screens/StatisticsScreen";
import { useRouter } from "next/router";
import { AUTH_PAGE, VERIFY_JWT_TOKEN } from "../../request-manager/requestUrls";
import { TOKEN_NOT_VERIFIED, TOKEN_VERIFIED } from "../../request-manager/responseCodes";
import dialogueTypes from "../../ReactComponents/Dialogues/dialogueTypes";
import { useEffect } from "react";
import CustomDialog from "../../ReactComponents/Dialogues/CustomDialog";
import { sendResquestToCentralAPI } from "../../request-manager/requestManager";
import AvaibleServiceProviders from "../../ReactComponents/Consumer-dashboard-screens/AvaibleServiceProviders";


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
    <StatisticsScreen  />
  );

  const navigation = useRouter();
  const [alertType,setAlertType]=useState(null);
  const [openCustomDialog, setOpenCustomDialog] = useState(false);
  const [alertMessage_CustomDialog,setAlertMessage_CustomDialog]=useState("");
  const [alertTitle_CustomDialog,setAlertTitle_CustomDialog]=useState("");
  const [accountType, setAccountType] = useState(null);
  
  // Check if it is authenticated or not?
  useEffect(()=>{
   let loggedInUser =  localStorage.getItem("loggedInUser");
   
   if(loggedInUser!=undefined) {
    if(localStorage.getItem("accountType")=="developer" && localStorage.getItem("isLoggedIn")=="true")
    {
      loggedInUser = JSON.parse(loggedInUser);
      console.log(loggedInUser);
      let token = loggedInUser.responsePayload.jwtToken;
      sendResquestToCentralAPI  ("POST",VERIFY_JWT_TOKEN,{},token).then(async (response) => {
        const data =await response.json();
        console.log("after verfiying the data ",data);

        if(data.responseCode==TOKEN_VERIFIED){
          // token verified.
          localStorage.setItem("isLoggedIn", true); 
        }else if(data.responseCode==TOKEN_NOT_VERIFIED){
          // token is not verified
          displayDialog(dialogueTypes.INVALID_LOGIN,"Something went wrong",data.responseMessage);
        }

      },(error)=>{
        // when error in verfirication
      })
    }else{
  
      displayDialog(dialogueTypes.INFO,"Something went wrong","Please login");
    }
   }
  },[]);


  const displayDialog = (dialogType,dialogTitle,dialogMessage) => {
    setAlertMessage_CustomDialog(dialogMessage);
    setAlertTitle_CustomDialog(dialogTitle);
    setAlertType(dialogType);
    handleClickOpen_CustomDialog();
  }



  const handleClickOpen_CustomDialog = () => {
    setOpenCustomDialog(true);
  };
  
  const handleClose_CustomDialog = () => {
    setOpenCustomDialog(false);
  };

  const handleOkEvent=(action)=>{
    if(action=="re-login")
    localStorage.setItem("isLoggedIn",false);
    navigation.push(AUTH_PAGE)
  }

  const handleScreenChange = (index) => {
    switch (index) {
      case 0:
        // Profile
        setCurrentOpenedScreen(<StatisticsScreen />);
        break;
      case 1:
        // Renew token screen
        setCurrentOpenedScreen(<RenewTokenScreen />);
      case 2:
        setCurrentOpenedScreen(<AvaibleServiceProviders/>)
        break;
      case 3:
        // Manage Bridge
        setCurrentOpenedScreen(<GetTokenDetailsScreen />);
        break;
      case 4:
        // Test Token
        setCurrentOpenedScreen(<TestTokenScreen />);
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
              <div style={{ width: "80%" }}>
                <img src="/home-page/overviewIcon.png" width="50%" />
              </div>
            </ListItemIcon>
            <ListItemText
              primary={"Profile"}
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
              primary={"Renew Token"}
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
              primary={"Service Providers"}
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
              <img src="/home-page/connectionIcon.png" width="50%" />
            </ListItemIcon>
            <ListItemText
              primary={"Get Token Details"}
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
              <img src="/home-page/hostIcon.png" width="50%" />
            </ListItemIcon>
            <ListItemText
              primary={"Test Token"}
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
          </ListItemButton>
          <Divider/>
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
              <img src="/home-page/helpIcon.png" width="50%" />
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
        />
    </Box>
  );
};

export default NavbarWraper(Index);
