import { Card, Container, Divider, Grid } from "@mui/material";
import { useState } from "react";
import CustomDropDown from "../../../Support/CustomDropDown";
import DropDownForSelectingASCorDECS from "../../../Support/DropDownForSelectingASCorDECS";
import Heading from "../../../Support/Heading";
import ItemHolder_ConsumerAccounts from "./ListItemHolders/ItemHolder_ConsumerAccounts";

const ListOfConsumerAccounts = () => {
  // list of consumers
  const [orderBy,setOrderBy]=useState("ASC");
  const [numberOfRecrods,setNumberOfRecrods]=useState("All");
  
  const listOfOptions_OrderBy = [
      {
          optionTitle:"ASC",
          optionValue:"asc"
      },
      {
        optionTitle:"DESC",
        optionValue:"asc"
      },
    
    ]
  const listOfOptions_NumberOfRows=[
    {
        optionTitle:"5",
        optionValue:"5"
    },
    {
        optionTitle:"10",
        optionValue:"10"
    },
    {
        optionTitle:"20",
        optionValue:"20"
    },
    {
        optionTitle:"30",
        optionValue:"30"
    },
    {
        optionTitle:"All",
        optionValue:"all"
    },
    
    
  ]  

  const [listOfConsumers, setListOfConsumers] = useState([
    {
      consumerName: "Zee",
      consumerId: "7890f-43-434hf",
      role: "Read/Write",
    },
    {
      consumerName: "Shan",
      consumerId: "7fj0f-34-3434hf",
      role: "Write Only",
    },
    {
      consumerName: "Ahmed",
      consumerId: "ds90f-32-449f",
      role: "Read Only",
    },
    {
      consumerName: "Zee",
      consumerId: "7890f-43-434hf",
      role: "Read/Write",
    },
    {
      consumerName: "Shan",
      consumerId: "7fj0f-34-3434hf",
      role: "Write Only",
    },
    {
      consumerName: "Ahmed",
      consumerId: "ds90f-32-449f",
      role: "Read Only",
    },
  ]);

  return (
    <Container>
      {/* Heading */}
      <div>
          <Grid container>
              <Grid item xs={8}>
                <Heading text={"All Developers"} fontSize="1.5rem" />
              </Grid>

              <Grid item xs={2}>
                <CustomDropDown currentSelectedOption={orderBy} setCurrentSelectedOption={setOrderBy} label="Order By" listOfOptions={listOfOptions_OrderBy}/>
              </Grid>
              <Grid item xs={2} style={{paddingLeft:"1%"}}>
                <CustomDropDown currentSelectedOption={numberOfRecrods} setCurrentSelectedOption={setNumberOfRecrods} label="Number Of Recods" listOfOptions={listOfOptions_NumberOfRows}/>
              </Grid>
          </Grid>
      </div>
      <Grid container>
        <Grid item xs={12}>
          {/* List */}
          <div  style={{
              paddingLeft: "5%",
            //   paddingRight: "5%",
            //   marginTop: "2%",
            marginTop:"1%"
            }}>
          <div>
          <Divider/>
          <Grid container>
              <Grid item xs={2} style={{ textAlign: "center" }}>
                {/* Icon */}
                {/* <img src="/home-page/consumerIconForList.png" width="25%" /> */}
              </Grid>
              <Grid item xs={3}>
                {/* Consumer Name */}
                {`Name`}
              </Grid>
              <Grid item xs={3}>
                {/* Consumer Id */}
                {`Id`}
              </Grid>
              <Grid item xs={2}>
                {/* Consumer Role */}
                {`Role`}
              </Grid>
            </Grid>
            </div>
            <Divider/>
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
            
            {listOfConsumers.map((item) => {
              return (
                <div style={{ marginTop: "1%" }}>
                  {" "}
                  <ItemHolder_ConsumerAccounts item={item} />
                </div>
              );
            })}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
export default ListOfConsumerAccounts;
