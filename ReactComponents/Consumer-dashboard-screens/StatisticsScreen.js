import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { sendResquestToCentralAPI } from "../../request-manager/requestManager";
import { GET_TOTAL_NUMBER_OF_CONNECTED_HOSTS_DEVELOPER, GET_TOTAL_NUMBER_OF_DENED_REQUESTS_DEVELOPER, GET_TOTAL_NUMBER_OF_ENTERTAINED_REQUESTS_DEVELOPER, GET_TOTAL_NUMBER_OF_OPEN_APIS_DEVELOPER } from "../../request-manager/requestUrls";
import Heading from "../../Support/Heading";
import States from "./Cards/States";
const StatisticsScreen = () => {
  const [firstName,setFirstName]=useState(null);
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const [totalNumberOfAPIHits,setTotalNumberOfAPIHits]=useState(0);
  const [totalNumberOfAllowedOpenAPIs,setTotalNumberOfAllowedOpenAPIs]=useState(0);
  const [totalNumberOfAllowedOLDUrls,setTotalNumberOfAllowedOLDUrls]=useState(0);
  const [totalNumberOfEntertainedRequests,setTotalNumberOfEntertainedRequests]=useState(0);
  const [totalNumberOfDeniedRequests,setTotalNumberOfDeniedRequests]=useState(0);
 
  useEffect(()=>{
    // Access values from localStorage for now , later on we will access values from the redux
    if(localStorage.getItem("isLoggedIn")=="true") {
      const data = JSON.parse(localStorage.getItem("loggedInUser"));
      const {firstName} = data.responsePayload;
      setFirstName(firstName);
      setIsLoggedIn(true);
      console.log("Data for print",data)
    }

    fetchAndSetTotalNumberOfAllowedOpenAPIs();
    fetchAndSetTotalNumberOfHostAccessUrls();
    fetchAndSetTotalNumberOfDeniedRequests();
    fetchAndSetTotalNumberOfEntertainedRequests();
  },[])

 
  const fetchAndSetTotalNumberOfAllowedOpenAPIs=()=>{
    const data = JSON.parse(localStorage.getItem("loggedInUser"));
  
    sendResquestToCentralAPI("POST", GET_TOTAL_NUMBER_OF_OPEN_APIS_DEVELOPER, {
      email: data.responsePayload.email,
    }).then((resp)=>resp.json()).then((data)=>{
      if(data.responsePayload!=null)
      setTotalNumberOfAllowedOpenAPIs(data.responsePayload)
    })
  }

  const fetchAndSetTotalNumberOfHostAccessUrls=()=>{
    const data = JSON.parse(localStorage.getItem("loggedInUser"));
  
    sendResquestToCentralAPI("POST", GET_TOTAL_NUMBER_OF_CONNECTED_HOSTS_DEVELOPER, {
      email: data.responsePayload.email,
    }).then((resp)=>resp.json()).then((data)=>{
      if(data.responsePayload!=null)
      setTotalNumberOfAllowedOLDUrls(data.responsePayload)
    })
  }

  const fetchAndSetTotalNumberOfDeniedRequests=()=>{
    const data = JSON.parse(localStorage.getItem("loggedInUser"));
  
    sendResquestToCentralAPI("POST", GET_TOTAL_NUMBER_OF_ENTERTAINED_REQUESTS_DEVELOPER, {
      email: data.responsePayload.email,
    }).then((resp)=>resp.json()).then((data)=>{
      if(data.responsePayload!=null){
        setTotalNumberOfEntertainedRequests(data.responsePayload)
        setTotalNumberOfAPIHits(totalNumberOfDeniedRequests+data.responsePayload);
      }
    })
  }
  const fetchAndSetTotalNumberOfEntertainedRequests=()=>{
    const data = JSON.parse(localStorage.getItem("loggedInUser"));
    sendResquestToCentralAPI("POST", GET_TOTAL_NUMBER_OF_DENED_REQUESTS_DEVELOPER, {
      email: data.responsePayload.email,
    }).then((resp)=>resp.json()).then((data)=>{
      if(data.responsePayload!=null){
        setTotalNumberOfAPIHits(totalNumberOfEntertainedRequests+data.responsePayload);
        setTotalNumberOfDeniedRequests(data.responsePayload)
      }
    })
  }
  

  return (
    <Container>
      <div>
      
      {  (isLoggedIn==true) && <Heading text={`Well come ${firstName}`} fontSize="2rem" fontWeight="bold" />   } 
        <Heading text={"Overview"} fontSize="2rem" fontWeight="bold" />
      </div>
      <div style={{paddingLeft:"5%"}}>
        <Grid container style={{marginTop:"2%"}}>
          <Grid item xs={3}>
            <States  title="API Hists" value={totalNumberOfAPIHits}/>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <States  title="LD Urls" value={totalNumberOfAllowedOLDUrls}/>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <States  title="Open APIs" value={totalNumberOfAllowedOpenAPIs}/>
          </Grid> 
          <Grid item xs={2}></Grid>
          <Grid item xs={3} style={{marginTop:"2%"}}>
            <States  title="Entertained Requests" value={totalNumberOfEntertainedRequests}/>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3} style={{marginTop:"2%"}}>
            <States  title="Denied Requests" value={totalNumberOfDeniedRequests}/>
          </Grid>
         
        </Grid>
      </div>
    </Container>
  );
};
export default StatisticsScreen;
