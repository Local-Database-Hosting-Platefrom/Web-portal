import { Card, Divider, Grid } from "@mui/material";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Heading from "../../../../Support/Heading";
import dialogueTypes from "../../../Dialogues/dialogueTypes";
import CustomDialog from "../../../Dialogues/CustomDialog";
import { sendResquestToCentralAPI } from "../../../../request-manager/requestManager";
import { UPDATE_DEV_ADMIN_CON_STATUS } from "../../../../request-manager/requestUrls";

// const options = ["Accept", "Decline","Un-resolved"];

const options = ["Details"];

const ITEM_HEIGHT = 48;
const ItemHolder_DeveloperApprovedAccounts = ({ item,setRefresh }) => {
  const [alertType,setAlertType]=useState(null);
  const [openCustomDialog, setOpenCustomDialog] = useState(false);
  const [alertMessage_CustomDialog,setAlertMessage_CustomDialog]=useState("");
  const [alertTitle_CustomDialog,setAlertTitle_CustomDialog]=useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
    if(event.target.innerText=="Details"){
          setAlertType(dialogueTypes.VIEW_DEV_CON_DETAILS)
          setAlertTitle_CustomDialog("Connection details");
          // setAlertMessage_CustomDialog(response.responseMessage);
          handleClickOpen_CustomDialog();
    }
    else if(event.target.innerText=="Decline"){}
  };
  const handleClickOpen_CustomDialog = () => {
    setOpenCustomDialog(true);
  };
  const handleClose_CustomDialog = () => {
    setOpenCustomDialog(false);
  };

  const handleAcceptEvent=(value)=>{
    handleClose_CustomDialog();
    updateTheRequestStatus("Accept",value.accessRole)
  }
  const handleDeclineEvent=(value)=>{
    handleClose_CustomDialog();
    updateTheRequestStatus("Decline",value.accessRole) 
  }

  const updateTheRequestStatus=(value,accessRole)=>{
    sendResquestToCentralAPI("POST", UPDATE_DEV_ADMIN_CON_STATUS,{
        requestId:item._id,requestStatus:value,accessRole:accessRole
      }).then(async (success)=>{
        const response = await success.json();
        console.log("Connectioon Status updated",response);
        // setAlertType(dialogueTypes.INFO)
        // setAlertTitle_CustomDialog("Great..!!");
        // setAlertMessage_CustomDialog(response.responseMessage);
        // handleClickOpen_CustomDialog();
        setRefresh((prev)=>{
          return !prev
        });
      },(error)=>{
        console.log("Error",error)
      })
  }

  return (
    <div>
      <Divider />
      <Grid container style={{ padding: "2%" }}>
        <Grid item xs={2} style={{ textAlign: "center" }}>
          {/* Icon */}
          <img src="/home-page/consumerIconForList.png" width="25%" />
        </Grid>
        <Grid item xs={2} style={{ borderRight: "1px solid #7ea69f" }}>
          {/* Consumer Name */}
          {/* {`${item.developerName}`} */}
          <Heading text={item.developerName} fontSize={"1rem"}/>
        </Grid>
        <Grid
          item
          xs={4}
          style={{ paddingLeft: "1%", borderRight: "1px solid #7ea69f" }}
        >
          {/* Consumer Id */}
          {/* {`${item.developerEmail}`} */}
          <Heading text={item.developerEmail} fontSize={"0.8rem"}/>
        </Grid>
        <Grid item xs={2} style={{ paddingLeft:"1%",borderRight: "1px solid #7ea69f" }}>
          {/* Consumer Name */}
          {/* {`${item.developerName}`} */}
          <Heading text={item.requestStatus} fontSize={"1rem"}/>
        </Grid>
        <Grid item xs={2} style={{ paddingLeft: "2%", textAlign: "right" }}>
          {/* Consumer Role */}
          {/* {`${item.role}`} */}
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
          handleOkEvent={handleAcceptEvent}
          handleNoEvent={handleDeclineEvent}
          alertMessage={item}
          alertTitle={alertTitle_CustomDialog}
        />
    </div>
  );
};
export default ItemHolder_DeveloperApprovedAccounts;
