import { Card, Container, Divider, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { LOAD_LIST_OF_DEVELOPER_ACCOUNTS_BY_ADMIN_ID, LOAD_LIST_OF_DEV_CONNECTION_REQ_BY_ADMIN_ID } from "../../../request-manager/requestUrls";
import CustomDropDown from "../../../Support/CustomDropDown";
import DropDownForSelectingASCorDECS from "../../../Support/DropDownForSelectingASCorDECS";
import Heading from "../../../Support/Heading";
import { sendResquestToCentralAPI } from "../../../request-manager/requestManager";
import ItemHolder_DeveloperPendingRequests from "./ListItemHolders/ItemHolder_DeveloperPendingRequests";
import ItemHolder_DeveloperApprovedAccounts from "./ListItemHolders/ItemHolder_DeveloperApprovedAccounts";

const ListOfDeveloperAccounts = () => {
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

  const [refresh,setRefresh]=useState(false);
  const [listOfConsumers, setListOfConsumers] = useState([]);

  useEffect(()=>{
    // Make call to load pending list of hosts
    const useData = JSON.parse(localStorage.getItem("loggedInUser"));
    const _id = useData.responsePayload._id; 
    sendResquestToCentralAPI("POST", LOAD_LIST_OF_DEVELOPER_ACCOUNTS_BY_ADMIN_ID,{
      adminId: _id,
    }).then(async (success)=>{
      const list = await success.json();
      console.log("Connection reqeusts",list)
      setListOfConsumers(list.responsePayload);
    },(error)=>{
      console.log("Error",error)
    })
  },[refresh])

  return (
    <Container>
      {/* Heading */}
      <div>
          <Grid container>
              <Grid item xs={8}>
                <Heading text={"All Developers"} fontSize="1.5rem" />
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
              <Grid item xs={2} style={{ textAlign: "center" }}>
                {/* Icon */}
                {/* <img src="/home-page/consumerIconForList.png" width="25%" /> */}
              </Grid>
              <Grid item xs={2}>
                {/* Developer Name */}
                {`Developer Name`}
              </Grid>
              <Grid item xs={4}>
                {/* Developer Email */}
                {`Developer email`}
              </Grid>
              <Grid item xs={2}>
                {/* Consumer Role */}
                {`Status  `}
              </Grid>
              <Grid item xs={2}>
                {/* Consumer Role */}
                {`Action  `}
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
                  <ItemHolder_DeveloperApprovedAccounts item={item} setRefresh={setRefresh}/>
                </div>
              );
            })}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
export default ListOfDeveloperAccounts;
