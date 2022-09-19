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
import ConnectDesktopApplicationToServiceManager from "../../ReactComponents/IntegrationPages/ConnectDesktopApplicationToServiceManager";
import AllowOrRistrictSharedDatabases from "../../ReactComponents/IntegrationPages/AllowOrRistrictSharedDatabases";
import LiveRequestLogs from "../../ReactComponents/IntegrationPages/LiveRequestLogs";
import ViewAndManageHostConnectionRequests from "../../ReactComponents/IntegrationPages/ViewAndManageHostConnectionRequests";
import ViewAndManageDeveloperConnectionRequests from "../../ReactComponents/IntegrationPages/ViewAndManageDeveloperConnectionRequests";
import ViewDevelopersRequestsHistory from "../../ReactComponents/IntegrationPages/ViewDevelopersRequestsHistory";
import AllowOrRistrictHostAccessUrl from "../../ReactComponents/IntegrationPages/AllowOrRistrictHostAccessUrl";
import AllowOrRistrictOpenAPIs from "../../ReactComponents/IntegrationPages/AllowOrRistrictOpenAPIs";
import CreateOpenAPI from "../../ReactComponents/IntegrationPages/CreateOpenAPI";
import DeleteAccount from "../../ReactComponents/IntegrationPages/DeleteAccount";
import MasterControl from "../../ReactComponents/IntegrationPages/MasterControl";
import ServiceManagerStatistics from "../../ReactComponents/IntegrationPages/ServiceManagerStatistics";
import ConnectDeveloperAccountToServiceManager from "../../ReactComponents/IntegrationPages/ConnectDeveloperAccountToServiceManager";
import UsingOpenAPI from "../../ReactComponents/IntegrationPages/UsingOpenAPI";
import DeveloperStatistics from "../../ReactComponents/IntegrationPages/DeveloperStatistics";
import UsingHostAccessUrlInReactProject from "../../ReactComponents/IntegrationPages/UsingHostAccessUrlInReactProject";

const useStyles = makeStyles({
  root: {
    marginTop: "5%",
  },
});
const Index = () => {
  const classes = useStyles();
  const [openedScreen, setOpenedScreen] = useState(
    <CreatingServiceManagerAccount />
  );

  const changeScreen = (index) => {
    switch (index) {
      case 0:
        setOpenedScreen(<CreatingServiceManagerAccount />);
        break;
      case 1:
        setOpenedScreen(<CreatingDeveloperAccount />);
        break;
      case 2:
        setOpenedScreen(<DownloadingAndInstallingDesktopApplication />);
        break;
      case 3:
        setOpenedScreen(<ConfiguringDeskAppToConnectWithRDBMS />);
        break;
      case 4:
        setOpenedScreen(<ConnectDesktopApplicationToServiceManager />);
        break;
      case 5:
        setOpenedScreen(<AllowOrRistrictSharedDatabases />);
        break;
      case 6:
        setOpenedScreen(<LiveRequestLogs />);
        break;
      case 7:
        setOpenedScreen(<ViewAndManageHostConnectionRequests />);
        break;
      case 8:
        setOpenedScreen(<ViewAndManageDeveloperConnectionRequests />);
        break;
      case 9:
        setOpenedScreen(<ViewDevelopersRequestsHistory />);
        break;
      case 10:
        setOpenedScreen(<AllowOrRistrictHostAccessUrl />);
        break;
      case 11:
        setOpenedScreen(<AllowOrRistrictOpenAPIs />);
        break;
      case 12:
        setOpenedScreen(<CreateOpenAPI />);
        break;
      case 13:
        setOpenedScreen(<DeleteAccount />);
        break;
      case 14:
        setOpenedScreen(<MasterControl />);
        break;
      case 15:
        setOpenedScreen(<ServiceManagerStatistics />);
        break;
      case 16:
        setOpenedScreen(<ConnectDeveloperAccountToServiceManager   />);
        break;
      case 17:
        setOpenedScreen(<UsingOpenAPI />);
        break;
      case 18:
        setOpenedScreen(<LiveRequestLogs />);
        break;
      case 19:
        setOpenedScreen(<DeveloperStatistics />);
        break;
      case 20:
        setOpenedScreen(<UsingHostAccessUrlInReactProject />);
          break;  
      default:
        break;
    }
  };

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
        <div style={{ marginTop: "3%" }}>
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
                      <Button
                        type="link"
                        onClick={() => {
                          changeScreen(0);
                        }}
                      >
                        Service manager account
                      </Button>
                    </li>
                    <li>
                      <Button
                        type="link"
                        onClick={() => {
                          changeScreen(1);
                        }}
                      >
                        Developer account.
                      </Button>
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
                      <Button
                        type="link"
                        onClick={() => {
                          changeScreen(2);
                        }}
                      >
                        Downloading and installing desktop applications
                      </Button>
                    </li>
                    <li>
                      <Button
                        type="link"
                        onClick={() => {
                          changeScreen(3);
                        }}
                      >
                        Configuring desktop application to access RDBMS
                      </Button>
                    </li>
                    <li>
                      <Button
                        type="link"
                        onClick={() => {
                          changeScreen(4);
                        }}
                      >
                        Connect host to service managers
                      </Button>
                    </li>
                    <li>
                      <Button
                        type="link"
                        onClick={() => {
                          changeScreen(5);
                        }}
                      >
                        Allowing/Restring shared databases
                      </Button>
                    </li>
                    <li>
                      <Button
                        type="link"
                        onClick={() => {
                          changeScreen(6);
                        }}
                      >
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
                      <Button
                        type="link"
                        onClick={() => {
                          changeScreen(7);
                        }}
                      >
                        View/Manage host connection requests
                      </Button>
                    </li>
                    <li>
                      <Button
                        type="link"
                        onClick={() => {
                          changeScreen(8);
                        }}
                      >
                        View/Manage developer connection requests
                      </Button>
                    </li>
                    <li>
                      <Button
                        type="link"
                        onClick={() => {
                          changeScreen(9);
                        }}
                      >
                        View developer’s request history
                      </Button>
                    </li>
                    <li>
                      <Button
                        type="link"
                        onClick={() => {
                          changeScreen(10);
                        }}
                      >
                        Restrict/Allow usage of any host
                      </Button>
                    </li>
                    <li>
                      <Button
                        type="link"
                        onClick={() => {
                          changeScreen(11);
                        }}
                      >
                        Restrict/Allow usage of Open APIs.
                      </Button>
                    </li>
                    <li>
                      <Button
                        type="link"
                        onClick={() => {
                          changeScreen(12);
                        }}
                      >
                        Create an Open API
                      </Button>
                    </li>
                    <li>
                      <Button
                        type="link"
                        onClick={() => {
                          changeScreen(13);
                        }}
                      >
                        Delete account
                      </Button>
                    </li>
                    <li>
                      <Button
                        type="link"
                        onClick={() => {
                          changeScreen(14);
                        }}
                      >
                        Master control
                      </Button>
                    </li>
                    <li>
                      <Button
                        type="link"
                        onClick={() => {
                          changeScreen(15);
                        }}
                      >
                        View statistics summary
                      </Button>
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
                      <Button
                        type="link"
                        onClick={() => {
                          changeScreen(16);
                        }}
                      >
                        Connect to a service manager
                      </Button>
                    </li>
                    <li>
                      <Button
                        type="link"
                        onClick={() => {
                          changeScreen(17);
                        }}
                      >
                        Use Open APIs.
                      </Button>
                    </li>
                    {/* <li>
                      <Button
                        type="link"
                        onClick={() => {
                          changeScreen(18);
                        }}
                      >
                        Use Host Access Url in react project
                      </Button>
                    </li> */}
                    <li>
                      <Button
                        type="link"
                        onClick={() => {
                          changeScreen(19);
                        }}
                      >
                        View statistics summary
                      </Button>
                    </li>
                  </ul>
                </Panel>
                <Panel
                  header="Using In React  Application"
                  key="5"
                  className="site-collapse-custom-panel"
                >
                  <ul>
                  <li>
                      <Button
                        type="link"
                        onClick={() => {
                          changeScreen(20);
                        }}
                      >
                        React web application
                      </Button>
                    </li>
                  </ul>
                </Panel>
              </Collapse>
            </Grid>
            <Grid item xs={8}>
              <div
                style={{
                  borderLeft: "1px solid black",
                  marginLeft: "2%",
                  minHeight: "30rem",
                }}
              >
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
