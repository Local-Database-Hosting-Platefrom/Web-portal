import { Container, Divider, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { sendResquestToCentralAPI } from "../../../request-manager/requestManager";
import { LOAD_LIST_OF_RESOLVED_REQUESTS } from "../../../request-manager/requestUrls";
import CustomDropDown from "../../../Support/CustomDropDown";
import Heading from "../../../Support/Heading";
import ItemHolder_ConsumerDeniedRequest from "./ListItemHolders/ItemHolder_ConsumerDeniedRequest";
import ItemHolder_ConsumerResolvedRequest from "./ListItemHolders/ItemHolder_ConsumerResolvedRequest";

const listOfOptions_OrderBy = [
  {
    optionTitle: "ASC",
    optionValue: "asc",
  },
  {
    optionTitle: "DESC",
    optionValue: "asc",
  },
];
const listOfOptions_NumberOfRows = [
  {
    optionTitle: "5",
    optionValue: "5",
  },
  {
    optionTitle: "10",
    optionValue: "10",
  },
  {
    optionTitle: "20",
    optionValue: "20",
  },
  {
    optionTitle: "30",
    optionValue: "30",
  },
  {
    optionTitle: "All",
    optionValue: "all",
  },
];
const ListOfResolvedRequests = () => {
  const [listOfRequests, setListOfRequests] = useState([]);
  const [orderBy, setOrderBy] = useState("ASC");
  const [numberOfRecrods, setNumberOfRecrods] = useState("All");

  useEffect(() => {
    // Make call to load pending list of hosts
    const useData = JSON.parse(localStorage.getItem("loggedInUser"));
    const _id = useData.responsePayload._id;
    sendResquestToCentralAPI("POST", LOAD_LIST_OF_RESOLVED_REQUESTS, {
      adminId: _id,
    }).then(
      async (success) => {
        const list = await success.json();

        const listToSet = list.responsePayload.map((request) => {
          const request = {
            requestId: request.request.requestId,
            developerName: request.requestSenderName,
            requestTime: request.request.requestDateAndTime,
            requestPlayload: JSON.parse(request.request.requestPayload),
            requestResolvedPayload: JSON.parse(
              request.request.requestResolvedPayload
            ),
          };
          console.log(request);
          return request;
        });
        // console.log("listTOSet",listToSet)
        setListOfRequests(listToSet);
      },
      (error) => {
        console.log("Error", error);
      }
    );
  }, []);
  return (
    <Container>
      <div>
        <Grid container>
          <Grid item xs={8}>
            <Heading text={"Resolved requests"} fontSize="1.5rem" />
          </Grid>
          <Grid item xs={2}>
            <CustomDropDown
              currentSelectedOption={orderBy}
              setCurrentSelectedOption={setOrderBy}
              label="Order By"
              listOfOptions={listOfOptions_OrderBy}
            />
          </Grid>
          <Grid item xs={2} style={{ paddingLeft: "1%" }}>
            <CustomDropDown
              currentSelectedOption={numberOfRecrods}
              setCurrentSelectedOption={setNumberOfRecrods}
              label="Number Of Recods"
              listOfOptions={listOfOptions_NumberOfRows}
            />
          </Grid>
        </Grid>
      </div>
      <Grid container>
        <Grid item xs={12}>
          {/* List */}
          <div
            style={{
              paddingLeft: "5%",
              //   paddingRight: "5%",
              //   marginTop: "2%",
              marginTop: "1%",
            }}
          >
            <div>
              <Divider />
              <Grid container>
                <Grid item xs={1} style={{ textAlign: "left" }}>
                  {/* Icon */}
                  {/* <img src="/home-page/consumerIconForList.png" width="25%" /> */}
                </Grid>
                <Grid item xs={3}>
                  {/* Consumer Name */}
                  {`Request ID`}
                </Grid>
                <Grid item xs={3} style={{ textAlign: "left" }}>
                  {/* Consumer Id */}
                  {`Consumer Id`}
                </Grid>
                <Grid item xs={2}>
                  {/* Consumer Role */}
                  {`Role`}
                </Grid>
                <Grid item xs={2}>
                  {/* Consumer Role */}
                  {`Time and date`}
                </Grid>
              </Grid>
            </div>
            <Divider />
          </div>
          <div
            style={{
              paddingLeft: "8%",
              paddingRight: "5%",
              marginTop: "2%",
              overflowY: "scroll",
              height: "12rem",
            }}
          >
            {/* Items */}

            {listOfRequests.map((item) => {
              return (
                <div style={{ marginTop: "1%" }}>
                  {" "}
                  <ItemHolder_ConsumerResolvedRequest item={item} />
                </div>
              );
            })}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
export default ListOfResolvedRequests;
