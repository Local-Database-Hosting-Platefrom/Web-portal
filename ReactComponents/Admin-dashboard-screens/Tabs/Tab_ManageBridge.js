import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import ListOfHostAccessUrl from '../Lists/ListOfHostAccessUrls'
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import ManageConsumerRole from "../Forms/ManageConsumerRole"
import Heading from "../../../Support/Heading";
import ListOfRemoteDatabaseAccessUrls from "../Lists/ListOfRemoteDatabaseAccessUrls";
import CreateRemoteDatabaseAccessUrl from '../Forms/CreateRemoteDatabaseAccessUrl'
import ListOfRoles from "../Lists/ListOfRoles"
import Divider from "@mui/material/Divider";
import { Button } from "antd";
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

export default function Tab_ManageBridge() {
  const [value, setValue] = useState(0);
  const [currentOpenedScreen, setCurrentOpenedScreen]= useState(<ListOfHostAccessUrl/>);
 
  const [tabsList, setTabsList] = useState([
    {
      tabLable: "Local database access urls",
    },
    {
      tabLable: "Open APIs",
    },
    // {
    //   tabLable: "Manage User Roles",
    // },
  ]);
  useEffect(()=>{
    if(value==0){
      setCurrentOpenedScreen(<ListOfHostAccessUrl/>)
    }else if (value==1){
      setCurrentOpenedScreen(<ListOfRemoteDatabaseAccessUrls/>)
    }else{
      setCurrentOpenedScreen(<ListOfRoles/>)
    }},[value]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleScreenChange=(index)=>{
    switch(index) {
      case 0:
        setCurrentOpenedScreen(<ListOfRemoteDatabaseAccessUrls/>)
      break;
      case 1:
        setCurrentOpenedScreen(<CreateRemoteDatabaseAccessUrl/>)
      break;
    }
  }
  const handleScreenChangeForRoles=(index)=>{
    switch(index) {
      case 0:
        setCurrentOpenedScreen(<ListOfRoles/>)
      break;
      case 1:
        setCurrentOpenedScreen(<ManageConsumerRole/>)
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
        {/*Manage Host Access Url */}
        {/* {` Manage Host Access Url `} */}
        <div>
          <Grid container>
            {/* <Grid item xs={12}>
                <Heading text={"Host Access Urls"} fontSize="1.5rem" fontWeight="bold"/>
            </Grid> */}
            <Grid item xs={12}>
                <ListOfHostAccessUrl/>
            </Grid>
         </Grid>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* Manage Remote Database Access Url  */}
        {/* {`  Manage Remote Database Access Url`} */}
        <div>
          <Grid container>
            {/* <Grid item xs={12}>
                <Heading text={"Remote Database Access Urls"} fontSize="1.5rem" fontWeight="bold"/>
            </Grid> */}
            <Grid item xs={2} >
              {/* Sub options 1.List of consumer account and 2.Create new user*/}
              <div style={{marginTop:"5%",padding:"5%",borderRight: "1px solid #7ea69f"}}>
                <div style={{margin:"5%",cursor: "pointer"}} onClick={() =>{handleScreenChange(0)}}>
                {/* <Heading text={"All Open APIs"} fontSize="1rem"/> */}
                <Button type="secondary" shape="round" style={{width:"100%"}} size={"middle"} >View Open APIs</Button>
  
                </div>
                <Divider/>
                <div style={{margin:"5%",cursor: "pointer"}} onClick={() =>{handleScreenChange(1)}}>
                <Button type="secondary" shape="round" style={{width:"100%"}} size={"middle"} >Create Open APIs</Button>
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
        {/* Manage User Roles  */}
        {/* {` Manage User Roles `} */}
        <div>
          <Grid container>
            {/* <Grid item xs={12}>
                <Heading text={"Manage Consumer Roles"} fontSize="1.5rem" fontWeight="bold"/>
            </Grid> */}
            {/* <Grid item xs={2} >
              <div style={{marginTop:"5%",padding:"5%",borderRight: "1px solid #7ea69f"}}>
                <div style={{margin:"5%",cursor: "pointer"}} onClick={() =>{handleScreenChangeForRoles(0)}}>
                <Heading text={"All Roles"} fontSize="1rem"/>
                </div>
                <Divider/>
                <div style={{margin:"5%",cursor: "pointer"}} onClick={() =>{handleScreenChangeForRoles(1)}}>
                <Heading text={"Create New Role"} fontSize="1rem"/>
                </div>
                <Divider/>
              </div>
            </Grid> */}
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
