import { Container, Divider, Grid } from "@mui/material";
import Head from "next/head";
import { useEffect } from "react";
import { useState } from "react";
import { sendResquestToCentralAPI } from "../../../request-manager/requestManager";
import { LOAD_PENDING_HOSTS_LIST } from "../../../request-manager/requestUrls";
import { COULD_NOT_FETCH } from "../../../request-manager/responseCodes";
import CustomDropDown from "../../../Support/CustomDropDown";
import Heading from "../../../Support/Heading";
import ItemHolder_ConnectedHost from "./ListItemHolders/ItemHolder_ConnectedHost";
import ItemHolder_ConsumerDeniedRequest from "./ListItemHolders/ItemHolder_ConsumerDeniedRequest";
import ItemHolder_ConsumerRole from "./ListItemHolders/ItemHolder_ConsumerRole";
import ItemHolder_PendingHost from "./ListItemHolders/ItemHolder_PendingHost";
const ListOfPendingHosts = ()=>{

    // This will be replaced with redux later on.
    const [refresh,setRefresh]=useState(false);
    const [ListOfPendingHosts,setListOfPendingHosts] =useState([])

  useEffect(()=>{
    // Make call to load pending list of hosts
    const useData = JSON.parse(localStorage.getItem("loggedInUser"));
    const _id = useData.responsePayload._id; 
    sendResquestToCentralAPI("POST", LOAD_PENDING_HOSTS_LIST,{
      _id: _id,
    }).then(async (success)=>{
      const list = await success.json();
      console.log("Pending hosts",list)
      if(list.responseCode==COULD_NOT_FETCH){
        console.log("Error in loading list of pending hosts :",list.payload)
      }else{
        setListOfPendingHosts(list.payload);
      }
    },(error)=>{
      console.log("Error",error)
    })
  },[refresh])


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
                <Heading text={"Pending Hosts"} fontSize="1.5rem" />
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
              <Grid item xs={1} style={{ marginLeft:"4%" }}>
                {/* Icon */}
                {/* <img src="/home-page/consumerIconForList.png" width="25%" /> */}
              </Grid>
              <Grid item xs={2} >
                {/* Consumer Name */}
                {`Host Id`}
              </Grid>
              <Grid item xs={2} >
                {/* Consumer Name */}
                {`Host Name`}
              </Grid>
              <Grid item xs={2} >
                {/* Consumer Name */}
                {`Last Seen`}
              </Grid>
              <Grid item xs={2} >
                {/* Consumer Name */}
                {`Status`}
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
            {
              (ListOfPendingHosts.length != 0) && (<div>
                {ListOfPendingHosts.map((item) => {
                  return (
                    <div style={{ marginTop: "1%" }}>
                      {" "}
                      <ItemHolder_PendingHost item={item} setRefresh={setRefresh}/>
                    </div>
                  );
                })}
              </div>)
            }
            {
              (ListOfPendingHosts.length==0) && (
                <div>
                  <Heading text={"No pending hosts..!"} fontSize={"1rem"}/>
                </div>
              )
            }
          </div>
        </Grid>
      </Grid>
        
    </Container>
}
export default ListOfPendingHosts;