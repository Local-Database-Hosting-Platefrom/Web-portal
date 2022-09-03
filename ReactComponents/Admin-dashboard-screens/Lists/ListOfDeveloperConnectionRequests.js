import { Card, Container, Divider, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { LOAD_LIST_OF_DEV_CONNECTION_REQ_BY_ADMIN_ID, UPDATE_DEV_ADMIN_CON_STATUS } from "../../../request-manager/requestUrls";
import CustomDropDown from "../../../Support/CustomDropDown";
import DropDownForSelectingASCorDECS from "../../../Support/DropDownForSelectingASCorDECS";
import Heading from "../../../Support/Heading";
import { sendResquestToCentralAPI } from "../../../request-manager/requestManager";
import ItemHolder_DeveloperPendingRequests from "./ListItemHolders/ItemHolder_DeveloperPendingRequests";
import { Table } from "antd";
import CustomDialog from "../../Dialogues/CustomDialog";
import dialogueTypes from "../../Dialogues/dialogueTypes";
import openNotificationWithIcon from "../../Dialogues/Notification";
import Spinner from "../../../Support/Spinner";
import CustomTableLoadingForm from "../../../Support/CustomTableLoadingIcon";
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
    title: "Time and Date",
    dataIndex: "requestTimeAndData",
  }
];

const ListOfDeveloperConnectionRequests = () => {
  // list of consumers

  const [refresh, setRefresh] = useState(false);
  const [listOfConsumers, setListOfConsumers] = useState([]);
  const [currentSelectedRow, setCurrentSelectRow] = useState(null);

  const [alertType, setAlertType] = useState(null);
  const [openCustomDialog, setOpenCustomDialog] = useState(false);
  const [alertMessage_CustomDialog, setAlertMessage_CustomDialog] =
    useState("");
  const [alertTitle_CustomDialog, setAlertTitle_CustomDialog] = useState("");

  const [isDataLoading,setIsLoading]=useState(false);

  useEffect(() => {
    // Make call to load pending list of hosts
    setIsLoading(true);
    const useData = JSON.parse(localStorage.getItem("loggedInUser"));
    const _id = useData.responsePayload._id;
    sendResquestToCentralAPI(
      "POST",
      LOAD_LIST_OF_DEV_CONNECTION_REQ_BY_ADMIN_ID,
      {
        adminId: _id,
      }
    ).then(
      async (success) => {
        const list = await success.json();
        console.log("Connection reqeusts", list);
        let tempList = [];
        list.responsePayload.forEach((item) => {
          tempList.push({
            key:item,
            developerName: item.developerName,
            developerEmail: item.developerEmail,
            requestedHosts: item.listOfDatabases.map((host,index) => {
              if(host[0]){

              return <div> 
                
                {index+1} : {host[0].hostName}   </div>
              }else{
                return <div> 
                
                HOST HAS BEEN DELETED  </div>
              }
            }),
            requestTimeAndData: item.requestTimeAndData,
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

  const updateTheRequestStatus=(value,accessRole,isAutoAccessUrlTokenGenerationAllowed)=>{
    if(accessRole=="") accessRole=1201;
    const item = currentSelectedRow[0].key;
    sendResquestToCentralAPI("POST", UPDATE_DEV_ADMIN_CON_STATUS,{
        requestId:item._id,requestStatus:value,accessRole:accessRole,isAutoAccessUrlTokenGenerationAllowed:isAutoAccessUrlTokenGenerationAllowed
      }).then(async (success)=>{
        const response = await success.json();
        console.log("Connectioon Status updated",response);
        openNotificationWithIcon("info","Server Response",response.responseMessage,"bottom");
        setRefresh((prev)=>{
          return !prev
        });
      },(error)=>{
        console.log("Error",error)
      })
  }
  const handleClickOpen_CustomDialog = () => {
    setOpenCustomDialog(true);
  };

  const handleClose_CustomDialog = () => {
    setOpenCustomDialog(false);
  };

  const handleOkEvent = (action) => {
    handleClose_CustomDialog();
    if(action!=null){
      const {value,accessRole,isAutoAccessUrlTokenGenerationAllowed}=action;
      updateTheRequestStatus(value,accessRole,isAutoAccessUrlTokenGenerationAllowed);
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
      displayDialog(dialogueTypes.VIEW_DEV_CON_REQUEST, "", selectedRows[0]);
    },
  };
  const locale = {
    emptyText: (
        <span>
       <img src={ isDataLoading==true ? '/please-wait.jpg' : "/relax-women.jpg"} width={"250"} height={"250"} />
       <Heading text={ isDataLoading==true ? "Please wait loading the records" : "No connection requests found..!"} fontSize={"1rem"} fontWeight={"bold"}/>
        </span>
    )  
  }

  return (
    <Container>
      <div>
        <Grid container>
          <Grid item xs={8}>
            <Heading text={"Connection Requests"} fontSize="1.5rem" />
          </Grid>
        </Grid>
      </div>
      <Table
        locale={locale}
        loading={{indicator:<Spinner/>,spinning:isDataLoading}}
        rowSelection={{
          type:"radio",
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
export default ListOfDeveloperConnectionRequests;
