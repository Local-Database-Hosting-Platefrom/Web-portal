import {
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import Heading from "../../Support/Heading";
import ServiceProviderListItemHolder from "./itemHolders/ServiceProviderListItemHolder";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomButton from "../../Support/CustomButton";
import { useEffect } from "react";
import {
  LOAD_LIST_OF_SERVICE_PROVIDERS,
  MAKE_CON_REQUEST_FOR_DEV_TO_ADMIN,
} from "../../request-manager/requestUrls";
import { sendResquestToCentralAPI } from "../../request-manager/requestManager";
import dialogueTypes from "../Dialogues/dialogueTypes";
import CustomDialog from "../Dialogues/CustomDialog";
import { CREATED_ACCOUNT } from "../../request-manager/responseCodes";

const AvaibleServiceProviders = () => {
  const isMediumScreen = useMediaQuery("(min-width:600px)");
  const [checkedHostList, setListOfCheckedHost] = useState([]);
  const [alertType,setAlertType]=useState(null);
  const [openCustomDialog, setOpenCustomDialog] = useState(false);
  const [alertMessage_CustomDialog,setAlertMessage_CustomDialog]=useState("");
  const [alertTitle_CustomDialog,setAlertTitle_CustomDialog]=useState("");
  
  const [listOfServiceProviders, setListOfServiceProviders] = useState([
    {
      serviceProviderName: "Zeeshan",
      serviceProviderId: "sdkhjflffn",
      serviceProvider_ConnectedHosts: [
        {
          hostName: "Zeeshan",
          hostId: "fnkbjn",
        },
      ],
    },
  ]);

  useEffect(() => {
    // Make call to load  list of service providers
    sendResquestToCentralAPI("GET", LOAD_LIST_OF_SERVICE_PROVIDERS, {}).then(
      async (success) => {
        const list = await success.json();
        console.log("Service providers:", list);
        let temp = [];
        list.responsePayload.forEach((record) => {
          let rec = {
            serviceProviderName: record.firstName + " " + record.lastName,
            serviceProviderId: record.serviceProviderId,
            serviceProvider_ConnectedHosts: record.connectedHostList,
          };
          temp.push(rec);
        });
        setListOfServiceProviders(temp);
      },
      (error) => {
        console.log("Error", error);
      }
    );
  }, []);

  const manageListOfCheckCheckboxes = (isChecked, value) => {
    if (isChecked) {
      // puch in case not in list
      let flag = false;
      checkedHostList.forEach((item) => {
        if (item.hostId == value.hostId) {
          flag = true;
        }
      });
      if (!flag) {
        checkedHostList.push(value);
      }
      setListOfCheckedHost(checkedHostList);
    } else {
      setListOfCheckedHost(
        checkedHostList.map((item) => {
          if (item.hostId != value.hostId) {
            return item;
          } else {
            return {};
          }
        })
      );
    }
  };

  const handleMakeRegisterRequest = (serviceProviderId) => {
    let listOfDatabases = checkedHostList.map((item) => {
      if (item.adminId == serviceProviderId) {
        return item;
      }
    });

    const userData = JSON.parse(localStorage.getItem("loggedInUser"));
    const developerId = userData.responsePayload._id;
    sendResquestToCentralAPI("POST", MAKE_CON_REQUEST_FOR_DEV_TO_ADMIN, {
      listOfDatabases: listOfDatabases,
      adminId: serviceProviderId,
      developerId: developerId,
      developerName : userData.responsePayload.firstName+" "+userData.responsePayload.lastName,
      developerEmail:userData.responsePayload.email,
    }).then(
      async (success) => {
        const response = await success.json();
        console.log("Made connection request", response);
        if(response.responseCode==CREATED_ACCOUNT){
            setAlertTitle_CustomDialog("Great..!!");
        }else{
            setAlertTitle_CustomDialog("Something wrong went");  
        }
        setAlertType(dialogueTypes.INFO)
        setAlertMessage_CustomDialog(response.responseMessage);
        handleClickOpen_CustomDialog();
      },
      (error) => {
        console.log("Error", error);
      }
    );
  };
  const handleClickOpen_CustomDialog = () => {
    setOpenCustomDialog(true);
  };
  const handleClose_CustomDialog = () => {
    setOpenCustomDialog(false);
  };



  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Heading text={"Service providers"} fontSize="1.4rem" />
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            paddingLeft: "8%",
            paddingRight: "5%",
            marginTop: "2%",
            overflowY: "scroll",
            height: "25rem",
          }}
        >
          {listOfServiceProviders.map((item) => {
            return (
              <div style={{ marginTop: "2%" }}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      {" "}
                      Provider Name : {item.serviceProviderName}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>Connected Hosts</Typography>
                    <div>
                      <FormGroup row>
                        {item.serviceProvider_ConnectedHosts.map((host) => {
                          return (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  sx={{
                                    color: "black",
                                    "&.Mui-checked": {
                                      color: "blue",
                                    },
                                  }}
                                />
                              }
                              value={JSON.stringify({
                                hostId: host.hostId,
                                adminId: item.serviceProviderId,
                                hostName:host.hostName
                              })}
                              label={host.hostName}
                              onChange={(e) => {
                                // console.log("Checkbox",JSON.parse(e.target.value))
                                manageListOfCheckCheckboxes(
                                  e.target.checked,
                                  JSON.parse(e.target.value)
                                );
                              }}
                            />
                          );
                        })}
                      </FormGroup>
                    </div>
                    <div
                      key={item.serviceProviderId}
                      onClick={(e) => {
                        handleMakeRegisterRequest(e.target.value);
                      }}
                    >
                      <CustomButton
                        style={{
                          // marginLeft:isMediumScreen? "40%":"35%",
                          marginTop: isMediumScreen ? "3%" : "3%",
                          // left: isMediumScreen? "10":"",
                          // position: "absolute",
                          // right: 5,
                          // bottom: 10,

                          backgroundColor: "#10365B",
                          fontSize: isMediumScreen ? "0.8rem" : "",
                        }}
                        value={item.serviceProviderId}
                        name="Get Service"
                      />
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            );
          })}
        </Grid>
      </Grid>
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
export default AvaibleServiceProviders;
