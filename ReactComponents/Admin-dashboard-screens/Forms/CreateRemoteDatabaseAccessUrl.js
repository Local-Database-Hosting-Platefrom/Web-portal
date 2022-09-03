import { Container, Grid, useRadioGroup } from "@mui/material";
import { Button, Card, Dropdown, Menu, Space } from "antd";
import { useEffect, useState } from "react";
import { sendResquestToCentralAPI } from "../../../request-manager/requestManager";
import {
  LOAD_LIST_OF_ALL_HOSTS,
  STORE_REMOTE_DATABASE_ENDPOINT,
  TEST_HOST_ACCESS_URL,
} from "../../../request-manager/requestUrls";
import CustomButton from "../../../Support/CustomButton";
import CustomDropDown from "../../../Support/CustomDropDown";
import CustomMultilineInputField from "../../../Support/CustomMultilineInputField";
import Heading from "../../../Support/Heading";
import InputField from "../../../Support/InputFields";
import CustomDialog from "../../Dialogues/CustomDialog";
import dialogueTypes from "../../Dialogues/dialogueTypes";
import { Input } from "antd";
import openNotificationWithIcon from "../../Dialogues/Notification";
const { TextArea } = Input;
const CreateRemoteDatabaseAccessUrl = () => {
  const [currentSelectedHost, setCurrentSelectedHost] = useState(null);
  const [currentSelectedHostTitle, setCurrentSelectedHostTitle] =
    useState("Select Host");

  const [listOfOptions_HostNames, setListOfOptions_Hosts] = useState([]);

  const [query, setQuery] = useState(null);
  const [databaseName, setDatabaseName] = useState(null);
  const [url, setUrl] = useState(null);
  const [description, setDescription] = useState(null);


  const [loadingsForTestBtn, setLoadingsForTestBtn] = useState([]);
  const [loadingsForCreateBtn, setLoadingsForCreateBtn] = useState([]);

  useEffect(() => {
    // Make call to load pending list of hosts
    const useData = JSON.parse(localStorage.getItem("loggedInUser"));
    const _id = useData.responsePayload._id;
    sendResquestToCentralAPI("POST", LOAD_LIST_OF_ALL_HOSTS, {
      adminId: _id,
    }).then(
      async (success) => {
        const list = await success.json();
        const listOfHosts = list.responsePayload.map((host) => {
          return {
            key: JSON.stringify(host),
            label: <a>{host.hostName}</a>,
          };
        });
        setListOfOptions_Hosts(listOfHosts);
        // setListOfOptions_HostCompleteData(list.responsePayload)
      },
      (error) => {
        console.log("Error", error);
      }
    );
  }, []);

  const makeUrlTestRequest = (index) => {
    if (currentSelectedHost != null) {
      if (databaseName != null) {
        if (query != null) {
          if (description != null) {
            if (url != null) {
              setLoadingsForTestBtn((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = true;
                return newLoadings;
              });
              const host = currentSelectedHost;
              const useData = JSON.parse(localStorage.getItem("loggedInUser"));
              const _id = useData.responsePayload._id;
              const userUid = useData.responsePayload.userUid;
              const hostAccessUrl = host.hostAcessUrl.url;
              const email = useData.responsePayload.email;
              console.log(userUid);
              sendResquestToCentralAPI("POST", TEST_HOST_ACCESS_URL, {
                userUid: userUid,
                hostAccessUrl: hostAccessUrl,
                databaseName: databaseName,
                query: query,
                secretKey: email,
              }).then(
                async (success) => {
                  const response = await success.json();
                  console.log(response);
                  
                  setLoadingsForTestBtn((prevLoadings) => {
                    const newLoadings = [...prevLoadings];
                    newLoadings[index] = false;
                    return newLoadings;
                  });

                  openNotificationWithIcon(
                    "info",
                    "Server Response",
                    response.responseMessage,
                    "bottom"
                  );
                },
                (error) => {
                  openNotificationWithIcon(
                    "error",
                    "Server Response",
                    JSON.stringify(error),
                    "bottom"
                  );

                  console.log("Error", error);
                }
              );
            } else {
              openNotificationWithIcon(
                "warning",
                "Invalid parameters",
                "Please Provide the description valid url",
                "bottom"
              );
            }
          } else {
            openNotificationWithIcon(
              "warning",
              "Invalid parameters",
              "Please Provide the description for this end-point",
              "bottom"
            );
          }
        } else {
          openNotificationWithIcon(
            "warning",
            "Invalid parameters",
            "Please Provide the query",
            "bottom"
          );
        }
      } else {
        openNotificationWithIcon(
          "warning",
          "Invalid parameters",
          "Please Provide the database name",
          "bottom"
        );
      }
    } else {
      openNotificationWithIcon(
        "warning",
        "Invalid parameters",
        "Please choose host",
        "bottom"
      );
    }
  };

  const storeEndpointInDatabase = (index) => {
    if (currentSelectedHost != null) {
      if (databaseName != null) {
        if (query != null) {
          if (description != null) {
            if (url != null && url[0] != "/" && url[url.length - 1] != "/") {
              setLoadingsForCreateBtn((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = true;
                return newLoadings;
              });
              const host = currentSelectedHost;

              const useData = JSON.parse(localStorage.getItem("loggedInUser"));
              const _id = useData.responsePayload._id;
              const userUid = useData.responsePayload.userUid;
              const hostAccessUrl = host.hostAcessUrl.url;
              const hostName = host.hostName;
              const email = useData.responsePayload.email;
              sendResquestToCentralAPI("POST", STORE_REMOTE_DATABASE_ENDPOINT, {
                userUid: userUid,
                hostAccessUrl: hostAccessUrl,
                databaseName: databaseName,
                query: query,
                secretKey: email,
                adminId: _id,
                description: description,
                url: url,
                hostName: hostName,
              }).then(
                async (success) => {
                  const response = await success.json();
                  console.log(response);
                  setLoadingsForCreateBtn((prevLoadings) => {
                    const newLoadings = [...prevLoadings];
                    newLoadings[index] = false;
                    return newLoadings;
                  });

                  openNotificationWithIcon(
                    "info",
                    "Server response",
                    response.responseMessage,
                    "bottom"
                  );
                },
                (error) => {
                  console.log("Error", error);
                  openNotificationWithIcon(
                    "error",
                    "Server response",
                    JSON.stringify(error),
                    "bottom"
                  );
                }
              );
            } else {
              openNotificationWithIcon(
                "warning",
                "Invalid Input",
                "Please Provide the description valid url",
                "bottom"
              );
            }
          } else {
            openNotificationWithIcon(
              "warning",
              "Invalid Input",
              "Please Provide the description valid url",
              "bottom"
            );
          }
        } else {
          openNotificationWithIcon(
            "warning",
            "Invalid Input",
            "Please Provide the query",
            "bottom"
          );
        }
      } else {
        openNotificationWithIcon(
          "warning",
          "Invalid Input",
          "Please Provide the database name",
          "bottom"
        );
      }
    } else {
      openNotificationWithIcon(
        "warning",
        "Invalid Input",
        "Please choose host",
        "bottom"
      );
    }
  };

  
  return (
    <Container >
      <div>{/* drop-down, query, database name and title*/}</div>
      <Card title="Create Open API" style={{ width: "100%", marginTop: "1%" }}>
        <div style={{ marginTop: "1%" }}>
          <Heading text={"1. Select Host"} fontSize="1rem" />
        </div>
        <div style={{ marginTop: "2%", marginLeft: "15%" }}>
          <Dropdown.Button
            // style={{width:200}}
            overlay={
              <Menu
                onClick={(e) => {
                  console.log(JSON.parse(e.key));
                  setCurrentSelectedHost(JSON.parse(e.key));
                  setCurrentSelectedHostTitle(JSON.parse(e.key).hostName);
                }}
                items={listOfOptions_HostNames}
              />
            }
          >
            <a
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <Space>{currentSelectedHostTitle}</Space>
            </a>
          </Dropdown.Button>
        </div>
        <div style={{ marginTop: "1%" }}>
          <Heading text={"2. Write title of end-point."} fontSize="1rem" />
        </div>
        <div style={{ marginTop: "2%", marginLeft: "15%" }}>
          <Input
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            value={url}
            type={"text"}
            placeholder="i.e getBasicInfo"
          />
        </div>
        <div style={{ marginTop: "1%" }}>
          <Heading
            text={
              "2. Write Name of database on which you want to execute query."
            }
            fontSize="1rem"
          />
        </div>
        <div style={{ marginTop: "2%", marginLeft: "15%" }}>
          <Input
            onChange={(e) => {
              setDatabaseName(e.target.value);
            }}
            value={databaseName}
            type={"text"}
            placeholder="i.e Users"
          />
        </div>
        <div style={{ marginTop: "1%" }}>
          <Heading
            text={
              "3. Write query which you to be executed when this open api is called."
            }
            fontSize="1rem"
          />
        </div>
        <div style={{ marginTop: "2%", marginLeft: "15%" }}>
          <TextArea
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            value={query}
            showCount={true}
            rows={3}
            placeholder="i.e Select firstName,lastName from users"
            // maxLength={3}
          />
        </div>
        <div style={{ marginTop: "1%" }}>
          <Heading
            text={
              "4. Write description about this end-point For example formate of response etc."
            }
            fontSize="1rem"
          />
        </div>
        <div style={{ marginTop: "2%", marginLeft: "15%" }}>
          <TextArea
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            showCount={true}
            rows={3}
            placeholder="i.e This query will return you a an array users in the following formate :  { users:[] }"
            // maxLength={3}
          />
        </div>
        <Grid container>
          <Grid item xs={6} style={{ textAlign: "center" }}>
            <Button
              type="primary"
              // style={{backgroundColor:"red"}}
              size="middle"
              shape="round"
              // icon={<GoogleOutlined />}
              loading={loadingsForTestBtn[0]}
              onClick={() => {
                makeUrlTestRequest(0);
              }}
            >
              Test Url
            </Button>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "center" }}>
            <Button
              type="primary"
              // style={{backgroundColor:"red"}}
              size="middle"
              shape="round"
              // icon={<GoogleOutlined />}
              loading={loadingsForCreateBtn[0]}
              onClick={() => {
                storeEndpointInDatabase(0);
              }}
            >
              Create and save
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};
export default CreateRemoteDatabaseAccessUrl;
