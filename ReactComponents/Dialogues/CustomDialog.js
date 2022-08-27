// import Button from "@mui/material/Button";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import { Radio, Space, Typography, Switch, Card } from "antd";
const { Text, Title, Link } = Typography;
import {
  FormControlLabel,
  FormGroup,
  Grid,
  useMediaQuery,
} from "@mui/material";
import dialogueTypes from "./dialogueTypes";
import CustomButton from "../../Support/CustomButton";
import Heading from "../../Support/Heading";
import { useEffect } from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";

import { Button, Modal } from "antd";
import openNotificationWithIcon from "./Notification";
import { useState } from "react";
import {
  GENERATE_AND_UPDATE_APIKEY,
  GENERATE_HOST_ACCESS_URL_TOKEN,
  MAKE_CON_REQUEST_FOR_DEV_TO_ADMIN,
} from "../../request-manager/requestUrls";
import { sendResquestToCentralAPI } from "../../request-manager/requestManager";
import { FETCHED } from "../../request-manager/responseCodes";

import { Checkbox, Divider } from "antd";
const CheckboxGroup = Checkbox.Group;

// const hostsForMakingRequests = ["Apple", "Pear", "Orange"];

const gridStyle = {
  width: "50%",
  textAlign: "left",
};

export default function CustomDialog({
  handleClickOpen,
  alertType,
  handleCloseEvent,
  open,
  alertMessage,
  alertTitle,
  handleOkEvent = null,
  handleNoEvent = null,
  listOfHosts = null,
}) {
  const isMediumScreen = useMediaQuery("(min-width:600px)");
  const [accessRole, setAccessRole] = React.useState("");

  const [isAutoTokenGeneratingAllowed, setIsAutoTokenGeneratingAllowed] =
    React.useState(true);

  const [isLdUrlEnabled, setIsLdUrlEnabled] = React.useState(null);
  const [isOpenAPIEnabled, setIsOpenAPIEnabled] = React.useState(null);
  const [isOpenAPIPublic, setIsOpenAPIPublic] = React.useState(null);

  const [loadingsForGeneratingToken, setLoadingsForGeneratingToken] = useState(
    []
  );

  const [
    loadingsForMakingAndUpdatingRequest,
    setLoadingsForMakingAndUpdatingRequest,
  ] = useState([]);

  const [loadingsForGeneratingAPIKey, setLoadingsForGeneratingAPIKey] =
    useState([]);
  const [areWeGeneratingApiKey, setAreWeGeneratingApiKey] = useState(false);

  const [selectedHostTitle, setSelectedHostTitle] = useState("Select Host");

  const [selectedtokenExpiryTime, setSelectedtokenExpiryTime] = useState("1h");
  const [selectedtokenExpiryTimeTitle, setSelectedtokenExpiryTimeTitle] =
    useState("Expiry time");

  const [isTokenGenerated, setIsTokenGenerated] = useState(false);
  const [url, setUrl] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [selectedHost, setSelectedHost] = useState({});
  const [jwtToken, setJwtToken] = useState(null);
  const [generatedApiKey, setGeneratedApiKey] = useState("DEFAULT_KEY");

  const [checkedListOfHosts, setCheckedListOfHosts] = useState();
  const [indeterminateButton, setIndeterminateButton] = useState(true);
  const [checkAllHosts, setCheckAllHosts] = useState(false);

  const onChange_HostSelection = (list) => {
    setCheckedListOfHosts(list);
    setIndeterminateButton(
      !!list.length &&
        list.length < alertMessage.plainNamesOfAllProvidedDatabases.length
    );
    setCheckAllHosts(
      list.length === alertMessage.plainNamesOfAllProvidedDatabases.length
    );
  };

  const onCheckAllHostsChange_HostSelection = (e) => {
    setCheckedListOfHosts(
      e.target.checked ? alertMessage.plainNamesOfAllProvidedDatabases : []
    );
    setIndeterminateButton(false);
    setCheckAllHosts(e.target.checked);
  };

  const handleTokenGeneration = (event) => {
    setIsAutoTokenGeneratingAllowed(event.target.checked);
  };

  const [listOfAccessRole, setListOfAccessRole] = React.useState([
    {
      roleTitle: "Read Only",
      roleValue: 1201,
    },
    {
      roleTitle: "Write Only",
      roleValue: 1202,
    },
    {
      roleTitle: "Read & Write",
      roleValue: 1203,
    },
  ]);

  const handleChange = (event) => {
    setAccessRole(event.target.value);
  };

  useEffect(() => {
    // if (alertMessage.status) setIsLdUrlEnabled();
    setAreWeGeneratingApiKey(false);
  }, [alertMessage]);

  const handelGenerateToken = (index) => {
    if (selectedtokenExpiryTime != null && setSelectedHost != null) {
      setLoadingsForGeneratingToken((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
      });

      sendResquestToCentralAPI("POST", GENERATE_HOST_ACCESS_URL_TOKEN, {
        hostId: selectedHost.hostId,
        developerEmail: JSON.parse(localStorage.getItem("loggedInUser"))
          .responsePayload.email,
        expiresIn: selectedtokenExpiryTime,
      }).then(async (success) => {
        const data = await success.json();
        console.log("Response  : ", data);
        if (data.responseCode == FETCHED) {
          setJwtToken(data.responsePayload.jwtToken);
          setUrl(data.responsePayload.host[0].hostAcessUrl.url);
          console.log(data.responsePayload.host[0].hostAcessUrl.url);
          setSecretKey(
            JSON.parse(localStorage.getItem("loggedInUser")).responsePayload
              .email
          );
          setIsTokenGenerated(true);
          setLoadingsForGeneratingToken((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = false;
            return newLoadings;
          });
          openNotificationWithIcon(
            "info",
            "Sever Response",
            data.responseMessage,
            "bottom"
          );
        } else {
          openNotificationWithIcon(
            "error",
            "Sever Response",
            data.responseMessage,
            "bottom"
          );
          setLoadingsForGeneratingToken((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = false;
            return newLoadings;
          });
        }
      });
    } else {
      openNotificationWithIcon(
        "error",
        "Invalid input",
        "Kindly select any host..",
        "top"
      );
    }
  };

  const handleGenerateKey = (index) => {
    const useData = JSON.parse(localStorage.getItem("loggedInUser"));
    const email = useData.responsePayload.email;

    setLoadingsForGeneratingAPIKey((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    sendResquestToCentralAPI("POST", GENERATE_AND_UPDATE_APIKEY, {
      email,
    }).then(
      async (success) => {
        setLoadingsForGeneratingAPIKey((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = false;
          return newLoadings;
        });
        const response = await success.json();
        console.log("api key", response);
        localStorage.setItem("apiKey", response.responsePayload);
        setGeneratedApiKey(response.responsePayload);
        openNotificationWithIcon(
          "info",
          "Server response",
          "API Key generated.",
          "bottom"
        );
      },
      (error) => {
        console.log("Error", error);
        openNotificationWithIcon(
          "error",
          "Server error",
          JSON.stringify(error),
          "bottom"
        );
      }
    );
  };

  const handleConnectionRequest = (index) => {
    const userData = JSON.parse(localStorage.getItem("loggedInUser"));
    const developerId = userData.responsePayload._id;
    let listOfDatabases = checkedListOfHosts.map((hostName) => {
      let hostId = null;
      alertMessage.serviceProvider_ConnectedHosts.forEach((host) => {
        if (host.hostName == hostName) {
          hostId = host.hostId;
        }
      });
      return hostId;
    });

    setLoadingsForMakingAndUpdatingRequest((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    if(listOfDatabases.length!=0){
    sendResquestToCentralAPI("POST", MAKE_CON_REQUEST_FOR_DEV_TO_ADMIN, {
      listOfDatabases: listOfDatabases,
      adminId: alertMessage.serviceProviderId,
      developerId: developerId,
      developerName:
        userData.responsePayload.firstName +
        " " +
        userData.responsePayload.lastName,
      developerEmail: userData.responsePayload.email,
      requestType: alertMessage.connectionRequest == null ? "new" : "update",
      requestId:
        alertMessage.connectionRequest == null
          ? null
          : alertMessage.connectionRequest._id,
    }).then(
      async (success) => {
        const response = await success.json();
        // console.log("Made connection request", response);
        openNotificationWithIcon(
          "info",
          "Server response",
          response.responseMessage,
          "bottom"
        );
        setLoadingsForMakingAndUpdatingRequest((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = false;
          return newLoadings;
        });
        handleOkEvent();
      },
      (error) => {
        console.log("Error", error);
        openNotificationWithIcon(
          "error",
          "Server response",
          JSON.stringify(error)
        );
        setLoadingsForMakingAndUpdatingRequest((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = false;
          return newLoadings;
        });
      }
    );
    }else{
      openNotificationWithIcon("error","Invalid input","Please select databases before making request","bottom")
    }
  };

  return (
    <div>
      {alertType == dialogueTypes.SETTING_UP_ENVIRONMENT && (
        <div>
          <Modal visible={open} closable={false} footer={null}>
            <Grid container>
              <Grid item xs={4}>
                <img
                  src="/setting-up-enviroment-1.gif"
                  width="200px"
                  height="200px"
                />
              </Grid>
              <Grid item xs={8} style={{ padding: "1.5rem" }}>
                <div>
                  <Heading
                    text={alertTitle}
                    fontSize={"1.5rem"}
                    fontWeight="bold"
                  />
                </div>
                <div style={{ marginTop: "5%" }}>
                  <Heading text={alertMessage} fontSize={"0.8rem"} />
                </div>
              </Grid>
            </Grid>
          </Modal>
        </div>
      )}
      {alertType == dialogueTypes.OPEN_API_SELECTION_OPTIONS_DEV && (
        <div>
          <Modal
            visible={open}
            closable={true}
            onCancel={handleNoEvent}
            footer={null}
            title={"Perform action on selected url"}
          >
            <Grid container>
              <Grid item xs={12}>
                <div style={{ textAlign: "center" }}>
                  <Button
                    type="secondary"
                    shape="round"
                    style={{ width: "50%" }}
                    size={"middle"}
                    onClick={() => {
                      handleOkEvent();
                      // console.log(alertMessage[0].)
                      const useData = JSON.parse(
                        localStorage.getItem("loggedInUser")
                      );
                      let apiKey = "GENERATE_NEW_KEY";
                      if (useData) apiKey = useData.responsePayload.apiKey;
                      window
                        .open(alertMessage[0].urlAddress + apiKey, "_blank")
                        .focus();
                    }}
                  >
                    Open Url In Browser
                  </Button>
                </div>
                <div style={{ textAlign: "center", marginTop: "2%" }}>
                  <Button
                    type="secondary"
                    shape="round"
                    style={{ width: "50%" }}
                    size={"middle"}
                    onClick={() => {
                      openNotificationWithIcon(
                        "info",
                        "Note",
                        "Url address is  copied to clip board",
                        "bottom"
                      );
                      navigator.clipboard.writeText(alertMessage[0].urlAddress);
                      handleOkEvent();
                    }}
                  >
                    Copy url address
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Modal>
        </div>
      )}

      {alertType == dialogueTypes.VIEW_DEV_CON_REQUEST && (
        <div>
          <Modal
            visible={open}
            closable={false}
            footer={null}
            title={"Connection Request"}
          >
            <div>
              {/* list of databases */}
              {/* selection of role */}
              {/* allow auto generating token */}
              {/* Accept/decline */}

              <Grid container>
                <Card>
                  <Card.Grid style={{ width: "50%", textAlign: "center" }}>
                    <Text keyboard style={{ fontSize: "1rem" }}>
                      Developer Name
                    </Text>
                    <Divider />
                    {alertMessage.developerName}
                  </Card.Grid>
                  <Card.Grid style={{ width: "50%", textAlign: "center" }}>
                  <Text keyboard style={{ fontSize: "1rem" }}>
                    Requested Databases 
                  </Text>
                  <Divider/>
                  {alertMessage.requestedHosts}
                  </Card.Grid>
                  <Card.Grid style={{ width: "100%", textAlign: "center" }}>
                  <Text keyboard style={{ fontSize: "1rem" }}>
                    Access Role 
                  </Text>
                  <Divider/>
                  <Radio.Group
                    defaultValue="a"
                    buttonStyle="solid"
                    style={{ marginLeft: "1%" }}
                    onChange_HostSelection={(e) => {
                      // console.log(e);
                      setAccessRole(e.target.value);
                    }}
                  >
                    <Radio.Button value="1201">Read Only</Radio.Button>
                    <Radio.Button value="1202">Write Only</Radio.Button>
                    <Radio.Button value="1203">Read & Write</Radio.Button>
                  </Radio.Group>
                  </Card.Grid>
                
                </Card>
                {/* <Grid item xs={12}>
                  <Text keyboard style={{ fontSize: "1.2rem" }}>
                    Developer Name : {alertMessage.developerName}
                  </Text>
                </Grid>
                <Grid item xs={12} style={{ marginTop: "2%" }}>
                  <Text keyboard style={{ fontSize: "1.2rem" }}>
                    Requested Databases : {alertMessage.requestedHosts}
                  </Text>
                </Grid>
                <Grid item xs={12} style={{ marginTop: "2%" }}>
                  
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ marginTop: "2%", marginLeft: "1%" }}
                >
                  <Checkbox
                    checked={isAutoTokenGeneratingAllowed}
                    onChange_HostSelection={handleTokenGeneration}
                  >
                    Is generating tokens allowed ?
                  </Checkbox>
                </Grid> */}

                <Grid
                  item
                  xs={6}
                  style={{ textAlign: "center", marginTop: "4%" }}
                >
                  <Button
                    type="secondary"
                    shape="round"
                    style={{ width: "70%" }}
                    size={"middle"}
                    onClick={() => {
                      handleOkEvent({
                        value: "Decline",
                        accessRole: accessRole,
                        isAutoTokenGeneratingAllowed:
                          true,
                          // TODO: Replace it in future
                          // isAutoTokenGeneratingAllowed 
                      });
                    }}
                  >
                    Decline
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{ textAlign: "center", marginTop: "4%" }}
                >
                  <Button
                    type="secondary"
                    shape="round"
                    style={{ width: "70%" }}
                    size={"middle"}
                    onClick={() => {
                      handleOkEvent({
                        value: "Accept",
                        accessRole: accessRole,
                        isAutoTokenGeneratingAllowed:
                          isAutoTokenGeneratingAllowed,
                      });
                    }}
                  >
                    Accept
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Modal>
        </div>
      )}

      {alertType == dialogueTypes.VIEW_DEV_CON_DETAILS && (
        <div>
          <Modal
            visible={open}
            closable={false}
            footer={null}
            title={"Update Connection Details"}
          >
            <div>
              {/* list of databases */}
              {/* selection of role */}
              {/* allow auto generating token */}
              {/* Accept/decline */}

              <Grid container>
                {/* <Grid item xs={12}>
                  <Text keyboard style={{ fontSize: "1.2rem" }}>
                    Developer Name : {alertMessage.developerName}
                  </Text>
                </Grid>
                <Grid item xs={12} style={{ marginTop: "2%" }}>
                  <Text keyboard style={{ fontSize: "1.2rem" }}>
                    Requested Databases : {alertMessage.requestedHosts}
                  </Text>
                </Grid> */}
                <Grid item xs={12} style={{ marginTop: "2%" }}>
                  <Radio.Group
                    defaultValue={alertMessage.assignedRole}
                    buttonStyle="solid"
                    style={{ marginLeft: "1%" }}
                    onChange_HostSelection={(e) => {
                      // console.log(e);
                      setAccessRole(e.target.value);
                    }}
                    // value={alertMessage[0].accessRole}
                  >
                    <Radio.Button value="1201">Read Only</Radio.Button>
                    <Radio.Button value="1202">Write Only</Radio.Button>
                    <Radio.Button value="1203">Read & Write</Radio.Button>
                  </Radio.Group>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ marginTop: "2%", marginLeft: "1%" }}
                >
                  <Checkbox
                    checked={isAutoTokenGeneratingAllowed}
                    onChange={handleTokenGeneration}
                  >
                    Is generating tokens allowed ?
                  </Checkbox>
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{ textAlign: "center", marginTop: "4%" }}
                >
                  <Button
                    type="secondary"
                    shape="round"
                    style={{ width: "70%" }}
                    size={"middle"}
                    onClick={() => {
                      handleOkEvent({
                        value: "Decline",
                        accessRole: accessRole,
                        isAutoTokenGeneratingAllowed:
                          isAutoTokenGeneratingAllowed,
                      });
                    }}
                  >
                    Decline
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{ textAlign: "center", marginTop: "4%" }}
                >
                  <Button
                    type="secondary"
                    shape="round"
                    style={{ width: "70%" }}
                    size={"middle"}
                    onClick={() => {
                      handleOkEvent({
                        value: "Accept",
                        accessRole: accessRole,
                        isAutoTokenGeneratingAllowed:
                          isAutoTokenGeneratingAllowed,
                      });
                    }}
                  >
                    Accept
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Modal>
        </div>
      )}

      {alertType == dialogueTypes.VIEW_LD_ACCESS_URL && (
        <div>
          <Modal
            visible={open}
            closable={false}
            footer={null}
            title={"URL Status"}
          >
            <Grid container>
              <Grid item xs={12}>
                <div style={{ textAlign: "center" }}>
                  <Switch
                    checkedChildren="Enabled"
                    unCheckedChildren="Disabled"
                    // defaultChecked
                    checked={
                      isLdUrlEnabled == null
                        ? alertMessage.status == "Enabled"
                          ? true
                          : false
                        : isLdUrlEnabled
                    }
                    onChange={(e) => {
                      console.log(e);
                      setIsLdUrlEnabled(e);
                    }}
                  />
                </div>
                <div style={{ textAlign: "center", marginTop: "2%" }}>
                  <Button
                    type="secondary"
                    shape="round"
                    style={{ width: "30%", marginTop: "5%" }}
                    size={"middle"}
                    onClick={() => {
                      handleOkEvent({ setedStatus: isLdUrlEnabled });
                    }}
                  >
                    Update
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Modal>
        </div>
      )}

      {alertType == dialogueTypes.VIEW_OPEN_API && (
        <div>
          <Modal
            visible={open}
            closable={false}
            footer={null}
            title={"Open API Settings"}
          >
            <Grid container>
              <Grid item xs={12}>
                <div style={{ textAlign: "center" }}>
                  <Switch
                    id="isEnable"
                    checkedChildren="Enabled"
                    unCheckedChildren="Disabled"
                    // defaultChecked
                    style={{ width: "30%" }}
                    checked={
                      isOpenAPIEnabled == null
                        ? alertMessage.status == "Enabled"
                          ? true
                          : false
                        : isOpenAPIEnabled
                    }
                    onChange={(e) => {
                      console.log(e);
                      setIsOpenAPIEnabled(e);
                    }}
                  />
                </div>
                <div style={{ textAlign: "center", marginTop: "3%" }}>
                  <Switch
                    id="isPublic"
                    checkedChildren="Public"
                    unCheckedChildren="Private"
                    // defaultChecked

                    style={{ width: "30%" }}
                    checked={
                      isOpenAPIPublic == null
                        ? alertMessage.isPublic == "Public"
                          ? true
                          : false
                        : isOpenAPIPublic
                    }
                    onChange={(e) => {
                      console.log(e);
                      setIsOpenAPIPublic(e);
                    }}
                  />
                </div>
                <Divider />
                <div style={{ textAlign: "center", marginTop: "1%" }}>
                  <Button
                    type="danger"
                    shape="round"
                    style={{ width: "30%", marginTop: "1%" }}
                    size={"middle"}
                    onClick={() => {
                      handleOkEvent({ action: "delete", payload: null });
                    }}
                  >
                    Delete
                  </Button>
                </div>
                <Divider />
              </Grid>
              <Grid item xs={6}>
                <div style={{ textAlign: "center" }}>
                  <Button
                    type="secondary"
                    shape="round"
                    style={{ width: "50%" }}
                    size={"middle"}
                    onClick={() => {
                      handleOkEvent(null);
                    }}
                  >
                    Close
                  </Button>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div style={{ textAlign: "center" }}>
                  <Button
                    type="primary"
                    shape="round"
                    style={{ width: "50%" }}
                    size={"middle"}
                    onClick={() => {
                      handleOkEvent({
                        action: "updateStates",
                        payload: {
                          isOpenAPIEnabled: isOpenAPIEnabled,
                          isOpenAPIPublic: isOpenAPIPublic,
                        },
                      });
                    }}
                  >
                    Save Changes
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Modal>
        </div>
      )}

      {alertType == dialogueTypes.VIEW_COMPLETE_REQUEST && (
        <div>
          <Modal visible={open} closable={false} footer={null} title={null}>
            <div>
              {/* Developer Name,Host Name,Request Query,Response */}
              <Card title="Request details">
                <Card.Grid style={gridStyle}>
                  <Text keyboard style={{ fontSize: "1rem" }}>
                    Developer Name
                  </Text>{" "}
                  <Divider /> {alertMessage.developerName}
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <Text keyboard style={{ fontSize: "1rem" }}>
                    Host Name
                  </Text>{" "}
                  <Divider /> {alertMessage.hostName}
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <Text keyboard style={{ fontSize: "1rem" }}>
                    Query
                  </Text>
                  <Divider />
                  <div style={{ height: "8rem", overflowY: "scroll" }}>
                    <Text style={{ fontSize: "1rem" }}>
                      <b> Query String : </b>{" "}
                      {
                        JSON.parse(alertMessage.key.request.requestPayload)
                          .query
                      }
                    </Text>
                    <Divider />
                    <Text style={{ fontSize: "1rem" }}>
                      <b> Database Name : </b>{" "}
                      {
                        JSON.parse(alertMessage.key.request.requestPayload)
                          .databaseName
                      }
                    </Text>
                  </div>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <Text keyboard style={{ fontSize: "1rem" }}>
                    <b> Host Response </b>
                  </Text>
                  <Divider />
                  <div style={{ height: "8rem", overflowY: "scroll" }}>
                    <Text style={{ fontSize: "1rem" }}>
                      <b> Response : </b>{" "}
                      {
                        JSON.parse(
                          alertMessage.key.request.requestResolvedPayload
                        ).response
                      }
                    </Text>
                  </div>
                </Card.Grid>
              </Card>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  style={{ textAlign: "center", marginTop: "4%" }}
                >
                  <Button
                    type="primary"
                    shape="round"
                    style={{ width: "20%" }}
                    size={"middle"}
                    onClick={() => {
                      handleOkEvent(null);
                    }}
                  >
                    Close
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Modal>
        </div>
      )}

      {alertType == dialogueTypes.INFO && (
        <div>
          <Dialog
            open={open}
            onClose={handleCloseEvent}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            maxWidth="sm"
          >
            {/* <DialogTitle id="alert-dialog-title">{alertTitle}</DialogTitle> */}
            <DialogContent>
              <div>
                <Grid container>
                  <Grid item md={8}>
                    <div style={{ fontSize: "1.7rem" }}>
                      {/* {alertTitle} */}
                    </div>
                  </Grid>
                  <Grid item md={4} style={{ textAlign: "right" }}>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={handleCloseEvent}
                    >
                      <CloseIcon />
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div>
                <DialogContentText id="alert-dialog-description">
                  <div>
                    <Grid container>
                      <Grid item xs={12}>
                        <div
                          style={{ fontSize: "1.7rem", textAlign: "center" }}
                        >
                          {alertTitle}
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-failure-factory-flaticons-flat-flat-icons-3.png" />
                        </div>
                        <div style={{ fontSize: "1rem", textAlign: "center" }}>
                          {alertMessage}
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        {handleOkEvent != null && (
                          <CustomButton
                            style={{
                              // marginLeft:isMediumScreen? "40%":"35%",
                              marginTop: isMediumScreen ? "3%" : "3%",
                              // left: isMediumScreen? "10":"",
                              backgroundColor: "#10365B",
                              fontSize: isMediumScreen ? "0.8rem" : "",
                            }}
                            onClick={() => {
                              // localStorage.setItem("isLoggedIn", true);
                              // navigation.push("/admin-dashboard");
                              handleOkEvent("re-login");
                            }}
                            name="Ok"
                          />
                        )}
                      </Grid>
                    </Grid>
                  </div>
                </DialogContentText>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}

      {alertType == dialogueTypes.INFO_WITHOUT_OK && (
        <div>
          <Dialog
            open={open}
            onClose={handleCloseEvent}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            maxWidth="sm"
          >
            {/* <DialogTitle id="alert-dialog-title">{alertTitle}</DialogTitle> */}
            <DialogContent>
              <div>
                <Grid container>
                  <Grid item md={8}>
                    <div style={{ fontSize: "1.7rem" }}>
                      {/* {alertTitle} */}
                    </div>
                  </Grid>
                  <Grid item md={4} style={{ textAlign: "right" }}>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={handleCloseEvent}
                    >
                      <CloseIcon />
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div>
                <DialogContentText id="alert-dialog-description">
                  <div>
                    <Grid container>
                      <Grid item xs={12}>
                        <div
                          style={{ fontSize: "1.7rem", textAlign: "center" }}
                        >
                          {alertTitle}
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-failure-factory-flaticons-flat-flat-icons-3.png" />
                        </div>
                        <div style={{ fontSize: "1rem", textAlign: "center" }}>
                          {alertMessage}
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </DialogContentText>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}

      {alertType == dialogueTypes.VIEW_DENIAL_REASON && (
        <div>
          <Modal visible={open} closable={false} footer={null} title={null}>
            <div>
              {/* Developer Name,Host Name,Request Query,Response */}
              <Card title="Request details">
                <Card.Grid style={gridStyle}>
                  <Text keyboard style={{ fontSize: "1rem" }}>
                    Developer Name
                  </Text>{" "}
                  <Divider /> {alertMessage.developerName}
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <Text keyboard style={{ fontSize: "1rem" }}>
                    Host Name
                  </Text>{" "}
                  <Divider /> {alertMessage.hostName}
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <Text keyboard style={{ fontSize: "1rem" }}>
                    Query
                  </Text>
                  <Divider />
                  <div style={{ height: "8rem", overflowY: "scroll" }}>
                    <Text style={{ fontSize: "1rem" }}>
                      <b> Query String : </b>{" "}
                      {
                        JSON.parse(alertMessage.key.request.requestPayload)
                          .query
                      }
                    </Text>
                    <Divider />
                    <Text style={{ fontSize: "1rem" }}>
                      <b> Database Name : </b>{" "}
                      {
                        JSON.parse(alertMessage.key.request.requestPayload)
                          .databaseName
                      }
                    </Text>
                  </div>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <Text keyboard style={{ fontSize: "1rem" }}>
                    <b> Denial Reason </b>
                  </Text>
                  <Divider />
                  <div style={{ height: "8rem", overflowY: "scroll" }}>
                    <Text style={{ fontSize: "1rem" }}>
                      {
                        JSON.parse(alertMessage.key.request.requestStatus)
                          .statusMessage
                      }
                    </Text>
                  </div>
                </Card.Grid>
              </Card>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  style={{ textAlign: "center", marginTop: "4%" }}
                >
                  <Button
                    type="primary"
                    shape="round"
                    style={{ width: "20%" }}
                    size={"middle"}
                    onClick={() => {
                      handleOkEvent(null);
                    }}
                  >
                    Close
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Modal>
        </div>
      )}

      {alertType == dialogueTypes.VIEW_HOST_PENDING_REQUEST && (
        <div>
          <Modal
            visible={open}
            closable={true}
            footer={null}
            title={"Host Connection Request"}
            onCancel={() => {
              handleNoEvent();
            }}
          >
            <Grid container>
              <Grid item xs={12}>
                <div style={{ textAlign: "center" }}>
                  <Button
                    type="primary"
                    shape="round"
                    style={{ width: "50%" }}
                    size={"middle"}
                    onClick={() => {
                      handleOkEvent({ payload: "Connect" });
                    }}
                  >
                    Connect
                  </Button>
                </div>
                <div style={{ textAlign: "center", marginTop: "2%" }}>
                  <Button
                    type="danger"
                    shape="round"
                    style={{ width: "50%" }}
                    size={"middle"}
                    onClick={() => {
                      handleOkEvent({ payload: "Decline" });
                    }}
                  >
                    Remove Permanently
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Modal>
        </div>
      )}

      {alertType == dialogueTypes.VIEW_HOST_CONNECTION && (
        <div>
          <Modal
            visible={open}
            closable={true}
            footer={null}
            title={"Set up the connection status"}
            onCancel={() => {
              handleNoEvent();
            }}
          >
            <Grid container>
              <Grid item xs={12}>
                <div style={{ textAlign: "center" }}>
                  <Button
                    type="primary"
                    shape="round"
                    style={{ width: "50%" }}
                    size={"middle"}
                    onClick={() => {
                      handleOkEvent({ payload: "Dis-connect" });
                    }}
                  >
                    Dis-connect
                  </Button>
                </div>
                <div style={{ textAlign: "center", marginTop: "2%" }}>
                  <Button
                    type="danger"
                    shape="round"
                    style={{ width: "50%" }}
                    size={"middle"}
                    onClick={() => {
                      handleOkEvent({ payload: "Decline" });
                    }}
                  >
                    Remove Permanently
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Modal>
        </div>
      )}

      {alertType == dialogueTypes.INVALID_LOGIN && (
        <div>
          <Dialog
            open={open}
            onClose={handleCloseEvent}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            maxWidth="sm"
          >
            {/* <DialogTitle id="alert-dialog-title">{alertTitle}</DialogTitle> */}
            <DialogContent>
              <div>
                <Grid container>
                  <Grid item md={8}>
                    <div style={{ fontSize: "1.7rem" }}>
                      {/* {alertTitle} */}
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div>
                <DialogContentText id="alert-dialog-description">
                  <div>
                    <Grid container>
                      <Grid item xs={12}>
                        <div
                          style={{ fontSize: "1.7rem", textAlign: "center" }}
                        >
                          {alertTitle}
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-failure-factory-flaticons-flat-flat-icons-3.png" />
                        </div>
                        <div style={{ fontSize: "1rem", textAlign: "center" }}>
                          {alertMessage}
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        {handleOkEvent != null && (
                          <CustomButton
                            style={{
                              // marginLeft:isMediumScreen? "40%":"35%",
                              marginTop: isMediumScreen ? "3%" : "3%",
                              // left: isMediumScreen? "10":"",
                              backgroundColor: "#10365B",
                              fontSize: isMediumScreen ? "0.8rem" : "",
                            }}
                            onClick={() => {
                              // localStorage.setItem("isLoggedIn", true);
                              // navigation.push("/admin-dashboard");
                              handleOkEvent("re-login");
                            }}
                            name="Accept"
                          />
                        )}
                      </Grid>
                    </Grid>
                  </div>
                </DialogContentText>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}

      {alertType == dialogueTypes.WARNING && (
        <div>
          <Dialog
            open={open}
            onClose={handleCloseEvent}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            maxWidth="sm"
          >
            {/* <DialogTitle id="alert-dialog-title">{alertTitle}</DialogTitle> */}
            <DialogContent>
              <div>
                <Grid container>
                  <Grid item md={8}>
                    <div style={{ fontSize: "1.7rem" }}>
                      {/* {alertTitle} */}
                    </div>
                  </Grid>
                  <Grid item md={4} style={{ textAlign: "right" }}>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={handleCloseEvent}
                    >
                      <CloseIcon />
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div>
                <DialogContentText id="alert-dialog-description">
                  <div>
                    <Grid container>
                      <Grid item xs={12}>
                        <div
                          style={{ fontSize: "1.7rem", textAlign: "center" }}
                        >
                          {alertTitle}
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-failure-factory-flaticons-flat-flat-icons-3.png" />
                        </div>
                        <div style={{ fontSize: "1rem", textAlign: "center" }}>
                          {alertMessage}
                        </div>
                      </Grid>
                      <Grid item xs={8}></Grid>
                      <Grid item xs={2} style={{ textAlign: "right" }}>
                        {handleOkEvent != null && (
                          <CustomButton
                            style={{
                              // marginLeft:isMediumScreen? "40%":"35%",
                              marginTop: isMediumScreen ? "3%" : "3%",
                              // left: isMediumScreen? "10":"",
                              backgroundColor: "red",
                              fontSize: isMediumScreen ? "0.8rem" : "",
                              marginTop: "1rem",
                            }}
                            onClick={() => {
                              // localStorage.setItem("isLoggedIn", true);
                              // navigation.push("/admin-dashboard");
                              handleNoEvent("No-Delete");
                            }}
                            name="Cancel"
                          />
                        )}
                      </Grid>
                      <Grid item xs={2} style={{ textAlign: "right" }}>
                        {handleNoEvent != null && (
                          <CustomButton
                            style={{
                              // marginLeft:isMediumScreen? "40%":"35%",
                              marginTop: isMediumScreen ? "3%" : "3%",
                              // left: isMediumScreen? "10":"",
                              backgroundColor: "#10365B",
                              fontSize: isMediumScreen ? "0.8rem" : "",
                              marginTop: "1rem",
                            }}
                            onClick={() => {
                              handleOkEvent("Delete");
                            }}
                            name="Yes"
                          />
                        )}
                      </Grid>
                    </Grid>
                  </div>
                </DialogContentText>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}

      {alertType == dialogueTypes.GET_TOKEN && (
        <div>
          <Modal
            visible={open}
            closable={true}
            onCancel={handleNoEvent}
            footer={null}
            title={"Generate token"}
          >
            <Grid container>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Dropdown.Button
                  overlay={
                    <Menu
                      onClick={(e) => {
                        console.log(JSON.parse(e.key));
                        setSelectedHostTitle(JSON.parse(e.key).hostName);
                        setSelectedHost(JSON.parse(e.key));
                      }}
                      items={alertMessage}
                    />
                  }
                >
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <Space>{selectedHostTitle}</Space>
                  </a>
                </Dropdown.Button>
              </Grid>
              <Grid
                item
                xs={12}
                style={{ textAlign: "center", marginTop: "2%" }}
              >
                <Dropdown.Button
                  overlay={
                    <Menu
                      onClick={(e) => {
                        console.log(e);
                        switch (e.key) {
                          case "1h":
                            setSelectedtokenExpiryTimeTitle("For 1 hour");
                            break;
                          case "1d":
                            setSelectedtokenExpiryTimeTitle("For 1 Day");
                            break;
                          case "1w":
                            setSelectedtokenExpiryTimeTitle("For 1 Week");
                            break;
                          case "30d":
                            setSelectedtokenExpiryTimeTitle("For 1 Month");
                            break;
                          case "365d":
                            setSelectedtokenExpiryTimeTitle("For 1 Year");
                            break;
                        }
                        setSelectedtokenExpiryTime(e.key);
                      }}
                      items={[
                        {
                          key: "1h",
                          label: <a>For 1 hour</a>,
                        },
                        {
                          key: "1d",
                          label: <a>For 1 Day</a>,
                        },
                        {
                          key: "1h",
                          label: <a>For 1 Week</a>,
                        },
                        {
                          key: "30d",
                          label: <a>For 1 Month</a>,
                        },
                        {
                          key: "365d",
                          label: <a>For 1 Year</a>,
                        },
                      ]}
                    />
                  }
                >
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <Space>{selectedtokenExpiryTimeTitle}</Space>
                  </a>
                </Dropdown.Button>
              </Grid>
              <Grid item xs={12}>
                <div style={{ textAlign: "center", marginTop: "2%" }}>
                  <Button
                    type="secondary"
                    shape="round"
                    style={{ width: "40%" }}
                    size={"middle"}
                    loading={loadingsForGeneratingToken[0]}
                    onClick={(e) => {
                      e.preventDefault();
                      handelGenerateToken(0);
                      // handleOkEvent(null);
                      // console.log(alertMessage[0].)
                      // const useData = JSON.parse(
                      //   localStorage.getItem("loggedInUser")
                      // );
                      // let apiKey = "GENERATE_NEW_KEY";
                      // if (useData) apiKey = useData.responsePayload.apiKey;
                      // window
                      //   .open(alertMessage[0].urlAddress + apiKey, "_blank")
                      //   .focus();
                    }}
                  >
                    {isTokenGenerated == false
                      ? "Generate token"
                      : "Re-generate token"}
                  </Button>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  paddingLeft: "20%",
                  paddingRight: "20%",
                  marginTop: "3%",
                }}
              >
                {isTokenGenerated == true && (
                  <div>
                    <Card>
                      <Card.Grid
                        style={{
                          width: "100%",
                          textAlign: "center",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          navigator.clipboard.writeText(jwtToken).then(
                            function () {
                              // console.log('Copied access token to clipboard ');
                              openNotificationWithIcon(
                                "info",
                                "Great..!!",
                                "Copied access token to clipboard",
                                "bottom"
                              );
                            },
                            function (err) {
                              // console.error('Could not copy access token to clipboard ', err);
                              openNotificationWithIcon(
                                "error",
                                "Shit..!!",
                                "Could not copy access token to clipboard",
                                "bottom"
                              );
                            }
                          );
                        }}
                      >
                        <Text style={{ fontSize: "1rem" }}>Access Token</Text>{" "}
                      </Card.Grid>

                      <Card.Grid
                        style={{
                          width: "100%",
                          textAlign: "center",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          navigator.clipboard.writeText(url).then(
                            function () {
                              // console.log('Copied access token to clipboard ');
                              openNotificationWithIcon(
                                "info",
                                "Great..!!",
                                "Copied url to clipboard",
                                "bottom"
                              );
                            },
                            function (err) {
                              // console.error('Could not copy url to clipboard ', err);
                              openNotificationWithIcon(
                                "error",
                                "Shit..!!",
                                "Could not copy access token to clipboard",
                                "bottom"
                              );
                            }
                          );
                        }}
                      >
                        <Text style={{ fontSize: "1rem" }}>Host URL</Text>{" "}
                      </Card.Grid>

                      <Card.Grid
                        style={{
                          width: "100%",
                          textAlign: "center",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          navigator.clipboard.writeText(secretKey).then(
                            function () {
                              // console.log('Copied access token to clipboard ');
                              openNotificationWithIcon(
                                "info",
                                "Great..!!",
                                "Copied secret key to clipboard",
                                "bottom"
                              );
                            },
                            function (err) {
                              // console.error('Could not copy secret key to clipboard ', err);
                              openNotificationWithIcon(
                                "error",
                                "Shit..!!",
                                "Could not copy access token to clipboard",
                                "bottom"
                              );
                            }
                          );
                        }}
                      >
                        <Text style={{ fontSize: "1rem" }}>Secret Key</Text>{" "}
                      </Card.Grid>
                    </Card>
                  </div>
                )}
              </Grid>
            </Grid>
          </Modal>
        </div>
      )}

      {alertType == dialogueTypes.GENERATE_AND_UPDATE_API_KEY && (
        <div>
          <Modal
            visible={open}
            closable={true}
            onCancel={handleNoEvent}
            footer={null}
            title={alertTitle}
          >
            <Grid container>
              <Grid item xs={12}>
                <div style={{ textAlign: "center" }}>
                  <Button
                    type="secondary"
                    shape="round"
                    style={{ width: "50%" }}
                    size={"middle"}
                    onClick={() => {
                      // handleOkEvent();
                      // console.log(alertMessage[0].)
                      const useData = JSON.parse(
                        localStorage.getItem("loggedInUser")
                      );
                      let apiKey = "GENERATE_NEW_KEY";
                      if (generatedApiKey != "DEFAULT_KEY") {
                        // apiKey = useData.responsePayload.apiKey;
                        navigator.clipboard.writeText(generatedApiKey);
                        openNotificationWithIcon(
                          "info",
                          "Great..",
                          "Newly generated API Key is copied to clip board",
                          "bottom"
                        );
                      } else if (useData) {
                        apiKey = useData.responsePayload.apiKey;
                        navigator.clipboard.writeText(apiKey);
                        openNotificationWithIcon(
                          "info",
                          "Great..",
                          "Old stored API Key is copied to clip board",
                          "bottom"
                        );
                      } else {
                        openNotificationWithIcon(
                          "error",
                          "Aww..",
                          "Found no user data.. Please re-login.",
                          "bottom"
                        );
                      }
                    }}
                  >
                    Copy API Key
                  </Button>
                </div>
                <div style={{ textAlign: "center", marginTop: "2%" }}>
                  <Button
                    type="secondary"
                    shape="round"
                    style={{ width: "50%" }}
                    size={"middle"}
                    loading={loadingsForGeneratingAPIKey[0]}
                    onClick={(e) => {
                      e.preventDefault();
                      handleGenerateKey(0);
                    }}
                  >
                    Generate API Key
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Modal>
        </div>
      )}

      {alertType == dialogueTypes.VIEW_REQUEST_DETAILS && (
        <div>
          <Modal visible={open} closable={false} footer={null} title={null}>
            <div>
              {/* Developer Name,Host Name,Request Query,Response */}
              <Card title="Request details">
                <Card.Grid hoverable={false} style={gridStyle}>
                  <Text keyboard style={{ fontSize: "1rem" }}>
                    Request Status
                  </Text>{" "}
                  <Divider />
                  {alertMessage.connectionRequest != null
                    ? alertMessage.connectionRequest.requestStatus
                    : ""}
                </Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                  <Text keyboard style={{ fontSize: "1rem" }}>
                    Access role
                  </Text>{" "}
                  <Divider />
                  {alertMessage.connectionRequest != null && (
                    <div>
                      {alertMessage.accessRole == null
                        ? " Once request is accepted then you will be assigned a role by admin"
                        : alertMessage.accessRole}
                    </div>
                  )}
                </Card.Grid>
                <Card.Grid hoverable={false} style={{ width: "100%" }}>
                  <Text keyboard style={{ fontSize: "1rem" }}>
                    Requested databases
                  </Text>
                  <Divider />
                  <div style={{ height: "5rem", overflowY: "scroll" }}>
                    <div>
                      {alertMessage.connectionRequest.listOfDatabases.map(
                        (item, index) => {
                          return (
                            <div>
                              {alertMessage.serviceProvider_ConnectedHosts.map(
                                (r) => {
                                  if (r.hostId == item) {
                                    return (
                                      <div>
                                        {index + 1} : {r.hostName}{" "}
                                        {r.hostAcessUrl.status == true
                                          ? " which is ready to be used "
                                          : "is not available currently to use"}
                                      </div>
                                    );
                                  }
                                }
                              )}
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </Card.Grid>
              </Card>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  style={{ textAlign: "center", marginTop: "4%" }}
                >
                  <Button
                    type="primary"
                    shape="round"
                    style={{ width: "30%" }}
                    size={"middle"}
                    onClick={() => {
                      handleOkEvent(null);
                    }}
                  >
                    Close
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Modal>
        </div>
      )}

      {alertType == dialogueTypes.MAKE_CON_REQUEST && (
        <div>
          <Modal visible={open} closable={false} footer={null} title={null}>
            <div>
              {/* Developer Name,Host Name,Request Query,Response */}
              <Card title="Make Connection Request">
                <Card.Grid hoverable={false} style={{ width: "50%" }}>
                  <Text keyboard style={{ fontSize: "1rem" }}>
                    Connected Hosts
                  </Text>
                  <Divider />
                  <div style={{ height: "8rem", overflowY: "scroll" }}>
                    {alertMessage.connectionRequest != null && (
                      <div>
                        {alertMessage.connectionRequest.listOfDatabases.map(
                          (item, index) => {
                            return (
                              <div>
                                {alertMessage.serviceProvider_ConnectedHosts.map(
                                  (r) => {
                                    if (r.hostId == item)
                                      return (
                                        <div>
                                          {" "}
                                          {index + 1} : {r.hostName}{" "}
                                        </div>
                                      );
                                  }
                                )}
                              </div>
                            );
                          }
                        )}
                      </div>
                    )}
                    {alertMessage.connectionRequest == null && (
                      <div>
                        Have not made any request yet, so there is no already
                        connected host.
                      </div>
                    )}
                  </div>
                </Card.Grid>
                <Card.Grid style={{ width: "50%" }}>
                  <Text keyboard style={{ fontSize: "1rem" }}>
                    All Hosts
                  </Text>
                  <Divider />
                  <Checkbox
                    indeterminateButton={indeterminateButton}
                    onChange={onCheckAllHostsChange_HostSelection}
                    checked={checkAllHosts}
                  >
                    Select all
                  </Checkbox>
                  <Divider />
                  <CheckboxGroup
                    options={alertMessage.plainNamesOfAllProvidedDatabases}
                    value={checkedListOfHosts}
                    onChange={onChange_HostSelection}
                  />

                  {/* <div style={{ height: "8rem", overflowY: "scroll" }}>
                    {alertMessage.serviceProvider_ConnectedHosts.map(
                      (item, index) => {
                        return (
                          <div>
                            {index + 1} : {item.hostName}
                          </div>
                        );
                      }
                    )}
                  </div> */}
                </Card.Grid>
              </Card>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  style={{ textAlign: "center", marginTop: "4%" }}
                >
                  <Button
                    type="secondary"
                    shape="round"
                    style={{ width: "50%" }}
                    size={"middle"}
                    onClick={() => {
                      handleOkEvent(null);
                    }}
                  >
                    Close
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{ textAlign: "center", marginTop: "4%" }}
                >
                  <Button
                    type="primary"
                    shape="round"
                    style={{ width: "60%" }}
                    size={"middle"}
                    loading={loadingsForMakingAndUpdatingRequest[0]}
                    onClick={() => {
                      // handleOkEvent(null);
                      // console.log(checkedListOfHosts)
                      handleConnectionRequest(0);
                    }}
                  >
                    {alertMessage.connectionRequest != null
                      ? "Update Request"
                      : "Make Request"}
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
}
