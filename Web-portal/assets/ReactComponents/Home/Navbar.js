import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "../../public/LOGO1.png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import Image from "next/image";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}
export default function Navbar() {
  const [value, setValue] = React.useState(0);
  const [anchorEToken, setAnchorEToken] = React.useState(null);
  const [anchorEEndPoint, setAnchorEndPoint] = React.useState(null);
  const [anchorEDocumentation, setAnchorEDocumentation] = React.useState(null);
  
  const openToken = Boolean(anchorEToken);
  const openEndPoint = Boolean(anchorEEndPoint);
  const openDocumentation = Boolean(anchorEDocumentation);

  const handleClickToken = (event) => {
    setAnchorEToken(event.currentTarget);
  };
  const handleCloseToken = () => {
    setAnchorEToken(null);
  };

  const handleClickEndPoint = (event) => {
    setAnchorEndPoint(event.currentTarget);
  };
  const handleCloseEndPoint = () => {
    setAnchorEndPoint(null);
  };

  const handleClickDocumnetation = (event) => {
    setAnchorEDocumentation(event.currentTarget);
  };
  const handleCloseDocumnetation = () => {
    setAnchorEDocumentation(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <ConnectWithoutContactIcon
            fontSize="large"
            style={{ color: "yellow" }}
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
              },
            }}
          >
            L D H
          </Typography>
          {/* <Image src={require('../../public/LOGO1.png')} width="60" height="60"/> */}
          <div style={{marginLeft:"2%"}}>
            <Button
              id="token-button"
              aria-controls={openToken ? "token-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openToken ? "true" : undefined}
              onClick={handleClickToken}
              style={{color:"white"}}
            >
              Tokens
            </Button>
            <Menu
              id="token-menu"
              anchorEl={anchorEToken}
              open={openToken}
              onClose={handleCloseToken}
              MenuListProps={{
                "aria-labelledby": "token-button",
              }}
            >
              <MenuItem onClick={handleCloseToken}>Renew token</MenuItem>
              <MenuItem onClick={handleCloseToken}>View details</MenuItem>
            </Menu>
          </div>
          <div style={{marginLeft:"2%"}}>
            <Button
              id="end-points-button"
              aria-controls={openEndPoint ? "end-points-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openEndPoint ? "true" : undefined}
              onClick={handleClickEndPoint}
              style={{color:"white"}}
            >
              End-points
            </Button>
            <Menu
              id="end-points-menu"
              anchorEl={anchorEEndPoint}
              open={openEndPoint}
              onClose={handleCloseEndPoint}
              MenuListProps={{
                "aria-labelledby": "end-points-button",
              }}
            >
              <MenuItem onClick={handleCloseEndPoint}>Host Access URL</MenuItem>
              <MenuItem onClick={handleCloseEndPoint}>Remote Database URL</MenuItem>
            </Menu>
          </div>
          <div style={{marginLeft:"2%"}}>
            <Button
              id="documentation-button"
              aria-controls={openDocumentation ? "documentation-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openDocumentation ? "true" : undefined}
              onClick={handleClickDocumnetation}
              style={{color:"white"}}
            >
              How to use?
            </Button>
            <Menu
              id="documentation-menu"
              anchorEl={anchorEDocumentation}
              open={openDocumentation}
              onClose={handleCloseDocumnetation}
              MenuListProps={{
                "aria-labelledby": "documentation-button",
              }}
            >
              <MenuItem onClick={handleCloseDocumnetation}>Host Access URL</MenuItem>
              <MenuItem onClick={handleCloseDocumnetation}>Remote Database Access URL</MenuItem>
            
            </Menu>
          </div>
          {/* <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="nav tabs example"
            >
              <LinkTab style={{ color: "white" }} label="Tokens" href="/#" />
              <LinkTab
                style={{ color: "white" }}
                label="End-points"
                href="/#"
              />
              <LinkTab
                style={{ color: "white" }}
                label="Implementation"
                href="/#"
              />
              <LinkTab
                style={{ color: "white" }}
                label="Host connector"
                href="/#"
              />
            </Tabs>
          </Box> */}
          <Box sx={{ flexGrow: 1 }} />

          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="nav tabs example"
            >
              <LinkTab style={{ color: "white" }} label="About us" href="/#" />
              <LinkTab style={{ color: "white" }} label="Sign in" href="/#" />
              <LinkTab style={{ color: "white" }} label="Sign up" href="/#" />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
