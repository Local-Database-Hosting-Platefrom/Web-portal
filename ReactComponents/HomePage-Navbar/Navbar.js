import * as React from "react";
import { useRouter } from "next/router";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import LinearProgress from "@mui/material/LinearProgress";

import {
  Avatar,
  Button,
  Card,
  CardContent,
  ListItemIcon,
  Stack,
  Tooltip,
} from "@mui/material";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import RestoreIcon from "@mui/icons-material/Restore";
import { useState, useEffect } from "react";
import {
  KeyboardArrowDownOutlined,
  Logout,
  PersonAdd,
  Settings,
} from "@mui/icons-material";
import { Container, Grid, Link } from "@mui/material";
import { useTheme } from "@emotion/react";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";
import InfoIcon from "@mui/icons-material/Info";
import StorageIcon from "@mui/icons-material/Storage";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
import InstallDesktopIcon from "@mui/icons-material/InstallDesktop";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import ListItemText from "@mui/material/ListItemText";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Strings from "../../styles/Strings";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

export default function Navbar({isProgressBarVisible=false}) {
  //navigation hook
  const navigate = useRouter();
  //isMobileScreen
  const isMobileScreenDetected = false;
  //Theme
  const theme = useTheme();
  const windSize = useWindowSize();
  //Nav bar options color flags
  //Progress
  
  //Color controls
  const [serviceBtnColorControl, setServiceBtnColorControl] =
    React.useState(false);
  const [integrationBtnColorControl, setIntegrationBtnColorControl] =
    React.useState(false);
  const [documentationBtnColorControl, setDocumentationBtnColorControl] =
    React.useState(false);
  const [contactBtnColorControl, setContactBtnColorControl] =
    React.useState(false);
  const [getHostConnectorBtnColorControl, setHostConnectorBtnColorControl] =
    React.useState(false);
  const [signInBtnColorControl, setSignInBtnColorControl] =
    React.useState(false);
  const [homeBtnColorControl, sethomeBtnColorControl] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  // Avatar
  const [anchorElAvatar, setAnchorElAvatar] = React.useState(null);
  const openAvatar = Boolean(anchorElAvatar);
  const handleClickAvatar = (event) => {
    setAnchorElAvatar(event.currentTarget);
  };
  const handleCloseAvatar = () => {
    setAnchorElAvatar(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    var v = localStorage.getItem("isLoggedIn");
    if (v == "true") setIsLoggedIn(true);
    else setIsLoggedIn(false);
  }, []);

  const handleOptionSelection = (event, index) => {
    switch (index) {
      case 0:
        //Services option
        handleProfileMenuOpen(event);
        setServiceBtnColorControl(true);
        setIntegrationBtnColorControl(false);
        setDocumentationBtnColorControl(false);
        setContactBtnColorControl(false);
        setHostConnectorBtnColorControl(false);
        setSignInBtnColorControl(false);
        sethomeBtnColorControl(false);
        break;
      case 1:
        //Integration option
        setServiceBtnColorControl(false);
        setIntegrationBtnColorControl(true);
        setDocumentationBtnColorControl(false);
        setContactBtnColorControl(false);
        setHostConnectorBtnColorControl(false);
        setSignInBtnColorControl(false);
        sethomeBtnColorControl(false);
        navigate.push("/Integration");
        break;
      case 2:
        //Documentation option
        setServiceBtnColorControl(false);
        setIntegrationBtnColorControl(false);
        setDocumentationBtnColorControl(true);
        setContactBtnColorControl(false);
        setHostConnectorBtnColorControl(false);
        setSignInBtnColorControl(false);
        sethomeBtnColorControl(false);
        navigate.push("/Documentation");
        break;

      case 3:
        //Download option
        setServiceBtnColorControl(false);
        setIntegrationBtnColorControl(false);
        setDocumentationBtnColorControl(false);
        sethomeBtnColorControl(false);
        setHostConnectorBtnColorControl(true);
        setContactBtnColorControl(false);
        setSignInBtnColorControl(false);
        navigate.push("/Downloads");
        break;
      case 4:
        //Contact option
        setServiceBtnColorControl(false);
        setIntegrationBtnColorControl(false);
        setDocumentationBtnColorControl(false);
        setHostConnectorBtnColorControl(false);
        setContactBtnColorControl(true);
        sethomeBtnColorControl(false);
        setSignInBtnColorControl(false);
        navigate.push("/Contact");
        break;
      case 5:
        //Sign in option
        setServiceBtnColorControl(false);
        setIntegrationBtnColorControl(false);
        setDocumentationBtnColorControl(false);
        setContactBtnColorControl(false);
        sethomeBtnColorControl(false);
        setHostConnectorBtnColorControl(false);
        setSignInBtnColorControl(true);
        navigate.push("/Authentication/SignIn");

        break;
      case 6:
        //Sign up option
        navigate.push("/Authentication/SignUp");
        sethomeBtnColorControl(false);
        setServiceBtnColorControl(false);
        setIntegrationBtnColorControl(false);
        setDocumentationBtnColorControl(false);
        setContactBtnColorControl(false);
        sethomeBtnColorControl(false);
        setHostConnectorBtnColorControl(false);
        break;
      case 7:
        //Home
        navigate.push("/");
        sethomeBtnColorControl(true);
        setServiceBtnColorControl(false);
        setIntegrationBtnColorControl(false);
        setDocumentationBtnColorControl(false);
        setContactBtnColorControl(false);
        sethomeBtnColorControl(false);
        setHostConnectorBtnColorControl(false);
        break;
    }
  };

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
  }

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      elevation={0}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      PaperProps={{
        style: {
          width: "100%",
          marginTop: "5%",
          height: "35%",
          borderBottomStyle: "groove",
          borderTopStyle: "groove",
          borderWidth: 1,
          borderColor: "#6B6B6B",
        },
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}

      <Grid container>
        <Grid item lg={1} sm={6}></Grid>
        <Grid item lg={3} sm={6}>
          {/* <h3 style={{textDecoration:"underline"}}>Token Services</h3> */}

          <div style={{ marginLeft: "1.5rem" }}>
            {/* Service 1 */}
            <Card elevation={0}>
              <CardContent>
                <Grid container style={{ cursor: "pointer" }}>
                  <Grid item xs={1}>
                    <ReplayCircleFilledIcon style={{ fontSize: "2.5rem" }} />
                  </Grid>
                  <Grid
                    item
                    xs={10}
                    style={{ marginLeft: "1.39rem", marginTop: "0.3rem" }}
                    onClick={() => {
                      navigate.push("/Services/Token");
                    }}
                  >
                    <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
                      {Strings.NavBar.Services.RenewToken}
                    </div>
                    <div style={{ fontSize: "0.7rem" }}>
                      Send renewal request to admin
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card elevation={0} style={{ marginTop: "0.5rem" }}>
              <CardContent>
                <Grid
                  container
                  style={{ marginTop: "0.5rem", cursor: "pointer" }}
                >
                  <Grid item xs={1}>
                    <InfoIcon style={{ fontSize: "2.5rem" }} />
                  </Grid>
                  <Grid
                    item
                    xs={10}
                    style={{ marginLeft: "1.39rem", marginTop: "0.3rem" }}
                    onClick={() => {
                      navigate.push("/Services/Token");
                    }}
                  >
                    <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
                      {Strings.NavBar.Services.GetTokenDetails}
                    </div>
                    <div style={{ fontSize: "0.7rem" }}>Check token status</div>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item lg={4} sm={6}>
          {/* <h3 style={{textDecoration:"underline"}}>Access URL Services</h3> */}
          <div style={{ marginLeft: "1.5rem" }}>
            {/* Service 1 */}
            <Card elevation={0}>
              <CardContent>
                <Grid container style={{ cursor: "pointer" }}>
                  <Grid item xs={1}>
                    <StorageIcon style={{ fontSize: "2.5rem" }} />
                  </Grid>
                  <Grid
                    item
                    xs={10}
                    style={{ marginLeft: "1rem", marginTop: "0.3rem" }}
                    onClick={() => {
                      navigate.push("/Services/Access-urls");
                    }}
                  >
                    <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
                      {Strings.NavBar.Services.AccessHostUrl}
                    </div>
                    <div style={{ fontSize: "0.7rem" }}>
                      Execute quries and view request responses
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card elevation={0} style={{ marginTop: "0.5rem" }}>
              <CardContent>
                <Grid
                  container
                  style={{ marginTop: "0.5rem", cursor: "pointer" }}
                >
                  <Grid item xs={1}>
                    <SatelliteAltIcon style={{ fontSize: "2.5rem" }} />
                  </Grid>
                  <Grid
                    item
                    xs={10}
                    style={{ marginLeft: "1rem", marginTop: "0.3rem" }}
                    onClick={() => {
                      navigate.push("/Services/Access-urls");
                    }}
                  >
                    <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
                      {Strings.NavBar.Services.RemoteAccessUrl}
                    </div>
                    <div style={{ fontSize: "0.7rem" }}>
                      View request responses
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            {/* Service 2 */}
          </div>
        </Grid>
        <Grid item lg={3} sm={6}>
          {/* <h3 style={{textDecoration:"underline"}}>Access URL Services</h3> */}
          <div
            style={{
              marginLeft: "1.5rem",
              marginTop: windSize.width <= 1115 ? "1rem" : "0rem",
              marginRight: "1.5rem",
            }}
          >
            {/* Service 1 */}
            <Card elevation={0}>
              <CardContent>
                <Grid container style={{ cursor: "pointer" }}>
                  <Grid item xs={1}>
                    <InstallDesktopIcon style={{ fontSize: "2.5rem" }} />
                  </Grid>
                  <Grid
                    item
                    xs={10}
                    style={{ marginLeft: "1.32rem", marginTop: "0.3rem" }}
                    onClick={() => {
                      window.open("https://www.npmjs.com/search?q=mui");
                    }}
                  >
                    <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
                      {Strings.NavBar.Services.DownloadNpm}
                    </div>
                    <div style={{ fontSize: "0.7rem" }}>
                      Download npm packages
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item lg={1} sm={6}></Grid>
      </Grid>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      PaperProps={{
        style: {
          width: "100%",
          marginTop: "15%",
          maxHeight: "80%",
          borderBottomStyle: "groove",
          borderTopStyle: "groove",
          borderWidth: 1,
          borderColor: "#6B6B6B",
        },
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Container style={{ marginTop: "1%" }}>
        <Paper elevation={0} sx={{ width: "100%" }}>
          <MenuList>
            {!isLoggedIn && (
              <div>
                <Button
                  variant="contained"
                  fullWidth
                  style={{
                    color: "white",
                    backgroundColor: "blue",
                    fontSize: 10,
                  }}
                  onClick={(e) => {
                    handleOptionSelection(e, 6);
                  }}
                >
                  {Strings.NavBar.SignUpBtn}
                </Button>
                <Button
                  variant="contained"
                  fullWidth
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    fontSize: 10,
                    marginTop: "2%",
                  }}
                  onClick={(e) => {
                    // handleOptionSelection(e, 6);
                    navigate.push("/Authentication/SignIn");
                  }}
                >
                  {Strings.NavBar.SignInBtn}
                </Button>
              </div>
            )}

            {isLoggedIn && (
              <div>
                <Box
                  sx={{
                    display: "block",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClickAvatar}
                      size="large"
                      sx={{ ml: 2, textAlign: "center" }}
                      aria-controls={openAvatar ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={openAvatar ? "true" : undefined}
                    >
                      <Avatar sx={{ width: 40, height: 40 }}>Z</Avatar>
                    </IconButton>
                  </Tooltip>
                </Box>
              </div>
            )}
            <Container style={{ marginTop: "1%" }}>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  {/* Sign in and up */}

                  <Typography sx={{ marginLeft: -2, width: "100%" }}>
                    Services
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {/* Services */}
                  <Grid
                    container
                    onClick={() => {
                      navigate.push("/Services/Token");
                    }}
                  >
                    <Grid item xs={2}>
                      <RestoreIcon fontSize="large" />
                    </Grid>
                    <Grid item xs={10}>
                      <div style={{ fontSize: "10", marginTop: "3%" }}>
                        {Strings.NavBar.Services.RenewToken}
                      </div>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid
                    container
                    onClick={() => {
                      navigate.push("/Services/Token");
                    }}
                  >
                    <Grid item xs={2}>
                      <InfoIcon fontSize="large" />
                    </Grid>
                    <Grid item xs={10}>
                      <div style={{ fontSize: "10", marginTop: "3%" }}>
                        {Strings.NavBar.Services.GetTokenDetails}
                      </div>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid
                    container
                    onClick={() => {
                      navigate.push("/Services/Access-urls");
                    }}
                  >
                    <Grid item xs={2}>
                      <StorageIcon fontSize="large" />
                    </Grid>
                    <Grid item xs={10}>
                      <div style={{ fontSize: "10", marginTop: "3%" }}>
                        {Strings.NavBar.Services.AccessHostUrl}
                      </div>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid
                    container
                    onClick={() => {
                      navigate.push("/Services/Access-urls");
                    }}
                  >
                    <Grid item xs={2}>
                      <SatelliteAltIcon fontSize="large" />
                    </Grid>
                    <Grid item xs={10}>
                      <div style={{ fontSize: "10", marginTop: "3%" }}>
                        {Strings.NavBar.Services.RemoteAccessUrl}
                      </div>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid
                    container
                    onClick={() => {
                      window.open("https://www.npmjs.com/search?q=mui");
                    }}
                  >
                    <Grid item xs={2}>
                      <InstallDesktopIcon fontSize="large" />
                    </Grid>
                    <Grid item xs={10}>
                      <div style={{ fontSize: "10", marginTop: "3%" }}>
                        {Strings.NavBar.Services.DownloadNpm}
                      </div>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Container>

            <Divider />
            {isLoggedIn && (
              <div>
                <Divider />
                <MenuItem>
                  <ListItemText
                    onClick={() => {
                      localStorage.setItem("isLoggedIn", false);
                      // location.reload();
                      navigate.push("/admin-dashboard");
                    }}
                  >
                    Dashboard
                  </ListItemText>
                </MenuItem>
              </div>
            )}
            <Divider />

            <MenuItem>
              <ListItemText
                onClick={() => {
                  navigate.push("/Integration");
                }}
              >
                Integration
              </ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemText
                onClick={() => {
                  navigate.push("/Documentation");
                }}
              >
                Documentation
              </ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemText
                onClick={() => {
                  navigate.push("/Downlaods");
                }}
              >
                Downloads
              </ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemText
                onClick={() => {
                  navigate.push("/Contact");
                }}
              >
                Contact
              </ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemText
                onClick={() => {
                  navigate.push("/");
                }}
              >
                Home
              </ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemText
                onClick={() => {
                  // localStorage.setItem("isLoggedIn",false);
                  // location.reload();
                }}
              >
                Settings
              </ListItemText>
            </MenuItem>
            {isLoggedIn && (
              <div>
                <Divider />
                <MenuItem>
                  <ListItemText
                    onClick={() => {
                      localStorage.setItem("isLoggedIn", false);
                      // location.reload();
                      navigate.push("/");
                    }}
                  >
                    Logout
                  </ListItemText>
                </MenuItem>
              </div>
            )}
          </MenuList>
        </Paper>
      </Container>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={0}
        color="transparent"
        sx={{
          //   borderBottom: 1,
          //   borderWidth: 0.1,
          //   borderColor: "#6B6B6B",
          backdropFilter: "blur(4px)",

          // marginTop: "0.5%"
        }}
      >
        {
          isProgressBarVisible && (
            <LinearProgress color="success" />
          )
        }
        <Box sx={{ paddingLeft: "10%", paddingRight: "10%" }}>
          <Toolbar>
            <ConnectWithoutContactIcon
              fontSize="large"
              sx={{ fontSize: 40 }}
              style={{ color: "black" }}
            />
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{
                display: {
                  xs: "block",
                  sm: "block",
                  marginLeft: "1%",
                  fontWeight: "bold",
                  fontFamily: "Roboto Mono,monospace",
                },
              }}
            >
              L D H
            </Typography>

            <Box sx={{ flexGrow: windSize.width <= 900 ? 1 : 1 }} />

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                color="secondary"
                style={{
                  marginLeft: "1%",
                  color: homeBtnColorControl
                    ? theme.palette.navlinkSelected
                    : theme.palette.navlinkUnSelected,
                  textTransform: "none",
                  fontSize: 14,
                }}
                onClick={(e) => {
                  handleOptionSelection(e, 7);
                }}
              >
                Home
              </Button>
              <Button
                id="token-button"
                aria-haspopup="true"
                size="large"
                onClick={(e) => handleOptionSelection(e, 0)}
                style={{
                  color: serviceBtnColorControl
                    ? theme.palette.navlinkSelected
                    : theme.palette.navlinkUnSelected,
                  textTransform: "none",
                  fontSize: 14,
                }}
                endIcon={<KeyboardArrowDownOutlined fontSize="large" />}
              >
                Services
              </Button>
              <Button
                color="secondary"
                style={{
                  marginLeft: "1%",
                  color: integrationBtnColorControl
                    ? theme.palette.navlinkSelected
                    : theme.palette.navlinkUnSelected,
                  textTransform: "none",
                  fontSize: 14,
                }}
                onClick={(e) => {
                  handleOptionSelection(e, 1);
                }}
              >
                {Strings.NavBar.IntegrationBtn}
              </Button>
              <Button
                color="secondary"
                style={{
                  marginLeft: "1%",
                  color: documentationBtnColorControl
                    ? theme.palette.navlinkSelected
                    : theme.palette.navlinkUnSelected,
                  textTransform: "none",
                  fontSize: 14,
                }}
                onClick={(e) => {
                  handleOptionSelection(e, 2);
                }}
              >
                {Strings.NavBar.DocumentationBtn}
              </Button>
              <Button
                color="secondary"
                style={{
                  marginLeft: "1%",
                  color: getHostConnectorBtnColorControl
                    ? theme.palette.navlinkSelected
                    : theme.palette.navlinkUnSelected,
                  textTransform: "none",
                  fontSize: 14,
                }}
                onClick={(e) => {
                  handleOptionSelection(e, 3);
                }}
              >
                {Strings.NavBar.DownloadsBtn}
              </Button>
            </Box>

            <Box
              sx={{ marginLeft: "4rem", display: { xs: "none", md: "flex" } }}
            >
              <Button
                color="secondary"
                style={{
                  marginLeft: "1%",
                  color: contactBtnColorControl
                    ? theme.palette.navlinkSelected
                    : theme.palette.navlinkUnSelected,
                  textTransform: "none",
                  fontSize: 14,
                }}
                onClick={(e) => {
                  handleOptionSelection(e, 4);
                }}
              >
                {Strings.NavBar.ContactBtn}
              </Button>
            </Box>
            {!isLoggedIn && (
              // when it is logged in
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Button
                  color="secondary"
                  style={{
                    marginRight: "1%",
                    color: signInBtnColorControl
                      ? theme.palette.navlinkSelected
                      : theme.palette.navlinkUnSelected,
                    textTransform: "none",
                    fontSize: 14,
                  }}
                  onClick={(e) => {
                    handleOptionSelection(e, 5);
                  }}
                >
                  {Strings.NavBar.SignInBtn}
                </Button>
              </Box>
            )}
            {!isLoggedIn && (
              // when it is logged in
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Button
                  variant="contained"
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    fontSize: 10,
                  }}
                  onClick={(e) => {
                    handleOptionSelection(e, 6);
                  }}
                >
                  {Strings.NavBar.SignUpBtn}
                </Button>
              </Box>
            )}
            {isLoggedIn && (
              <Button
                color="secondary"
                style={{
                  marginLeft: "1%",
                  color: contactBtnColorControl
                    ? theme.palette.navlinkSelected
                    : theme.palette.navlinkUnSelected,
                  textTransform: "none",
                  fontSize: 14,
                }}
                onClick={(e) => {
                  navigate.push("/admin-dashboard");
                }}
              >
                {"Dashboard"}
              </Button>
            )}
            {isLoggedIn && (
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClickAvatar}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={openAvatar ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={openAvatar ? "true" : undefined}
                    >
                      <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                    </IconButton>
                  </Tooltip>
                </Box>
                <Menu
                  anchorEl={anchorElAvatar}
                  id="account-menu"
                  open={openAvatar}
                  onClose={handleCloseAvatar}
                  onClick={handleCloseAvatar}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem>
                    <Avatar /> Profile
                  </MenuItem>

                  <MenuItem>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      localStorage.setItem("isLoggedIn", false);
                      navigate.push("/");
                      // location.reload();
                    }}
                  >
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            )}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>

      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
