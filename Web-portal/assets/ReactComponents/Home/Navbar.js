import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Tab from "@mui/material/Tab";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import RestoreIcon from '@mui/icons-material/Restore';
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { Container, Grid, Link, MenuItem } from "@mui/material";

export default function Navbar() {

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

  const [anchorEToken, setAnchorEToken] = React.useState(null);
  const openToken = Boolean(anchorEToken);
  const handleClickToken = (event) => {
    setAnchorEToken(event.currentTarget);
  };
  const handleCloseToken = () => {
    setAnchorEToken(null);
  };
  
  const handleOptionSelection = (event, index) => {
    switch (index) {
      case 0:
        //Services option
        handleClickToken(event);
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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        
        sx={{
          borderBottom: 1,
          borderWidth: 0.1,
          borderColor: "#333333",
          paddingLeft: "10%",
          paddingRight: "5%",
          
        }}
      >
        <Toolbar>
          <ConnectWithoutContactIcon
            fontSize="large"
            sx={{ fontSize: 40 }}
            style={{ color: "white" }}
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
          {/* <Image src={require('../../public/LOGO1.png')} width="60" height="60"/> */}
          <div style={{ marginLeft: "5%" }}>
            <Button
              id="token-button"
              aria-controls={openToken ? "token-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openToken ? "true" : undefined}
              onClick={(e) => handleOptionSelection(e, 0)}
              style={{
                color: serviceBtnColorControl ? "white" : "#b8bfbf",
                textTransform: "none",
                fontSize: 14,
              }}
              endIcon={<KeyboardArrowDownOutlined fontSize="large" />}
            >
              Services
            </Button>
            <Menu
              id="token-menu"
              anchorEl={anchorEToken}
              open={openToken}
              onClose={handleCloseToken}
              MenuListProps={{
                "aria-labelledby": "token-button",
              }}
              anchorOrigin={{
                vertical: "bottom",
              }}
              PaperProps={{
                style: {
                  width: "100%",
                  marginTop: "2%",
                  height: "25%",
                },
              }}
            >
              <Container>
                <div  style={{ display: "inline",position:"absolute"}}>
                  {/* Access token services */}
                  
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    style={{
                        borderBottomStyle:"groove",
                        borderBottomWidth:"0.5",
                        fontWeight:"bold",
                        fontFamily: "Roboto Mono,monospace",
                    }}
                  >
                    Access token services
                  </Typography>

                  {/* Renew token */}
                  <div>
                  <div style={{position:"relative",top:10,display:"inline",marginLeft:"5%"}}>
                    <RestoreIcon style={{fontSize:"35"}} />
                  </div>
                  <Typography
                    variant="p"
                    noWrap
                    component="div"
                    style={{
                        display:"inline",
                        position:"relative",
                        top:-1,
                        left:"5%",
                        fontFamily: "Roboto Mono,monospace",
                        borderBottomStyle:"groove"
                    }}
                  >
                    Renew token
                  </Typography>
                  </div>
                   {/* Get token details */}
                   <div>
                  <div style={{position:"relative",top:10,display:"inline",marginLeft:"5%"}}>
                    <RestoreIcon style={{fontSize:"35"}} />
                  </div>
                  <Typography
                    variant="p"
                    noWrap
                    component="p"
                    style={{
                        display:"inline",
                        position:"relative",
                        top:-1,
                        left:"5%",
                        fontFamily: "Roboto Mono,monospace",
                        borderBottom:"groove"
                    }}
                  >
                    Get token details
                  </Typography>
                  </div>
                
                </div>

                <div style={{ display: "inline",marginLeft:"35%",position:"absolute",width:"30%"}}>
                  {/* Access token services */}
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    style={{
                        display:"inline",
                        fontWeight:"bold",
                        fontFamily: "Roboto Mono,monospace",
                        borderBottomStyle:"groove",
                        borderBottomWidth:"0.5"
                    }}
                  >
                    Access URL services
                  </Typography>
                  {/* Test Host access url */}
                  <div>
                  <div style={{position:"relative",top:10,display:"inline",marginLeft:"5%"}}>
                    <RestoreIcon style={{fontSize:"35"}} />
                  </div>
                  <Typography
                    variant="p"
                    noWrap
                    component="p"
                    style={{
                        display:"inline",
                        position:"relative",
                        top:-1,
                        left:"5%",
                        fontFamily: "Roboto Mono,monospace",
                        borderBottom:"groove"
                    }}
                  >
                    Test Host access URL
                  </Typography>
                  </div>
                  <div style={{width:"100%"}}>
                  <div style={{position:"relative",top:10,display:"inline",marginLeft:"5%"}}>
                    <RestoreIcon style={{fontSize:"35"}} />
                  </div>
                  <Typography
                    variant="p"
                    noWrap
                    component="p"
                    style={{
                        display:"inline",
                        position:"relative",
                        top:-1,
                        left:"5%",
                        fontFamily: "Roboto Mono,monospace",
                        borderBottom:"groove"
                    }}
                  >
                    Test Remote database access URL
                  </Typography>
                  </div>
                  
                </div>
              </Container>
             
            </Menu>
          </div>

          <Button
            color="secondary"
            style={{
              marginLeft: "1%",
              color: integrationBtnColorControl ? "white" : "#b8bfbf",
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
              color: documentationBtnColorControl ? "white" : "#b8bfbf",
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
              color: getHostConnectorBtnColorControl ? "white" : "#b8bfbf",
              textTransform: "none",
              fontSize: 14,
            }}
            onClick={(e) => {
              handleOptionSelection(e, 3);
            }}
          >
            Downloads
          </Button>

          <Box sx={{ flexGrow: 1 }} />

          <Button
            color="secondary"
            style={{
              marginRight: "1%",
              color: contactBtnColorControl ? "white" : "#b8bfbf",
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
              color: signInBtnColorControl ? "white" : "#b8bfbf",
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
            style={{ color: "black", backgroundColor: "white" }}
            onClick={(e) => {
              handleOptionSelection(e, 6);
            }}
          >
            Sign up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
