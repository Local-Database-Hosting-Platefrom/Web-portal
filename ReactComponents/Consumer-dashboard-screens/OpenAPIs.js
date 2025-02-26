import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { sendResquestToCentralAPI } from "../../request-manager/requestManager";
import { LOAD_LIST_OF_REMOTE_ENDPOINTS } from "../../request-manager/requestUrls";
import CustomButton from "../../Support/CustomButton";
import Heading from "../../Support/Heading";
import TestTokenForm from "./Forms/TestTokenForm";
import { OpenApisListItemHolder } from "./itemHolders/OpenApisListItemHolder";
// import TableForListOfAPIs from "./tables/tableForListOfAPIs";
import { Button, Table } from "antd";
import CustomDialog from "../Dialogues/CustomDialog";
import dialogueTypes from "../Dialogues/dialogueTypes";
import Spinner from "../../Support/Spinner";
import CustomTableLoadingForm from "../../Support/CustomTableLoadingIcon";

const columns = [
  {
    title: "Provider",
    dataIndex: "urlProvider",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Number Of Hits",
    dataIndex: "numberOfHits",
  },
  {
    title: "URl Title",
    dataIndex: "urlTitle",
  },
  {
    title: "URl Address",
    dataIndex: "urlAddress",
  },
];

const OpenAPIs = () => {
  const [listOfUrls, setListOfUrls] = useState([]);

  const [alertType, setAlertType] = useState(null);
  const [openCustomDialog, setOpenCustomDialog] = useState(false);
  const [alertMessage_CustomDialog, setAlertMessage_CustomDialog] =
    useState("");
  const [alertTitle_CustomDialog, setAlertTitle_CustomDialog] = useState("");
  const [isDataLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let loggedInUser = localStorage.getItem("loggedInUser");
    loggedInUser = JSON.parse(loggedInUser);
    // console.log(loggedInUser);
    setIsLoading(true);
    let developerId = loggedInUser.responsePayload._id;
    let token = loggedInUser.responsePayload.jwtToken;
    sendResquestToCentralAPI(
      "POST",
      LOAD_LIST_OF_REMOTE_ENDPOINTS,
      { developerId: developerId },
      token
    ).then(
      async (response) => {
        const r = await response.json();
        let list = r.responsePayload.map((url, index) => {
          return {
            key: index,
            urlProvider: url.adminData.adminName,
            urlTitle: url.url.url,
            urlAddress: `${url.host}${url.url.endPointUrlAddress}`,
            urlCompleteInfo: url,
            numberOfHits: url.url.numberOfHits,
          };
        });
        // console.log(response)
        setListOfUrls(list);
        setIsLoading(false);
      },
      (error) => {
        console.log(error);
        setIsLoading(false);
      }
    );
  }, []);

  const [currentSelectedRow, setCurrentSelectRow] = useState(null);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      setCurrentSelectRow(selectedRows);
      displayDialog(
        dialogueTypes.OPEN_API_SELECTION_OPTIONS_DEV,
        null,
        selectedRows
      );
    },
  };

  const handleOkEvent = (action) => {
    handleClose_CustomDialog();
  };

  const handleNoEvent = (action) => {
    handleClose_CustomDialog();
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

  // let locale = {
  //   emptyText: (
  //     <span>
  //       <img src="/no_data_found.jpg" width="300px" height="300px" />
  //       <Heading text={"Found no open API.!!"} fontSize={"1.5rem"} />
  //     </span>
  // ),

  // };
  const locale = {
    emptyText: (
        <span>
          <img src={ isDataLoading==true ? '/please-wait.jpg' : "/no_data_found.jpg"} width={ isDataLoading==true ? "250" : "300"} height={ isDataLoading==true ?"250" : "300"} />
          <Heading text={ isDataLoading==true ? 'Please wait loading open apis!' : "No open API found"} fontSize={"1rem"} fontWeight={"bold"}/>
        </span>
    ) 
  }
  return (
    <div>
      <div style={{paddingLeft:"1%",}}>
        <Heading text={"Open APIs"} fontWeight="bold" fontSize="1.5rem"/>
      </div>
      <div style={{marginTop:"2%"}}>
      <Table
        locale={locale}
        rowSelection={{
          type: "radio",
          ...rowSelection,
        }}
        loading={{ indicator: <Spinner />, spinning: isDataLoading }}
        columns={columns}
        dataSource={listOfUrls}
      />
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
    </div>
  );
};

export default OpenAPIs;
