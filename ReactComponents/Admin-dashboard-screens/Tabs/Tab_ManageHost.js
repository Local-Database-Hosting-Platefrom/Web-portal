import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import ListOfConnectedHosts from '../Lists/ListOfConnectedHosts'
import CreateHostAccount from '../Forms/CreateHostAccount'
import ListOfRequestForHost from '../Lists/ListOfRequestForHost'
import ManageHostConnections from '../Forms/ManageHostConnections'
import { Divider, Grid } from "@mui/material";
import Heading from "../../../Support/Heading";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Tab_ManageHost() {
  const [value, setValue] = useState(0);
  const [currentOpenedScreen, setCurrentOpenedScreen]= useState(<ListOfConnectedHosts/>);
 
  const [tabsList, setTabsList] = useState([
    {
      tabLable: "Manage Host Connection",
    },
    {
      tabLable: "Manage Host Account",
    },
    {
      tabLable: "Request history",
    },
  ]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleScreenChangeForHistory=(index)=>{
    switch(index) {
      case 0:
        setCurrentOpenedScreen(<ListOfConnectedHosts/>)
      break;
      case 1:
        setCurrentOpenedScreen(<CreateHostAccount/>)
      break;
      
      
    }
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: "100%",
        bgcolor: "background.paper",
      }}
    > 
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#D97D54",
          },
        }}
      >
        {tabsList.map((item) => {
          return (
            <Tab
              style={{ color: "black", minWidth: "30%" }}
              label={item.tabLable}
            />
          );
        })}
      </Tabs>
      <TabPanel value={value} index={0}>
        {/* Manage Host Connection  */}
        {/* {` Manage Host Connection `} */}
        <div>
          <Grid container>
            <Grid item xs={12}>
                <Heading text={"Connect Host"} fontSize="1.5rem" fontWeight="bold"/>
            </Grid>
            <Grid item xs={12}>
                <ManageHostConnections/>
            </Grid>
          </Grid>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* Manage Host Accounts  */}
        {/* {`  Manage Host Accounts`} */}
        <div>
          <Grid container>
            <Grid item xs={12}>
                <Heading text={"Connect Host"} fontSize="1.5rem" fontWeight="bold"/>
            </Grid>
            <Grid item xs={2} >
              {/* Sub options 1.List of consumer account and 2.Create new user*/}
              <div style={{marginTop:"5%",padding:"5%",borderRight: "1px solid #7ea69f"}}>
                <div style={{margin:"5%",cursor: "pointer"}} onClick={() =>{handleScreenChangeForHistory(0)}}>
                <Heading text={"All Hosts"} fontSize="1rem"/>
                </div>
                <Divider/>
                <div style={{margin:"5%",cursor: "pointer"}} onClick={() =>{handleScreenChangeForHistory(1)}}>
                <Heading text={"Create New Host Account"} fontSize="1rem"/>
                </div>
                <Divider/>
              </div>
            </Grid>
            <Grid item xs={10}>
              {/* Screen of sub options or call them forms and lists */}
              {currentOpenedScreen}
            </Grid>
          </Grid>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* Requests history  */}
        {/* {` Requests history `} */}
        <div>
          <Grid container>
            <Grid item xs={12}>
                <Heading text={"Request History"} fontSize="1.5rem" fontWeight="bold"/>
            </Grid>
            <Grid item xs={12}>
              <ListOfRequestForHost/>
            </Grid>
          </Grid>
        </div>
      </TabPanel>
    </Box>
  );
}
