import {
  Container,
  Divider,
  FormControlLabel,
  Grid,
  Switch,
} from "@mui/material";
import Heading from "../../../Support/Heading";
import CustomDialog from "../../Dialogues/CustomDialog";
import dialogueTypes from "../../Dialogues/dialogueTypes";
import { useRouter } from "next/router";
import { useState } from "react";
import CustomButton from "../../../Support/CustomButton";
import { sendResquestToCentralAPI } from "../../../request-manager/requestManager";
import { TERMITE_ALL_URLS } from "../../../request-manager/requestUrls";
const MasterControls = () => {
  const [alertType, setAlertType] = useState(null);
  const [openCustomDialog, setOpenCustomDialog] = useState(false);
  const [alertMessage_CustomDialog, setAlertMessage_CustomDialog] =
    useState("");
  const [alertTitle_CustomDialog, setAlertTitle_CustomDialog] = useState("");
  const useData = JSON.parse(localStorage.getItem("loggedInUser"));


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

  const handleOkEvent = (action) => {
    //delete it.
    handleClose_CustomDialog();
    sendResquestToCentralAPI("POST",TERMITE_ALL_URLS,{_id:useData.responsePayload._id}).then((resp)=>resp.json()).then((data)=>{
      if(data.responsePayload){
        displayDialog(
          dialogueTypes.INFO_WITHOUT_OK,
          "Server response",
          data.responseMessage
        ); 
      }
    })
  };

  const handleNoEvent = (action) => {
    handleClose_CustomDialog();
  };

  return (
    <Container style={{ paddingTop: "2%" }}>
      <div style={{backgroundColor:"red",paddingLeft: "1%"}}>
        <Heading text="Master Controls" fontSize="1.5rem" />
        <Divider />
      </div>
      <div style={{ marginTop: "2%",textAlign:'center' }}>
        <Grid container >
         
          <Grid
            item
            xs={12  }
            style={{
              border: "1px solid #7ea69f",
              padding: "2%",
              textAlign: "center",
              marginLeft: "1%"
            }}
          >
            <Heading
              text="Terminate All Host Access urls and Open API urls"
              fontSize="1rem"
            ></Heading>
            <Divider />
            <div>
             <CustomButton
                      style={{
                        // marginLeft:isMediumScreen? "40%":"35%",
                        marginTop: "3%",
                        // left: isMediumScreen? "10":"",
                        backgroundColor: "#10365B",
                        fontSize:  "0.8rem" ,
                      }}
                      onClick={() => {
                        displayDialog(
                          dialogueTypes.WARNING,
                          "Critical Action",
                          "Are you sure you want to terminate all host access urls?"
                        );
                      }}
                      name="Terminate"
                    />
            </div>
          </Grid>
          {/* <Grid item xs={1}></Grid>

          <Grid
            item
            xs={5}
            style={{
              border: "1px solid #7ea69f",
              padding: "2%",
              textAlign: "center",
              paddingLeft: "1%"
            }}
          >
            <Heading
              text="Terminate All Remote database Access Urls"
              fontSize="1rem"
            ></Heading>
            <Divider />
            <div>
            <CustomButton
                      style={{
                        // marginLeft:isMediumScreen? "40%":"35%",
                        marginTop: "3%",
                        // left: isMediumScreen? "10":"",
                        backgroundColor: "#10365B",
                        fontSize:  "0.8rem" ,
                      }}
                      onClick={() => {
                        displayDialog(
                          dialogueTypes.WARNING,
                          "Critical Action",
                          "Are you sure you want to terminate all host access urls?"
                        );
                      }}
                      name="Terminate"
                    />
            </div>
          </Grid> */}

          {/* <Grid item xs={1}></Grid> */}
          {/* <Grid
            item
            xs={3}
            style={{
              border: "1px solid #7ea69f",
              padding: "2%",
              textAlign: "center",
              paddingLeft: "1%"
            }}
          >
            <Heading
              text="Desolve All consumer tokens"
              fontSize="1rem"
            ></Heading>
            <Divider />
            <div>
              <FormControlLabel
                value="end"
                control={<Switch color="secondary" defaultChecked />}
                // label="Status"
                // labelPlacement="Status"
              />
            </div>
          </Grid> */}
        </Grid>
      </div>
      <CustomDialog
        alertType={alertType}
        handleClickOpen={handleClickOpen_CustomDialog}
        handleCloseEvent={handleClose_CustomDialog}
        open={openCustomDialog}
        alertMessage={alertMessage_CustomDialog}
        alertTitle={alertTitle_CustomDialog}
        handleOkEvent={handleOkEvent}
        handleNoEvent={handleNoEvent}
      />
    </Container>
  );
};
export default MasterControls;
