import { Container } from "@mui/material";
import { useState } from "react";
import { sendResquestToCentralAPI } from "../../../request-manager/requestManager";
import { DELETE_ACCOUNT } from "../../../request-manager/requestUrls";
import { DELETED } from "../../../request-manager/responseCodes";
import CustomButton from "../../../Support/CustomButton";
import Heading from "../../../Support/Heading";
import InputField from "../../../Support/InputFields";
import CustomDialog from "../../Dialogues/CustomDialog";
import dialogueTypes from "../../Dialogues/dialogueTypes";

const DeleteAccount = () => {
  const [isLinkSent, setIsLinkSent] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [alertType, setAlertType] = useState(null);
  const [openCustomDialog, setOpenCustomDialog] = useState(false);
  const [alertMessage_CustomDialog, setAlertMessage_CustomDialog] =
    useState("");
  const [alertTitle_CustomDialog, setAlertTitle_CustomDialog] = useState("");
  const useData = JSON.parse(localStorage.getItem("loggedInUser"));
  let authType = null;
  if (useData) {
    authType = useData.responsePayload.authType;
    email = useData.responsePayload.email;
  }

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

    let data = null;
    let readyToRequest = false;
    if (authType == "userName&Password") {
      if (password != null) {
        data = {
          email: email,
          password: password,
          authType: authType,
          accountType: "admin",
          _id: useData.responsePayload._id,
        };
        readyToRequest = true;
      } else {
        displayDialog(
          dialogueTypes.INFO_WITHOUT_OK,
          "Invalid password",
          "Please provide you password to confirm it"
        );
      }
    } else {
      data = {
        authType: authType,
        accountType: "admin",
        _id: useData.responsePayload._id,
      };
      readyToRequest = true;
    }
    if (readyToRequest) {
      sendResquestToCentralAPI("POST", DELETE_ACCOUNT, data)
        .then((resp) => resp.json())
        .then((data) => {
          if (data.responseCode == DELETED) {
            displayDialog(
              dialogueTypes.INFO_WITHOUT_OK,
              "Server response",
              data.responseMessage
            );
          } else {
          }
        });
    }
  };

  const handleNoEvent = (action) => {
    handleClose_CustomDialog();
  };

  return (
    <Container>
      <div>
        <Heading text="Delete My Account" fontSize="1.5rem" />
      </div>
      <div style={{ textAlign: "center" }}>
        {/* <div>
          <InputField
            placeholder={"Type your Email"}
              value={email}
            onChange={(e) => {
             setEmail(e.target.value);
            }}
          />
        </div> */}
        {authType == "userName&Password" && (
          <div>
            <InputField
              placeholder={"Enter your password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        )}

        <div style={{ marginTop: "2%" }}>
          <CustomButton
            style={{
              // marginLeft:isMediumScreen? "40%":"35%",
              // marginTop: isMediumScreen? "3%":"3%",
              // left: isMediumScreen? "10":"",
              backgroundColor: "red",
              // fontSize: isMediumScreen? "0.8rem" :"",
            }}
            onClick={() => {
              displayDialog(
                dialogueTypes.WARNING,
                "Critical Action",
                "Are you sure you want to delete the account?"
              );
            }}
            name="Delete My Account"
          />
        </div>
        <div>
          {isLinkSent ? `We sent you reset link on provided email.!` : ``}
        </div>
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
export default DeleteAccount;
