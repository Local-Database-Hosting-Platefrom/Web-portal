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
import Checkbox from "@mui/material/Checkbox";
import { CheckBox } from "@mui/icons-material";

import { Button, Modal } from "antd";

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
  }, []);

  return (
    <div>
      {alertType == dialogueTypes.SETTING_UP_ENVIRONMENT && (
        <div>
          <Modal
            visible={open}
            closable={false}
            footer={null}
            // title="Title"
            // onOk={handleOkEvent}
            // onCancel={handleNoEvent}
            // footer={[
            //   <Button key="back" onClick={handleCloseEvent}>
            //     Return
            //   </Button>,
            //   <Button
            //     key="submit"
            //     type="primary"
            //     // loading={loading}
            //     onClick={handleOkEvent}
            //   >
            //     Submit
            //   </Button>,
            //   <Button
            //     key="link"
            //     href="https://google.com"
            //     type="primary"
            //     // loading={loading}
            //     onClick={handleOkEvent}
            //   >
            //     Search on Google
            //   </Button>,
            // ]}
          >
           <Grid container>
            <Grid item xs={4}>
            <img src="/setting-up-enviroment-1.gif" width="200px" height="200px" />
            </Grid>
            <Grid item xs={8} style={{padding:"1.5rem"}}>
              <div >
                <Heading text={alertTitle} fontSize={"1.5rem"} fontWeight="bold"/>
              </div>
              <div style={{marginTop:"5%"}}>
                <Heading text={alertMessage} fontSize={"0.8rem"}/>
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

      {alertType == dialogueTypes.VIEW_DEV_CON_REQUEST && (
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
                        {/* <div style={{textAlign:"center"}}>
                    <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-failure-factory-flaticons-flat-flat-icons-3.png"/>
                    </div> */}
                        <div style={{ fontSize: "1rem", textAlign: "left" }}>
                          <div style={{ borderBottom: "1px solid #7ea69f" }}>
                            <Heading
                              text={"Requested Host Access"}
                              fontWeight={"bold"}
                              fontSize={"1.2rem"}
                            />
                          </div>
                          <div style={{ marginTop: "1%" }}>
                            {alertMessage.listOfDatabases.map((item, index) => {
                              return (
                                <div>
                                  <Heading
                                    text={`${index + 1} : ${item.hostName} ( ${
                                      item.hostId
                                    } )`}
                                  />
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div style={{ borderBottom: "1px solid #7ea69f" }}>
                          <Heading
                            text={"Access Role"}
                            fontWeight={"bold"}
                            fontSize={"1.2rem"}
                          />
                        </div>
                        <div style={{ marginTop: "2%" }}>
                          <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">
                                Access Role
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={accessRole}
                                label="Access Role"
                                onChange={handleChange}
                              >
                                {listOfAccessRole.map((item) => {
                                  return (
                                    <MenuItem value={item.roleValue}>
                                      {item.roleTitle}
                                    </MenuItem>
                                  );
                                })}
                              </Select>
                            </FormControl>
                          </Box>
                        </div>
                        <div style={{ borderBottom: "1px solid #7ea69f" }}>
                          {/**/}
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={isAutoTokenGeneratingAllowed}
                                  onChange={handleTokenGeneration}
                                  inputProps={{ "aria-label": "controlled" }}
                                  sx={{
                                    color: "blue",
                                    "&.Mui-checked": {
                                      color: "blue",
                                    },
                                  }}
                                />
                              }
                              label="Allow auto token generation"
                            />
                          </FormGroup>
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
                              handleNoEvent("Decline");
                            }}
                            name="Decline"
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
                              // localStorage.setItem("isLoggedIn", true);
                              // navigation.push("/admin-dashboard");
                              handleOkEvent({
                                accessRole: accessRole,
                                isAutoAccessUrlTokenGenerationAllowed:
                                  isAutoTokenGeneratingAllowed,
                              });
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

      {alertType == dialogueTypes.VIEW_DEV_CON_DETAILS && (
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
                        {/* <div style={{textAlign:"center"}}>
                    <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-failure-factory-flaticons-flat-flat-icons-3.png"/>
                    </div> */}
                        <div style={{ fontSize: "1rem", textAlign: "left" }}>
                          <div style={{ borderBottom: "1px solid #7ea69f" }}>
                            <Heading
                              text={"Allowed Hosts"}
                              fontWeight={"bold"}
                              fontSize={"1.2rem"}
                            />
                          </div>
                          <div style={{ marginTop: "1%" }}>
                            {alertMessage.listOfDatabases.map((item, index) => {
                              return (
                                <div>
                                  <Heading
                                    text={`${index + 1} : ${item.hostName} ( ${
                                      item.hostId
                                    } )`}
                                  />
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div style={{ borderBottom: "1px solid #7ea69f" }}>
                          <Heading
                            text={`Assigned role : ${alertMessage.accessRole}`}
                            fontWeight={"bold"}
                            fontSize={"1.2rem"}
                          />
                        </div>
                        <div style={{ marginTop: "2%" }}>
                          {/* <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">
                                Access Role
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={accessRole}
                                label="Access Role"
                                onChange={handleChange}
                              >
                                {
                                  listOfAccessRole.map((item)=>{
                                    return   <MenuItem value={item.roleValue}>{item.roleTitle}</MenuItem>
                                  })
                                }
                              </Select>
                            </FormControl>
                          </Box>   */}
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
                              handleNoEvent("Decline");
                            }}
                            name="Detach"
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
                              // localStorage.setItem("isLoggedIn", true);
                              // navigation.push("/admin-dashboard");
                              handleOkEvent({ accessRole: accessRole });
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
