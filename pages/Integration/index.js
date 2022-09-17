import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import NavbarWraper from "../../ReactComponents/HomePage-Navbar/NavbarWraper";
import Heading from "../../Support/Heading";
import { CaretRightOutlined } from "@ant-design/icons";
import { Button, Collapse } from "antd";
const { Panel } = Collapse;
import "antd/dist/antd.css";

const useStyles = makeStyles({
  root: {
    marginTop: "5%",
  },
});
const Index = () => {
  const classes = useStyles();
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
        <div>
          <Grid container>
            <Grid item xs={4}>
              <Collapse
                bordered={true}
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
                      <Button type="link">Service manager account</Button>
                    </li>
                    <li>
                      <Button type="link">Developer account.</Button>
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
                      <Button type="link">
                        Downloading and installing desktop applications
                      </Button>
                    </li>
                    <li>
                      <Button type="link">
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
                  <p>{"HELL"}</p>
                </Panel>

               
              </Collapse>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default NavbarWraper(Index);
