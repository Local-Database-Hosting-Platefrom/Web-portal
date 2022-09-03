import {
  Container,
  Divider,
  FormControlLabel,
  Grid,
  Switch,
} from "@mui/material";
import Heading from "../../../Support/Heading";
import CustomDialog from "../../Dialogues/CustomDialog";
import dialogueTypes from "../../Dialogues/dialogueTypes";
import { useRouter } from "next/router";
import { useState } from "react";
import CustomButton from "../../../Support/CustomButton";
import { sendResquestToCentralAPI } from "../../../request-manager/requestManager";
import { TERMITE_ALL_URLS } from "../../../request-manager/requestUrls";
import { Button, Card, Modal } from "antd";
import openNotificationWithIcon from "../../Dialogues/Notification";
const MasterControls = () => {
  const useData = JSON.parse(localStorage.getItem("loggedInUser"));
  const [loadingsForTerminatingUrls, setLoadingsForTerminatingUrls] = useState([]);
 

  const handleOkEvent = (action) => {
    //delete it.
    handleClose_CustomDialog();
    sendResquestToCentralAPI("POST", TERMITE_ALL_URLS, {
      _id: useData.responsePayload._id,
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.responsePayload) {
          displayDialog(
            dialogueTypes.INFO_WITHOUT_OK,
            "Server response",
            data.responseMessage
          );
        }
      });
  };


  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Are you sure you want to terminate all end-points ?');

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (index) => {
    setVisible(false)
    setLoadingsForTerminatingUrls((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
   
    sendResquestToCentralAPI("POST", TERMITE_ALL_URLS, {
      _id: useData.responsePayload._id,
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.responsePayload) {
          setLoadingsForTerminatingUrls((prevLoadings) => {
    const newLoadings = [...prevLoadings];
    newLoadings[index] = false;
    return newLoadings;
  });
  
          openNotificationWithIcon("info","Server Response",data.responseMessage,"bottom");
        }
      });
  };

  const handleCancel = () => {
    setVisible(false);
  };
  
  return (
    <Container style={{ paddingTop: "2%" }}>
      <Card title="Master Controller">
        <Card.Grid
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <Button
            type="danger"
            shape="round"
            style={{ width: "40%" }}
            size={"middle"}
            loading={loadingsForTerminatingUrls[0]}
            onClick={()=>{
              showModal();
            }}
          >
            Terminate All
          </Button>
        </Card.Grid>
      </Card>
      <Modal
        title="Critical Action"
        visible={visible}
        onOk={()=>{
          handleOk(0);
        }}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <h3>{modalText}</h3>
      </Modal>
    </Container>
  );
};
export default MasterControls;
