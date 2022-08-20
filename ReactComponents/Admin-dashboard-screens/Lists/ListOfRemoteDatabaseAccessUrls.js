import { Container, Divider, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { sendResquestToCentralAPI } from "../../../request-manager/requestManager";
import { LOAD_LIST_OF_REMOTE_DATABASE_URLS } from "../../../request-manager/requestUrls";
import CustomDropDown from "../../../Support/CustomDropDown";
import Heading from "../../../Support/Heading";
// import ItemHolder_ConsumerPendingRequest from "./ListItemHolders/ItemHolder_ConsumerPendingRequest";
import ItemHolder_HostAcessUrl from "./ListItemHolders/ItemHolder_HostAcessUrl";
import ItemHolder_RemoteDatabaeAcessUrl from "./ListItemHolders/ItemHolder_RemoteDatabaeAcessUrl";

  
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

const ListOfRemoteDatabaseAccessUrls = ()=>{
  const [orderBy,setOrderBy]=useState("ASC");
  const [numberOfRecrods,setNumberOfRecrods]=useState("All");
  const [listOfUrls,setlistOfUrls] =useState([])
  const [refresh,setRefresh]=useState(false);

    useEffect(()=>{
      // Make call to load pending list of hosts
      const useData = JSON.parse(localStorage.getItem("loggedInUser"));
      const _id = useData.responsePayload._id; 
      sendResquestToCentralAPI("POST", LOAD_LIST_OF_REMOTE_DATABASE_URLS,{
        adminId: _id,
      }).then(async (success)=>{
        const response = await success.json();
          console.log(response.responsePayload)
          let listOfUrlsToSet = response.responsePayload.map((url)=>{
            return {
              hostId:url.urlId,
              hostName:url.sourceHostName,
              accessUrl:url.endPointUrlAddress,
              numberofRequests:url.numberOfHits,
              isEnabled:url.isEnabled,
              urlId:url.urlId,
              url:url.url,
              isPublic:url.isPublic
            }
          })
          console.log(listOfUrlsToSet)
          setlistOfUrls(listOfUrlsToSet);  
      },(error)=>{
        console.log("Error",error)
      })
    },[refresh])
  
    return <Container>
          <div>
          <Grid container>
              <Grid item xs={8}>
                <Heading text={"Remote Database Urls"} fontSize="1.5rem" />
              </Grid>

              {/* <Grid item xs={2}>
                <CustomDropDown currentSelectedOption={orderBy} setCurrentSelectedOption={setOrderBy} label="Order By" listOfOptions={listOfOptions_OrderBy}/>
              </Grid>
              <Grid item xs={2} style={{paddingLeft:"1%"}}>
                <CustomDropDown currentSelectedOption={numberOfRecrods} setCurrentSelectedOption={setNumberOfRecrods} label="Number Of Recods" listOfOptions={listOfOptions_NumberOfRows}/>
              </Grid> */}
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
                {`Url`}
              </Grid>
              <Grid item xs={2} style={{ paddingLeft:"3%" }} >
                {/*Host Name */}
                {`Host Name`}
              </Grid>
              <Grid item xs={2} style={{ textAlign: "left" }}>
                {/* Url */}
                {`Url`}
              </Grid>
              <Grid item xs={1} style={{marginLeft:"4%"}}>
                {/* Nuber of requests */}
                {`Requests`}
              </Grid>
              <Grid item xs={2} style={{ paddingLeft:"2%" }}>
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
                  <ItemHolder_RemoteDatabaeAcessUrl item={item} setRefresh={setRefresh} refresh={refresh}/>
                </div>
              );
            })}
          </div>
        </Grid>
      </Grid>
        
    </Container>
}
export default ListOfRemoteDatabaseAccessUrls;