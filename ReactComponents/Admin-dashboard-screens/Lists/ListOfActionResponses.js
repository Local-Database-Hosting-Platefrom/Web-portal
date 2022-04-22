import { Container, Divider, Grid } from "@mui/material";
import { useState } from "react";
import CustomDropDown from "../../../Support/CustomDropDown";
import Heading from "../../../Support/Heading";
import ItemHolder_ActionResponseHolder from "./ListItemHolders/ItemHolder_ActionResponseHolder";
import ItemHolder_ConsumerDeniedRequest from "./ListItemHolders/ItemHolder_ConsumerDeniedRequest";
import ItemHolder_ConsumerRole from "./ListItemHolders/ItemHolder_ConsumerRole";

const ListOfActionResponses = () => {
  const [ListOfActionResponses, setListOfActionResponses] = useState([
    {
      action: "Time_out",
      response: "Please try aain",
    },
    {
      action: "Time_out",
      response: "Please try aain",
    },
    {
      action: "Time_out",
      response: "Please try aain",
     
    },
    {
      action: "Time_out",
      response: "Please try aain",
      roleId: "32",
    },
  ]);
  const [orderBy, setOrderBy] = useState("ASC");
  const [numberOfRecrods, setNumberOfRecrods] = useState("All");

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

  return (
    <Container>
      <div>
        <Grid container>
          <Grid item xs={8}>
            {/* <Heading text={"All action/responses"} fontSize="1.5rem" /> */}
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
                <Grid item xs={1} style={{ marginLeft: "4%" }}>
                  {/* Icon */}
                  {/* <img src="/home-page/consumerIconForList.png" width="25%" /> */}
                </Grid>
                <Grid item xs={3}>
                  {/* Consumer Name */}
                  {`Action`}
                </Grid>
                <Grid item xs={3} style={{paddingLeft:"13%"}}>
                  {/* Consumer Name */}
                  {`Response`}
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

            {ListOfActionResponses.map((item) => {
              return (
                <div style={{ marginTop: "1%" }}>
                  {" "}
                  <ItemHolder_ActionResponseHolder item={item} />
                </div>
              );
            })}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
export default ListOfActionResponses;
