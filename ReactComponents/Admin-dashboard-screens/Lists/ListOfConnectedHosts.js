import { Container, Divider, Grid } from "@mui/material";
import { Table } from "antd";
import { useEffect, useState } from "react";
import { sendResquestToCentralAPI } from "../../../request-manager/requestManager";
import { LOAD_CONNECTED_HOSTS_LIST, SET_HOST_STATUS } from "../../../request-manager/requestUrls";
import CustomDropDown from "../../../Support/CustomDropDown";
import CustomTableLoadingForm from "../../../Support/CustomTableLoadingIcon";
import Heading from "../../../Support/Heading";
import Spinner from "../../../Support/Spinner";
import CustomDialog from "../../Dialogues/CustomDialog";
import dialogueTypes from "../../Dialogues/dialogueTypes";
import openNotificationWithIcon from "../../Dialogues/Notification";
import ItemHolder_ConnectedHost from "./ListItemHolders/ItemHolder_ConnectedHost";
import ItemHolder_ConsumerDeniedRequest from "./ListItemHolders/ItemHolder_ConsumerDeniedRequest";
import ItemHolder_ConsumerRole from "./ListItemHolders/ItemHolder_ConsumerRole";


const columns = [
  {
    title: "Host Id",
    dataIndex: "hostId",
  },
  {
    title: "Host Name",
    dataIndex: "hostName",
  },
  {
    title: "Number Of Hits",
    dataIndex: "numberOfHits",
  },
  {
    title: "Last Seen",
    dataIndex: "lastSeen",
  },
  
  {
    title: "Request Status",
    dataIndex: "requestStatus",
  },
];


const ListOfConnectedHosts = ()=>{
  const [refresh,setRefresh]=useState(false);
  const [ListOfConnectedHosts,setListOfConnectedHosts] =useState([]);

  const [currentSelectedRow, setCurrentSelectRow] = useState(null);

  const [alertType, setAlertType] = useState(null);
  const [openCustomDialog, setOpenCustomDialog] = useState(false);
  const [alertMessage_CustomDialog, setAlertMessage_CustomDialog] =
    useState("");
  const [alertTitle_CustomDialog, setAlertTitle_CustomDialog] = useState("");

  const [isDataLoading, setIsDataLoading] = useState(false);

    useEffect(()=>{
      // Make call to load pending list of hosts
      const useData = JSON.parse(localStorage.getItem("loggedInUser"));
      const _id = useData.responsePayload._id;
      setIsDataLoading(true); 
      sendResquestToCentralAPI("POST", LOAD_CONNECTED_HOSTS_LIST,{
        _id: _id,
      }).then(async (success)=>{
        const list = await success.json();
        setListOfConnectedHosts(
          list.payload.map((host) => {
            return {
              key: host,
              hostId: host.hostId,
              hostName: host.hostName,
              lastSeen: host.lastSeenDateAndTime,
              requestStatus: host.isConnected,
              numberOfHits:host.hostAcessUrl.numberOfHits
            };
          })
        );
        setIsDataLoading(false)
      },(error)=>{
        console.log("Error",error)
      })
    },[refresh])
    
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
      if (action) {
        const userData = JSON.parse(localStorage.getItem("loggedInUser"));
        const adminId = userData.responsePayload._id;
        const hostId = currentSelectedRow.hostId;
        const status = action.payload;
        sendResquestToCentralAPI("POST", SET_HOST_STATUS, {
          adminId,
          hostId,
          status,
        }).then(
          async (success) => {
            const response = await success.json();
            setRefresh((prev) => {
              return !prev;
            });
  
            openNotificationWithIcon(
              "info",
              "Server Response",
              response.responseMessage,
              "bottom"
            );
          },
          (error) => {
            console.log("Error", error);
            openNotificationWithIcon(
              "info",
              "Server Response",
              JSON.stringify(error),
              "bottom"
            );
          }
        );
      }
    };
    const handleNoEvent = (action) => {
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
        displayDialog(
          dialogueTypes.VIEW_HOST_CONNECTION,
          "",
          selectedRows[0]
        );
      },
    };
  
    return <Container>
        <Table
        locale={CustomTableLoadingForm()}
        loading={{ indicator: <Spinner />, spinning: isDataLoading }}
        rowSelection={{
          type: "radio",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={ListOfConnectedHosts}
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
}
export default ListOfConnectedHosts;