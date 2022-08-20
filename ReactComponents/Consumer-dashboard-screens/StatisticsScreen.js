import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { sendResquestToCentralAPI } from "../../request-manager/requestManager";
import { GET_TOTAL_NUMBER_OF_CONNECTED_HOSTS_DEVELOPER, GET_TOTAL_NUMBER_OF_DENED_REQUESTS_DEVELOPER, GET_TOTAL_NUMBER_OF_ENTERTAINED_REQUESTS_DEVELOPER, GET_TOTAL_NUMBER_OF_OPEN_APIS_DEVELOPER } from "../../request-manager/requestUrls";
import Heading from "../../Support/Heading";
import States from "./Cards/States";
const StatisticsScreen = () => {
  const [firstName,setFirstName]=useState(null);
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const [totalNumberOfAPIHits,setTotalNumberOfAPIHits]=useState(null);
  const [totalNumberOfAllowedOpenAPIs,setTotalNumberOfAllowedOpenAPIs]=useState(null);
  const [totalNumberOfAllowedOLDUrls,setTotalNumberOfAllowedOLDUrls]=useState(null);
  const [totalNumberOfEntertainedRequests,setTotalNumberOfEntertainedRequests]=useState(null);
  const [totalNumberOfDeniedRequests,setTotalNumberOfDeniedRequests]=useState(null);
 
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

 
  
  useEffect(()=>{
    setTotalNumberOfAPIHits(totalNumberOfDeniedRequests+totalNumberOfEntertainedRequests)
  },[totalNumberOfDeniedRequests,totalNumberOfEntertainedRequests])


  const fetchAndSetTotalNumberOfAllowedOpenAPIs=()=>{
    const data = JSON.parse(localStorage.getItem("loggedInUser"));
  
    sendResquestToCentralAPI("POST", GET_TOTAL_NUMBER_OF_OPEN_APIS_DEVELOPER, {
      email: data.responsePayload.email,
    }).then((resp)=>resp.json()).then((data)=>{
      if(data.responsePayload!=null){
      setTotalNumberOfAllowedOpenAPIs(data.responsePayload)
    }else{
      setTotalNumberOfAllowedOpenAPIs(0);
    }
    })
  }

  const fetchAndSetTotalNumberOfHostAccessUrls=()=>{
    const data = JSON.parse(localStorage.getItem("loggedInUser"));
  
    sendResquestToCentralAPI("POST", GET_TOTAL_NUMBER_OF_CONNECTED_HOSTS_DEVELOPER, {
      email: data.responsePayload.email,
    }).then((resp)=>resp.json()).then((data)=>{
      if(data.responsePayload!=null)
      {
        setTotalNumberOfAllowedOLDUrls(data.responsePayload);
      }else{
        setTotalNumberOfAllowedOLDUrls(0);
      }
    })
  }

  const fetchAndSetTotalNumberOfDeniedRequests=()=>{
    const data = JSON.parse(localStorage.getItem("loggedInUser"));
  
    sendResquestToCentralAPI("POST", GET_TOTAL_NUMBER_OF_ENTERTAINED_REQUESTS_DEVELOPER, {
      email: data.responsePayload.email,
    }).then((resp)=>resp.json()).then((data)=>{
      if(data.responsePayload!=null){
        setTotalNumberOfEntertainedRequests(data.responsePayload)
      }else{
        setTotalNumberOfEntertainedRequests(0)
      }
    })
  }
  const fetchAndSetTotalNumberOfEntertainedRequests=()=>{
    const data = JSON.parse(localStorage.getItem("loggedInUser"));
    sendResquestToCentralAPI("POST", GET_TOTAL_NUMBER_OF_DENED_REQUESTS_DEVELOPER, {
      email: data.responsePayload.email,
    }).then((resp)=>resp.json()).then((data)=>{
      if(data.responsePayload!=null){
        setTotalNumberOfDeniedRequests(data.responsePayload)
      }else{
        setTotalNumberOfDeniedRequests(0)
      }
    })
  }
  

  return (
    <Container>
      <div>
      
      {  (isLoggedIn==true) && <Heading text={`Well come ${firstName}`} fontSize="2rem" fontWeight="bold" />   } 
        {/* <Heading text={"Overview"} fontSize="2rem" fontWeight="bold" /> */}
      </div>
      <div style={{paddingLeft:"5%"}}>
      <Grid container style={{ marginTop: "2%",paddingLeft:"15%",paddingRight:"15%"}}>
          <Grid item xs={5}  style={{marginTop:"2%"}}>
            <States  title="API Hists" value={totalNumberOfAPIHits}/>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={5}  style={{marginTop:"2%"}}>
            <States  title="Local database access Urls" value={totalNumberOfAllowedOLDUrls}/>
          </Grid>
          {/* <Grid item xs={1}></Grid> */}
          <Grid item xs={5}  style={{marginTop:"2%"}}>
            <States  title="Open APIs" value={totalNumberOfAllowedOpenAPIs}/>
          </Grid> 
          <Grid item xs={2}></Grid>
          <Grid item xs={5} style={{marginTop:"2%"}}>
            <States  title="Entertained Requests" value={totalNumberOfEntertainedRequests}/>
          </Grid>
          {/* <Grid item xs={1}></Grid> */}
          <Grid item xs={12} style={{paddingLeft:"35%",paddingRight:"35%",marginTop:"5%"}}>
            <States  title="Denied Requests" value={totalNumberOfDeniedRequests}/>
          </Grid>
         
        </Grid>
      </div>
    </Container>
  );
};
export default StatisticsScreen;
