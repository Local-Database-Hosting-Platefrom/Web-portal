import { Container, Divider, Grid, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import GetTokenDetails from "../../../ReactComponents/Forms/GetTokenDetails";
import RenewTokenForm from "../../../ReactComponents/Forms/RenewTokenForm";
import TestTokenForm from "../../../ReactComponents/Forms/TestTokenForm";
import NavbarWraper from "../../../ReactComponents/HomePage-Navbar/NavbarWraper";
import Heading from "../../../Support/Heading";
import FooterWraper from "../../../ReactComponents/HomePage-Footer/FooterWraper";
import { Box } from "@mui/system";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from 'prop-types';
import { Typography } from "@mui/material";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  
const useStyles = makeStyles({
  root: {
    marginTop: "8%",
    paddingBottom: "5%",
  },
});

const Index = () => {
  const classes = useStyles();
  const [currentOpenedScreen, setCurrentOpenedScreen] = useState(
    <RenewTokenForm />
  );
  const isMediumScreen = useMediaQuery("(min-width:600px)");

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleScreen = (index) => {
    switch (index) {
      case 0:
        setCurrentOpenedScreen(<RenewTokenForm />);
        break;
      case 1:
        setCurrentOpenedScreen(<GetTokenDetails />);
        break;
      case 2:
        setCurrentOpenedScreen(<TestTokenForm />);
        break;
    }
  };

  return (
    <div className={classes.root}>
      <Container>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {/* Visibile on laptop screen */}
          <Grid container>
            <Grid item xs={12}>
              <Heading
                text={"Manage tokens"}
                fontSize={"3rem"}
                fontWeight="bold"
              />
              <div style={{ borderBottom: "1px solid #7ea69f" }}></div>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid
                  item
                  xs={3}
                  /*style={{borderRight: "1px solid #7ea69f"}}*/ style={{
                    marginTop: "2%",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      padding: "3%",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      handleScreen(0);
                    }}
                  >
                    <Heading text={"Renew Token"} fontSize={"1.2rem"} />
                  </div>
                  <Divider />
                  <div
                    style={{
                      textAlign: "center",
                      padding: "3%",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      handleScreen(1);
                    }}
                  >
                    <Heading text={"Get Token Details"} fontSize={"1.2rem"} />
                  </div>
                  <Divider />
                  <div
                    style={{
                      textAlign: "center",
                      padding: "3%",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      handleScreen(2);
                    }}
                  >
                    <Heading text={"Test Token"} fontSize={"1.2rem"} />
                  </div>
                  <Divider />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={8}>
                  {currentOpenedScreen}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        {/* Visible on mobile devices*/}
        <Grid container>
          <div style={{ marginTop: "7%", marginLeft: "3%" }}>
            <Heading
              text={"Manage tokens"}
              fontSize={"1.7rem"}
              fontWeight="bold"
            />
            {/* <div style={{borderBottom: "1px solid #7ea69f"}}></div> */}
          </div>
          <Box
            sx={{
              maxWidth: { xs: 360, sm: 500 },
              bgcolor: "background.paper",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
            //   indicatorColor="primary"
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#D97D54",
                  color: "black",
                },
              }}
            >
              <Tab style={{ color: "black" }} label="Renew token" />
              <Tab style={{ color: "black" }} label="Get token details" />
              <Tab style={{ color: "black" }} label="Test token" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <RenewTokenForm/>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <GetTokenDetails/>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <TestTokenForm/>
            </TabPanel>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};


export default FooterWraper(NavbarWraper(Index));
