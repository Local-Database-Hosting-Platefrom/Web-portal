import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
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
  const [tabsList, setTabsList] = useState([
    {
      tabLable: "Manage Host Access Url",
    },
    {
      tabLable: "Manage Remote Database Access Url",
    },
    {
      tabLable: "Manage User Roles",
    },
    

  ]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        {` Manage Host Access Url `}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* Manage Remote Database Access Url  */}
        {`  Manage Remote Database Access Url`}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* Manage User Roles  */}
        {` Manage User Roles `}
      </TabPanel>
     
    </Box>
  );
}
