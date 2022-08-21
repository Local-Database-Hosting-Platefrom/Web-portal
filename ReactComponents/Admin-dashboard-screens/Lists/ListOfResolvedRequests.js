import { Container, Divider, Grid } from "@mui/material";
import { Table } from "antd";
import { useEffect, useState } from "react";
import { sendResquestToCentralAPI } from "../../../request-manager/requestManager";
import { LOAD_LIST_OF_RESOLVED_REQUESTS } from "../../../request-manager/requestUrls";
import CustomDropDown from "../../../Support/CustomDropDown";
import Heading from "../../../Support/Heading";
import Spinner from "../../../Support/Spinner";
import CustomDialog from "../../Dialogues/CustomDialog";
import dialogueTypes from "../../Dialogues/dialogueTypes";
import ItemHolder_ConsumerDeniedRequest from "./ListItemHolders/ItemHolder_ConsumerDeniedRequest";
import ItemHolder_ConsumerResolvedRequest from "./ListItemHolders/ItemHolder_ConsumerResolvedRequest";

const columns = [
  {
    title: "Request Id",
    dataIndex: "requestId",
  },
  {
    title: "Developer Name",
    dataIndex: "developerName",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Host Name",
    dataIndex: "hostName",
  },
  {
    title: "Request Time And Date",
    dataIndex: "requestTimeAndDate",
  },
];

const ListOfResolvedRequests = () => {
  const [listOfRequests, setListOfRequests] = useState([]);
  const [currentSelectedRow, setCurrentSelectRow] = useState(null);

  const [alertType, setAlertType] = useState(null);
  const [openCustomDialog, setOpenCustomDialog] = useState(false);
  const [alertMessage_CustomDialog, setAlertMessage_CustomDialog] =
    useState("");
  const [alertTitle_CustomDialog, setAlertTitle_CustomDialog] = useState("");

  const [isDataLoading, setIsDataLoading] = useState(false);

  useEffect(() => {
    // Make call to load pending list of hosts
    const useData = JSON.parse(localStorage.getItem("loggedInUser"));
    const _id = useData.responsePayload._id;
    setIsDataLoading(true);
    sendResquestToCentralAPI("POST", LOAD_LIST_OF_RESOLVED_REQUESTS, {
      adminId: _id,
    }).then(
      async (success) => {
        const list = await success.json();
        console.log(list.responsePayload);
        const listToSet = list.responsePayload.map((request) => {
          const r = {
            key:request,
            requestId:request.request.requestId,
            developerName: request.requestSenderName,
            hostName: request.hostData.hostName,
            requestTimeAndDate: request.request.requestDateAndTime,
          };
             return r;
        });
        setListOfRequests(listToSet);
        setIsDataLoading(false);
      },
      (error) => {
        console.log("Error", error);
        setIsDataLoading(false);
      }
    );
  }, []);

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
      displayDialog(dialogueTypes.VIEW_COMPLETE_REQUEST, "", selectedRows[0]);
    },
  };
  return (
    <Container>
      <div>
        <Grid container>
          <Grid item xs={8}>
            <Heading text={"Resolved requests"} fontSize="1.5rem" />
          </Grid>
        </Grid>
      </div>
      <Table
        loading={{ indicator: <Spinner />, spinning: isDataLoading }}
        rowSelection={{
          type: "radio",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={listOfRequests}
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
    </Container>
  );
};
export default ListOfResolvedRequests;
