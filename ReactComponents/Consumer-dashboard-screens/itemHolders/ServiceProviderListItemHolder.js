import { Grid } from "@mui/material";
import Heading from "../../../Support/Heading";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card, Skeleton, Switch } from "antd";
const { Meta } = Card;
import { Col, Row } from "antd";
import "antd/dist/antd.css";
import Title from "antd/lib/skeleton/Title";
import openNotificationWithIcon from "../../Dialogues/Notification";
import CustomDialog from "../../Dialogues/CustomDialog";
import dialogueTypes from "../../Dialogues/dialogueTypes";
import { useState } from "react";

const ServiceProviderListItemHolder = ({ item, refresh, setRefresh }) => {
  const [alertType, setAlertType] = useState(null);
  const [openCustomDialog, setOpenCustomDialog] = useState(false);
  const [alertMessage_CustomDialog, setAlertMessage_CustomDialog] =
    useState("");
  const [alertTitle_CustomDialog, setAlertTitle_CustomDialog] = useState("");

  const handleClickOpen_CustomDialog = () => {
    setOpenCustomDialog(true);
  };

  const handleClose_CustomDialog = () => {
    setOpenCustomDialog(false);
  };

  const displayDialog = (dialogType, dialogTitle, dialogMessage) => {
    setAlertMessage_CustomDialog(dialogMessage);
    setAlertTitle_CustomDialog(dialogTitle);
    setAlertType(dialogType);
    handleClickOpen_CustomDialog();
  };

  const handleOkEvent = (action) => {
    handleClose_CustomDialog();
    setRefresh(!refresh);
  };

  const handleNoEvent = (action) => {
    handleClose_CustomDialog();
  };

  return (
    <Card
      style={{
        width: "100%",
        // marginTop: 16,
        padding: "1rem",
      }}
      actions={[
        <Button
          type="primary"
          shape="round"
          style={{ width: "80%", background: "#283139", border: "black" }}
          size={"small"}
          onClick={() => {
            displayDialog(
              dialogueTypes.MAKE_CON_REQUEST,
              "Make Connection Request",
              item
            );
          }}
        >
          {item.connectionRequest != null ? "Re-Connect" : "Connect"}
        </Button>,

        <div style={{ paddingLeft: "3%", paddingRight: "3%" }}>
          <Button
            type="primary"
            shape="round"
            style={{
              width: "100%",
              display: item.connectionRequest != null ? "block" : "none",
              background: "blue",
              border: "black",
            }}
            size={"small"}
            onClick={() => {
              displayDialog(
                dialogueTypes.VIEW_REQUEST_DETAILS,
                "Request Details",
                item
              );
            }}
          >
            Request Details
          </Button>
        </div>,
        <div
        //
        >
          <Button
            type="primary"
            shape="round"
            style={{ width: "100%", background: "red", border: "black" }}
            size={"small"}
            onClick={() => {
              openNotificationWithIcon(
                "info",
                "Info:",
                "This is under development",
                "bottom"
              );
            }}
          >
            View Profile
          </Button>
          {/*  */}
        </div>,
      ]}
    >
      <Skeleton loading={false} avatar active>
        <Meta
          style={{ minHeight: "3rem" }}
          avatar={
            <Avatar
              src={
                item.serviceProviderPhoto != undefined
                  ? item.serviceProviderPhoto
                  : "https://joeschmoe.io/api/v1/random"
              }
            />
          }
          title={item.serviceProviderName}
          description={null}
        />
      </Skeleton>

      <Grid container style={{ marginLeft: "2rem" }}>
        <Grid item xs={6} style={{ textAlign: "center", padding: "1rem" }}>
          <div
            style={{
              borderBottom: "1px solid black",
              borderRight: "1px solid black",
            }}
          >
            Provided Hosts
          </div>
          <div style={{ borderRight: "1px solid black" }}>
            {item.totalHostsProvided != undefined ? item.totalHostsProvided : 0}
          </div>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "center", padding: "1rem" }}>
          <div
            style={{
              borderBottom: "1px solid black",
              borderLeft: "1px solid black",
            }}
          >
            Open APIs
          </div>
          <div style={{ borderLeft: "1px solid black" }}>
            {item.numberOfOpenAPIs != undefined ? item.numberOfOpenAPIs : 0}
          </div>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ textAlign: "center", padding: "1rem", marginTop: "1%" }}
        >
          <div
            style={{
              borderBottom: "1px solid black",
              borderRight: "1px solid black",
            }}
          >
            Entertained Requests
          </div>
          <div style={{ borderRight: "1px solid black" }}>
            {item.numberOfEntertainedRequests}
          </div>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ textAlign: "center", padding: "1rem", marginTop: "1%" }}
        >
          <div
            style={{
              borderBottom: "1px solid black",
              borderLeft: "1px solid black",
            }}
          >
            Request Status
          </div>
          <div style={{ borderLeft: "1px solid black" }}>
            {item.connectionRequest != null
              ? item.connectionRequest.requestStatus
              : "No request made yet..!"}
          </div>
        </Grid>
      </Grid>

      <CustomDialog
        alertType={alertType}
        handleClickOpen={handleClickOpen_CustomDialog}
        handleCloseEvent={handleClose_CustomDialog}
        open={openCustomDialog}
        alertMessage={alertMessage_CustomDialog}
        alertTitle={alertTitle_CustomDialog}
        handleNoEvent={handleNoEvent}
        handleOkEvent={handleOkEvent}
      />
    </Card>
  );
};

export default ServiceProviderListItemHolder;
