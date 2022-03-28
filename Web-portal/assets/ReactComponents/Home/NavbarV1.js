import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Button, Card, CardContent } from "@material-ui/core";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import RestoreIcon from "@mui/icons-material/Restore";
import { useState, useEffect } from "react";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { Container, Grid, Link } from "@mui/material";
import { useTheme } from "@emotion/react";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";
import InfoIcon from '@mui/icons-material/Info';
import SpeedIcon from '@mui/icons-material/Speed';
import StorageIcon from '@mui/icons-material/Storage';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import InstallDesktopIcon from '@mui/icons-material/InstallDesktop';
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

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function NavbarV1() {
  //isMobileScreen
  const isMobileScreenDetected = false;
  //Theme

  const theme = useTheme();
  const windSize = useWindowSize();
  //Nav bar options color flags
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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

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
        break;
      case 1:
        //Integration option
        setServiceBtnColorControl(false);
        setIntegrationBtnColorControl(true);
        setDocumentationBtnColorControl(false);
        setContactBtnColorControl(false);
        setHostConnectorBtnColorControl(false);
        setSignInBtnColorControl(false);
        break;
        break;
      case 2:
        //Documentation option
        setServiceBtnColorControl(false);
        setIntegrationBtnColorControl(false);
        setDocumentationBtnColorControl(true);
        setContactBtnColorControl(false);
        setHostConnectorBtnColorControl(false);
        setSignInBtnColorControl(false);
        break;

      case 3:
        //Download option
        setServiceBtnColorControl(false);
        setIntegrationBtnColorControl(false);
        setDocumentationBtnColorControl(false);

        setHostConnectorBtnColorControl(true);
        setContactBtnColorControl(false);
        setSignInBtnColorControl(false);
        break;
        break;
      case 4:
        //Contact option
        setServiceBtnColorControl(false);
        setIntegrationBtnColorControl(false);
        setDocumentationBtnColorControl(false);
        setHostConnectorBtnColorControl(false);
        setContactBtnColorControl(true);
        setSignInBtnColorControl(false);
        break;
      case 5:
        //Sign in option
        setServiceBtnColorControl(false);
        setIntegrationBtnColorControl(false);
        setDocumentationBtnColorControl(false);
        setContactBtnColorControl(false);
        setHostConnectorBtnColorControl(false);
        setSignInBtnColorControl(true);
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
        <Grid item xs={4}>
          {/* <h3 style={{textDecoration:"underline"}}>Token Services</h3> */}

          <div style={{ marginLeft: "1.5rem" }}>
            {/* Service 1 */}
            <Card>
              <CardContent>
                <Grid container>
                  <Grid item xs={1}>
                    <ReplayCircleFilledIcon style={{ fontSize: "3rem" }} />
                  </Grid>
                  <Grid
                    item
                    xs={10}
                    style={{ marginLeft: "1rem", marginTop: "0.3rem" }}
                  >
                    <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
                      Renew access token
                    </div>
                    <div style={{ fontSize: "0.7rem" }}>
                      Send renewal request to admin
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card style={{ marginTop: "0.5rem" }}>
              <CardContent>
                <Grid container style={{ marginTop: "0.5rem" }}>
                  <Grid item xs={1}>
                    <InfoIcon style={{ fontSize: "3rem" }} />
                  </Grid>
                  <Grid
                    item
                    xs={10}
                    style={{ marginLeft: "1rem", marginTop: "0.3rem" }}
                  >
                    <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
                      Get details
                    </div>
                    <div style={{ fontSize: "0.7rem" }}>Check token status</div>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item xs={4}>
          {/* <h3 style={{textDecoration:"underline"}}>Access URL Services</h3> */}
          <div style={{ marginLeft: "1.5rem" }}>
            {/* Service 1 */}
            <Card>
              <CardContent>
                <Grid container>
                  <Grid item xs={1}>
                    <StorageIcon style={{ fontSize: "3rem" }} />
                  </Grid>
                  <Grid
                    item
                    xs={10}
                    style={{ marginLeft: "1rem", marginTop: "0.3rem" }}
                  >
                    <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
                      Host access URL
                    </div>
                    <div style={{ fontSize: "0.7rem" }}>
                      Execute quries and view request responses
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card style={{ marginTop: "0.5rem" }}>
              <CardContent>
                <Grid container style={{ marginTop: "0.5rem" }}>
                  <Grid item xs={1}>
                    <SatelliteAltIcon style={{ fontSize: "3rem" }} />
                  </Grid>
                  <Grid
                    item
                    xs={10}
                    style={{ marginLeft: "1rem", marginTop: "0.3rem" }}
                  >
                    <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
                      Remote database access URL
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
        <Grid item xs={4} >
          {/* <h3 style={{textDecoration:"underline"}}>Access URL Services</h3> */}
          <div style={{ marginLeft: "1.5rem",marginRight: "1.5rem" }}>
            {/* Service 1 */}
            <Card>
              <CardContent>
                <Grid container>
                  <Grid item xs={1}>
                    <InstallDesktopIcon style={{ fontSize: "3rem" }} />
                  </Grid>
                  <Grid
                    item
                    xs={10}
                    style={{ marginLeft: "1rem", marginTop: "0.3rem" }}
                  >
                    <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
                      Npm packages
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
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          //   borderBottom: 1,
          //   borderWidth: 0.1,
          //   borderColor: "#6B6B6B",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
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
                xs: "none",
                sm: "block",
                marginLeft: "1%",
                fontWeight: "bold",
                fontFamily: "Roboto Mono,monospace",
              },
            }}
          >
            L D H
          </Typography>

          <Box sx={{ flexGrow: windSize.width <= 900 ? 1 : 0.9 }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
              Integration
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
              Documentation
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
              Downloads
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0.4 }} />

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
            Contact
          </Button>

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
            Sign in
          </Button>
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
            Sign up
          </Button>

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
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
