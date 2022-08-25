import { Container } from "@mui/material";
import { useState } from "react";
import { sendResquestToCentralAPI } from "../../../request-manager/requestManager";
import {
  AUTH_PAGE,
  DELETE_ACCOUNT,
} from "../../../request-manager/requestUrls";
import { DELETED } from "../../../request-manager/responseCodes";
import CustomButton from "../../../Support/CustomButton";
import Heading from "../../../Support/Heading";
import InputField from "../../../Support/InputFields";
import CustomDialog from "../../Dialogues/CustomDialog";
import dialogueTypes from "../../Dialogues/dialogueTypes";
import { useRouter } from "next/router";
import { Button, Card, Input, Modal } from "antd";
import openNotificationWithIcon from "../../Dialogues/Notification";
const DeleteAccount = () => {
  const navigation = useRouter();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const useData = JSON.parse(localStorage.getItem("loggedInUser"));
  const [loadingsForTerminatingUrls, setLoadingsForTerminatingUrls] = useState([]);
 
  let authType = null;
  if (useData) {
    authType = useData.responsePayload.authType;
    email = useData.responsePayload.email;
  }
  const handleOkEvent = (action) => {
    //delete it.
    handleClose_CustomDialog();

    
  };

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(
    "Are you sure you want to delete the account ?"
  );

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (index) => {
    
    setVisible(false);
    setLoadingsForTerminatingUrls((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    let data = null;
    let readyToRequest = false;
    if (authType == "userName&Password") {
      if (password != null) {
        data = {
          email: email,
          password: password,
          authType: authType,
          accountType: "admin",
          _id: useData.responsePayload._id,
        };
        readyToRequest = true;
      } else {
        
        openNotificationWithIcon("error","Invalid input","Please provide your password..!","bottom")
      }
    } else {
      data = {
        authType: authType,
        accountType: "admin",
        _id: useData.responsePayload._id,
      };
      readyToRequest = true;
    }
    if (readyToRequest) {
      sendResquestToCentralAPI("POST", DELETE_ACCOUNT, data)
        .then((resp) => resp.json())
        .then((data) => {
          if (data.responseCode == DELETED) {
            openNotificationWithIcon("info","Server Response",data.responseMessage,"bottom")
            localStorage.setItem("isLoggedIn", false);
            navigation.push(AUTH_PAGE);
          } else {
          }
        });
    }
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Container>
      <Card title="Master Controller" style={{marginTop:"2%"}}>
        <Card.Grid
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <div>
            <Input
              style={{
                fontSize: "0.8rem",
                padding: "0.7rem",
                borderRadius: "5rem",
                width:"40%"
              }}
              // autoSize={true}
              type="text"
              // bordered={true}
              size="middle"
              // prefix={<UserOutlined />}
              // showCount={true}
              onChange={(e) => {
                setEmail(e.target.value);
              }}

              value={email}
              placeholder="Type email"
            />
          </div>
          <div>
            {authType == "userName&Password" && (
              <div>
                <Input.Password
                  style={{
                    fontSize: "0.7rem",
                    padding: "0.8rem",
                    borderRadius: "5rem",
                    width:"40%",
                    marginTop:"2%"
                  }}

                  // autoSize={true}
                  size="middle"
                  placeholder="input password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            )}
          </div>
          <Button
            type="danger"
            shape="round"
            style={{ width: "40%",marginTop:"2%" }}
            size={"middle"}
            loading={loadingsForTerminatingUrls[0]}
            onClick={() => {
              showModal();
            }}
          >
            Delete Account
          </Button>
        </Card.Grid>
      </Card>
      <Modal
        title="Critical Action"
        visible={visible}
        onOk={() => {
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
export default DeleteAccount;
