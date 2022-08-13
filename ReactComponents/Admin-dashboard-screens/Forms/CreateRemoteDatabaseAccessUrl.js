import { Container, Grid, useRadioGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { sendResquestToCentralAPI } from "../../../request-manager/requestManager";
import { LOAD_LIST_OF_ALL_HOSTS, STORE_REMOTE_DATABASE_ENDPOINT, TEST_HOST_ACCESS_URL } from "../../../request-manager/requestUrls";
import CustomButton from "../../../Support/CustomButton";
import CustomDropDown from "../../../Support/CustomDropDown";
import CustomMultilineInputField from "../../../Support/CustomMultilineInputField";
import Heading from "../../../Support/Heading";
import InputField from "../../../Support/InputFields";
import CustomDialog from "../../Dialogues/CustomDialog";
import dialogueTypes from "../../Dialogues/dialogueTypes";

const CreateRemoteDatabaseAccessUrl = () => {
  const [currentSelectedOption, setCurrentSelectedOption] = useState(null);
  const [listOfOptions_HostNames, setListOfOptions_HostNames] = useState([]);
  
  const [query, setQuery] = useState(null);
  const [databaseName, setDatabaseName] = useState(null);
  const [url,setUrl]=useState(null);
  const [description,setDescription]=useState(null);

  const [alertType, setAlertType] = useState(null);
  const [openCustomDialog, setOpenCustomDialog] = useState(false);
  const [alertMessage_CustomDialog, setAlertMessage_CustomDialog] =
    useState("");
  const [alertTitle_CustomDialog, setAlertTitle_CustomDialog] = useState("");

  useEffect(() => {
    // Make call to load pending list of hosts
    const useData = JSON.parse(localStorage.getItem("loggedInUser"));
    const _id = useData.responsePayload._id;
    sendResquestToCentralAPI("POST", LOAD_LIST_OF_ALL_HOSTS, {
      adminId: _id,
    }).then(
      async (success) => {
        const list = await success.json();
        const listOfHosts = list.responsePayload.map((host) => {
          return {
            optionTitle: host.hostName,
            optionValue: host,
          };
        });
        setListOfOptions_HostNames(listOfHosts);
      },
      (error) => {
        console.log("Error", error);
      }
    );
  }, []);
 
  const makeUrlTestRequest = () => {

    if (currentSelectedOption != null) {
      if (databaseName != null) {
        if (query != null) {
          if(description!=null){
            if(url!=null){
          
          const host = JSON.parse(currentSelectedOption);
          const useData = JSON.parse(localStorage.getItem("loggedInUser"));
          const _id = useData.responsePayload._id;
          const userUid = useData.responsePayload.userUid;
          const hostAccessUrl = host.optionValue.hostAcessUrl.url;
          const email = useData.responsePayload.email;
          console.log(userUid)
          sendResquestToCentralAPI("POST", TEST_HOST_ACCESS_URL, {
            userUid: userUid,
            hostAccessUrl: hostAccessUrl,
            databaseName: databaseName,
            query: query,
            secretKey:email,
          }).then(
            async (success) => {
              const response = await success.json();
              console.log(response);
              displayDialog(
                dialogueTypes.INFO,
                "Query Response",
                JSON.stringify(response)
              );
            },
            (error) => {
              console.log("Error", error);
            }
          );
            }else{
              displayDialog(
                dialogueTypes.INFO,
                "Invalid Input",
                "Please Provide the description valid url"
              );     
            }
          }else{
            displayDialog(
              dialogueTypes.INFO,
              "Invalid Input",
              "Please Provide the description for this end-point"
            );   
          }
        } else {
          displayDialog(
            dialogueTypes.INFO,
            "Invalid Input",
            "Please Provide the query"
          );
        }
      } else {
        displayDialog(
          dialogueTypes.INFO,
          "Invalid Input",
          "Please Provide the database name"
        );
      }
    } else {
      displayDialog(dialogueTypes.INFO, "Invalid Input", "Please choose host");
    }
  };


const storeEndpointInDatabase = () => {

    if (currentSelectedOption != null) {
      if (databaseName != null) {
        if (query != null) {
          if(description!=null){
            if(url!=null && url[0]!="/" && url[url.length-1]!="/"){
          const host = JSON.parse(currentSelectedOption);
         
          const useData = JSON.parse(localStorage.getItem("loggedInUser"));
          const _id = useData.responsePayload._id;
          const userUid = useData.responsePayload.userUid;
          const hostAccessUrl = host.optionValue.hostAcessUrl.url;
          const hostName = host.optionValue.hostName;
          const email = useData.responsePayload.email;
          sendResquestToCentralAPI("POST", STORE_REMOTE_DATABASE_ENDPOINT, {
            userUid: userUid,
            hostAccessUrl: hostAccessUrl,
            databaseName: databaseName,
            query: query,
            secretKey:email,
            adminId: _id,
            description:description,
            url:url,
            hostName:hostName
          }).then(
            async (success) => {
              const response = await success.json();
              console.log(response);
              displayDialog(
                dialogueTypes.INFO,
                "Query Response",
                JSON.stringify(response)
              );
            },
            (error) => {
              console.log("Error", error);
            }
          );
            }else{
              displayDialog(
                dialogueTypes.INFO,
                "Invalid Input",
                "Please Provide the description valid url"
              );     
            }
          }else{
            displayDialog(
              dialogueTypes.INFO,
              "Invalid Input",
              "Please Provide the description for this end-point"
            );   
          }
        } else {
          displayDialog(
            dialogueTypes.INFO,
            "Invalid Input",
            "Please Provide the query"
          );
        }
      } else {
        displayDialog(
          dialogueTypes.INFO,
          "Invalid Input",
          "Please Provide the database name"
        );
      }
    } else {
      displayDialog(dialogueTypes.INFO, "Invalid Input", "Please choose host");
    }
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
    <Container>
      <div>
        <Heading text={"Create New End-point"} fontSize="1.5rem" />
        <Grid container>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <CustomDropDown
              currentSelectedOption={currentSelectedOption}
              setCurrentSelectedOption={setCurrentSelectedOption}
              label="Select host"
              listOfOptions={listOfOptions_HostNames}
            />
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4} style={{ marginTop: "2%", textAlign: "center" }}>
            <CustomMultilineInputField
              rows={4}
              value={query}
              handleChange={(e) => {
                setQuery(e.target.value);
              }}
              label="Qurey"
            />
          </Grid>

          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4} style={{ marginTop: "2%", textAlign: "center" }}>
            <CustomMultilineInputField
              rows={3}
              value={databaseName}
              handleChange={(e) => {
                setDatabaseName(e.target.value);
              }}
              label="Database Name"
            />
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={4}></Grid>
          <Grid item xs={4} style={{ marginTop: "2%", textAlign: "center" }}>
            <CustomMultilineInputField
              rows={3}
              value={description}
              handleChange={(e) => {
                setDescription(e.target.value);
              }}
              label="Description"
            />
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4} style={{ marginTop: "2%", textAlign: "center" }}>
            <CustomMultilineInputField
              rows={3}
              value={url}
              handleChange={(e) => {
                setUrl(e.target.value);
              }}
              label="Url"
            />
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4} style={{ marginTop: "2%", textAlign: "center" }}>
            <CustomButton
              style={{
                // marginLeft:isMediumScreen? "40%":"35%",
                // marginTop: isMediumScreen? "3%":"3%",
                // left: isMediumScreen? "10":"",
                backgroundColor: "#10365B",
                // fontSize: isMediumScreen? "0.8rem" :"",
              }}
              onClick={makeUrlTestRequest}
              name="Test"
            />
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={4}></Grid>
          <Grid item xs={4} style={{ marginTop: "2%", textAlign: "center" }}>
            <CustomButton
              style={{
                // marginLeft:isMediumScreen? "40%":"35%",
                // marginTop: isMediumScreen? "3%":"3%",
                // left: isMediumScreen? "10":"",
                backgroundColor: "#10365B",
                // fontSize: isMediumScreen? "0.8rem" :"",
              }}
              onClick={() => {
                storeEndpointInDatabase();
              }}
              name="Create"
            />
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </div>

      <CustomDialog
        alertType={alertType}
        handleClickOpen={handleClickOpen_CustomDialog}
        handleCloseEvent={handleClose_CustomDialog}
        open={openCustomDialog}
        alertMessage={alertMessage_CustomDialog}
        alertTitle={alertTitle_CustomDialog}
      />
    </Container>
  );
};
export default CreateRemoteDatabaseAccessUrl;
