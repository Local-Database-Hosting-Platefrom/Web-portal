import { Card, Divider, FormControlLabel, Grid, Switch } from "@mui/material";
import { ContentCopyOutlined } from "@mui/icons-material";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CustomDialog from "../../../Dialogues/CustomDialog";
import { useState } from "react";
import dialogueTypes from "../../../Dialogues/dialogueTypes";
import { useEffect } from "react";
import { sendResquestToCentralAPI } from "../../../../request-manager/requestManager";
import { DELETE_REMOTE_DATABASE_ENDPOINT, SET_STATUS_OF_REMOTE_DATABASE_HOST_ACCESS_URL } from "../../../../request-manager/requestUrls";
import { DATA_UPDATED } from "../../../../request-manager/responseCodes";
const options = ["Remove"];

const ITEM_HEIGHT = 48;
const ItemHolder_RemoteDatabaeAcessUrl = ({ item,setRefresh,refresh }) => {
  const [hostStatus,setHostStatus]=useState(false);
 
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [alertType, setAlertType] = useState(null);
  const [openCustomDialog, setOpenCustomDialog] = useState(false);
  
  const [alertMessage_CustomDialog, setAlertMessage_CustomDialog] =
    useState("");
  const [alertTitle_CustomDialog, setAlertTitle_CustomDialog] = useState("");

  useEffect(()=>{
    setHostStatus(
      item.isEnabled =="true" ? item.isEnabled : false
    );
  },[item])

  const handleHostStatucChange=()=>{
    console.log("urlId",item.urlId)
    sendResquestToCentralAPI("POST", SET_STATUS_OF_REMOTE_DATABASE_HOST_ACCESS_URL,{
      urlId:item.urlId,
      status:!hostStatus
    }).then(async (success)=>{
      const response = await success.json();
      console.log("host accessUrl",response)
      setHostStatus(!hostStatus)
    },(error)=>{
      console.log("Error",error)
      setHostStatus(!hostStatus)
    });
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
  
    if(event.target.innerText=="Remove"){
      //remove it from db
     
      displayDialog(dialogueTypes.WARNING,"Deletion","Are sure you want to remove");
    }
    setAnchorEl(null);
  };


  const displayDialog = (dialogType, dialogTitle, dialogMessage) => {
    setAlertMessage_CustomDialog(dialogMessage);
    setAlertTitle_CustomDialog(dialogTitle);
    setAlertType(dialogType);
    handleClickOpen_CustomDialog();
  };

  
  const handleClickOpen_CustomDialog = () => {
    setOpenCustomDialog(true);
  };
  const handleClose_CustomDialog = () => {
    setOpenCustomDialog(false);
  };

  const handleNoEvent=(event)=>{
    handleClose_CustomDialog()
  }
  const handleOkEvent=(event)=>{
    //make post request to delete it
    sendResquestToCentralAPI("POST", DELETE_REMOTE_DATABASE_ENDPOINT,{
      urlId:item.urlId,
    }).then(async (success)=>{
      const response = await success.json();
      console.log("response",response)
      handleClose_CustomDialog()  
      setRefresh(!refresh)
    },(error)=>{
      handleClose_CustomDialog()
      alert(JSON.stringify(error))
    }); 
  }
  return (
    <div>
      <Divider />
      <Grid container style={{ padding: "2%" }}>
        <Grid item xs={1} style={{ textAlign: "left" }}>
          {/* Icon */}
          <img src="/home-page/consumerIconForList.png" width="40%" />
        </Grid>
        <Grid item xs={2} style={{ borderRight: "1px solid #7ea69f" }}>
          {/* Request ID */}
          {`${item.url}`}
        </Grid>
        <Grid
          item
          xs={2}
          style={{ paddingLeft: "2%", borderRight: "1px solid #7ea69f" }}
        >
          {/* Consumer Id */}
          {`${item.hostName}`}
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            paddingLeft: "2%",
            borderRight: "1px solid #7ea69f",
            textAlign: "center",
          }}
        >
          {/* Consumer Role */}
          {/* {`${item.accessUrl}`} */}
          <div
            style={{
              display: "inline-block",
              textAlign: "center",
              marginRight: "2%",
            }}
          >
            Access Url
            <ContentCopyOutlined
              style={{ marginLeft: "1%", cursor: "pointer" }}
              onClick={() => {
                navigator.clipboard.writeText(item.accessUrl);
                displayDialog(
                  dialogueTypes.INFO,
                  "Url Copied",
                  "Successfully copied access url to clip board"
                );   
              }}
              size="small"
            />
          </div>
        </Grid>
        <Grid
          item
          xs={1}
          style={{ paddingLeft: "2%", borderRight: "1px solid #7ea69f" }}
        >
          {/* Consumer Role */}
          {`${item.numberofRequests}`}
        </Grid>

        <Grid item xs={2} style={{ paddingLeft: "2%" }}>
          {/* Time */}
          {/* {`Switch`} */}
          <FormControlLabel
            value="end"
            control={<Switch color="secondary" checked={hostStatus}  />}
            label="Status"
            labelPlacement="Status"
            onChange={(e)=>{
              handleHostStatucChange();
            }}
          />
        </Grid>
        <Grid item xs={1} style={{ paddingLeft: "2%" }}>
          <div>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Grid>
      </Grid>
      <Divider />
      <CustomDialog
        alertType={alertType}
        handleClickOpen={handleClickOpen_CustomDialog}
        handleCloseEvent={handleClose_CustomDialog}
        open={openCustomDialog}
        handleOkEvent={handleOkEvent}
        handleNoEvent={handleNoEvent}
        alertMessage={alertMessage_CustomDialog}
        alertTitle={alertTitle_CustomDialog}
      />
    </div>
  );
};
export default ItemHolder_RemoteDatabaeAcessUrl;
