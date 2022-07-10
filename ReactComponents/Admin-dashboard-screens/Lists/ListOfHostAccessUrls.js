import { Container, Divider, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { LOAD_CONNECTED_HOSTS_LIST } from "../../../request-manager/requestUrls";
import CustomDropDown from "../../../Support/CustomDropDown";
import Heading from "../../../Support/Heading";
import ItemHolder_HostAcessUrl from "./ListItemHolders/ItemHolder_HostAcessUrl";

import { sendResquestToCentralAPI } from "../../../request-manager/requestManager";

const ListOfHostAccessUrls = ()=>{
  const [refresh,setRefresh]=useState(false);
    const [listOfUrls,setlistOfUrls] =useState([
        {
            hostId:"43343",
            hostName: "rfre3",
            accessUrl: "http://<address>",
            numberofRequests:"432"
        },
        
    ])
    
    useEffect(()=>{
      // Make call to load pending list of hosts
      const useData = JSON.parse(localStorage.getItem("loggedInUser"));
      const _id = useData.responsePayload._id; 
      sendResquestToCentralAPI("POST", LOAD_CONNECTED_HOSTS_LIST,{
        _id: _id,
      }).then(async (success)=>{
        const list = await success.json();
        console.log("host accessUrl",list)
        setlistOfUrls(list.payload);
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
                {/* <Heading text={"Pending requests"} fontSize="1.5rem" /> */}
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
              <Grid item xs={1} >
                {/* Icon */}
                {/* <img src="/home-page/consumerIconForList.png" width="25%" /> */}
              </Grid>
              <Grid item xs={2} style={{ paddingLeft:"3%" }} >
                {/* Host Id */}
                {`Host ID`}
              </Grid>
              <Grid item xs={2} style={{ paddingLeft:"3%" }} >
                {/*Host Name */}
                {`Host Name`}
              </Grid>
              <Grid item xs={2} style={{ textAlign: "left" }}>
                {/* Url */}
                {`Url`}
              </Grid>
              <Grid item xs={2}>
                {/* Nuber of requests */}
                {`Number of requests`}
              </Grid>
              <Grid item xs={2} style={{ paddingLeft:"3%" }}>
                {/* Nuber of requests */}
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
            
            {listOfUrls.map((item) => {
              return (
                <div style={{ marginTop: "1%" }}>
                  {" "}
                  <ItemHolder_HostAcessUrl item={item} />
                </div>
              );
            })}
          </div>
        </Grid>
      </Grid>
        
    </Container>
}
export default ListOfHostAccessUrls;