import { Container, Divider, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { LOAD_CONNECTED_HOSTS_LIST, SET_STATUS_OF_HOST_ACCESS_URL } from "../../../request-manager/requestUrls";
import CustomDropDown from "../../../Support/CustomDropDown";
import Heading from "../../../Support/Heading";
import ItemHolder_HostAcessUrl from "./ListItemHolders/ItemHolder_HostAcessUrl";

import { sendResquestToCentralAPI } from "../../../request-manager/requestManager";
import { COULD_NOT_FETCH } from "../../../request-manager/responseCodes";
import { Table } from "antd";
import Spinner from "../../../Support/Spinner";
import CustomDialog from "../../Dialogues/CustomDialog";
import dialogueTypes from "../../Dialogues/dialogueTypes";
import openNotificationWithIcon from "../../Dialogues/Notification";

const columns = [
  {
    title: "Host Name",
    dataIndex: "hostName",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Host Url",
    dataIndex: "hostUrl",
  },
  {
    title: "Number Of Requests",
    dataIndex: "numberOfRequests",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];

const ListOfHostAccessUrls = () => {
  const [refresh, setRefresh] = useState(false);
  const [listOfUrls, setlistOfUrls] = useState([]);

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
    sendResquestToCentralAPI("POST", LOAD_CONNECTED_HOSTS_LIST, {
      _id: _id,
    }).then(
      async (success) => {
        const response = await success.json();
        console.log("host accessUrl", response);
        if (response.responseCode == COULD_NOT_FETCH) {
          setlistOfUrls([]);
        } else {
          let tempList = [];
          response.payload.forEach((element) => {
            console.log("Element",element)
            tempList.push({
              key:element,
              hostName: element.hostName,
              hostUrl: element.hostAcessUrl.url,
              numberOfRequests: element.hostAcessUrl.numberOfHits,
              status: element.hostAcessUrl.status ? "Enabled" : "Disabled",
            });
          });
          setlistOfUrls(tempList);
         
        }
      },
      (error) => {
        console.log("Error", error);
      }
    );
  }, [refresh]);

  const handleHostStatucChange = (status) => {
    sendResquestToCentralAPI("POST", SET_STATUS_OF_HOST_ACCESS_URL, {
      hostId: currentSelectedRow.hostId,
      status: status,
    }).then(
      async (success) => {
        const response = await success.json();
        openNotificationWithIcon("info","Server Response",response.responseMessage,"bottom")
        setRefresh(!refresh)
      },
      (error) => {
        console.log("Error", error);
        setHostStatus(hostStatus);
      }
    );
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

  const handleOkEvent = (action) => {
    handleClose_CustomDialog();
    if(action){
      const {setedStatus}=action;
      handleHostStatucChange(setedStatus);
    }
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );

      setCurrentSelectRow(selectedRows[0].key);
      // console.log(selectedRows[0].accessRole);
      displayDialog(dialogueTypes.VIEW_LD_ACCESS_URL, "", selectedRows[0]);
    },
  };

  return <div>
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
      />
  </div>;
};
export default ListOfHostAccessUrls;
