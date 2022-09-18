import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import NavbarWraper from "../../ReactComponents/HomePage-Navbar/NavbarWraper";
import Heading from "../../Support/Heading";
import { CaretRightOutlined } from "@ant-design/icons";
import { Button, Collapse } from "antd";
const { Panel } = Collapse;
import "antd/dist/antd.css";
import { useState } from "react";
import CreatingServiceManagerAccount from "../../ReactComponents/IntegrationPages/CreatingServiceManagerAccount";
import FooterWraper from "../../ReactComponents/HomePage-Footer/FooterWraper";
import CreatingDeveloperAccount from "../../ReactComponents/IntegrationPages/CreatingDeveloperAccount";
import DownloadingAndInstallingDesktopApplication from "../../ReactComponents/IntegrationPages/DownloadingAndInstallingDesktopApplication";
import ConfiguringDeskAppToConnectWithRDBMS from "../../ReactComponents/IntegrationPages/ConfiguringDeskAppToConnectWithRDBMS";

const useStyles = makeStyles({
  root: {
    marginTop: "5%",
  },
});
const Index = () => {
  const classes = useStyles();
  const [openedScreen,setOpenedScreen]=useState(<CreatingServiceManagerAccount/>);

  const changeScreen=(index)=>{
    switch (index) {
      case 0:
        setOpenedScreen(<CreatingServiceManagerAccount/>)
        break;
      case 1:
          setOpenedScreen(<CreatingDeveloperAccount/>)
          break;
      case 2:
            setOpenedScreen(<DownloadingAndInstallingDesktopApplication/>)
            break; 
      case 3:
            setOpenedScreen(<ConfiguringDeskAppToConnectWithRDBMS/>)
              break;          
      default:
        break;
    }
  }

  return (
    <div className={classes.root}>
      <Container>
        <div
          style={{
            marginTop: "10%",
            borderBottom: "1px solid black",
            padding: "0.3rem",
          }}
        >
          <Heading text={"Integration"} fontWeight="bold" fontSize="2rem" />
        </div>
        <div style={{marginTop:"3%"}}>
          <Grid container>
            <Grid item xs={4}>
              <Collapse
                bordered={false}
                expandIcon={({ isActive }) => (
                  <CaretRightOutlined rotate={isActive ? 90 : 0} />
                )}
                className="site-collapse-custom-collapse"
              >
                <Panel
                  header="Accounts"
                  key="1"
                  className="site-collapse-custom-panel"
                >
                  <ul>
                    <li>
                      <Button type="link" onClick={()=>{changeScreen(0)}}>Service manager account</Button>
                    </li>
                    <li>
                      <Button type="link" onClick={()=>{changeScreen(1)}}>Developer account.</Button>
                    </li>
                  </ul>
                </Panel>
                <Panel
                  header="Desktop Application"
                  key="2"
                  className="site-collapse-custom-panel"
                >
                  <ul style={{ width: "5rem" }}>
                    <li>
                      <Button type="link" onClick={()=>{changeScreen(2)}}>
                        Downloading and installing desktop applications
                      </Button>
                    </li>
                    <li>
                      <Button type="link"  onClick={()=>{changeScreen(3)}}>
                        Configuring desktop application to access RDBMS
                      </Button>
                    </li>
                    <li>
                      <Button type="link">
                        Connect host to service managers
                      </Button>
                    </li>
                    <li>
                      <Button type="link">
                        Allowing/Restring shared databases
                      </Button>
                    </li>
                    <li>
                      <Button type="link">
                        Live requests logs on desktop applications
                      </Button>
                    </li>
                  </ul>
                </Panel>
                <Panel
                  header="Service Manager Portal"
                  key="3"
                  className="site-collapse-custom-panel"
                >
                  <ul style={{ width: "5rem" }}>
                    <li>
                      <Button type="link">
                        View/Manage host connection requests
                      </Button>
                    </li>
                    <li>
                      <Button type="link">
                        View/Manage developer connection requests
                      </Button>
                    </li>
                    <li>
                      <Button type="link">
                        View developer’s request history
                      </Button>
                    </li>
                    <li>
                      <Button type="link">
                        Restrict/Allow usage of any host
                      </Button>
                    </li>
                    <li>
                      <Button type="link">
                        Restrict/Allow usage of Open APIs.
                      </Button>
                    </li>
                    <li>
                      <Button type="link">Create an Open API</Button>
                    </li>
                    <li>
                      <Button type="link">Delete account</Button>
                    </li>
                    <li>
                      <Button type="link">Master control</Button>
                    </li>
                    <li>
                      <Button type="link">View statistics summary</Button>
                    </li>
                  </ul>
                </Panel>
                <Panel
                  header="Developer Portal "
                  key="4"
                  className="site-collapse-custom-panel"
                >
                  <ul style={{ width: "5rem" }}>
                    <li>
                      <Button type="link">Connect to a service manager</Button>
                    </li>
                    <li>
                      <Button type="link">Use Open APIs.</Button>
                    </li>
                    <li>
                      <Button type="link">
                        Use Host Access Url in react project
                      </Button>
                    </li>
                    <li>
                      <Button type="link">View statistics summary</Button>
                    </li>
                  </ul>
                </Panel>
                <Panel
                  header="Using In React Web Application"
                  key="5"
                  className="site-collapse-custom-panel"
                >
                  
                </Panel>

               
              </Collapse>
            </Grid>
            <Grid item xs={8}>
              <div style={{borderLeft:"1px solid black",marginLeft:"2%",minHeight:"30rem"}}>
                  {openedScreen}
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default FooterWraper(NavbarWraper(Index));
