import { Card, Container, Divider, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import {
  LOAD_LIST_OF_DEVELOPER_ACCOUNTS_BY_ADMIN_ID,
  LOAD_LIST_OF_DEV_CONNECTION_REQ_BY_ADMIN_ID,
  UPDATE_DEV_ADMIN_CON_STATUS,
} from "../../../request-manager/requestUrls";
import CustomDropDown from "../../../Support/CustomDropDown";
import DropDownForSelectingASCorDECS from "../../../Support/DropDownForSelectingASCorDECS";
import Heading from "../../../Support/Heading";
import { sendResquestToCentralAPI } from "../../../request-manager/requestManager";
import ItemHolder_DeveloperPendingRequests from "./ListItemHolders/ItemHolder_DeveloperPendingRequests";
import ItemHolder_DeveloperApprovedAccounts from "./ListItemHolders/ItemHolder_DeveloperApprovedAccounts";
import CustomDialog from "../../Dialogues/CustomDialog";
import { Table } from "antd";
import Spinner from "../../../Support/Spinner";
import dialogueTypes from "../../Dialogues/dialogueTypes";
import openNotificationWithIcon from "../../Dialogues/Notification";
import CustomTableLoadingForm from '../../../Support/CustomTableLoadingIcon'
const columns = [
  {
    title: "Developer Name",
    dataIndex: "developerName",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Developer Email",
    dataIndex: "developerEmail",
  },
  {
    title: "Requested Hosts",
    dataIndex: "requestedHosts",
  },
  {
    title: "Request Status",
    dataIndex: "requestStatus",
  },
  {
    title: "Assigned Role",
    dataIndex: "assignedRole",
  },
];

const ListOfDeveloperAccounts = () => {
  // list of consumers

  const [refresh, setRefresh] = useState(false);
  const [listOfConsumers, setListOfConsumers] = useState([]);

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
    sendResquestToCentralAPI(
      "POST",
      LOAD_LIST_OF_DEVELOPER_ACCOUNTS_BY_ADMIN_ID,
      {
        adminId: _id,
      }
    ).then(
      async (success) => {
        const list = await success.json();
        console.log("Connection reqeusts", list);
        // setListOfConsumers(list.responsePayload);
        let tempList = [];
        list.responsePayload.forEach((item) => {
          tempList.push({
            key: item,
            developerName: item.developerName,
            developerEmail: item.developerEmail,
            requestedHosts: item.listOfDatabases.map((host,index) => {
              if(host[0]!=undefined){
              return <div>
                 {index+1} : {host[0].hostName}  
                </div>
              }
            }),
            requestStatus: item.requestStatus,
            assignedRole: item.accessRole,
          });
        });
        setIsLoading(false);
        setListOfConsumers(tempList);
      },
      (error) => {
        console.log("Error", error);
      }
    );
  }, [refresh]);

  const displayDialog = (dialogType, dialogTitle, dialogMessage) => {
    setAlertMessage_CustomDialog(dialogMessage);
    setAlertTitle_CustomDialog(dialogTitle);
    setAlertType(dialogType);
    handleClickOpen_CustomDialog();
  };

  const updateTheRequestStatus = (
    value,
    accessRole,
    isAutoAccessUrlTokenGenerationAllowed
  ) => {
    if (accessRole == "") accessRole = 1201;
    const item = currentSelectedRow[0].key;
    sendResquestToCentralAPI("POST", UPDATE_DEV_ADMIN_CON_STATUS, {
      requestId: item._id,
      requestStatus: value,
      accessRole: accessRole,
      isAutoAccessUrlTokenGenerationAllowed:
        isAutoAccessUrlTokenGenerationAllowed,
    }).then(
      async (success) => {
        const response = await success.json();
        openNotificationWithIcon(
          "info",
          "Server Response",
          response.responseMessage,
          "bottom"
        );
        setRefresh((prev) => {
          return !prev;
        });
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

  const handleOkEvent = (action) => {
    handleClose_CustomDialog();
    if (action != null) {
      const { value, accessRole, isAutoAccessUrlTokenGenerationAllowed } =
        action;
      updateTheRequestStatus(
        value,
        accessRole,
        isAutoAccessUrlTokenGenerationAllowed
      );
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

      setCurrentSelectRow(selectedRows);
      console.log(selectedRows[0].accessRole);
      displayDialog(dialogueTypes.VIEW_DEV_CON_DETAILS, "", selectedRows[0]);
    },
  };
  const locale = {
    emptyText: (
        <span>
          <img src={ isDataLoading==true ? '/please-wait.jpg' : "/relax-women.jpg"} width={"250"} height={"250"} />
          <Heading text={ isDataLoading==true ? 'Please wait loading data' : "No accounts have been registered yet..!"} fontSize={"1rem"} fontWeight={"bold"}/>
        </span>
    ) 
  }
  return (
    <Container>
      {/* Heading */}
      <div>
        <Grid container>
          <Grid item xs={8}>
            <Heading text={"All Developers"} fontSize="1.5rem" />
          </Grid>
        </Grid>
      </div>
      <Table
        locale={locale}
        loading={{ indicator: <Spinner />, spinning: isDataLoading }}
        rowSelection={{
          type: "radio",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={listOfConsumers}
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
export default ListOfDeveloperAccounts;
