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
  const [alertType, setAlertType] = useState(null);
  const [openCustomDialog, setOpenCustomDialog] = useState(false);
  const [alertMessage_CustomDialog, setAlertMessage_CustomDialog] =
    useState("");
  const [alertTitle_CustomDialog, setAlertTitle_CustomDialog] = useState("");

  const [listOfServiceProviders, setListOfServiceProviders] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);
  useEffect(() => {
    // Make call to load  list of service providers
    const userData = JSON.parse(localStorage.getItem("loggedInUser"));
    const developerId = userData.responsePayload._id;
    setIsDataLoading(true);
    sendResquestToCentralAPI("POST", LOAD_LIST_OF_SERVICE_PROVIDERS, {
      developerId: developerId,
    }).then(
      async (success) => {
        const list = await success.json();
        // console.log("Service providers:", list);
        let temp = [];
        list.responsePayload.forEach((record) => {
          // console.log("Host list : ",record.connectedHostList)
          console.log("record.totalHostsProvided", record);
          let accessRole = null;
          if (record.connectionRequest) {
            if (record.connectionRequest.accessRole === "1202") {
              accessRole = "Read only";
            }
            if (record.connectionRequest.accessRole === "1201") {
              accessRole = "Write only";
            }
            if (record.connectionRequest.accessRole === "1203") {
              accessRole = "Read and Write";
            }
          }
          let rec = {
            serviceProviderName: record.firstName,
            serviceProviderId: record.serviceProviderId,
            serviceProviderPhoto: record.profilePhotoUrl,
            serviceProvider_ConnectedHosts: record.connectedHostList,
            plainNamesOfAllProvidedDatabases: record.connectedHostList.map(
              (item) => {
                return item.hostName;
              }
            ),

            connectionRequest: record.connectionRequest,
            totalHostsProvided: record.connectedHostList.length,
            numberOfOpenAPIs: record.numberOfOpenAPIs,
            numberOfEntertainedRequests: 0,
            accessRole: accessRole,
          };
          temp.push(rec);
        });

        setListOfServiceProviders(temp);
        setIsDataLoading(false);
      },
      (error) => {
        console.log("Error", error);
        setIsDataLoading(false);
      }
    );
  }, [refresh]);

  return (
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
        {listOfServiceProviders.length != 0 && (
          <div>
            <Grid container>
              {listOfServiceProviders.map((item) => {
                return (
                  <Grid
                    item
                    xs={6}
                    style={{ marginTop: "2%", padding: "1rem" }}
                  >
                    <ServiceProviderListItemHolder
                      item={item}
                      setRefresh={setRefresh}
                      refresh={refresh}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </div>
        )}

        {listOfServiceProviders.length == 0 && (
          <div style={{ textAlign: "center" }}>
            {isDataLoading == true && (
              <div>
                <img
                  src="/output-onlinegiftools.gif"
                  width="200px"
                  height="200px"
                />
                <Heading text={"Loading service providers"} fontSize={"1rem"} fontWeight="bold"/>
              </div>
            )}
             {isDataLoading == false && (
              <div>
                <img
                  src="/no_data_found.jpg"
                  width="350px"
                  height="350px"
                />
                <Heading text={"Um..!! Found no service provider..!"} fontSize={"1.5rem"} fontWeight="bold"/>
              </div>
            )}
          </div>
        )}
      </Grid>
    </Grid>
  );
};
export default AvaibleServiceProviders;
