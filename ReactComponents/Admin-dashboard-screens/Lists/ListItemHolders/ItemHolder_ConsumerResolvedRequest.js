import { Card, Divider, Grid } from "@mui/material";
import { useState } from "react";
import CustomButton from "../../../../Support/CustomButton";
import Heading from "../../../../Support/Heading";
import CustomDialog from "../../../Dialogues/CustomDialog";
import dialogueTypes from "../../../Dialogues/dialogueTypes";

const ItemHolder_ConsumerDeniedRequest = ({ item }) => {
  console.log("item",item)
  const [alertType, setAlertType] = useState(null);
  const [openCustomDialog, setOpenCustomDialog] = useState(false);
  const [alertMessage_CustomDialog, setAlertMessage_CustomDialog] =
    useState("");
  const [alertTitle_CustomDialog, setAlertTitle_CustomDialog] = useState("");

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
        <Grid item xs={2} style={{ textAlign: "center" }}>
          {/* Icon */}
          <img src="/home-page/consumerIconForList.png" width="25%" />
        </Grid>
        <Grid item xs={2} style={{ borderRight: "1px solid #7ea69f" }}>
          {/* Request ID */}
          {/* {`${item.requestId}`} */}
          <Heading text={item.requestId} fontSize="0.9rem" />
        </Grid>
        <Grid
          item
          xs={3}
          style={{ paddingLeft: "3%", borderRight: "1px solid #7ea69f" }}
        >
          {/* Consumer Id */}
          {/* {`${item.consumerId}`} */}
          <Heading text={item.developerName} fontSize="0.9rem" />
        </Grid>

        <Grid item xs={3} style={{ paddingLeft: "2%" }}>
          {/* Time */}
          {/* {`${item.requestTime}`} */}
          <Heading text={item.requestTime} fontSize="0.9rem" />
        </Grid>
        <Grid item xs={1} style={{ paddingLeft: "2%" }}>
          {/* Time */}
          <CustomButton
            style={{
              // marginLeft:isMediumScreen? "40%":"35%",
              // marginTop: isMediumScreen? "3%":"3%",
              // left: isMediumScreen? "10":"",
              backgroundColor: "#10365B",
              // fontSize: isMediumScreen? "0.8rem" :"",
              //
            }}
            onClick={() => {
              displayDialog(
                dialogueTypes.VIEW_COMPLETE_REQUEST,
                "Query and response of request",
                item
              );
            }}
            name="View"
          />
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
export default ItemHolder_ConsumerDeniedRequest;
