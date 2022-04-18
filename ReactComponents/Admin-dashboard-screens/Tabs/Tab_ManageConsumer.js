import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Heading from '../../../Support/Heading';

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import ListOfConsumerAccounts from "../Lists/ListOfConsumerAccounts";
import ListOfPendingRequests from "../Lists/ListOfPendingRequests";
import ListOfResolvedRequests from "../Lists/ListOfResolvedRequests";
import ListOfDeniedRequests from "../Lists/ListOfDeniedRequests";

import CreateConsumerAccount from "../Forms/CreateConsumerAccount";
import ManageAccessTokens from "../Forms/ManageAccessTokens";

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

export default function Tab_ManageConsumer() {
  const [value, setValue] = useState(0);
  const [currentOpenedScreen, setCurrentOpenedScreen]= useState(<ListOfConsumerAccounts/>);
  const [tabsList, setTabsList] = useState([
    {
      tabLable: "Manage Consumer Accounts",
    },
    {
      tabLable: "Manage Access token",
    },
    {
      tabLable: "Request history",
    },
  ]);
  useEffect(()=>{
    if(value==0){
      setCurrentOpenedScreen(<ListOfConsumerAccounts/>)
    }else if (value==1){

    }else{
      setCurrentOpenedScreen(<ListOfPendingRequests/>)
    }

  },[value])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleScreenChangeForAccounts=(index)=>{
    switch(index) {
      case 0:
        setCurrentOpenedScreen(<ListOfConsumerAccounts/>)
      break;
      case 1:
        setCurrentOpenedScreen(<CreateConsumerAccount/>)
      break;
    }
  }

  const handleScreenChangeForHistory=(index)=>{
    switch(index) {
      case 0:
        setCurrentOpenedScreen(<ListOfPendingRequests/>)
      break;
      case 1:
        setCurrentOpenedScreen(<ListOfResolvedRequests/>)
      break;
      case 2:
        setCurrentOpenedScreen(<ListOfDeniedRequests/>)
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
        {/* Manage Consumer Accounts  */}
        <div>
          <Grid container>
            <Grid item xs={12}>
                <Heading text={"Accounts"} fontSize="1.5rem" fontWeight="bold"/>
            </Grid>
            <Grid item xs={2} >
              {/* Sub options 1.List of consumer account and 2.Create new user*/}
              <div style={{marginTop:"5%",padding:"5%",borderRight: "1px solid #7ea69f"}}>
                <div style={{margin:"5%",cursor: "pointer"}} onClick={() =>{handleScreenChangeForAccounts(0)}}>
                <Heading text={"All Consumers"} fontSize="1rem"/>
                </div>
                <Divider/>
                <div style={{margin:"5%",cursor: "pointer"}} onClick={() =>{handleScreenChangeForAccounts(1)}}>
                <Heading text={"Create New Account"} fontSize="1rem"/>
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
      <TabPanel value={value} index={1}>
        {/* Manage access tokens  */}
        {/* {`  Manage access tokens`} */}
        <Grid container>
            <Grid item xs={12}>
                <Heading text={"Access tokens"} fontSize="1.5rem" fontWeight="bold"/>
            </Grid>
            <Grid item xs={12}> 
              {/* Token managing */}
              <ManageAccessTokens/>
            </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* Requests history  */}
        {/* {` Requests history `} */}
        <div>
          <Grid container>
            <Grid item xs={12}>
                <Heading text={"History"} fontSize="1.5rem" fontWeight="bold"/>
            </Grid>
            <Grid item xs={2} >
              {/* Sub options 1.List of pending,resolved and denied requests*/}
              <div style={{marginTop:"5%",padding:"5%",borderRight: "1px solid #7ea69f"}}>
                <div style={{margin:"5%",cursor: "pointer"}} onClick={() =>{handleScreenChangeForHistory(0)}}>
                <Heading text={"Pending Requests"} fontSize="1rem"/>
                </div>
                <Divider/>
                <div style={{margin:"5%",cursor: "pointer"}} onClick={() =>{handleScreenChangeForHistory(1)}}>
                <Heading text={"Resovled Requests"} fontSize="1rem"/>
                </div>
                <Divider/>
                <div style={{margin:"5%",cursor: "pointer"}} onClick={() =>{handleScreenChangeForHistory(2)}}>
                <Heading text={"Denied Requests"} fontSize="1rem"/>
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
    </Box>
  );
}
