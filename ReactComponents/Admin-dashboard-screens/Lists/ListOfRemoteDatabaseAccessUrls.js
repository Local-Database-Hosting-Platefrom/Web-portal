import { Container, Divider, Grid } from "@mui/material";
import { Table } from "antd";
import { useEffect, useState } from "react";
import { sendResquestToCentralAPI } from "../../../request-manager/requestManager";
import {
  DELETE_REMOTE_DATABASE_ENDPOINT,
  LOAD_LIST_OF_REMOTE_DATABASE_URLS,
  SET_STATUS_OF_REMOTE_DATABASE_HOST_ACCESS_URL,
  UPDATE_REMOTE_DB_URL_VISIBILITY,
} from "../../../request-manager/requestUrls";
import CustomDropDown from "../../../Support/CustomDropDown";
import Heading from "../../../Support/Heading";
import Spinner from "../../../Support/Spinner";
import CustomDialog from "../../Dialogues/CustomDialog";
import dialogueTypes from "../../Dialogues/dialogueTypes";
import openNotificationWithIcon from "../../Dialogues/Notification";
// import ItemHolder_ConsumerPendingRequest from "./ListItemHolders/ItemHolder_ConsumerPendingRequest";
import ItemHolder_HostAcessUrl from "./ListItemHolders/ItemHolder_HostAcessUrl";
import ItemHolder_RemoteDatabaeAcessUrl from "./ListItemHolders/ItemHolder_RemoteDatabaeAcessUrl";

const columns = [
  {
    title: "URL Title",
    dataIndex: "urlTitle",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Host",
    dataIndex: "urlHost",
  },
  {
    title: "Url Addres",
    dataIndex: "urlAddress",
  },
  {
    title: "Number of Hits",
    dataIndex: "numberOfHists",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Public/Private",
    dataIndex: "isPublic",
  },
];

const ListOfRemoteDatabaseAccessUrls = () => {
  const [listOfUrls, setlistOfUrls] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const [currentSelectedRow, setCurrentSelectRow] = useState(null);

  const [alertType, setAlertType] = useState(null);
  const [openCustomDialog, setOpenCustomDialog] = useState(false);
  const [alertMessage_CustomDialog, setAlertMessage_CustomDialog] =
    useState("");
  const [alertTitle_CustomDialog, setAlertTitle_CustomDialog] = useState("");

  const [isDataLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Make call to load pending list of hosts
    const useData = JSON.parse(localStorage.getItem("loggedInUser"));
    const _id = useData.responsePayload._id;
    setIsLoading(true);
    sendResquestToCentralAPI("POST", LOAD_LIST_OF_REMOTE_DATABASE_URLS, {
      adminId: _id,
    }).then(
      async (success) => {
        const response = await success.json();
        console.log(response.responsePayload);
        let listOfUrlsToSet = response.responsePayload.map((url) => {
          return {
            key: url,
            urlTitle: url.url,
            urlHost: url.sourceHostName,
            urlAddress: url.endPointUrlAddress,
            numberOfHists: url.numberOfHits,
            status: url.isEnabled == "true" ? "Enabled" : "Disabled",
            isPublic: url.isPublic ? "Public" : "Private",
          };
        });
        console.log(listOfUrlsToSet);
        setlistOfUrls(listOfUrlsToSet);
        setIsLoading(false);
      },
      (error) => {
        console.log("Error", error);
        setIsLoading(false);
      }
    );
  }, [refresh]);

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
    if (action) {

      if (action.action == "delete") {
        sendResquestToCentralAPI("POST", DELETE_REMOTE_DATABASE_ENDPOINT, {
          urlId: currentSelectedRow.urlId,
        }).then(
          async (success) => {
            const response = await success.json();
            console.log("response", response);
            handleClose_CustomDialog();
            setRefresh(!refresh);
            openNotificationWithIcon(
              "info",
              "Server Response",
              response.responseMessage,
              "bottom"
            );
          },
          (error) => {
            handleClose_CustomDialog();
            alert(JSON.stringify(error));
            openNotificationWithIcon(
              "error",
              "Server Response",
              JSON.stringify(error),
              "bottom"
            );
          }
        );

      } 
      else if (action.action == "updateStates") {
        // const { isOpenAPIEnabled, isOpenAPIPublic } = action.payload;
        sendResquestToCentralAPI("POST", UPDATE_REMOTE_DB_URL_VISIBILITY, {
          urlId: currentSelectedRow.urlId,
          visibility: action.payload!=null ? action.payload.isOpenAPIPublic : false,
        }).then(async (resp) => {
          const response = await resp.json();
          openNotificationWithIcon('info',"Server Response",response.responseMessage,"bottom");
          setRefresh(!refresh);
          handleClose_CustomDialog();
        });
      }

      sendResquestToCentralAPI(
        "POST",
        SET_STATUS_OF_REMOTE_DATABASE_HOST_ACCESS_URL,
        {
          urlId: currentSelectedRow.urlId,
          status: action.payload!=null ?  action.payload.isOpenAPIEnabled+"" : "true",
        }

      ).then(
        async (success) => {
          const response = await success.json();
        
          openNotificationWithIcon("info","Server Response",response.responseMessage,"bottom");
          setRefresh(!refresh)
          handleClose_CustomDialog();
        },
        (error) => {
          console.log("Error", error);      
          openNotificationWithIcon("info","Server Response",JSON.stringify(error),"bottom");
          setRefresh(!refresh)
          handleClose_CustomDialog();
        }
      );
    } else {
      handleClose_CustomDialog();
    }
  };

  const handleNoEvent=()=>{
    handleClose_CustomDialog();
  }
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );

      setCurrentSelectRow(selectedRows[0].key);
      // console.log(selectedRows[0].accessRole);
      displayDialog(dialogueTypes.VIEW_OPEN_API, "", selectedRows[0]);
    },

  };


  return (
    <Container>
      <Grid container>
        <Grid item xs={8}>
          <Heading text={"Open APIs"} fontSize="1.5rem" />
        </Grid>
      </Grid>
      <Table
        loading={{ indicator: <Spinner />, spinning: isDataLoading }}
        rowSelection={{
          type: "radio",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={listOfUrls}
      />

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
export default ListOfRemoteDatabaseAccessUrls;
