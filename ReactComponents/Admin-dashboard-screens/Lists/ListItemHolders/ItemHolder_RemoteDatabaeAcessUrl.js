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
const options = ["Test", "Details"];

const ITEM_HEIGHT = 48;
const ItemHolder_RemoteDatabaeAcessUrl = ({ item }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [alertType, setAlertType] = useState(null);
  const [openCustomDialog, setOpenCustomDialog] = useState(false);
  const [alertMessage_CustomDialog, setAlertMessage_CustomDialog] =
    useState("");
  const [alertTitle_CustomDialog, setAlertTitle_CustomDialog] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
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
          {`${item.hostId}`}
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
            control={<Switch color="secondary" checked={item.isEnabled=="true"?true:false} />}
            label="Status"
            labelPlacement="Status"
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
        alertMessage={alertMessage_CustomDialog}
        alertTitle={alertTitle_CustomDialog}
      />
    </div>
  );
};
export default ItemHolder_RemoteDatabaeAcessUrl;
