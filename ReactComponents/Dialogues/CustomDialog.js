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
import { Radio, Space,Checkbox ,Typography, Switch, Divider } from "antd";
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
// import Checkbox from "@mui/material/Checkbox";
// import { CheckBox } from "@mui/icons-material";

import { Button, Modal } from "antd";
import openNotificationWithIcon from "./Notification";

export default function CustomDialog({
  handleClickOpen,
  alertType,
  handleCloseEvent,
  open,
  alertMessage,
  alertTitle,
  handleOkEvent = null,
  handleNoEvent = null,
}) {
  const isMediumScreen = useMediaQuery("(min-width:600px)");
  const [accessRole, setAccessRole] = React.useState("");

  const [isAutoTokenGeneratingAllowed, setIsAutoTokenGeneratingAllowed] =
    React.useState(true);

  const [isLdUrlEnabled,setIsLdUrlEnabled]=React.useState(false);  
  const [isOpenAPIEnabled,setIsOpenAPIEnabled]=React.useState(false);  
  const [isOpenAPIPublic,setIsOpenAPIPublic]=React.useState(false);  
  
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
    // Load the acccess roles
    if(alertMessage.status)
    setIsLdUrlEnabled(alertMessage.status);
    if(alertMessage.status)
    setIsOpenAPIEnabled(alertMessage.status);
    if(alertMessage.isPublic)
    setIsOpenAPIPublic(alertMessage.isPublic)

  }, []);

 


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
            closable={false}
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
                <Grid item xs={12}>
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
               
                  <Radio.Group
                    defaultValue="a"
                    buttonStyle="solid"
                    style={{ marginLeft: "1%" }}
                    onChange={(e) => {
                      // console.log(e);
                      setAccessRole(e.target.value);
                    }}
                  >
                    <Radio.Button value="1201">Read Only</Radio.Button>
                    <Radio.Button value="1202">Write Only</Radio.Button>
                    <Radio.Button value="1203">Read & Write</Radio.Button>
                  </Radio.Group>
                </Grid>
                <Grid item xs={12} style={{marginTop:"2%",marginLeft:"1%"}}>
                <Checkbox checked={isAutoTokenGeneratingAllowed} onChange={handleTokenGeneration}>Is generating tokens allowed ?</Checkbox>
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
                    onClick={()=>{
                      handleOkEvent({
                        value:"Decline",
                        accessRole:accessRole,
                        isAutoTokenGeneratingAllowed:isAutoTokenGeneratingAllowed
                      })
                    }}
                  >
                    Decline
                  </Button>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center",marginTop:"4%" }}>
                  <Button
                    type="secondary"
                    shape="round"
                    style={{ width: "70%" }}
                    size={"middle"}
                    onClick={()=>{
                      handleOkEvent({
                        value:"Accept",
                        accessRole:accessRole,
                        isAutoTokenGeneratingAllowed:isAutoTokenGeneratingAllowed
                      })
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
                    onChange={(e) => {
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
                <Grid item xs={12} style={{marginTop:"2%",marginLeft:"1%"}}>
                <Checkbox checked={isAutoTokenGeneratingAllowed} onChange={handleTokenGeneration}>Is generating tokens allowed ?</Checkbox>
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
                    onClick={()=>{
                      handleOkEvent({
                        value:"Decline",
                        accessRole:accessRole,
                        isAutoTokenGeneratingAllowed:isAutoTokenGeneratingAllowed
                      })
                    }}
                  >
                    Decline
                  </Button>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center",marginTop:"4%" }}>
                  <Button
                    type="secondary"
                    shape="round"
                    style={{ width: "70%" }}
                    size={"middle"}
                    onClick={()=>{
                      handleOkEvent({
                        value:"Accept",
                        accessRole:accessRole,
                        isAutoTokenGeneratingAllowed:isAutoTokenGeneratingAllowed
                      })
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
                      checked={isLdUrlEnabled}
                      onChange={(e) => {
                        console.log(e)
                        setIsLdUrlEnabled(e)
                      }}
                    />
                </div>
                <div style={{ textAlign: "center", marginTop: "2%" }}>
                  <Button
                    type="secondary"
                    shape="round"
                    style={{ width: "30%",marginTop:"5%" }}
                    size={"middle"}
                    onClick={() => {
                      handleOkEvent({setedStatus:isLdUrlEnabled});
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
                      checkedChildren="Enabled"
                      unCheckedChildren="Disabled"
                      // defaultChecked
                      style={{width:"30%"}}
                      checked={isOpenAPIEnabled}
                      onChange={(e) => {
                        console.log(e)
                        setIsOpenAPIEnabled(e)
                      }}
                    />
                </div>
                <div style={{ textAlign: "center",marginTop:"3%" }}>
                    <Switch
                      checkedChildren="Public"
                      unCheckedChildren="Private"
                      // defaultChecked
                      style={{width:"30%"}}
                      checked={isOpenAPIPublic}
                      onChange={(e) => {
                        console.log(e)
                        setIsOpenAPIPublic(e)
                      }}
                    />
                </div>
                <Divider/>
                <div style={{ textAlign: "center", marginTop: "2%" }}>
                  <Button
                    type="primary"
                    shape="round"
                    style={{ width: "30%",marginTop:"5%" }}
                    size={"middle"}
                    onClick={() => {
                      // handleOkEvent({setedStatus:isLdUrlEnabled});
                    }}
                  >
                    Save Changes
                  </Button>
                </div>
                <div style={{ textAlign: "center", marginTop: "1%" }}>
                  <Button
                    type="danger"
                    shape="round"
                    style={{ width: "30%",marginTop:"1%" }}
                    size={"middle"}
                    onClick={() => {
                      // handleOkEvent({setedStatus:isLdUrlEnabled});S
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </Grid>
            </Grid>
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
                        {/* <div style={{ textAlign: "center" }}>
                          <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-failure-factory-flaticons-flat-flat-icons-3.png" />
                        </div> */}
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

      {alertType == dialogueTypes.VIEW_COMPLETE_REQUEST && (
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
                        {/* <div style={{ textAlign: "center" }}>
                          <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-failure-factory-flaticons-flat-flat-icons-3.png" />
                        </div> */}
                        <div style={{ fontSize: "1rem", textAlign: "center" }}>
                          <div>
                            Query :{" "}
                            {alertMessage.requestPlayload != undefined
                              ? alertMessage.requestPlayload.query
                              : ""}
                          </div>
                          <div>
                            Database Name :{" "}
                            {alertMessage.requestPlayload != undefined
                              ? alertMessage.requestPlayload.databaseName
                              : ""}
                          </div>
                          <div>
                            Response :{" "}
                            {alertMessage.requestResolvedPayload != undefined
                              ? alertMessage.requestResolvedPayload.response
                              : ""}
                          </div>
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
    </div>
  );
}
