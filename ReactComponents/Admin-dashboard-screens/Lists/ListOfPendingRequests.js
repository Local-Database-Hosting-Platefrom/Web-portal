import { Container, Divider, Grid } from "@mui/material";
import { useState } from "react";
import CustomDropDown from "../../../Support/CustomDropDown";
import Heading from "../../../Support/Heading";
import ItemHolder_ConsumerPendingRequest from "./ListItemHolders/ItemHolder_ConsumerPendingRequest";

const ListOfPendingRequests = ()=>{
    const [listOfRequests,setListOfRequests] =useState([
        {
            requestId:"43343",
            consumerId: "rfre3",
            consumerRole:"write only",
            requestTime:"20-3-2022 04:09 PM"
        },
        {
            requestId:"43343",
            consumerId: "rfre3",
            consumerRole:"write only",
            requestTime:"20-3-2022 04:09 PM"
        },
        {
            requestId:"43343",
            consumerId: "rfre3",
            consumerRole:"write only",
            requestTime:"20-3-2022 04:09 PM"
        },
        {
            requestId:"43343",
            consumerId: "rfre3",
            consumerRole:"write only",
            requestTime:"20-3-2022 04:09 PM"
        },
        
    ])
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
  
    return <Container>
          <div>
          <Grid container>
              <Grid item xs={8}>
                <Heading text={"Pending requests"} fontSize="1.5rem" />
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
              <Grid item xs={1} style={{ textAlign: "left" }}>
                {/* Icon */}
                {/* <img src="/home-page/consumerIconForList.png" width="25%" /> */}
              </Grid>
              <Grid item xs={3} >
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
            
            {listOfRequests.map((item) => {
              return (
                <div style={{ marginTop: "1%" }}>
                  {" "}
                  <ItemHolder_ConsumerPendingRequest item={item} />
                </div>
              );
            })}
          </div>
        </Grid>
      </Grid>
        
    </Container>
}
export default ListOfPendingRequests;