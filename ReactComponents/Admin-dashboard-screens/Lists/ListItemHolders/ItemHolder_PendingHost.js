import { Card, Divider, FormControlLabel, Grid, Switch } from "@mui/material";
import { ContentCopyOutlined } from "@mui/icons-material";
import * as React from 'react';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Heading from "../../../../Support/Heading";
import { sendResquestToCentralAPI } from "../../../../request-manager/requestManager";
import { SET_HOST_STATUS } from "../../../../request-manager/requestUrls";
import CustomDialog from "../../../Dialogues/CustomDialog";
import dialogueTypes from "../../../Dialogues/dialogueTypes";
const options = [
  'Connect',
  'Reject',
  "Pending",
];

const ITEM_HEIGHT = 48;
const ItemHolder_PendingHost = ({ item,setRefresh}) => {
  const [alertType,setAlertType]=useState(null);
  const [openCustomDialog, setOpenCustomDialog] = useState(false);
  const [alertMessage_CustomDialog,setAlertMessage_CustomDialog]=useState("");
  const [alertTitle_CustomDialog,setAlertTitle_CustomDialog]=useState("");
  
  const [anchorEl, setAnchorEl] =useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  
  };
  
  const handleClose = (event) => {
    setAnchorEl(null);
    console.log(event.target.innerText);
    // Connect
    // Reject
    
    const userData = JSON.parse(localStorage.getItem("loggedInUser"));
    const adminId = userData.responsePayload._id; 
    const hostId=item.hostId;
    const status = event.target.innerText;

    sendResquestToCentralAPI("POST", SET_HOST_STATUS,{
      adminId,hostId,status
    }).then(async (success)=>{
      const response = await success.json();
      console.log("Host Status updated",response);
      setAlertType(dialogueTypes.INFO)
      setAlertTitle_CustomDialog("Great..!!");
      setAlertMessage_CustomDialog(response.responseMessage);
      handleClickOpen_CustomDialog();
      setRefresh((prev)=>{
        return !prev
      });
    },(error)=>{
      console.log("Error",error)
    })
  }; 

  const handleClickOpen_CustomDialog = () => {
    setOpenCustomDialog(true);
  };
  const handleClose_CustomDialog = () => {
    setOpenCustomDialog(false);
  };

  const displayDialog = (dialogType,dialogTitle,dialogMessage) => {
    setAlertMessage_CustomDialog(dialogMessage);
    setAlertTitle_CustomDialog(dialogTitle);
    setAlertType(dialogType);
    handleClickOpen_CustomDialog();
  }
  return (
    <div>
      <Divider />
      <Grid container style={{ padding: "2%" }}>
        <Grid item xs={1} style={{ textAlign: "left" }}>
          {/* Icon */}
          <img src="/home-page/consumerIconForList.png" width="40%" />
        </Grid>
        <Grid item xs={2} style={{ borderRight: "1px solid #7ea69f"}}>
          {/* Host ID */}
          {/* {`${item.hostId}`} */}
          <Heading text={item.hostId} fontSize={"0.8rem"}/>
        </Grid>
        <Grid item xs={2} style={{ borderRight: "1px solid #7ea69f",marginLeft:"2%" }}>
          {/* Host ID */}
          {/* {`${item.hostName}`} */}
          <Heading text={item.hostName} fontSize={"0.8rem"}/>
        </Grid>
        <Grid item xs={2} style={{ borderRight: "1px solid #7ea69f",marginLeft:"2%" }}>
          {/* Host ID */}
          {/* {`${item.lastSeenDateAndTime}`} */}
          <Heading text={item.lastSeenDateAndTime} fontSize={"0.8rem"}/>
        </Grid>
        <Grid item xs={2} style={{ borderRight: "1px solid #7ea69f",marginLeft:"2%" }}>
          {/* Host ID */}
          {/* {`${item.lastSeenDateAndTime}`} */}
          <Heading text={item.isConnected} fontSize={"0.8rem"}/>
        </Grid>

        <Grid item xs={1} style={{ paddingLeft: "2%" }}>
        <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
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
          alertMessage={alertMessage_CustomDialog}
          alertTitle={alertTitle_CustomDialog}
        />
    </div>
  );
};
export default ItemHolder_PendingHost;
